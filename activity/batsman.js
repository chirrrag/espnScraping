const request = require("request");
const cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

request(url, cb);
// data is in the form of html
function cb(error, response, data) {
    if(error) {
        console.log(error);
    }
    else if(error == null) {
        let chSelector = cheerio.load(data);
        let tables = chSelector(".table.batsman");

        // console.log(tables.length);
        // let batsmanHtmlString = "";
        for(let i = 0; i < tables.length; i++) {
            // batsmanHtmlString += cheerio(tables[i]).html();
            let teamBatsmen = cheerio(tables[i]).find("tr");
            // console.log(teamBatsmen.length);
            for(let j = 0; j < teamBatsmen.length; j++) {
                let eachBatCol = cheerio(teamBatsmen[j]).find("td");
                
                if(eachBatCol.length == 8) {
                    let playerName = cheerio(eachBatCol[0]).text();
                    let runs = cheerio(eachBatCol[2]).text();
                    console.log(playerName, "        ", runs);
                }
            }
            console.log("--------------------------");
        }
        // console.log(batsmanHtmlString);
    }
}