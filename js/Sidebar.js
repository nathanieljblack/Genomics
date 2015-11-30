var popRows = 
        {'PopSideBar': 2533};

function updateHeatMap(pop) {
  var margin = { top: 20, right: 50, bottom: 1, left: 50 },
    cellSize=5;
    col_number=11;
    row_number= popRows[pop];
    width1 = cellSize*col_number, 
    height1 = cellSize*row_number , 
    legendElementWidth = cellSize*10,
    colorBuckets = 21,
    colors = ['#FFE4C4', '#d62728','#ff9896','#aec7e8','#1f77b4', '#000000'];
  var dataBlanks = [];
    for (var i = 0; i < (row_number * col_number); i++) {
      dataBlanks[i] = 0; 
      console.log(i);}

  var fileName = 'data/' + pop + '_heatmap.csv'

  d3.csv(fileName,
  function(d) {
    return {
      row:   +d.row,
      col:   +d.col,
      value: +d.Severity,
      population: d.Population,
      Sample: d.Sample
    };
  },
  function(error, data) {
    var colorScale = d3.scale.quantile()
        .domain([ 0, 26])
        .range(colors);
    
    var svg1 = d3.select("#chart2").append("svg")
        .attr('id', 'viz1SVG')
        .attr("width", width1 + margin.left + margin.right)
        .attr("height", height1 + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        ;
    var rowSortOrder=false;
    var colSortOrder=false;


   var heatMap = svg1.append("g").attr("class","g3")
          .selectAll(".cellg")
          .data(data,function(d){return d.row+":"+d.col;})
          .enter()
          .append("rect")
          .attr("x", function(d) { return d.col * cellSize; })
          .attr("y", function(d) { return d.row * .12; })
          .attr("class", function(d){return "cell cell-border cr"+(d.row-1)+" cc"+(d.col-1);})
          .attr("width", 50)
          .attr("height", cellSize)
          .attr("fill", function(d) { return colorScale(d.value); })
          .on("mouseover", function(d){
                 d3.select(this).classed("cell-hover",true);

                 d3.select("#tooltip2")
                   .style("left", (d3.event.pageX+10) + "px")
                   .style("top", (d3.event.pageY-10) + "px")
                   .select("#value")
                   .text("\nPopulation:"+d.population);  
                 d3.select("#tooltip2").classed("hidden", false);
          })
          .on("mouseout", function(){
                 d3.select(this).classed("cell-hover",false);
                 d3.select("#tooltip2").classed("hidden", true);
          })
          ;

    svg1.append("text")
      .attr("class", "x label")
      .attr("x", width1)
      .attr("y", height1 + margin.bottom-5)
      .attr("text-anchor", "end")
      .text("Position on Chromosome")
      .style("font", "sans-serif")
      .style("font-size","12px");

    svg1.append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("y", 6)
      .attr("dy", "5.75em")
      .attr("transform", "rotate(-90)")
      .text("Population clusters")
      .style("font", "sans-serif")
      .style("font-size","12px");
    
  });
};

updateHeatMap('PopSideBar');