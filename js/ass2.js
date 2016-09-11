var bodySelection = d3.select("#main");

var svgSelection = bodySelection.append("svg")
.attr("x","0px")
.attr("y","0px")
.attr("width", "504px")
.attr("height", "504px");
 
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




var pathgroup = svgSelection.append("g")
.attr("transform","translate(6,6) scale(0.4,0.4)");


var pathSelection = pathgroup.append("path")
.attr("d","M408,139c0.865,8.866-2.11,13.89-2,22c-12.986,5.65-13.854,27.793-19,44 c-3.709,11.681-8.093,25.311-18,31c-31.345,18.001-82.645,10.605-102-13c-4.796-5.849-10.889-17.066-15-26	c-6.342-13.78-7.012-34.316-25-27c-5.995,2.438-12.297,23.784-17,33c-5.28,10.346-12.995,23.529-20,29 c-20.759,16.211-73.237,19.233-95,1c-19.356-16.217-12.336-58.23-33-73c-0.168-7.498-2.801-12.532-2-21 c34.372-10.504,86.361-5.878,122,1c17.536,3.384,34.215,10.839,53,10c13.45-0.601,27.571-5.523,41-8	C317.306,134.38,360.407,130.135,408,139z")
.style("fill","#1E90FF")
.style("fill-rule","evenodd")
.style("clip-rule","evenodd")
.style("stroke-width",2);

pathgroup = svgSelection.append("g")
.attr("transform","translate(110,53) scale(0.02,-0.02)");

var pathSelection = pathgroup.append("path")
.attr("d","M574 494 c-331 -234 -455 -326 -409 -302 6 3 189 60 407 127 l397 122 271 -74 c148 -41 270 -71 269 -68 0 5 -320 281 -507 438 l-38 31 -390 -274z")
.style("stroke-width",1);


pathgroup = svgSelection.append("g")
.attr("transform","translate(10,53) scale(0.02,-0.02)");

var pathSelection = pathgroup.append("path")
.attr("d","M2680 558 c-135 -116 -258 -221 -274 -234 -16 -14 -27 -26 -25 -28 2 -2 125 30 272 71 l268 74 404 -124 c222 -68 402 -120 399 -116 -2 4 -86 66 -187 136 -100 71 -274 194 -387 274 -113 80 -209 148 -215 151 -5 3 -120 -89 -255 -204z")
.style("stroke-width",1);


//HTML #8C1D40
//HTML #FFC627