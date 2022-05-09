import { Request,Response } from "express";
import pool from '../database'

class LoginController
{
    public async getUserDetail (req:Request, res : Response): Promise<any>
    {
        const {email} = req.params;
        const user = await pool.query('SELECT * FROM users WHERE email = ?',[email])
        res.json(user);
    }
}
export const loginController = new LoginController();
export default loginController