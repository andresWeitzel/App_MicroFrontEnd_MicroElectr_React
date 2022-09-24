import axios from 'axios';


const URL_COMPONENTES = 'http://localhost:8096/api/v1/componentes/';



class ApiProductosService {
    
    getProductosList(nroPage, nroElementos, orderType, orderBy){
        return axios
        .get(`${URL_COMPONENTES}listado?page=${nroPage}&size=${nroElementos}&sort=${orderType},${orderBy}`);
    }
   
    getProductosFilter(filterField, filterBy, nroPage, nroElementos, orderType, orderBy){
        return axios
        .get(`${URL_COMPONENTES}${filterField}/${filterBy}?page=${nroPage}&size=${nroElementos}&sort=${orderType},${orderBy}`);
    }
    

    

}

export default new ApiProductosService();