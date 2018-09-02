import { JsonApiParserService } from './json-api-parser.service'
import  { AppDefault } from './../../constants/app-defaults'

import { wxRequest } from './../utils/wxRequest'

import { wepy } from 'wepy'

export default class ProductService {

    async getProducts(pageNumber) {

        //wepy.request('xxxx').then((d) => console.log(d));

        let apiUrl = AppDefault.prodApiEndpoint + 'api/v1/products?page='+pageNumber+
        '&per_page=20&data_set=small'

        const json = await wxRequest(null, apiUrl);

        console.log(json.data);

    }

}

