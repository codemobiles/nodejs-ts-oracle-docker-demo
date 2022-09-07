import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entity/Product";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "oracle",
  host: "192.168.1.81",
  username: "demo",
  password: "demo@!Pwd",
  port: 1521,
  sid: "xe",
  synchronize: true,
  logging: false,
  entities: [User, Product],
  migrations: [],
  subscribers: [],
});
