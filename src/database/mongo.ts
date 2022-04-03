import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const mongoConnect = async () => {
  try {
    console.log("CONECTANDO...");
    await connect(process.env.MONGO_URL as string);
    console.log("Mongo conectado com sucesso");
  } catch (error) {
    console.log("Erro conexão mongoDB", error);
  }
};
