import express from "express";
import { createConnection } from 'typeorm';
import connectionOptions from './data-source';
import router from "./routes";

const app = express();

app.use(express.json());

app.use('/api', router);

const PORT = process.env.PORT || 3000;

createConnection(connectionOptions).then(connection => {
    console.log('Conexión a la base de datos establecida correctamente');

    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
}).catch(error => {
    console.error('Error al conectar con la base de datos:', error.message);
});
