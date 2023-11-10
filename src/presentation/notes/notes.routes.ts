import { Request, Response, Router } from "express";


export class NoteRoutes {

    static get routes(): Router {
        const router = Router();

        router.get('/', (req: Request, res: Response) => {
            res.json('get routes')
        })
        

        return router;

    }


}
