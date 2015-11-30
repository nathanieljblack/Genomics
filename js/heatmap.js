var popRows = 
        {'CLM': 93, 
        'PJL': 70,
        'BEB': 3,
        'CDX': 97, 
        'GWD': 97, 
        'KHV': 100, 
        'PEL': 85, 
        'ACB': 87, 
        'CHS': 103, 
        'GBR': 88, 
        'MSL': 59, 
        'ESN': 81, 
        'IBS': 104, 
        'FIN': 96, 
        'PUR': 94};

function updateHeatMap(pop) {
  var margin = { top: 20, right: 20, bottom: 50, left: 20 },
    cellSize=5;
    col_number=111;
    row_number= popRows[pop];
    width1 = cellSize*col_number, 
    height1 = cellSize*row_number , 
    legendElementWidth = cellSize*10,
    colorBuckets = 21,
    colors = ['#d62728','#ff9896','#aec7e8','#1f77b4'];

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
      Mut: d.Mut,
      Sample: d.Sample
    };
  },
  function(error, data) {
    var colorScale = d3.scale.quantile()
        .domain([ -2, 0, 2])
        .range(colors);
    
    var svg1 = d3.select("#chart1").append("svg")
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
          .attr("y", function(d) { return d.row * cellSize; })
          .attr("class", function(d){return "cell cell-border cr"+(d.row-1)+" cc"+(d.col-1);})
          .attr("width", cellSize)
          .attr("height", cellSize)
          .attr("fill", function(d) { return colorScale(d.value); })
          .on("mouseover", function(d){
                 d3.select(this).classed("cell-hover",true);

                 d3.select("#tooltip1")
                   .style("left", (d3.event.pageX+10) + "px")
                   .style("top", (d3.event.pageY-10) + "px")
                   .select("#value")
                   .text("\nMutation:"+d.Mut+"\nPerson:"+d.Sample);  
                 d3.select("#tooltip1").classed("hidden", false);
          })
          .on("mouseout", function(){
                 d3.select(this).classed("cell-hover",false);
                 d3.select("#tooltip1").classed("hidden", true);
          })
          ;

    svg1.append("text")
      .attr("class", "x label")
      .attr("x", width1 - 20)
      .attr("y", height1 + margin.bottom-5)
      .attr("text-anchor", "end")
      .text("Position on Chromosome")
      .style("font", "sans-serif")
      .style("font-size","12px");

    svg1.append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("y", 6)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .text("Individual in Population")
      .style("font", "sans-serif")
      .style("font-size","12px");
    
  });
};

updateHeatMap('GBR');