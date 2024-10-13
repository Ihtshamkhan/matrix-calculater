const div = document.querySelectorAll(".head")[0];
const divmain = document.querySelectorAll(".main")[0];
const divresult = document.querySelectorAll(".result")[0];
const heading = document.querySelectorAll(".heading")[0];
const from = document.querySelector("#matrix");
const button = document.querySelector("#sum");
const button2 = document.querySelector("#minus");

let matrixLength;

from.addEventListener("submit", (event) => {
    div.innerHTML = ""
    divmain.innerHTML = ""

    event.preventDefault()
    heading.innerHTML = ""
    matrixLength = Number(event.target.children[0].value);
    if (matrixLength === 0 || matrixLength === "") {
        divresult.innerHTML = ""
        heading.innerHTML += `<h1 style="color: red;
">Enter a Number</h1>`
        setTimeout(() => {
            heading.innerHTML = ""

        }, 1500);

    }
    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            div.innerHTML += ` <input type="number" id="input1-${i}${j}" style="width: 40px; 
border-radius: 40px;
text-align: center;
 height: 20px;" 
 placeholder="input 1" value="0"> `;
            divmain.innerHTML += `<input type="number" id="input2-${i}${j}" 
style="height: 20px;
width: 40px; 
border-radius: 40px;
text-align: center;
" placeholder="input 1" 
value="0"> `;
        }
        div.innerHTML += "<br/>"
        divmain.innerHTML += "<br/>"

    }
    from[0].value = ""
})


button2.addEventListener("click", () => {
    divresult.innerHTML = ""
    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            const value = document.querySelector(`#input1-${i}${j}`).value;
            const value1 = document.querySelector(`#input2-${i}${j}`).value;
            let num1 = Number(value)
            let num2 = Number(value1)
            let sub = num1 - num2
            divresult.innerHTML += `<input type="number" id="input2-${i}${j}" 
style="height: 20px;
width: 40px; 
border-radius: 40px;
text-align: center;" 
placeholder="input 1"
 value="${sub}">`;

        }
        divresult.innerHTML += "<br/>"

    }
})

button.addEventListener("click", () => {
    divresult.innerHTML = ""

    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            const value = document.querySelector(`#input1-${i}${j}`).value;
            const value1 = document.querySelector(`#input2-${i}${j}`).value;
            let num1 = Number(value)
            let num2 = Number(value1)
            let sum = num1 + num2;
            console.log(sum);

            divresult.innerHTML += `<input type="number" id="input2-${i}${j}" 
style="height: 20px;
width: 40px; 
border-radius: 40px;
text-align: center;" 
placeholder="input 1" 
value="${sum}"> `;

        }
        divresult.innerHTML += "<br/>"

    }
})
button.addEventListener("click", () => {
    heading.innerHTML = ""
    heading.innerHTML += `<h2 id="Matrix_B">Result</h2>`

})
button2.addEventListener("click", () => {
    heading.innerHTML = ""
    heading.innerHTML += `<h2 id="Matrix_B">Result</h2>`

})