import { create } from "apisauce";
import ResponseCode from "./utils/ResponseCode";


const BaseApi = create({
    baseUrl: process.env.REACT_APP_URL,
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
    },
    timeout: Number(process.env.REACT_APP_TIME_OUT)
});

/**
 * Transformando el response para poner los errores generales
 *
 * @param response
 */
 function transformResponse(response) {
    process.env.REACT_APP_DEBUG_MODE === "true" && console.log(response);
  
    if (response.ok) {
      return;
    }
    if (ResponseCode[response.problem]) {
      response.data = {
        problem: ResponseCode[response.problem],
      };
      return;
    }
    response.data = {
      problem: ResponseCode.CONNECTION_ERROR,
    };
  }
  
  // Para probar, impirmir todos los request y response que se llamen
  BaseApi.addRequestTransform(
    (request) =>
      process.env.REACT_APP_DEBUG_MODE === "true" && console.log(request)
  );
  
  // Transformando el response para poner los errores generales
  BaseApi.addResponseTransform((response) => transformResponse(response));
  
  export { BaseApi };
  