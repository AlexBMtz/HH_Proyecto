import {Request,Response} from 'express';
import pool from '../database';

class StudentsCoursesController{

    public async index(req:Request, res:Response ){
        const {id} = req.params;
        const lists = await pool.query('SELECT cs.courseId, c.courseName,f.frequency,p.program,sch.startingTime, sch.endingTime,sp.period,cs.studentId,cs.wq_1,cs.wq_2,cs.wq_3,cs.oq_1,cs.oq_2,cs.oq_3,cs.cp_1,cs.cp_2,cs.cp_3,cs.final_project,cs.final_grade FROM course_details AS cs, students AS s,courses AS c,frequencies f,programs p, schedules sch,periods sp WHERE cs.courseId = ? AND cs.courseId=c.crn AND cs.studentId=s.studentId AND c.frequencyId=f.frequencyId AND c.scheduleId=sch.scheduleId AND c.programId=p.programId AND c.periodId=sp.periodId');
        res.json(lists);
    }

    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO students_courses SET ?', [req.body]);
        console.log(req.body);
        res.json({'message':"Nueva Lista de Calificaciones Creada"});
    }

    //Método para eliminar un registro
    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM students_courses WHERE crn=?',[id]);
        res.json({'message':'Eliminando Lista de Calificaciones del curso '+id});
    }

    //Método para actualizar un registro
    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE students_courses SET ? WHERE crn=?', [req.body,id]);
        console.log(req.body);
        res.json({'message':'Eliminando Lista de Calificaciones del curso '+id+ ' Modificada'});
    }

    public async details(req:Request,res:Response):Promise<any>{
        //Destructurando una parte del objeto de Javascript
        const {id}=req.params;
        const list = await pool.query('SELECT cs.courseId, c.courseName,f.frequency,p.program,sch.startingTime, sch.endingTime,sp.period,cs.studentId,cs.wq_1,cs.wq_2,cs.wq_3,cs.oq_1,cs.oq_2,cs.oq_3,cs.cp_1,cs.cp_2,cs.cp_3,cs.final_project,cs.final_grade FROM course_details AS cs, students AS s,courses AS c,frequencies f,programs p, schedules sch,periods sp WHERE cs.courseId=c.crn AND cs.studentId=s.studentId AND c.frequencyId=f.frequencyId AND c.scheduleId=sch.scheduleId AND c.programId=p.programId AND c.periodId=sp.periodId AND cs.courseId=?',[id]);

        if(list.length > 0){
            console.log(list[0]);
            return res.json(list[0]);
        }  
        else {
            res.status(404).json({'message':'Lista de Calificaciones no encontrada'});
        }
    }
}

export const studentsCoursesController=new StudentsCoursesController();
export default studentsCoursesController;