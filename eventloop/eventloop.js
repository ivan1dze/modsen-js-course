function generateRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const delayInSeconds = randomNumber;
        setTimeout(() => {
            if (randomNumber <= 5) {
                resolve(randomNumber);
            } else {
                reject(new Error(`Сгенерировано число ${randomNumber} от 6 до 10`));
            }
        }, delayInSeconds * 1000);
    });
}
generateRandomNumberWithDelay()
    .then(randomNumber => {
        console.log(`Сгенерировано успешное число: ${randomNumber}`);
    })
    .catch(error => {
        console.error(error.message);
    });
