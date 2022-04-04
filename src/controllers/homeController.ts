import { Request, Response } from "express";

import { Product } from "../models/Product";
import User from "../models/User";

export const home = async (req: Request, res: Response) => {
  /*
  
  acha o registro por uma campo especifico
   let usuarios = await User.findOne({
    email: "felipe.email.com",
  });
  */
  /**  ACHA PELO ID  UM CAMPO APENAS
   let usuarios = await User.findById("6248e442a0762cf7a0e45de4");
  */
  //* find retorna todos registros  NÃO APENAS UM ,exemplo retornando um dado dentro de um objeto

  /** 
    let usuarios = await User.find({
    "name.primeiroNome": "Paulo",
  });
  */

  // pegando um campo dentro de um array
  /*
    let usuarios = await User.find({
    interests: "Programação",
  });

  */
  /*
  gt = maior que 
  gte = maior ou igual 
  lt = menor que 
  lte menor ou igual
 */
  let usuarios = await User.find({
    age: { $lt: 30 },
  });

  console.log("USUÁRIOS", usuarios);

  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render("pages/home", {
    name: "Bonieky",
    lastName: "Lacerda",
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
  });
};
