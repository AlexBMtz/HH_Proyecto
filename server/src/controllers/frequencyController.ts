import {Request,Response} from 'express';
import pool from '../database';

class FrequencyController{

    public async index(req:Request, res:Response ){
        const frequencies = await pool.query('SELECT * FROM frequencies');
        res.json(frequencies);
    }

    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO frequencies SET ?', [req.body]);
        console.log(req.body);
        res.json({'message':"Nueva Frecuencia Registrada"});
    }

    //Método para eliminar un registro
    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM frequencies WHERE frequencyId=?',[id]);
        res.json({'message':'Eliminando frequencia '+id});
    }

    //Método para actualizar un registro
    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE frequencies SET ? WHERE frequencyId=?', [req.body,id]);
        console.log(req.body);
        res.json({'message':'Frecuencia '+id+ ' Modificada'});
    }

    public async details(req:Request,res:Response):Promise<any>{
        //Destructurando una parte del objeto de Javascript
        const {id}=req.params;
        const frequency= await pool.query('SELECT * FROM frequencies WHERE frequencyId=?', [id]);

        if(frequency.length > 0){
            console.log(frequency[0]);
            return res.json(frequency[0]);
        }  
        else {
            res.status(404).json({'message':'Frequencia no encontrada'});
        }
    }
}

export const frequencyController=new FrequencyController();
export default frequencyController;