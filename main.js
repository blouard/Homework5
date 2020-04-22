function primeFactorsTo() {
    var nbPrimeNumbers = document.getElementById( 'resultNumber');
    var result = document.getElementById( 'error');
    var minPrime = parseFloat(document.getElementById("nbr1").value);
    var maxPrime = parseFloat(document.getElementById("nbr2").value);
    var change;

    console.log(minPrime);

    if (maxPrime < minPrime){
        change = maxPrime;
        maxPrime = minPrime;
        minPrime = change;
    }

    if (minPrime < 2 || maxPrime > 100 || isNaN(minPrime) ||isNaN(maxPrime)){
        nbPrimeNumbers.innerHTML = "";
        result.innerHTML = "Invalid input, please try again.";
        return;
    }

    var value = minPrime, resultPrime = [];
    for (var i = value; value <= maxPrime; i++) {
        if (value == 2)
            resultPrime.push(value);
        value = nextPrime(value);
        if (value <= maxPrime)
            resultPrime.push(value);

    }

    nbPrimeNumbers.innerHTML = "There are "+resultPrime.length+" prime numbers.";
    console.log(resultPrime.values());
    result.innerHTML = resultPrime.toString();
}

function nextPrime(prime) {
    if (prime > 2) {
        var i, j;
        do {
            i = 3;
            prime += 2;
            j = Math.floor(Math.sqrt(prime));
            while (i <= j && prime % i) {
                i += 2;
            }
        } while (i <= j);
        return prime;
    }
    return prime === 2 ? 3 : 2;
}