import {Request,Response} from 'express';
import pool from '../database';

class CoordinatorController{

    public async index(req:Request, res:Response ){
        const coordinators = await pool.query('SELECT U.*, C.* FROM coordinators C, users U WHERE C.userId=U.userId');
        res.json(coordinators);
    }
    
    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO coordinators SET ?', [req.body]);
        console.log(req.body);
        res.json({'message':"Nuevo Coordinador Registrado"});
    }
    
    //Método para eliminar un registro
    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM coordinators WHERE coordinatorId=?',[id]);
        res.json({'message':'Eliminando a Coordinador con matrícula '+id});
    }

    //Método para actualizar un registro
    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE coordinators SET ? WHERE coordinatorId=?', [req.body,id]);
        console.log(req.body);
        res.json({'message':'Coordinador con matrícula '+id+ ' Modificado'});
    }

    public async details(req:Request,res:Response):Promise<any>{
        //Destructurando una parte del objeto de Javascript
        const {id}=req.params;
        const coordinator= await pool.query('SELECT U.*, C.* FROM coordinators C, users U WHERE SELECT U.*, C.* FROM coordinators C, users U WHERE C.userId=U.userId AND coordinatorId=?', [id]);

        if(coordinator.length > 0){
            console.log(coordinator[0]);
            return res.json(coordinator[0]);
        }  
        else {
            res.status(404).json({'message':'Coordinador no encontrado'});
        }
    }
}

export const coordinatorController=new CoordinatorController();
export default coordinatorController;