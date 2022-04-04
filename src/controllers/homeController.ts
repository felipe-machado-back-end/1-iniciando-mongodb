import { Request, Response } from "express";

import { Product } from "../models/Product";
import User from "../models/User";

export const home = async (req: Request, res: Response) => {
  /*SALVANDO USANDO O SAVE */
  let newUser = new User();
  newUser.name = { firstName: "Andre", lastName: "Soares" };
  newUser.email = "andre@hotmail.com";
  newUser.age = 35;
  newUser.interests = ["programação", "skate"];
  let resultado = await newUser.save();
  console.log("NOVO USUÁRIO", resultado);

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
