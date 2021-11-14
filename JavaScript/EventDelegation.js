// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function () {
//         li.remove();
//     })
// }



const tweetForm = document.querySelector('#tweetForm')
const tweetContainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', function (e) {

    e.preventDefault();
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = "";
    tweetInput.value = "";

});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    newTweet.append(`${username}-${tweet}`);
    tweetContainer.append(newTweet);
}

tweetContainer.addEventListener('click', function (e) {
    if (e.target.nodeName == 'LI') { e.target.remove(); }
})
