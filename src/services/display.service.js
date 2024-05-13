class DisplayService {

  constructor() {

  }


  isLabelIndex(labelIndex, index){

    return labelIndex.some( (value)=>{
      return value === index
    });

  }

  findLabelIndex(labelIndex, index) {
    return labelIndex.findIndex((value)=>{
      return value === index
    });
  }

}
