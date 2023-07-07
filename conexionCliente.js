const { Client } = require("pg")

const conexion = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'supermercado',
    port: 5432
})
conexion.connect()


const consulta = "SELECT * FROM public.productos ORDER BY prod_nombre ASC"
conexion.query(consulta, (err, resp) => {
    console.log("Error", err);
    console.log("Respuesta", resp);
    conexion.end()
})