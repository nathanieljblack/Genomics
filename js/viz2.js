var selectedDisease = 'BC'

var margin2 = {top: 20, right: 20, bottom: 30, left: 40},
    width2 = 960 - margin2.left - margin2.right,
    height2 = 500 - margin2.top - margin2.bottom;

var tooltip = d3.select('#viz2').append('div')
       .style('position','absolute') //To allow d3 to follow the position absolute to the relationship to the page
       .style('padding','0 10px') //To do padding on the toop tip. 0 on the top and bottom and 10px on each side
       .style('background','white')
       .style('opacity',0); // 0 as we don't want to show when the graphic first loads up

var x0 = d3.scale.ordinal()
    .rangeRoundBands([0, width2], .1);

var x1 = d3.scale.ordinal();

var y = d3.scale.linear()
    .range([height2, 0]);

var color = d3.scale.ordinal()
    .range(["#8a89a6", "#d0743c"]);

var xAxis = d3.svg.axis()
    .scale(x0)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(".2s"));

var svg2 = d3.select("#viz2").append("svg")
    .attr("width", width2 + margin2.left + margin2.right)
    .attr("height", height2 + margin2.top + margin2.bottom)
  .append("g")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

var fname = 'data/FIN.csv'

d3.csv(fname, function(error, data) {
  var categories = d3.keys(data[0]).filter(function(key) { return key !== "Disease" && key.indexOf('num') == -1; });
  var numbers = d3.keys(data[0]).filter(function(key) { return key.indexOf('num') != -1; });

  data.forEach(function(d) {
    d.percents = categories.map(function(name) { return {name: name, value: +d[name]}; });
    d.numbers = numbers.map(function(name) { tn = name.split('_')[0]; return {"num_name": tn, "num_value": +d[name]}; });
    arr = []
    for (var key in d.numbers) {
      nv = []
      n = d.numbers[key].num_name;
      for (var pkey in d.percents) {
        pn = d.percents[pkey].name;
        if (pn == n) {
          v = d.percents[pkey].value;
          nv.push(v);
          nv.push(d.numbers[key].num_value);
          arr.push({name: n, value: nv})
          break;
        }
      }
    }
    d.percents = arr;
  });

  x0.domain(data.map(function(d) { return d.Disease; }));
  x1.domain(categories).rangeRoundBands([0, x0.rangeBand()]);
  y.domain([0, d3.max(data, function(d) { return d3.max(d.percents, function(d) { return d.value[0]; }); })]);

  svg2.append("g")
      .attr("id", "xaxis2")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis);

  svg2.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr('class', 'y label')
      .attr("transform", "rotate(-90)")
      .attr("y", 2)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Percent");

  var disease = svg2.selectAll(".disease")
      .data(data)
    .enter().append("g")
      .attr("class", "g")
      .attr("transform", function(d) { return "translate(" + x0(d.Disease) + ",0)"; })
      .on("click", function(d) {
         selectedDisease = d.Disease;
         var newData = eval(selectedDisease);
         root = newData[0];
         update(root);
         console.log(selectedDisease);
         document.location.href = "#viz3";
      });

  disease.selectAll("rect")
      .data(function(d) { return d.percents; })
    .enter().append("rect")
      .attr("width", x1.rangeBand())
      .attr("x", function(d) { return x1(d.name); })
      .attr("y", function(d) { return y(d.value[0]); })
      .attr("height", function(d) { return height2 - y(d.value[0]); })
      .style("fill", function(d) { return color(d.name); })
      .on("mouseover", function(d) {
         tooltip.transition()
            .style('opacity', .9);
         tooltip.html(d.value[0] + "% of " + d.value[1])
            .style('left', (d3.event.pageX - 15) + 'px') //position of the tooltip
            .style('top', (d3.event.pageY - 20) + 'px');

         d3.select(this)
            .style('opacity',.5)
      })
      //To reset the color, hence opacity = 1
      .on('mouseout',function(d){
         tooltip.transition().style('opacity', 0)
         d3.select(this)
            .style('opacity',1)
      });

  d3.select('#xaxis2')
      .selectAll('.tick')
      .on('click', function(d) {
         selectedDisease = d;
         var newData = eval(selectedDisease);
         root = newData[0];
         update(root);
         console.log(selectedDisease);
         document.location.href = "#viz3";
      });

  var legend = svg2.selectAll(".legend")
      .data(categories.slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width2 - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width2 - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

});

