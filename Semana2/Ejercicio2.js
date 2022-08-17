class CalculadoraPromise{
    suma(n1, n2, n3=1){
        let promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000); 
        });

        promesa.then(
            function(){
                if(n3 == 1){
                    console.log("La suma de " + n1 + " y " + n2 + " es: " + (n1 + n2));
                    console.log("Suma exitosa...")
                }else{
                    console.log("La suma de " + n1 + " y " + n2 + ", y multiplicado por " + n3 + " es: " + (n1 + n2)*n3);
                    console.log("Suma exitosa...")
                }
            }
        );
    }

    resta(n1, n2, n3=1){
        let promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000); 
        });

        promesa.then(
            function(){
                if(n3 == 1){
                    console.log("La resta de " + n1 + " y " + n2 + " es: " + (n1 - n2));
                    console.log("Resta exitosa...")
                }else{
                    console.log("La resta de " + n1 + " y " + n2 + ", y multiplicado por " + n3 + " es: " + (n1 - n2)*n3);
                    console.log("Resta exitosa...")
                }
            }
        );
    }

    mul(n1, n2, n3=1){
        let promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000); 
        });

        promesa.then(
            function(){
                if(n3 == 1){
                    console.log("La multiplicacion de " + n1 + " y " + n2 + " es: " + (n1 * n2));
                    console.log("Multiplicacion exitosa...")
                }else{
                    console.log("La multiplicacion de " + n1 + " y " + n2 + ", y multiplicado por " + n3 + " es: " + (n1 * n2)*n3);
                    console.log("Multiplicacion exitosa...")
                }
            }
        );
    }

    div(n1, n2, n3=1){
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
                    console.log("La division de " + n1 + " y " + n2 + " es: " + (n1 / n2));
                    console.log("Division exitosa...")
                }else{
                    console.log("La division de " + n1 + " y " + n2 + ", y multiplicado por " + n3 + " es: " + (n1 / n2)*n3);
                    console.log("Division exitosa...")
                }
            }
        ).catch((error)=>{
            console.warn(error);
            console.log("Division no exitosa...");
        }).finally(()=>{
        })
    }
}



let calculadoraPromise = new CalculadoraPromise();

calculadoraPromise.div(1,0);