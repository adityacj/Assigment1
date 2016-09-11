var bodySelection = d3.select("#main");

var svgSelection = bodySelection.append("svg")
.attr("width", "150pt")
.attr("height", "150pt");
 
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
.attr("transform","translate(30,125) scale(0.11,-0.11)");


var pathSelection = pathgroup.append("path")
.attr("d","M198 629 c-120 -1 -175 -24 -188 -49 -12 -22 0 -59 24 -79 10 -9 16 -30 16 -60 0 -107 36 -171 119 -210 50 -23 68 -26 166 -26 99 0 115 3 155 25 53 30 86 76 94 130 3 22 9 58 12 80 6 38 25 70 44 70 19 0 38 -32 44 -70 3 -22 9 -58 12 -80 8 -54 41 -100 94 -130 40 -22 56 -25 155 -25 98 0 116 3 166 26 83 39 119 103 119 210 0 30 6 51 16 60 24 20 36 57 24 79 -29 54 -322 7 -519 29 -73 -15 -150 -14 -251 4 -120 22 -191 26 -302 16z m-50 -50 c-50 -26 -58 -44 -59 -141 -1 -46 -4 -69 -6 -53 -12 101 -16 117 -40 146 -30 35 -24 44 37 55 19 3 42 7 50 9 45 9 53 3 18 -16z m1080 -1 c38 -12 39 -17 7 -52 -24 -26 -32 -52 -38 -131 -2 -22 -4 -2 -6 45 -2 93 -12 114 -66 144 l-30 16 50 -6 c28 -3 65 -10 83 -16z m-578 -3 c52 1 109 5 125 10 l30 8 -37 -35 c-38 -35 -38 -36 -38 -113 0 -90 23 -143 78 -177 42 -26 34 -37 -9 -12 -50 29 -68 62 -83 152 -8 46 -20 90 -27 98 -55 66 -113 17 -126 -107 -3 -36 -14 -73 -27 -92 -21 -31 -82 -74 -92 -64 -3 2 11 14 30 25 53 31 76 86 76 178 0 73 -1 77 -34 110 l-35 35 37 -8 c20 -4 80 -8 132 -8z m-169 -25 c34 -15 49 -49 49 -104 0 -132 -77 -194 -225 -183 -132 10 -182 55 -192 175 -5 62 -3 70 19 97 22 25 33 29 99 34 92 7 215 -2 250 -19z m666 -15 c24 -27 25 -34 20 -97 -10 -120 -60 -165 -192 -175 -148 -11 -225 51 -225 183 0 105 38 125 233 121 l139 -2 25 -30z m-1002 -244 c25 -28 26 -32 8 -22 -23 12 -53 49 -53 65 0 6 3 6 8 1 4 -6 21 -25 37 -44z m1021 15 c-9 -14 -26 -30 -38 -37 -16 -9 -13 -2 13 29 36 44 52 48 25 8z")
.style("fill","steelblue")
.style("stroke-width",2);




//HTML #8C1D40
//HTML #FFC627