import {Request,Response} from 'express';
import pool from '../database';

class UserController{

    public async index(req:Request, res:Response ){
        const users = await pool.query('SELECT * FROM users');
        res.json(users);
    }

    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO users SET ?', 
        [req.body]);
        console.log(req.body);
        res.json({'message':"Nuevo Usuario Registrado"});
    }

    //Método para eliminar un registro
    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM users WHERE email=?',[id]);
        res.json({'message':'Eliminando usuario '+id});
    }

    //Método para actualizar un registro
    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE users SET ? WHERE email=?', [req.body,id]);
        console.log(req.body);
        res.json({'message':'Usuario '+id+ ' Modificado'});
    }

    public async details(req:Request,res:Response):Promise<any>{
        //Destructurando una parte del objeto de Javascript
        const {id}=req.params;
        const program= await pool.query('SELECT * FROM users WHERE email=?', [id]);

        if(program.length > 0){
            console.log(program[0]);
            return res.json(program[0]);
        }  
        else {
            res.status(404).json({'message':'Usuario no encontrado'});
        }
    }
}

export const userController=new UserController();
export default userController;