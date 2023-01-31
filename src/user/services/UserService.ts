import 'reflect-metadata';
import { Service } from "typedi";

@Service()
export default class UserService {
  constructor(private user)
  async findUserById() {

  }
}