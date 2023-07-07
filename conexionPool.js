const { Pool } = require("pg")

const conexion = new Pool({
    port: 5432,
    password: 'postgres',
    host: '127.0.0.1',
    user: 'postgres',
    database: 'supermercado'
})

try {
    conexion.connect()
} catch (error) {
    console.log("Por favor verifique sus parámetros de conexión");
}


const bibliotecaErrores = (codigo) => {
    switch (codigo) {
        case "42P01":
            return "Nombre de Tabla incorrecto"

        case "42703":
            return "Nombre de columna incorrecto"

        case "42601":
            return "Error de sintaxis en la consulta"
    
        default:
            return "Error desconocido"
    }
}

const consulta = "SELECT * FROM pruebas.clientes"
conexion.query(consulta, (error, respuesta) => {
    if(error){
        console.log(error.code, error.message);
        const mensaje = bibliotecaErrores(error.code)
        console.log(mensaje);
        return conexion.end()    
    }

    console.log("Respuesta", respuesta);
    conexion.end()
})

