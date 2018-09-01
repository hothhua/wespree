import { CJsonApi } from './../models/jsonapi';

export class JsonApiParserService {

  constructor() { }

  parseSingleObj(data) {
    return Object.assign(new CJsonApi, data).toModel()
  }

  parseArrayofObject(array) { // Array<Object> {
    return array.map(
      (obj) => Object.assign(new CJsonApi, obj).toModel()
    );
  }
}
