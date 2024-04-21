import { Server } from "./presentation/server";
import { envs } from './config/envs';
import { AppRoutes } from "./presentation/routes";
import { MongoDatabase } from "./data/mongodb";

async function main(){
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  })
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes
  })
  await server.start()
}

(async ()=>{
  await main();
})();