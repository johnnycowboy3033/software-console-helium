describe('Validate Util', function() {

    beforeEach(function() {
    })

    it('should be true because this checking the setup', function() {
        expect(true).toBeTrue();
    })

    it('should return true when the input value is null for isNull', function() {
        // Arrange
        const value = null;

        // Act
        const result = ValidateUtil.isNull(value);

        // Assert
        expect(result).toBe(true);
    });

    it('should return false when the input value is undefined for isNull', function() {
        // Arrange
        const value = undefined;

        // Act
        const result = ValidateUtil.isNull(value);

        // Assert
        expect(result).toBe(false);
    });

    it('should return true when value is equal to index for isIndexEqual', function() {
        // Arrange
        const value = 5;
        const index = 5;

        // Act
        const result = ValidateUtil.isIndexEqual(value, index);

        // Assert
        expect(result).toBe(true);
    });

    it('should return false when value is undefined for isIndexEqual', function() {
        // Arrange
        const value = undefined;
        const index = 5;

        // Act
        const result = ValidateUtil.isIndexEqual(value, index);

        // Assert
        expect(result).toBe(false);
    });

    it('should return false when value is null for isIndexEqual', function() {
        // Arrange
        const value = null;
        const index = 5;

        // Act
        const result = ValidateUtil.isIndexEqual(value, index);

        // Assert
        expect(result).toBe(false);
    });

    it('should return false when value is not equal to index for isIndexEqual', function() {
        // Arrange
        const value = 10;
        const index = 5;

        // Act
        const result = ValidateUtil.isIndexEqual(value, index);

        // Assert
        expect(result).toBe(false);
    });

    it('should return true when value is defined and not null for isDefined', function() {
        // Arrange
        const value = 10;

        // Act
        const result = ValidateUtil.isDefined(value);

        // Assert
        expect(result).toBe(true);
    });

    it('should return false when value is NaN for isDefined', function() {
        // Arrange
        const value = NaN;

        // Act
        const result = ValidateUtil.isDefined(value);

        // Assert
        expect(result).toBe(false);
    });

})
