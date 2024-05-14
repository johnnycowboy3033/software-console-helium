class DisplayService {

  constructor() {

  }

  isIndexEqual(value, index) {
    return value === index;
  }

  isDefined(value){
    return !(typeof value === 'undefined' || value === null);
  }

  isLabelIndex(labelIndex, index){
      return this.isDefined(labelIndex) && labelIndex.some((value) => this.isIndexEqual(value, index));
  }

  findLabelIndex(labelIndex, index) {
      return this.isDefined(labelIndex) && labelIndex.findIndex((value) => this.isIndexEqual(value, index));
  }

}
