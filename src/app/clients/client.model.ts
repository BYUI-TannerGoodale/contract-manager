import {Contract} from "../contracts/contract.model";

export class Client{
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string
    // public contract: Contract
  ) { };
}
