// versuchen Sie, die beigelegten Daten ("flats.json") mit d3.json zu laden
// und mit darzustellen. Experimentieren Sie anschließend mit dem Code weiter.
// Der Datensatz ist wesentlich umfangreicher!

var scale = d3.scaleSqrt();
scale.domain([0, 1000]);
scale.range([0, 15]);

var color = d3.scaleLinear();
color.domain([1,6]);
color.range(['#0000ff', '#ff0000']);

var selection = d3.select('svg').selectAll('circle').data(flats);
selection.enter()
	.append('circle')
		.attr('fill', function (d) {return color(d.rooms);})
		.attr('cx', function () {return Math.random() * 400;})
		.attr('cy', function () {return Math.random() * 200;})
		.attr('r', function (d) {return scale(d.baseRent);});
