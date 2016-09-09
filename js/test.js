var jsonCircle = [
	{
		"x_axis" : 30,
		"y_axis" : 20,
		"radius" : 20,
		"color" : "green"
	},
	{
		"x_axis" : 70,
		"y_axis" : 70,
		"radius" : 20,
		"color" : "purple"
	},
	{
		"x_axis" : 110,
		"y_axis" : 110,
		"radius" : 20,
		"color" : "red"
	}

];


var svgcontainer = d3.select("body")
.append("svg")
.attr("width",200)
.attr("height",200)
.style("border","1px solid black");



var circles = svgcontainer.selectAll("circle")
.data(jsonCircle)
.enter()
.append("circle");

var circleattribute = circles.attr("cx", function (d)
	{ 
		return d.x_axis;
	})
.attr("cy", function (d) 
	{ 
		return d.y_axis;
	})
.attr("r", function(d)
	{
		return d.radius;
	})
.style("fill", function (d)
	{
		return d.color;
	}
);