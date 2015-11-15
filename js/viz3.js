var tip = d3.tip()
          .attr('class', 'd3-tip')
          .offset([-5,0])
          .html(function(d) {
            return "<a href=" + d.link + " style='text-decoration: none' target='_blank'><span style='color:" + d.color + "'><strong><center>Click here for more info on the " + d.type + "</center></strong></span></a>";
          });

var leber = [
  {
    "name": "Leber's Optic Atrophy",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Leber's_hereditary_optic_neuropathy",
    "children": [
      {
        "name": "CYTB",
        "parent": "Leber's Optic Atrophy",
        "color": "#1f77b4",
        "lightcolor": "#aec7e8",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/Cytochrome_b",
        "children": [
          {
            "name": "chrMT-15257-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/41518645"
          },
          {
            "name": "chrMT-15812-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/200336777"
          },
          {
            "name": "chrMT-14831-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199795644"
          }
        ]
      },
      {
        "name": "ND1",
        "parent": "Leber's Optic Atrophy",
        "color": "#ff7f0e",
        "lightcolor": "#ffbb78",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ND1",
        "children": [
          {
            "name": "chrMT-4216-C",
            "parent": "ND1",
            "color": "#ff7f0e",
            "lightcolor": "#ffbb78",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/1599988"
          },
          {
            "name": "chrMT-3394-C",
            "parent": "ND1",
            "color": "#ff7f0e",
            "lightcolor": "#ffbb78",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/41460449"
          },
          {
            "name": "chrMT-4136-G",
            "parent": "ND1",
            "color": "#ff7f0e",
            "lightcolor": "#ffbb78",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199476121"
          }]},
           {
          "name": "ND2",
          "parent": "Leber's Optic Atrophy",
          "color": "#2ca02c",
          "lightcolor": "#98df8a",
          "type": "gene",
          "link": "https://en.m.wikipedia.org/wiki/MT-ND2",
          "children": [
            {
              "name": "chrMT-4917-G",
              "parent": "ND2",
              "color": "#2ca02c",
              "lightcolor": "#98df8a",
              "type": "mutation",
              "link": "http://www.ncbi.nlm.nih.gov/snp/28357980"
            }
            ]},
            {
          "name": "ND3",
          "parent": "Leber's Optic Atrophy",
          "color": "#8c564b",
          "lightcolor": "#c49c94",
          "type": "gene",
          "link": "https://en.m.wikipedia.org/wiki/MT-ND3",
          "children": [
            {
              "name": "chrMT-10237-C",
              "parent": "ND3",
              "color": "#8c564b",
              "lightcolor": "#c49c94",
              "type": "mutation",
              "link": "http://www.ncbi.nlm.nih.gov/snp/193302927"
            }
            ]},
            {
          "name": "ND4",
          "parent": "Leber's Optic Atrophy",
          "color": "#e377c2",
          "lightcolor": "#f7b6d2",
          "type": "gene",
          "link": "https://en.m.wikipedia.org/wiki/MT-ND4",
          "children": [
            {
              "name": "chrMT-11253-C",
              "parent": "ND4",
              "color": "#e377c2",
              "lightcolor": "#f7b6d2",
              "type": "mutation",
              "link": "http://www.ncbi.nlm.nih.gov/snp/200145866"
            }
            ]},
      {
        "name": "ND5",
        "parent": "Leber's Optic Atrophy",
        "color": "#9467bd",
        "lightcolor": "#c5b0d5",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ND5",
        "children": [
          {
            "name": "chrMT-13708-A",
            "parent": "ND5",
            "color": "#9467bd",
            "lightcolor": "#c5b0d5",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/28359178"
          },
          {
            "name": "chrMT-12811-C",
            "parent": "ND5",
            "color": "#9467bd",
            "lightcolor": "#c5b0d5",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199974018"
          },
          {
            "name": "chrMT-12338-C",
            "parent": "ND5",
            "color": "#9467bd",
            "lightcolor": "#c5b0d5",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/201863060"
          },
          {
            "name": "chrMT-13637-G",
            "parent": "ND5",
            "color": "#9467bd",
            "lightcolor": "#c5b0d5",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/200855215"
          }]},
          {
        "name": "COX3",
        "parent": "Leber's Optic Atrophy",
        "color": "#7f7f7f",
        "lightcolor": "#c7c7c7",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/COX-3",
        "children": [
          {
            "name": "chrMT-9438-A",
            "parent": "COX3",
            "color": "#7f7f7f",
            "lightcolor": "#c7c7c7",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/267606611"
          },
          {
            "name": "chrMT-9804-A",
            "parent": "COX3",
            "color": "#7f7f7f",
            "lightcolor": "#c7c7c7",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/200613617"
          }]}
    ]
  }
];

