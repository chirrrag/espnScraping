const request = require("request");
const cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";

request(url, cb);

function cb(err, response, html) {
    if(err) {
        console.log(err);
    }
    else if(err == null) {
        let chSelector = cheerio.load(html);
        let anchorTags = chSelector('a[data-hover="Scorecard"]');

        // console.log(anchorTags.length);
        for(let i = 0; i < anchorTags.length; i++) {
            let link = cheerio(anchorTags[i]).attr("href");
            let completeLink = "https://www.espncricinfo.com" + link;
            console.log(completeLink);
        }
    }
}