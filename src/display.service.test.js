describe('Display Service', function() {

  let displayService;

  beforeEach(function() {
    displayService = new DisplayService()
  })

  it('should be true because this checking the setup', function() {
    expect(true).toBeTrue();
  })

  it('should return true because the Display Service exist', function() {
    expect(displayService).toBeDefined()
  })

  it('should return the index of the element in labelIndex that matches index for findLabelIndex', function() {
    const labelIndex = [1, 2, 3, 4, 5];
    const index = 3;
    const result = displayService.findLabelIndex(labelIndex, index);
    expect(result).toEqual(2);
  });

  it('should return -1 if labelIndex is an empty array for findLabelIndex', function(){
    const labelIndex = [];
    const index = 3;
    const result = displayService.findLabelIndex(labelIndex, index);
    expect(result).toEqual(-1);
  });

  it('should return false when labelIndex is null for findLabelIndex', () => {
    const displayService = new DisplayService();
    const labelIndex = null;
    const index = 2;
    const result = displayService.findLabelIndex(labelIndex, index);
    expect(result).toBeFalse();
  });

  it('should return true when index is present in labelIndex array for isLabelIndex', () => {

    const labelIndex = [1, 2, 3];
    const index = 2;
    const result = displayService.isLabelIndex(labelIndex, index);
    expect(result).toBeTrue();

  });

  it('should return false when labelIndex is null for isLabelIndex', () => {
    const displayService = new DisplayService();
    const labelIndex = null;
    const index = 2;
    const result = displayService.isLabelIndex(labelIndex, index);
    expect(result).toBeFalse();
  });


})
