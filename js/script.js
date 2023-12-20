console.log('JS OK');

//# 1. Richiamo il contenitore nel DOM.
const container = document.getElementById('row');

//* 1. Creo un ciclo che stampa in console numeri da `1` a `100`.

for (let i = 1; i <= 100; i++) {

    let value;                         //# 2. Creo una variabile il cui valore viene assegnato dal ciclo che generare numeri da 1 a 100.


    //# 3. Creo un nuovo elemento per ogni valore.
    const col = document.createElement('div');
    col.classList.add('col', 'col-3', 'col-md-2', 'col-lg-1', 'd-flex', 'justify-content-center', 'align-items-center');

    if (i % 3 === 0 && i % 5 === 0) {     //# 2a. SE il numero è multiplo sia di `3` che di `5`, viene dato il valore “FizzBuzz”.
        value = 'FizzBuzz';
        col.classList.add('bg-danger');  //| Bonus 2 
        console.log(value);

    } else if (i % 3 === 0) {             //# 2b. OPPURE SE il numero è solo multiplo di `3`, viene dato il valore “Fizz”.
        value = 'Fizz';
        col.classList.add('bg-success');  //| Bonus 2 
        console.log(value);

    } else if (i % 5 === 0) {             //# 2c. OPPURE SE il numero è solo multiplo di `5`, viene dato il valore “Buzz”.
        value = 'Buzz';
        col.classList.add('bg-warning');  //| Bonus 2 
        console.log(value);

    } else {
        value = i;                        //# 2d. OPPURE viene stampato solo il numero.
        col.classList.add('bg-primary');  //| Bonus 2 
        console.log(value);
    }

    //# 4. Inserisco il valore nell'elemento.
    col.append(value);

    //# 5. Inserisco l'elemento nel contenitore.
    container.appendChild(col);
} 