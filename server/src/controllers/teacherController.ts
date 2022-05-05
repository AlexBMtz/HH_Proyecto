import {Request,Response} from 'express';
import pool from '../database';

class TeacherController{

    public async index(req:Request, res:Response ){
        const teachers = await pool.query('SELECT U.*, T.* FROM teachers T, users U WHERE T.userId=U.userId');
        res.json(teachers);
    }

    public async create(req:Request, res:Response):Promise<void>{
        let data = req.body
        await pool.query('CALL insertarTeacher(?,?,?)',[data.pEmail,data.pRfc,data.pHiringDate]);
        console.log(req.body);
        res.json({'message':"Nuevo Teacher Registrado"});
    }

    //Método para eliminar un registro
    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM teachers WHERE teacherId=?',[id]);
        res.json({'message':'Eliminando a Teacher con matrícula '+id});
    }

    //Método para actualizar un registro
    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE teachers SET ? WHERE teacherId=?', [req.body,id]);
        console.log(req.body);
        res.json({'message':'Teacher con matrícula '+id+ ' Modificado'});
    }

    public async details(req:Request,res:Response):Promise<any>{
        //Destructurando una parte del objeto de Javascript
        const {id}=req.params;
        const teacher= await pool.query('SELECT U.*, T.* FROM teachers T, users U WHERE T.userId=U.userId AND teacherId=?', [id]);

        if(teacher.length > 0){
            console.log(teacher[0]);
            return res.json(teacher[0]);
        }  
        else {
            res.status(404).json({'message':'Teacher no encontrado'});
        }
    }
}

export const teacherController=new TeacherController();
export default teacherController;