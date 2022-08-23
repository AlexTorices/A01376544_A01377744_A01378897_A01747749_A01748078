class CalculadoraPromise{
    suma(n1, n2, n3=1){
        let text = ``
        let promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000); 
        });

        promesa.then(
            function(){
                if(n3 == 1){
                    text = `La suma de ${n1} y ${n2} es: ${n1 + n2}`
                }else{
                    text = `La suma de ${n1} y ${n2}, y multiplicado por ${n3} es: ${(n1 + n2) * n3}`
                }
            }
        ).catch((error)=>{
            console.warn(error);
            console.log("Suma no exitosa...");

        }).finally(()=>{
            console.log(text)
            console.log("Suma exitosa...");
        })
    }

    resta(n1, n2, n3=1){
        let text = ``
        let promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000); 
        });

        promesa.then(
            function(){
                if(n3 == 1){
                    text = `La resta de ${n1} y ${n2} es: ${n1 - n2}`
                }else{
                    text = `La resta de ${n1} y ${n2}, y multiplicado por ${n3} es: ${(n1 - n2) * n3}`
                }
            }
        ).catch((error)=>{
            console.warn(error);
            console.log("Resta no exitosa...");

        }).finally(()=>{
        console.log(text)
        console.log("Resta exitosa...");
        })
    }

    mul(n1, n2, n3=1){
        let text = ``

        let promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000); 
        });

        promesa.then(
            function(){
                if(n3 == 1){
                    text = `La multiplicacion de ${n1} y ${n2} es: ${n1 * n2}`
                }else{
                    text = `La multiplicacion de ${n1} y ${n2}, y multiplicado por ${n3} es: ${(n1 * n2) * n3}`
                }
            }
        ).catch((error)=>{
            console.warn(error);
            console.log("Multiplicacion no exitosa...");

        }).finally(()=>{
        console.log(text)
        console.log("Multiplicacion exitosa...");
        })
    }

    div(n1, n2, n3=1){
        let text = ``
        let promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(n2 != 0){
                    resolve();
                }else{
                    reject();
                }
            }, 3000); 
        });

        promesa.then(
            function(){
                if(n3 == 1){
                    text = `La division de ${n1} y ${n2} es: ${n1 / n2}`
                }else{
                    text = `La division de ${n1} y ${n2}, y multiplicado por ${n3} es: ${(n1 / n2) * n3}`
                }
            }
        ).catch((error)=>{
            console.warn(error);
            console.log("Division no exitosa...");
        }).finally(()=>{
            console.log(text)
            console.log("Division exitosa...");

        })
    }
}



let calculadoraPromise = new CalculadoraPromise();

calculadoraPromise.suma(1,2,3);
calculadoraPromise.suma(1,2);
calculadoraPromise.resta(1,2,3);
calculadoraPromise.resta(1,2);