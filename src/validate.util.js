class ValidateUtil {
    static isNull(value) {
        return value === null;
    }
    static isIndexEqual(value, index) {
        return value === index;
    }

    static isDefined(value){
        return !(typeof value === 'undefined' || value === null || isNaN(value));
    }
}
