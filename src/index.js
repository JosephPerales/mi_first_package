const  messages = [
    "Oscar",
    'Ana',
    'Luis',
    'Miguel',
    'Carol',
    'Goku',
    'Vegeta',
    'Naruto',
    'Sasuke'
]
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
};

module.exports = { randomMsg };
