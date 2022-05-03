import {Request,Response} from 'express';
import pool from '../database';

class SepPeriodController{

    public async index(req:Request, res:Response ){
        const sepPeriods = await pool.query('SELECT * FROM sep_periods');
        res.json(sepPeriods);
    }

    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO sep_periods SET ?', [req.body]);
        console.log(req.body);
        res.json({'message':"Nuevo Periodo Registrado"});
    }

    //Método para eliminar un registro
    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM sep_periods WHERE periodId=?',[id]);
        res.json({'message':'Eliminando Periodo '+id});
    }

    //Método para actualizar un registro
    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE sep_periods SET ? WHERE periodId=?', [req.body,id]);
        console.log(req.body);
        res.json({'message':'Periodo '+id+ ' Modificado'});
    }

    public async details(req:Request,res:Response):Promise<any>{
        //Destructurando una parte del objeto de Javascript
        const {id}=req.params;
        const sep_period= await pool.query('SELECT * FROM sep_periods WHERE periodId=?', [id]);

        if(sep_period.length > 0){
            console.log(sep_period[0]);
            return res.json(sep_period[0]);
        }  
        else {
            res.status(404).json({'message':'Periodo no encontrado'});
        }
    }
}

export const sepPeriodController=new SepPeriodController();
export default sepPeriodController;