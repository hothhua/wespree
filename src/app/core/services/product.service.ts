import { JsonApiParserService } from './json-api-parser.service'
import  { AppDefault } from './../../constants/app-defaults'
import { wepy } from 'wepy'


export class ProductService {

    constructor(){}

    getProducts(pageNumber: number) {
        wepy.request('xxxx').then((d) => console.log(d));

    }

}
