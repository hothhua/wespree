import { wxRequest } from './../utils/wxRequest'

import { wepy } from 'wepy'

export default class ProductService {

    getProducts(pageNumber) {
        let prodApiEndpoint= 'https://ngspree-api.herokuapp.com/'

        let apiUrl = prodApiEndpoint + 'api/v1/products?page='+pageNumber+
        '&per_page=20&data_set=small'

        const json = wxRequest(null, apiUrl);
        console.log(json.data);

    }

}

