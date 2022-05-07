import {Request,Response} from 'express';
import pool from '../database';

class ProgramController{

    public async index(req:Request, res:Response ){
        const programs = await pool.query('SELECT * FROM programs');
        res.json(programs);
    }

    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO programs SET ?', [req.body]);
        console.log(req.body);
        res.json({'message':"Nuevo Programa Registrado"});
    }
    
    //Método para eliminar un registro
    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM programs WHERE programId=?',[id]);
        res.json({'message':'Eliminando Programa '+id});
    }

    //Método para actualizar un registro
    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE programs SET ? WHERE programId=?', [req.body,id]);
        console.log(req.body);
        res.json({'message':'Programa '+id+ ' Modificado'});
    }

    public async details(req:Request,res:Response):Promise<any>{
        //Destructurando una parte del objeto de Javascript
        const {id}=req.params;
        const program= await pool.query('SELECT * FROM programs WHERE programId=?', [id]);

        if(program.length > 0){
            console.log(program[0]);
            return res.json(program[0]);
        }  
        else {
            res.status(404).json({'message':'Programa no encontrado'});
        }
    }
}

export const programController=new ProgramController();
export default programController;