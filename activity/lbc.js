// lbc ==> Last Ball Commentary
const request = require("request");
const cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";
request(url, cb);
function cb(error, response, data) {
    // here data is in the form of html
    if(error) {
        console.log(error);
    }
    else if(error == null) {
        let chSelector = cheerio.load(data);
        let element = chSelector(".match-comment .d-flex.match-comment-padder.align-items-center .match-comment-long-text");
        // console.log(element.length);
        let content = cheerio(element[0]).text();
        console.log(content);
        
    }
}