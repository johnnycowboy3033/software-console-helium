describe('Display Service', function() {

  let display;

  beforeEach(function() {
    display = new DisplayService()
  })

  it('should be true because this checking the setup', function() {
    expect(true).toBeTrue();
  })

  it('should return true because the Display Service exist', function() {
    expect(display).toBeDefined()
  })

  it('should return the index of the element in labelIndex that matches index', function() {
    const labelIndex = [1, 2, 3, 4, 5];
    const index = 3;
    const result = display.findLabelIndex(labelIndex, index);
    expect(result).toEqual(2);
  });

  it('should return -1 if labelIndex is an empty array', function(){
    const labelIndex = [];
    const index = 3;
    const result = display.findLabelIndex(labelIndex, index);
    expect(result).toEqual(-1);
  });


})
