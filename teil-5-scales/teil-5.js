// einfache Beispieldaten
var flats = [
	{id: 1, title: "Penthouse", rooms: 6, baseRent: 2500},
	{id: 2, title: "Kellerloch", rooms: 2, baseRent: 350},
	{id: 3, title: "Reihenhaus", rooms: 5, baseRent: 1500},
	{id: 4, title: "Etagenwohnung", rooms: 3, baseRent: 800}
];



// versuchen Sie nachfolgend mit scaleLinear, scaleSqrt und anderen Vertretern
// zu experimentieren.

var selection = d3.select('svg').selectAll('circle').data(flats);
selection.enter()
	.append('circle')
		.attr('cx', function () {return Math.random() * 400;})
		.attr('cy', function () {return Math.random() * 200;})
		.attr('r', function (d) {return d.baseRent / 20});
