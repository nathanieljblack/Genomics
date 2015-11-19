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

var h = .2;
    //width of each column in the heatmap
var w = 7;


var margin = {top: 0, right: 20, bottom: 0, left: 200},
  width = 960 - margin.right - margin.left,
  height = 500 - margin.top - margin.bottom;
  
  //var margin = {top: 0, right: 20, bottom: 0, left: 200},
  //width = 960 - margin.right - margin.left,
  //height = 500 - margin.top - margin.bottom;
  


    //attach a SVG node to the document
    //height and width defined by the row/column lengths

//svg.selectAll("#test1")
//   .data(dataset)
 //  .enter()
 //  .append("rect")
  // .attr("x", function(d, i) {
  //    return xScale(i);         // <-- Set x values
  // });
  

    var mySVG = d3.select("#viz1")
      .append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      //.append("g")
      //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
      //.attr("width", (width * cols.length)) 
      //.attr("height", (height * rows.length))
      //.style('position','absolute')
      //.style('top',0)
      //.style('left',0);

//define a color scale using the min and max expression values
    var colorScale = d3.scale.linear()
      .domain([minData, 0, maxData])
      .range(["blue", "gray", "red"]);

    //generate the heatmap
    var heatmapRow = mySVG.selectAll(".heatmap")
      .data(data)
      .enter().append("g");

    var heatmapRects = heatmapRow
        .selectAll(".rect")
        .data(function(d) {
          return d;
        }).enter().append("svg:rect")
        .attr('width',w)
        .attr('height',h)
        .attr('x', function(d) {
          return (d[2] * w) + 25;
        })
        .attr('y', function(d) {
          return (d[1] * h) + 50;
        })
        .style('fill',function(d) {
          return colorScale(d[0]);
        });

    //label columns
    var columnLabel = mySVG.selectAll(".colLabel")
      .data(cols)
      .enter().append('svg:text')
      .attr('x', function(d,i) {
        return ((i + 0.5) * w) + 25;
      })
      //.attr('y', 30)
      //.attr('class','label')
      //.style('text-anchor','middle')
      //.text(function(d) {return d;});

    //expression value label
    var expLab = d3.select("body")
      .append('div')
      .style('height',23)
      .style('position','absolute')
      .style('background','FFE53B')
      .style('opacity',0.8)
      .style('top',0)
      .style('padding',10)
      .style('left',40)
      .style('display','none');

    //heatmap mouse events
    heatmapRow
      .on('mouseover', function(d,i) {
        d3.select(this)
          .attr('stroke-width',1)
          .attr('stroke','black')

          output = '<b>' + rows[i] + '</b><br>';
          for (var j = 0 , count = data[i].length; j < count; j ++ ) {
            output += data[i][j][0] + ", ";
          }

          expLab
            .style('top',(i * h))
            .style('display','block')
            .html(output.substring(0,output.length - 3));
      })
      .on('mouseout', function(d,i) {
        d3.select(this)
          .attr('stroke-width',0)
          .attr('stroke','none')

        expLab
          .style('display','none')
      });



   





