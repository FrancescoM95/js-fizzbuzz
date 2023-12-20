console.log('JS OK');

//* 1. Creo un ciclo che stampa in console numeri da `1` a `100`.

for (let i = 1; i <= 100; i++) {

    //* 2. SE il numero è multiplo sia di `3` che di `5`, viene stampato in console “FizzBuzz”.

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}
