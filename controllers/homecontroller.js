

http = require("http");
exports.respondWithName = (req, res) => {


  let request = http.get('http://192.168.0.151:9090/api/v1/status/tsdb', (res2) => {
    if (res2.statusCode !== 200) {
      console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
      res2.resume();
      return;
    }

    var data = '';

    res2.on('data', (chunk) => {
      data += chunk;
    });


    res2.on('close', () => {
      //console.log('Retrieved all data');
      console.log(data);
      let data1 = JSON.stringify(data);
      console.log(data1);
      res.render("index", { title: "seriesCountByMetricName", data: data1 });



    });

  });

};
