d3.json("flats.json", function(error, flats) {

	var width = 600;
	var height = 600;
	var padding = 30;

	var color = d3.scaleOrdinal(d3.schemeCategory10);

	var xCoord = d3.scaleLinear()
		.domain(d3.extent(flats, function(d) { return d.area; }))
		.range([0, width]);

	var yCoord = d3.scaleLinear()
		.domain(d3.extent(flats, function(d) { return d.baseRent; }))
		.range([height, 0]);


	var xAxis = d3.axisBottom()
		.scale(xCoord)
		.ticks(6)
		.tickSize(width);

	var yAxis = d3.axisLeft()
		.scale(yCoord)
		.ticks(6)
		.tickSize(-height);


	// preparing a container again
	var container = d3.select('svg')
		.attr("width", width + 2 * padding)
		.attr("height", height + 2 * padding)
		.append('g')
			.attr('transform', 'translate(' + padding + ',' + padding + ')');

	container.append("g").call(xAxis);
	container.append("g").call(yAxis);

	var circles = container
		.selectAll("circle")
		.data(flats);

	circles.enter().append("circle")
		.attr("cx", function(d) { return xCoord(d.area); })
		.attr("cy", function(d) { return yCoord(d.baseRent); })
		.attr("r", 4)
		.style("fill", function(d) { return color(d.level); })
		.append('title').text(function (d) { return d.id + ": " + d.title; });

});
