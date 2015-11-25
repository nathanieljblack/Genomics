//var foodDS;
//var HeatMapDS;


//d3.csv("data/food.csv", function(data) {
 //   console.log(data);
  //  foodDS = data;
  //});
//var maxData = 2.0;
//var minData = -2.0;
//var data = [[[0.0, 0, 0], [0.0, 0, 1], [0.0, 0, 2], [0.0, 0, 3], [0.0, 0, 4]]];
//var cols = ['chrMT-827-G', 'chrMT-951-A', 'chrMT-961-C,G', 'chrMT-980-C', 'chrMT-990-C'];
//var rows = ['NA19107', 'HG02130', 'HG02050', 'HG00675', 'HG02131'];
//console.log (rows);
//console.log (data);




//d3.csv("data/food.csv",function(error, foodDt) {
  //  if (error) {//If the error is not null log what happened
   //   console.log(error); // log the error
   // } else {
    //  console.log (foodDt); // output the data into the console ... is it too big? 
    //HeatMapDS = data;
  //  }
  //});

//var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
 //               11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

var w = 250;
var h = 1;
//var barPadding = 1;
var categories = d3.scale.category20c();
//var colorScale = d3.scale.linear()
  //    .domain([1, 30])
    //  .range(["blue", "gray", "red"]);

var margin = {top: 0, right: 20, bottom: 0, left: 200},
  width = 960 - margin.right - margin.left,
  height = 500 - margin.top - margin.bottom;



    var mySVG = d3.select("#viz4")
      .append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom);
      //.append("g")
      //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
      //.attr("width", (width * cols.length)) 
      //.attr("height", (height * rows.length))
      //.style('position','absolute')
      //.style('top',0)
      //.style('left',0);


//define a color scale using the min and max expression values
    //var categories = d3.scale.category20();
    var colorScale = d3.scale.linear()
      .domain([1, 99])
      .range(["blue", "gray", "red"]);


      mySVG.selectAll("rect")
         .data(PopCodeNm)
         .enter()
         .append("rect")
         .attr("x", function(d) {
            return (25);
         })
         .attr("y", function(d, i) {
            return i * (w / PopCodeNm.length);
         })
         .attr("width", w)
         .attr("height", function(d) {
            return d * 4;
         });

         //"style is not defined?"
         //.style("fill", function(d) {
           //return(categories(d.id));
         //.style('fill',function(d) {
           // return console.log(d[0]);
 //});

