const fs = require('fs');

async function readJSONAndModifyJSFile(jsonFilePath, jsFilePath,jsFileOut) {
    try {
        // Read the JSON file
        const rawData = await fs.promises.readFile(jsonFilePath, 'utf8');
        const jsonData = JSON.parse(rawData);

        // Read the JavaScript file
        let jsFileData = await fs.promises.readFile(jsFilePath, 'utf8');

        jsFileData =  '//This code has been generated by the Console Notebook Command-line Interface. \n' + jsFileData

        for (let j = 0; j < jsonData.logging.length; j++) {
            // Replace the code in the JavaScript file
            jsFileData = jsFileData.replace(
                jsonData.logging[j].codeToSearchFor,
                jsonData.logging[j].codeToSearchFor + jsonData.logging[j].codeToInsert
            );
        }

        // Write the new code to the JavaScript file
        await fs.promises.writeFile(jsFileOut, jsFileData, 'utf8');

        console.log(`JavaScript file has been modified. New file: ${jsFileOut}`);
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
}

// Call the function
readJSONAndModifyJSFile('./config.json', './students.js','./console_logged.js');