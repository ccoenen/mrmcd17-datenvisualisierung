d3.json("flats.json", function(error, flats) {

	var width = 600;
	var height = 600;

	var color = d3.scaleOrdinal(d3.schemeCategory10);

	var xCoord = d3.scaleLinear()
		.domain(d3.extent(flats, function(d) { return d.area; }))
		.range([0, width]);

	var yCoord = d3.scaleLinear()
		.domain(d3.extent(flats, function(d) { return d.baseRent; }))
		.range([height, 0]);


	// preparing a container again
	var container = d3.select('svg')
		.attr("width", width)
		.attr("height", height);

	var circles = container.selectAll("circle").data(flats);

	circles.enter().append("circle")
		.attr("cx", function(d) { return xCoord(d.area); })
		.attr("cy", function(d) { return yCoord(d.baseRent); })
		.attr("r", 4)
		.style("fill", function(d) { return color(d.level); })
		.append('title').text(function (d) { return d.id + ": " + d.title; });

});
