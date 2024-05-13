class DisplayService {

  constructor() {

  }

  isIndexEqual(value, index) {
    return value === index;
  }


  isLabelIndex(labelIndex, index){
    if(typeof labelIndex === 'undefined' || labelIndex === null){
      return false;
    }
    return labelIndex.some((value) => this.isIndexEqual(value, index));

  }

  findLabelIndex(labelIndex, index) {
    if(typeof labelIndex === 'undefined' || labelIndex === null){
      return false;
    }
    return labelIndex.findIndex((value) => this.isIndexEqual(value, index));
  }

}
