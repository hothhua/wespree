export class CJsonApi {

  constructor() {
    this.id = ''
    this.type = ''
    this.attributes = null
    this.relationships = null
    this.included = null
  }

  toModel() {
    return {
      id: this.id,
      ...this.attributes,
      ...this.loadRelationShips()
    };
  }

  loadRelationShips() {
    const keys = Object.keys(this.relationships || {});
    let newRelationShips = Object.assign({});
    if (keys.length) {
      keys.forEach(relationKey => {
        const includedRelation = this.included[relationKey];
        let formatedIncludedRelation;

        if (this.included[relationKey] instanceof Array) {
          formatedIncludedRelation = [];
          includedRelation.forEach(subIncludedRelation => {
            const _subJson = Object.assign(
              new CJsonApi(),
              ...subIncludedRelation.data
            ).toModel();
            formatedIncludedRelation.push(_subJson);
          });
        } else {
          formatedIncludedRelation = Object.assign(
            new CJsonApi(),
            ...this.included[relationKey].data
          ).toModel();
        }
        newRelationShips = {
          ...newRelationShips,
          [relationKey]: formatedIncludedRelation
        };
      });
    }
    return newRelationShips;
  }
}

export default CJsonApi;

