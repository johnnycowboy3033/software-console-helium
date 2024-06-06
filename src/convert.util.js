class ConvertUtil{

    _format;

    _arrayKey;
    _arrayValue;
    _keywords;

    constructor(format){
        this._format = format;
        this._keywords = ['Action','Counter','FunctionName', 'Groups'];
    }

    mappingArrays(data){

        this._arrayKey = [];
        this._arrayValue = [];

        for( const[key,value] of Object.entries(data) ){

            let isKeyword = this._keywords.some((keyword)=>{
                return ValidateUtil.isIndexEqual (keyword,key);
            });

            if(!isKeyword){
                this._arrayKey.push(`${key}`);
                this._arrayValue.push(value);
            }

        }

    }

    variables(data){
        this.mappingArrays(data);
        this._format.variables(this._arrayKey,this._arrayValue);
    }


    get arrayKey() {return this._arrayKey;}
    set arrayKey(value) {this._arrayKey = value;}

    get arrayValue() {return this._arrayValue;}
    set arrayValue(value) {this._arrayValue = value;}

}
