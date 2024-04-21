import express, { Router } from 'express'

interface Options {
  port?: number,
  routes: Router
}

export class Server {
  
  public readonly app = express();

  // esto puede ser incluso directamente un process.env.PORT
  // pero esto se convertiria en una dependencia oculta, asi que se
  // decide poner explicitamente
  // DEPENDENCIA EXPKLICITA
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options){
    const { port = 3100,routes } = options
    this.port = port
    this.routes = routes;
  }

  async start(){

    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    
    this.app.use(this.routes)
    
    this.app.listen(this.port,()=>{
      console.log(`Server running on port ${this.port}`)
    })
  }
}