class Calculadora {

    suma(num1, num2, num3) {
        let text = ``
        if (num3){
            text = `La suma de ${num1} y ${num2}, y multiplicado por ${num3} es: ${(num1 + num2) * num3}`
        }else{
            text = `La suma de ${num1} y ${num2} es: ${num1 + num2}`
        }
        console.log(text)
    }

    resta(num1, num2, num3) {
        let text = ``
        if (num3){
            text = `La resta de ${num1} y ${num2}, y multiplicado por ${num3} es: ${(num1 - num2) * num3}`
        }else{
            text = `La resta de ${num1} y ${num2} es: ${num1 - num2}`
        }
        console.log(text)
    }

}



let calculadora = new Calculadora()

calculadora.suma(1,2)
calculadora.suma(1,2,3)
calculadora.resta(1,2)
calculadora.resta(1,2,3)