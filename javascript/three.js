const ps =require("prompt-sync");
const prompt =ps();
const number=prompt('enter the number');
if(number > 0){
    console.log('positive');
}
else if(number== 0){
    console.log('zero');
}
else{
    console.log('negative');
}

