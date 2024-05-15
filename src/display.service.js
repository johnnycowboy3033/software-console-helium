class DisplayService {

  constructor() {

  }

  isLabelIndex(labelIndex, index){
      return  Array.isArray(labelIndex) && ValidateUtil.isDefined(index) && labelIndex.some((value) => ValidateUtil.isIndexEqual(value, index));
  }

  findLabelIndex(labelIndex, index) {
      return Array.isArray(labelIndex) && ValidateUtil.isDefined(index) && labelIndex.findIndex((value) => ValidateUtil.isIndexEqual(value, index));
  }

}
