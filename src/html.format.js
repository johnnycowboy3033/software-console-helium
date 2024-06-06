class HtmlFormat{

    _pageWrite;
    _countCurlyBracket;

    constructor(){
        this._pageWrite = "";
        this._countCurlyBracket = 0;
    }

    builder(valueBuilder){
        this._pageWrite = this._pageWrite + valueBuilder;
    }

    clear(){
        this._pageWrite = "";
        this._countCurlyBracket = 0;
    }

    codeName(valueCodeName){
        this.builder( '<span class="code-file-name" ><i><b>'+valueCodeName + '</b></i></span>');
    }

    code(lineNumber,valueCode){

        let code = valueCode;

        let countLtCurlyBracket = valueCode.indexOf('}');
        if(countLtCurlyBracket > 0){
            this._countCurlyBracket = this._countCurlyBracket  - countLtCurlyBracket;
        }


        let regComment = new RegExp('//');

        if(code.match(regComment)){code = `<span class="comment"> ${code} </span>`}

        if(this._countCurlyBracket > 0 ){

            let front = "";
            for( let t = 1; t <= this._countCurlyBracket; t++){
                front = front + '<span class="space-tab" >'
            }

            let rear = "";
            for( let t = 1; t <= this._countCurlyBracket; t++){
                rear = rear + '</span>'
            }

            code = front + code + rear;

        }


        this.builder(`<span class="line-number">${lineNumber} :</span> `+ code );

        //WILL AFFECT THE NEXT METHOD CALL
        let countRtCurlyBracket = valueCode.indexOf('{');
        if( countRtCurlyBracket > 0){
            this._countCurlyBracket = this._countCurlyBracket + countRtCurlyBracket;
        }


    }

    beginDiv(className){
        this.builder(`<div class="${className}" >`)
    }
    endDiv(){
        this.builder('</div>')
    }


    span(classSpan,valueSpan){
        return "<span class='"+classSpan+"' >" + valueSpan +  "</span>";
    }

    header(valueHeader,classSpan,valueSpan){
        this.builder("<"+valueHeader+">"+this.span(classSpan,valueSpan)+"</"+valueHeader+">");
    }


    title(valueTitle){
        this.header("h2","title",valueTitle);
    }

    section(valueSection){
        this.header("h3","section",valueSection);
    }

    subsection(valueSubsection){
        this.header("h4","subsection",valueSubsection);
    }

    paragraph(valueParagraph){
        this.builder("<p class='paragraph' >"+valueParagraph);
    }

    method(methodTitle,methodCounter){

        let title = `<span class="method-title"> ${methodTitle}</span>`;
        let counter = `<span class="method-counter" > # ${methodCounter} </span>`;
        this.builder(`<p class="method" > ${title} ${counter} </p>`);

    }

    arrayElement(index,element,label){
        let htmlIndex = `<span class='array-index' > [ ${index} ] = </span>`;
        let htmlElement = `<span class='array-element' > ${element} </span>`;
        let htmlLabel = `<span class='array-label' > ${label} </span>`;
        this.builder(`<p> ${htmlIndex} ${htmlElement} ${htmlLabel} </p>`);
    }

    variables(variableNames,variables){

        if( ValidateUtil.isIndexEqual(variableNames.length,variables.length) ){
            for(let i = 0; i < variables.length; i++){

                let htmlVariableName = `<span class="variable-name"> ${variableNames[i]} </span>`;
                let htmlVariable = `<span class="variable"> ${variables[i]}</span>`;
                this.builder(`<p class="variable-group" > ${ htmlVariableName } = ${htmlVariable}  </p>`);

            }

        }else{
            //TODO throw error (Variable Names and Variable must be the same length)
        }

    }

    results(variableResults){
        this.builder(`<p class="results" > ${ variableResults}  </p>`);
    }

    newLine(){
        this._pageWrite = this._pageWrite + "<br>";
    }

    manyNewLine(times){
        for( var index = 0 ; index < times; index++){
            this.newLine();
        }
    }

    divider(){
        this.builder(`<p class="divider" ></p>`);
    }

    get pageWrite(){ return this._pageWrite}
    set pageWrite(value){ this._pageWrite = value}


}
