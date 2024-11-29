//push=在陣列末端加值，pop=取出陣列末端的值，indexof=是尋找該值在陣列中的位置，length=陣列的長度

// let exam = [85, 90, 75, 60, 95];

// for(let i = 0; i < exam.length; i++){
//     console.log(exam[i]);
// }

// function Hello(name){
//     console.log(`Hello ${name}!`)
// }
// Hello("Hans");

const Word = document.querySelector(".Word");
const List = document.querySelector(".List");
const Button = document.querySelector(".Button");

function ToDo(){
    if (Word.value === ""){
        return;
    }
    const Mission = document.createElement("li");
    Mission.innerHTML = `
        <input type="checkbox" class="square">
        <label>${Word.value}</label>
        <button class="Rubbish">DEL</button>
    `
    List.append(Mission);
    Word.value = "";
}

Button.addEventListener("click",ToDo);

Word.addEventListener("keyup", function(e){
    if(e.key === "Enter")
        ToDo();
});