// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("error", err)
//     })

// const fechbitcoinprice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
//         console.log(res.data.ticker.price)
//     }
//     catch (e) {
//         console.log("error", e)
//     }
// }
const jokes = document.querySelector('#jokes');
const btn = document.querySelector('button');



const addnewjoke = async () => {
    const joketext = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(joketext);
    jokes.append(newLI);
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke
    }
    catch (e) {
        return "Sorry error"
    }
}

btn.addEventListener('click', addnewjoke)