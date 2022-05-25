const request = require("request");
const cheerio = require("cheerio");

const API = {
  key: "ae75cef29f748e58cfb1f1abe109a54a",
};

function exchanceMoney(from, amount, to) {
  //döviz sitesinden istenilen para biriminin istenlen para birimine dönüştürülmesi ve terminalde görüntülenmesi
  const url = `https://www.xe.com/currencyconverter/convert/?Amount=${amount}&From=${from}&To=${to}`;
  request(
    `http://api.scraperapi.com/?api_key=${API.key}&url=${url}`,
    (err, res, body) => {
      const html = res.body;
      const $ = cheerio.load(html);
      const right = $(".result__BigRate-sc-1bsijpp-1.iGrAod").text();
      const left = $(".result__ConvertedText-sc-1bsijpp-0.gwvOOF").text();
      console.log(left + " " + right);
    }
  );
}
exchanceMoney("EUR", 1, "TRY");
exchanceMoney("USD", 1, "TRY");
exchanceMoney("GBP", 1, "TRY");
getYoutubeTitle();
//YOUTUBE VİDEO BAŞLIKLARINI ÇEKMEK

function getYoutubeTitle() {
  const url = `https://www.youtube.com/c/PROTOTURKCOM/videos`;
  request(
    `http://api.scraperapi.com/?api_key=${API.key}&url=${url}&render=true`,
    (err, res, body) => {
      const html = res.body;
      const $ = cheerio.load(html);
      const videos = $("a#video-title");

      videos.each(function (i, element) {
        console.log($(this).text());
      });
    }
  );
}
