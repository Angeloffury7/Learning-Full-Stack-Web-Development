const tweetForm = document.querySelector('form');
const tweets = document.querySelector('#tweets');

tweetForm.addEventListener('submit', evt => {
    evt.preventDefault();

    // const Tweet = document.createElement('div');
    // const text = document.createElement('p');
    // const by = document.createElement('p');

    // const twt = tweet.value;
    // const name= username.value;

    // text.append(twt);
    // by.append(` - by ${name}`);
    // Tweet.appendChild(text);
    // Tweet.appendChild(by);

    // const newLi = document.createElement('li');
    // newLi.append(Tweet);
    // tweets.append(newLi);

    const username = document.querySelector('#username');
    const tweet = document.querySelector('#tweet');
    const text = tweet.value;
    const name = username.value;

    addTweet(name, text);

    username.value = '';
    tweet.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const by = document.createElement('b');
    by.append(username);
    newTweet.append(by);
    newTweet.append(` - ${tweet}`);
    tweets.append(newTweet);
};