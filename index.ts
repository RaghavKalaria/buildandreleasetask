import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        const num1 : string| undefined = tl.getInput('Number1',true);
        const num2 : string | undefined = tl.getInput('Number2',true);
        const Op : string | undefined = tl.getInput('Operation', true);
        
        console.log(eval(num1+Op+num2));
        
    }
    catch (e) {
        
        console.error(e);
    }
}

run();

