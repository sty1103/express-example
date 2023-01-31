import { Request, Response } from 'express';
import { Users } from '../../entities/UsersEntity';
import dbconn from '../../utils/dbconn';
import UserService from '../services/UserService';

export default class UserController {
  constructor() {
    const userService = new UserService();
  }

  getUserById = (req: Request, res: Response) => {
    // const users = FindUser
    this.
    res.send({function: 'findUserById'});
  }

  getUsers = (req: Request, res: Response) => {
    res.send({function: 'findUsers'});
  }
}