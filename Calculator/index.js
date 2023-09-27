// string= '';
// var buttons = document.querySelectorAll(' buttons');
// console.log(buttons);
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHtml === '='){
//             string = eval(string);
//             document.querySelector('.result').value = string;
//         }
//         else if (e.target.innerHtml === 'AC'){
//             string= '';
//             document.querySelector('.result').value = string;
            
//         }else{
//             console.log(e.target)
//             string = string + e.target.innerHtml;
//             document.querySelector('.result').value = string;
//         };
//     });
// });

function read(value){
    document.getElementById('result').value += value;
}
// function read1(value){
//     document.getElementById('result').value === '/';
// }
// read1();

function calculateResult() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
function clearResult() {
    document.getElementById('result').value = '';
}