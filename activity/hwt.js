// highest wicket team
const request = require("request");
const cheerio = require("cheerio");
// const { fstat } = require("node:fs");
const fs = require("fs");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

request(url, cb);

function cb(error, response, data) {
    if(error) {
        console.log(error);
    }
    else if(error == null) {
        let chSelector = cheerio.load(data);
        let tables = chSelector(".table.bowler");
        // console.log(tables.length);

        // let bowlersHtmlString = "";
        for(let i = 0; i < tables.length; i++) {
            // bowlersHtmlString += cheerio(tables[i]).html();
            let teamBowlers = cheerio(tables[i]).find("tr");
            // console.log(teamBowlers.length);
            
            for(let j = 0; j < teamBowlers.length; j++) {
                // console.log(cheerio(teamBowlers[j]).text());
                let eachBaller = cheerio(teamBowlers[j]).find("td");
                // console.log(eachBaller.length);
                let ballerName = cheerio(eachBaller[0]).text();
                let wickets = cheerio(eachBaller[4]).text();

                console.log(ballerName, "    ", wickets);

            }
            
        }
        // fs.writeFileSync("tables.html", bowlersHtmlString);
        // console.log(bowlersHtmlString);
    }
}