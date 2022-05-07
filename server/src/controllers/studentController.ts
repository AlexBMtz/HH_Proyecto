import {Request,Response} from 'express';
import pool from '../database';

class StudentController{

    public async index(req:Request, res:Response ){
        const students = await pool.query('SELECT * FROM students');
        res.json(students);
    }

    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO students SET ?', [req.body]);
        console.log(req.body);
        res.json({'message':"Nuevo Estudiante Registrado"});
    }

    //Método para eliminar un registro
    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM students WHERE studentId=?',[id]);
        res.json({'message':'Eliminando Estudiante con matrícula '+id});
    }

    //Método para actualizar un registro
    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE students SET ? WHERE studentId=?', [req.body,id]);
        console.log(req.body);
        res.json({'message':'Estudiante con matrícula '+id+ ' Modificado'});
    }

    public async details(req:Request,res:Response):Promise<any>{
        //Destructurando una parte del objeto de Javascript
        const {id}=req.params;
        const program= await pool.query('SELECT * FROM students S WHERE studentId=?', [id]);

        if(program.length > 0){
            console.log(program[0]);
            return res.json(program[0]);
        }  
        else {
            res.status(404).json({'message':'Estudiante no encontrado'});
        }
    }
}

export const studentController=new StudentController();
export default studentController;