const quotesEl = document.getElementById("quotes");
const authorEl = document.getElementById("author");
const btnEl = document.getElementById("btn");
const tweetEl = document.getElementById("tweet");
let Quotes = "";
let NData = "";
const TweetPost = () => {
    let tweetData = `https://twitter.com/intent/tweet?text=${Quotes.text}:- By ${Quotes.author}`
    window.open(tweetData);
}
const GettingNewquotes = () => {
    let ranNum = Math.floor(Math.random() * 100)
    Quotes = NData[ranNum];
    quotesEl.innerText = `${Quotes.text}`;
    authorEl.innerText = `${Quotes.author}`;

    if(authorEl.innerText == "null" ){
        authorEl.innerText = `By Unknown`;
    }else {
        authorEl.innerText = `-By ${Quotes.author}`
    }
   
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try{
        const data = await fetch(api);
         NData = await data.json();
        // console.log(NData[0].author)
        // console.log(NData[0].text)
        GettingNewquotes();
    }catch(error){
        
    }
}
tweetEl.addEventListener("click", TweetPost);
btnEl.addEventListener("click", GettingNewquotes)
getQuotes();