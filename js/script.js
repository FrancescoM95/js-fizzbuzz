console.log('JS OK');

//# 1. Richiamo il contenitore nel DOM.
const container = document.getElementById('row');

//* 1. Creo un ciclo che stampa in console numeri da `1` a `100`.

for (let i = 1; i <= 100; i++) {

    let value = i;                         //# 2. Creo una variabile il cui valore viene assegnato dal ciclo che generare numeri da 1 a 100.
    let className = 'bg-primary';          //| Bonus 2


    //# 3. Creo un nuovo elemento per ogni valore.
    const col = document.createElement('div');
    col.classList.add('col', 'col-3', 'col-md-2', 'col-lg-1');

    if (i % 15 === 0) {                   //# 2a. SE il numero è multiplo sia di `3` che di `5`, viene dato il valore “FizzBuzz”.
        value = 'FizzBuzz';
        className = 'bg-danger';         //| Bonus 2 

    } else if (i % 3 === 0) {             //# 2b. OPPURE SE il numero è solo multiplo di `3`, viene dato il valore “Fizz”.
        value = 'Fizz';
        className = 'bg-success';         //| Bonus 2 

    } else if (i % 5 === 0) {             //# 2c. OPPURE SE il numero è solo multiplo di `5`, viene dato il valore “Buzz”.
        value = 'Buzz';
        className = 'bg-warning';         //| Bonus 2 
    }
    console.log(value);                   //# 2d. OPPURE viene stampato solo il numero.

    //| Bonus 2 
    col.classList.add(className);

    //# 4. Inserisco il valore nell'elemento.
    col.append(value);

    //# 5. Inserisco l'elemento nel contenitore.
    container.appendChild(col);
}