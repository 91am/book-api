import express, {Request,Response} from 'express';
import Database from './db';
//Crear una nueva instancia de la clase para consultar la bd


export const app = express();

// Our first endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Crear nuevo endpoint
app.get("/books", (req:Request, res:Response) => {
    res.send("Libros")
})

if (import.meta.env.PROD) {
  app.listen(3000);
  console.log(`listening on port ${import.meta.env.VITE_APP_PORT}`);
}

export const viteNodeApp = app;
export default viteNodeApp;

