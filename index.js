function writeCards(names, gift) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${gift} gift!`;
        messages.push(message);
    }
    return messages;

}
function countDown(numberr) {
    let countdown = numberr;
    while (countdown >= 0) {
        console.log(countdown);
        countdown--
    }
}