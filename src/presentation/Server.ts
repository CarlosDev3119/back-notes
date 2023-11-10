import express, { Router } from 'express';
import cors from 'cors';
interface Options {
    port: number; 
    routes: Router;
}

//declaracion de una clase
export class Server {

    //variables de clase referencia
    private app = express();
    private readonly port: number;
    private readonly routes: Router;

    //contructor ? 
    constructor( options: Options){
        const { port, routes } = options;
        this.port = port;
        this.routes = routes;
    }

    //metodos
    async start() {

        this.app.use( cors() );
        
        this.app.use( express.json() );

        this.app.use( this.routes );


        this.app.listen(this.port, ()=> {
            console.log( 'listening on port ' + this.port );
        });

    }


}


