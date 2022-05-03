import {Request,Response} from 'express';
import pool from '../database';

class RoleController{

    public async index(req:Request, res:Response ){
        const roles = await pool.query('SELECT * FROM roles');
        res.json(roles);
    }

    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO roles SET ?', [req.body]);
        console.log(req.body);
        res.json({'message':"Nuevo Rol Registrado"});
    }

    //Método para eliminar un registro
    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM roles WHERE roleId=?',[id]);
        res.json({'message':'Eliminando Rol '+id});
    }

    //Método para actualizar un registro
    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE roles SET ? WHERE roleId=?', [req.body,id]);
        console.log(req.body);
        res.json({'message':'Rol '+id+ ' Modificado'});
    }

    public async details(req:Request,res:Response):Promise<any>{
        //Destructurando una parte del objeto de Javascript
        const {id}=req.params;
        const program= await pool.query('SELECT * FROM roles WHERE roleId=?', [id]);

        if(program.length > 0){
            console.log(program[0]);
            return res.json(program[0]);
        }  
        else {
            res.status(404).json({'message':'Rol no encontrado'});
        }
    }
}

export const roleController=new RoleController();
export default roleController;