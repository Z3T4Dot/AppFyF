import express from "express";
//fix para__dirname
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//Metodos
import {methods as authentication} from './controllers/authentication.controller.js';

//Server
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Servidor Corriendo en puerto:", app.get("port"));

//Configuracion
app.use(express.static(__dirname +"/css"))

//Rutas
app.get("/", (req,res)=> res.sendFile(__dirname + "/app/pages/index.html"));
app.get("/login", (req,res)=> res.sendFile(__dirname + "/app/pages/index.html"));
app.get("/register", (req,res)=> res.sendFile(__dirname + "/app/pages/index.html"));
app.post("/api/login", authentication.login);
app.post("/api/register/", authentication.register);