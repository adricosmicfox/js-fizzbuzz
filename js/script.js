
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



// stampare numeri da 1 a 100


let i;

for (i = 1; i <= 100; i++) {

    // cambiare multipli di 5 e 3 in FizzBuzz
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("BuzzFizz");
    }

    // cambiare multipli di 3 in fizz
    else if (i % 3 == 0) {
        console.log("fizz");
    }

    // cambiare multipli di 5 in buzz
    else if (i % 5 == 0) {
        console.log("buzz");
    }

    else {
        console.log(i);
    }
}













