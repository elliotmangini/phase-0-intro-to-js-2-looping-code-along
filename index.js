// Code your solutions, homie.

function writeCards (anArray) {
    let thankYouArray = [];

    for (let i = 0; i < anArray.length; i++) {
        thankYouArray.push(`Thank you, ${anArray[i]}, for the wonderful surprise gift!`);
    }

    return thankYouArray;
}


function countDown(aNum) {
    while (aNum >= 0) {
        console.log(aNum);
        aNum--;
    }
}