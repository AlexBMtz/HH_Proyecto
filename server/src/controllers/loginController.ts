import { Request,Response } from "express";
import pool from '../database'

class LoginController
{
    public async getUserDetail (req:Request, res : Response): Promise<any>
    {
        const {email,password} = req.params; //,UserId
      //  const user = await pool.query('SELECT * FROM users WHERE email = ? AND UserId = ?',[email,UserId])
    // const user = await pool.query('SELECT email, UserId FROM users WHERE email = ? AND UserId = ?',[email,UserId])
     //const user = await pool.query('IF EXISTS (SELECT * FROM users WHERE email = ?) BEGIN (SELECT * from users WHERE email = ?) END ELSE BEGIN SELECT 2 END',[email, email])
     const user = await pool.query('SELECT IF(EXISTS (SELECT * FROM users WHERE email = ? and password = ?),1,0) as "Email"',[email,password])

        if (user.length > 0) //Sigue
        {
            console.log (user[0])
            return res.json(user[0]);

        }
        else
        {
            res.status(404).json ({'mensaje' : 'User no existe'})
        }
        res.json(user);
    }
}
export const loginController = new LoginController();
export default loginController