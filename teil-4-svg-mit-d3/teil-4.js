
/*
// Erinnerung: so könnten Selections funktionieren
var container = d3.select('svg');
var thing = container.append('circle')
thing.text('oha!');
thing.attr('cx', 50);
*/

// wir haben hier eine kleine Menge Daten. In Ihrem ECHTEN Projekt könnten
// es natürlich deutlich mehr Einträge sein! Und im Normalfall kommen die oft
// aus einer Datenbank oder einer anderen Datenquelle.

var flats = [
	{id: 1, title: "Penthouse", rooms: 6, baseRent: 2500},
	{id: 2, title: "Kellerloch", rooms: 2, baseRent: 350},
	{id: 3, title: "Reihenhaus", rooms: 5, baseRent: 1500},
	{id: 4, title: "Etagenwohnung", rooms: 3, baseRent: 800}
];

// versuchen Sie, mit .data, .enter und .append zu arbeiten, um ein SVG-Objekt
// Objekt pro Wohnung zu zeichnen. Vergleichen Sie mit Teil 2 - dort haben Sie
// die Aufgabe im Prinzip schon einmal gelöst.
