// Erinnerung: so könnten Selections funktionieren
var bodyElement = d3.select('body');
var divElement = bodyElement.append('div')
divElement.text('oha!');

// wir haben hier eine kleine Menge Daten. In Ihrem ECHTEN Projekt könnten
// es natürlich deutlich mehr Einträge sein! Und im Normalfall kommen die oft
// aus einer Datenbank oder einer anderen Datenquelle.

var flats = [
	{id: 1, title: "Penthouse"},
	{id: 2, title: "Kellerloch"},
	{id: 3, title: "Reihenhaus"},
	{id: 4, title: "Etagenwohnung"}
];

// versuchen Sie, mit .data, .enter und .append zu arbeiten, um eine Zeile pro
// Wohnung hinzu fügen zu lassen.
