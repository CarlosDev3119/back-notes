import { Router } from "express";
import { NoteRoutes } from "./notes/notes.routes";


export class AppRoutes {

    static get routes(): Router{

        const router = Router();

        //rutas de la aplicacion
        router.use('/api/notes', NoteRoutes.routes)
        
        return router;
    }

}




