console.log("Grundlagen");
console.log("==========");

console.log('Aufgabe 1');
console.log('Erstelle zwei Variablen namens a. und b. Initialisiere mit den Werten 1 und 2');

//Der Wert 1 wird zugewiesen an eine Variable namens a.
let a = 1;
let b = 2;

//mit demPlus Operraror findet eine Scrimg Verkettung statt. Ein String ist eine Zeichenkette, eingerahmt mit Hochkommas
console.log('Der Wert der Variablen a ist:' + a);
console.log('Der Wert der Variabeln b ist:' + b);

console.log('Aufgabe 2');
console.log('Gib das Ergebnis der Addition von a und b aus');

//wenn links oder rechts vom Plus operator ein String steht,wird verkettet
//wenn limks oder rechts zahlen stehen, wird addiert
console.log(a+b);
console.log('Das Ergebnis der Addition:' + a + b);

console.log('Aufgabe 3');
console.log('Gib das Ergebnis der Subtraktion,Multiplikation, Division von a und b aus.');

console.log("Subtraktion:" + (a - b));
console.log("Multiplikaation" + (a + b));
console.log("Division" + (a / b));

console.log('Aufgabe 4');
console.log('Der Wert von c sei das Ergebnis der Addition von a und b.');

let c = a + b;

console.log("c hat den Wert:" + c);

console.log('Aufgabe 5');
console.log('a und b sind die Seitenlängen der Katheten eines Rechtwinkligen Dreiecks. Bestimmt die Länge der Hypotenuse c');

//cQuadrat ist in kamelhöcker-Notation geschrieben. Das heißt: zuerst  ein Kleinbuchstabe. verbundene Wörter beginnen groß
let cQuadrat = a * a + b * b;

//Javascript kennt eine Bibliothek namens  Math. In der Bibliothek gibt es eine Funktion namens sqrt. Als  Parameter in de 
//runden Klammern erwartet sqrt eine Zahl, aus der  dann die Wurzel gezogen wird.
c = Math.sqrt(cQuadrat);

console.log('die Hypotenuse ist ' + c +'lang.');

console.log('Aufgabe 6');
console.log('Ein Kunde legt 100 Euro auf dem Sparbuch an. Jedes Jahr bekommt er 10% Zinsen. Wie viel bekommt der Kunde');
console.log('nach zwei jahren ausgezahlt. Beachte den Zinseffekt.');

let laufzeit =2;
let startkapital = 100;
let zinssatz = 0.1;   /*Das Komma ist zur Entwicklungszeit ein Punkt.*/

let kapitalNachEinemJahr = startkapital * (1 + zinssatz);

console.log("Kapital nach einemJahr:" + kapitalNachEinemJahr + "EUR");

let kapitalNachZweiJahren = kapitalNachEinemJahr * (1 + zinssatz);

console.log("Kapital nach zwei Jahren:" + kapitalNachZweiJahren +"EUR." );

let endkapital = startkapital * Math.pow((1 + zinssatz), laufzeit);

console.log("Endkapital nach" + laufzeit + "Jahre:" + endkapital + "EUR.")

console.log('Aufgabe 7');
console.log('Die Werte aus der vorherigen Aufgabe werden als Reihe dargestellt');

//Im Zeitpunkt Null ist das endkapital = dem startkapital
endkapital = startkapital;
console.log(endkapital);

//Nach dem ersten Jahr erhöht sich das Endkapital um den Faktor 1,1
endkapital = endkapital * (1 + zinssatz);
console.log(endkapital);

//Nach dem zweiten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen
endkapital = endkapital * (1 + zinssatz);
console.log(endkapital);

//Nach dem dritten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen
endkapital = endkapital * (1 + zinssatz);
console.log(endkapital);

//Nach dem vierten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen
endkapital = endkapital * (1 + zinssatz);
console.log(endkapital);

console.log('Aufgabe 8');
console.log('In Aufgabe 7 wurde die Anweißung endkapital=... mehrfach wiederholt');
console.log('um sich Tipparbeit zu sparen und die Wiederholung der Anweisung in der');
console.log('gewünschten Häufigkeit durchzuführen, nutzt der Programierer eine schleife');

startkapital = 100;
endkapital =startkapital;
zinssatz = 0.1;
laufzeit = 3;

for (let i = 0; i < laufzeit; i++) {
endkapital = endkapital * (1 + zinssatz);
console.log("Endkapital nach Jahr" + (i+1) + ":" + endkapital + "EUR.");
}