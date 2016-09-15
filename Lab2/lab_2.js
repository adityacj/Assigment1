var margin = {top: 50, right: 100, bottom: 70, left: 100},
    width = 1900 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;



var real_text;
var real_name;
var data = [];

//define row information
function row(d) {
	return {
		year: +d.year, // convert "Year" column to number
		gender: d.gender,
		winner_ace: +d.winner_ace,
		winner: d.winner,
		winner_country: d.winner_country,
			};
}

var toggleColor = (function(){
   var currentColor = "red";
    
    return function(){
        currentColor = currentColor == "red" ? "green" : "red";
        d3.select(this).style("fill", currentColor);
    }
})();



//load csv file and generate figure
d3.csv("USOpenFinals_2016.csv", row, function(error, csv_data){
	csv_data.forEach(function (d) {
		data.push({ year: d.year, gender: d.gender, winner_ace: d.winner_ace, winner:d.winner, winner_country:d.winner_country });

});


	

	var x = d3.scale.linear().range([0, width]);
	var y = d3.scale.linear().range([height, 10]);

	var xAxis = d3.svg.axis().scale(x).orient("bottom");

	var yAxis = d3.svg.axis().scale(y).orient("left").ticks(15);

	var data_svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform","translate(" + margin.left + "," + margin.top + ")");

     x.domain([2005,2016]);
     y.domain([-1, 15]);


    data_svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

   
    data_svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    data_svg.append("text")
    .attr("text-anchor", "middle")  
    .attr("transform", "translate(-50,360)rotate(-90)")  
    .text("Number of Aces Served")
    .style("font-size", 15);

    data_svg.append("text")
    .attr("text-anchor", "middle")  
    .attr("transform", "translate(900,750)")  
    .text("Year")
    .style("stroke","steelblue")
    .style("font-size", 15);


	var data_g = data_svg.selectAll("circle")
	.data(data)
	.enter()
	.append("g")
	.filter(function(d) { return d.gender =="w"; });

	var data_circles = data_g.append("circle")
	.attr("cx", function(d) {
		
		return x(d.year);
	})
	.attr("cy", function(d) {
		return y(d.winner_ace);
	})
	.attr("r", 20)
	.attr("fill", "#ff0000")
	.on("click", toggleColor)
	.on("mouseover", function(d){
		//console.log(d.winner_country);
		this.nextElementSibling.textContent = d.winner_country;
	})
	.on("mouseout", function(d){
		//console.log(d.winner_country);
		this.nextElementSibling.textContent = d.winner;
	});

	
	
	var data_text = data_g.append("text")
	.text(function(d)
	{
		return d.winner;
		
	})
	.attr("x", function(d) {
		return x(d.year);
	})
	.attr("y", function(d) {
		return y(d.winner_ace);
	});



	
});