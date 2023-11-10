import 'dotenv/config';
import { Server } from './presentation/Server';
import { AppRoutes } from './presentation/routes';

(async () => {
    main();
})();

function main() {
    
    const server = new Server({
        port: Number(process.env.PORT) || 8000,
        routes: AppRoutes.routes
    });

    server.start();

}


