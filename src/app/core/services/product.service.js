import  JsonApiParserService  from './json-api-parser.service'
import   AppDefault  from './../../constants/app-defaults'
import  wxRequest  from './../../utils/wxRequest'

import  wepy  from 'wepy'

const ProductService = {
    getProducts: async (pageNumber) => {
 
        let apiUrl = AppDefault.prodApiEndpoint + 'api/v1/products?page='+pageNumber+
        '&per_page=20&data_set=small';

        const json = await wxRequest({}, apiUrl);

        console.log(json.data);
    }

};

export default ProductService;

