
let input = document.querySelector("input")
console.log(input)


let getcharacter = (ch) => {
    if (input.value != 0) {
        input.value += ch;
    }
    else {
        input.value = ch;
    }
}

//  ! clear the input field
let clearInput = () => {
    input.value = ""
}

//  ! calculator
let calculator = () => {
    let data = input.value;

    // console.log(data) //2+2
    // console.log(eval(data)) //4

    input.value = eval(data)
}

//  !remove last character
let removeLast = () => {
    let data = input.value;

    input.value = data.slice(0, -1)
}