window.addEventListener('load', function() {
  var url = 'https://restcountries.eu/rest/v2';
  // new PieChart();
  this.names = [];
  this.population = [];
  



  makeRequest(url, function () {
    if (this.status !== 200) return;
    var jsonString = this.responseText;
    var countries = JSON.parse(jsonString);
    getData(countries);

    // console.log(countries)
  });
  

});

var makeRequest = function (url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var getData = function(countries){
  countries.forEach(function(country){
    names.push(country.name);
    population.push(country.population);
  })

  console.log(names)
  console.log(population)
  new ColumnChart(this.names, this.population);
}

