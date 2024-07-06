let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let operation = document.getElementById("operation")
operation.value = "+"
let FirstInput
let SecondInput
let baseNum = {
    decimal: 10,
    octal: 8,
    hexadecimal: 16,
    binary: 2
}
let Firstresult = 0
let Secondresult = 0
let string1 = ""
let string2 = ""
let result = 0
let resultConvert
let resultToP
let BinaryList

input1.addEventListener("keydown", e => {
    if(e.key === "0" || e.key === "1"){
    } else if(e.key !== "0" || e.key !== "1"){
        input1.value = input1.value.replace(e.key, "")
        input1.addEventListener("keyup", e => {
            if(e.key === "0" || e.key === "1"){
            } else if(e.key !== "0" || e.key !== "1"){
                input1.value = input1.value.replace(e.key, "")
            }
        })
    }
})
input2.addEventListener("keydown", e => {
    if(e.key === "0" || e.key === "1"){
    } else if(e.key !== "0" || e.key !== "1"){
        input2.value = input2.value.replace(e.key, "")
        input2.addEventListener("keyup", e => {
            if(e.key === "0" || e.key === "1"){
            } else if(e.key !== "0" || e.key !== "1"){
                input2.value = input2.value.replace(e.key, "")
            }
        })
    }
})

function operations(par){
    if(par == 0){
        operation.value = "+"
    } else if(par == 1){
        operation.value = "-"
    } else if(par == 2){
        operation.value = "x"
    } else if(par == 3){
        operation.value = "/"
    }
}

function Cal(){
    
    Firstresult = 0
    Secondresult = 0
    FirstInput = input1.value
    SecondInput = input2.value
    FirstInput = FirstInput.toString()
    SecondInput = SecondInput.toString()
    string1 = ""
    string2 = ""

    for(let i = FirstInput.length - 1; i > -1; i--){
        string1 += FirstInput[i]
    }
    for(let i = 0 ; i < FirstInput.length; i++){
        Firstresult += eval(string1[i] * (baseNum.binary ** i))
    }
    for(let i = SecondInput.length - 1; i > -1; i--){
        string2 += SecondInput[i]
    }
    for(let i = 0 ; i < SecondInput.length; i++){
        Secondresult += eval(string2[i] * (baseNum.binary ** i))
    }


    
    switch(operation.value){
        case "+": result = Firstresult + Secondresult
        break;
        case "-": result = Firstresult - Secondresult
        break;
        case "x": result = Firstresult * Secondresult
        break;
        case "/": result = Math.floor(Firstresult / Secondresult)
        break;
    }


    if(result < 0){
        resultToP = result * -1
        resultConvert = resultToP
    } else {
        resultConvert = result
    }
    
    document.getElementById("Result").textContent = ""
    let divideByTwo = Math.floor(resultConvert / baseNum.binary)
    let multiplyByTwo = divideByTwo * baseNum.binary
    let r = resultConvert - multiplyByTwo
    BinaryList = []

    resultConvert = divideByTwo
    BinaryList.unshift(r.toString())
    if(!resultConvert == 0){
        while(resultConvert != 0){
            resultConvert = divideByTwo
            divideByTwo = Math.floor(divideByTwo / baseNum.binary)
            multiplyByTwo = divideByTwo * baseNum.binary
            r = resultConvert - multiplyByTwo
            divideByTwo = divideByTwo
            BinaryList.unshift(r.toString())
            console.log(BinaryList)
            if(divideByTwo == 0){
                if(result > 0 && result != -1){
                    for(let i = 0; i < BinaryList.length; i++){
                        document.getElementById("Result").textContent += BinaryList[i].toString()
                        console.log("error")  
                    }
                } else if(result < 0){
                    BinaryList.unshift("-")
                    for(let i = 0; i < BinaryList.length; i++){
                        document.getElementById("Result").textContent += BinaryList[i].toString()  
                        console.log("error2")
                    }
                } break;
            }
        }
    } else if(resultConvert <= 0){
        if(result > 0 && result != -1){
            for(let i = 0; i < BinaryList.length; i++){
                document.getElementById("Result").textContent += BinaryList[i].toString()
            }
        } else if(result < 0){
            BinaryList.unshift("-")
            for(let i = 0; i < BinaryList.length; i++){
                document.getElementById("Result").textContent += BinaryList[i].toString() 
            }
        }
    }

    if(input1.value == "" || input2.value == ""){
        document.getElementById("Result").textContent = "Result"
    }
}
