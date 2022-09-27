// Code your solutions in this file

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let currentName = names[i]
        let message = `Thank you, ${currentName} for the wonderful ${event} gift!`
        messages.push(message);
    }
    return messages;
}


console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));


function countDown(number) {
    let counter = number
    while (counter > 0) {
        console.log(counter)
        counter--
    }
    console.log(0)
}

countDown(5)