var bodySelection = d3.select("#main");

var svgSelection = bodySelection.append("svg")
.attr("width", 900)
.attr("height", 900);
 
var squareSelection = svgSelection.append("rect")
.attr("x", 0)
.attr("y", 0)
.attr("width", 200)
.attr("height",200)
.style("fill", "grey");

var circleSelection = svgSelection.append("circle")
.attr("r", 80)
.attr("cx", 100)
.attr("cy", 100)
.style("stroke", "black")
.style("fill","yellow");

var ellipseSelection = svgSelection.append("ellipse")
.attr("cx",70)
.attr("cy",80)
.attr("rx",15)
.attr("ry",30)
.style("fill","black");

var ellipseSelection = svgSelection.append("ellipse")
.attr("cx",130)
.attr("cy",80)
.attr("rx",15)
.attr("ry",30)
.style("fill","black");

var svg2 = d3.select("svg")
.append("svg")
.attr("width", 200)
.attr("height", 200)
.append("g")
.attr("transform", "translate(100,100)");

var arc2 = d3.svg.arc()
.innerRadius(58)
.outerRadius(60)
.startAngle(2.5)
.endAngle(1.2* Math.PI);
    
svg2.append("path")
.attr("class", "arc2")
.attr("d", arc2)
.attr("ax", "-50px")
 .attr("ay", "-50px");

 var ellipseSelection = svgSelection.append("ellipse")
.attr("cx",130)
.attr("cy",80)
.attr("rx",25)
.attr("ry",20)
.style("fill","steelblue");

var ellipseSelection = svgSelection.append("ellipse")
.attr("cx",70)
.attr("cy",80)
.attr("rx",25)
.attr("ry",20)
.style("fill","steelblue");

var lineSelection = svgSelection.append("line")
.attr("x1",22)
.attr("y1",80)
.attr("x2",50)
.attr("y2",68)
.style("stroke","black")
.style("stroke-width",2);

var lineSelection = svgSelection.append("line")
.attr("x1",80)
.attr("y1",63)
.attr("x2",120)
.attr("y2",63)
.style("stroke","black")
.style("stroke-width",2);

var lineSelection = svgSelection.append("line")
.attr("x1",150)
.attr("y1",68)
.attr("x2",178)
.attr("y2",80)
.style("stroke","black")
.style("stroke-width",2);



