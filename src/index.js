const names = [
    'Dan',
    'Jubi',
    'Hely',
    'Antho',
    'leo',
    'juan'
];

const loadName = () => {
    const nameLoaded = names[Math.floor(Math.random() * names.length)];
    console.log(nameLoaded)
}

module.exports = {loadName};