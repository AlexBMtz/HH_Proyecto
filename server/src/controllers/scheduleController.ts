import {Request,Response} from 'express';
import pool from '../database';

class ScheduleController{

    public async index(req:Request, res:Response ){
        const schedules = await pool.query('SELECT * FROM schedules');
        res.json(schedules);
    }

    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO schedules SET ?', [req.body]);
        console.log(req.body);
        res.json({'message':"Nuevo Horario Registrado"});
    }

    //Método para eliminar un registro
    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM schedules WHERE scheduleId=?',[id]);
        res.json({'message':'Eliminando Horario '+id});
    }

    //Método para actualizar un registro
    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE schedules SET ? WHERE scheduleId=?', [req.body,id]);
        console.log(req.body);
        res.json({'message':'Horario '+id+ ' Modificado'});
    }

    public async details(req:Request,res:Response):Promise<any>{
        //Destructurando una parte del objeto de Javascript
        const {id}=req.params;
        const schedule= await pool.query('SELECT * FROM schedules WHERE scheduleId=?', [id]);

        if(schedule.length > 0){
            console.log(schedule[0]);
            return res.json(schedule[0]);
        }  
        else {
            res.status(404).json({'message':'Horario no encontrado'});
        }
    }
}

export const scheduleController=new ScheduleController();
export default scheduleController;