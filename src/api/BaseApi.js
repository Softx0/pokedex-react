import { create } from 'apisauce';
import ResponseCode from "./utils/ResponseCode";


const BaseApi = create({
    baseUrl: process.env.REACT_APP_URL_POKEAPI,
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
    },
    timeout: Number(process.env.REACT_APP_TIME_OUT)
});

const transformResponse = (response) => {
    console.log(response);

    // if (response.ok) return;
    if (ResponseCode[response.problem]) {
        response.data = {
            problem: ResponseCode[response.problem]
        };
        return;
    }

    response.data = {
        problem: ResponseCode.CONNECTION_ERROR
    };
}

// Log para impresion de todos los request y responses
BaseApi.addRequestTransform(request => console.log(request));

// Transformando el response para poner los errrores generales
BaseApi.addResponseTransform(response => transformResponse(response));

export default BaseApi;