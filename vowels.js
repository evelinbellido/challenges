/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

*STRINGS   *FUNDAMENTALS
*/

/* -------------------------------------------------------------------*/

//inicializamos una funcion getCount toma una cadena como parametro(str).
function getCount(str) {

    let str = prompt('ingresa un texto');
    //declaramos una varialble local vowelsCount = inicializado en 0.
    let vowelsCount = 0;
    //declaramos una constante vowels con un array de las vocales.
    const vowels = ['a','e','i','o','u'];
    //iniciamos un loop declarmos una constante char of iterable (str)
    //itera sobre cada vocal en la cadena 
    for (const char of str) {
        //si const vowels incuye char que es iterable de la funcion getCount
        //verifica si hay una vocal en cada cadena con el metodo .includes de la matriz de vowels.
        if (vowels.includes(char)) {
            //entonces se agrega una
            //si el caracter es una vocal se aumneta 1 a la cuenta de vocales.
            vowelsCount++;
        }
    }
    //retorna de el contador
    return vowelsCount;
}

alert(getCount);