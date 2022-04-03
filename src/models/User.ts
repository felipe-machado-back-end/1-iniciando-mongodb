import { Schema, model, connection, Model } from "mongoose";

//TYPE DO TS
type UserType = {
  email: string;
  age: number;
  interests: [string];
  name: {
    firstName: string;
    lastName: string;
  };
};

//COMO FOSSE UM TYPE DO DOCUMENTO DO MONGO
const schema = new Schema<UserType>({
  email: { type: String, required: true },
  age: { type: Number, required: true },
  interests: [String],
  name: {
    firstName: { type: String, required: true },
    lastName: String,
  },
});

const modelName: string = "User"; // nome dado no arquivo

// nao tem conexão cria se tiver adicionao model schema  User
export default connection && connection.models[modelName]
  ? (connection.models[modelName] as Model<UserType>)
  : model<UserType>(modelName, schema);
