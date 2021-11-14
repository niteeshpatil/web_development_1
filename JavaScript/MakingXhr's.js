const req = new XMLHttpRequest();

req.onload = function () {
    console.log("All done with requset!!");
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

req.onerror = function () {
    console.log("Error!!")
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();