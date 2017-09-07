var ColumnChart = function(name, population) {
  var container = document.querySelector("#column-chart");
  console.log(name)
  var chart = new Highcharts.chart({
    chart: {
      type: "column",
      renderTo: container
    },
    title: {
      text: "Countries Population"
    },
    credits: {
      text: "By T and G",
      color: "#ffac33"
    },
    series: [
      {
        name: "Country Population",
        data: population
      },
    ],
    xAxis: {
      categories: name
    }
  });
}