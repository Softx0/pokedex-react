const ResponseCode = {
    CONNECTION_ERROR: {
        code: 600,
        message: "Error en la conexión. Lo sentimos los servicios no estan disponibles"
    },
    CLIENT_ERROR : {
        code: 800,
        message: "Please check the name of the pokemon"
    },
    TYPES_ERROR : {
        code: 700,
        message: "Please check the types of the pokemon"
    },
    UNDEFINED: {
        code: 404, 
        message: "Por favor trata con otro Pokemon"
    },
};

export default ResponseCode;