var breast = [{
    "name": "Breast Cancer",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Breast_cancer",
    "children": [
      {
        "name": "CYTB",
        "parent": "Breast Cancer",
        "color": "#1f77b4",
        "lightcolor": "#aec7e8",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/Cytochrome_b",
        "children": [
          {
            "name": "chrMT-15326-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/2853508"
          },
          {
            "name": "chrMT-14905-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236203"
          },
          {
            "name": "chrMT-15553-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236189"
          },
          {
            "name": "chrMT-15323-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236177"
          },
          {
            "name": "chrMT-15758-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236193"
          },
          {
            "name": "chrMT-14783-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236042"
          },
          {
            "name": "chrMT-15301-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236045"
          },
          {
            "name": "chrMT-15784-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236194"
          },
          {
            "name": "chrMT-15001-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236169"
          },
          {
            "name": "chrMT-15355-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236181"
          },
          {
            "name": "chrMT-15346-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236180"
          },
          {
            "name": "chrMT-15458-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236185"
          },
          {
            "name": "chrMT-15226-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236174"
          },
          {
            "name": "chrMT-15470-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236187"
          },
          {
            "name": "chrMT-14968-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236167"
          },
          {
            "name": "chrMT-14935-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236204"
          },
          {
            "name": "chrMT-15049-T",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236170"
          },
          {
            "name": "chrMT-15287-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236044"
          },
          {
            "name": "chrMT-15682-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236192"
          },
          {
            "name": "chrMT-15289-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236175"
          }
        ]
      }
    ]
  }
];
  
var margin = {top: 0, right: 20, bottom: 0, left: 200},
  width = 960 - margin.right - margin.left,
  height = 500 - margin.top - margin.bottom;
  
var i = 0,
  duration = 750,
  root;
var tree = d3.layout.tree()
  .size([height, width]);
var diagonal = d3.svg.diagonal()
  .projection(function(d) { return [d.y, d.x]; });
var svg = d3.select("#viz3").append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

root = leber[0];
root.x0 = height / 2;
root.y0 = 0;
  
update(root);

d3.select('#opts')
  .on('change', function() {
    var newData = eval(d3.select(this).property('value'));
    root = newData[0];
    update(root);
});

d3.select(self.frameElement).style("height", "500px");
function update(source) {
  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);
  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 100; });
  // Update the nodes…
  var node = svg.selectAll("g.node")
    .data(nodes, function(d) { return d.id || (d.id = ++i); });
  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
    .on("click", click);
  nodeEnter.append("circle")
    .attr("r", 1e-6)
    .style("fill", function(d) { return d._children ? "orchid" : "#fff"; });
  nodeEnter.append("text")
    .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
    .attr("dy", ".35em")
    .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
    .text(function(d) { return d.name; })
    .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
    .duration(duration)
    .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
  nodeUpdate.select("circle")
    .attr("r", 10)
    .style("stroke", function(d) { return d.color;})
    .style("fill", function(d) { return d._children ? d.lightcolor : "#fff"; });
  nodeUpdate.select("text")
    .style("fill-opacity", 1);
  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
    .duration(duration)
    .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
    .remove();
  nodeExit.select("circle")
    .attr("r", 1e-6);
  nodeExit.select("text")
    .style("fill-opacity", 1e-6);
  // Update the links…
  var link = svg.selectAll("path.link")
    .data(links, function(d) { return d.target.id; });
  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
    .attr("class", "link")
    .attr("d", function(d) {
    var o = {x: source.x0, y: source.y0};
    return diagonal({source: o, target: o});
    });
  // Transition links to their new position.
  link.transition()
    .duration(duration)
    .attr("d", diagonal);
  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
    .duration(duration)
    .attr("d", function(d) {
    var o = {x: source.x, y: source.y};
    return diagonal({source: o, target: o});
    })
    .remove();
  // Stash the old positions for transition.
  nodes.forEach(function(d) {
  d.x0 = d.x;
  d.y0 = d.y;
  });

  svg.selectAll(".node")
  .select("text")
  .on('mouseover', tip.show);
}
// Toggle children on click.
function click(d) {
  if (d.children) {
  d._children = d.children;
  d.children = null;
  } else {
  d.children = d._children;
  d._children = null;
  }
  update(d);
}