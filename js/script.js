console.log('JS OK');

//* 1. Creo un ciclo che stampa in console numeri da `1` a `100`.

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {  //* 2. SE il numero è multiplo sia di `3` che di `5`, viene stampato in console “FizzBuzz”.
        console.log("FizzBuzz");

    } else if (i % 3 === 0) {          //* 3. OPPURE SE il numero è solo multiplo di `3`, viene stampato in console “Fizz”.
        console.log("Fizz");

    } else {                          //* 5. OPPURE viene stampato solo il numero.
        console.log(i);
    }
}
