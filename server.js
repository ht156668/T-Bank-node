/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
//die Anweisungen werden von oben nach unten abgearbeitet. der Wert 3000 wird von rechts nach links zugewiesen
//and die Konstante namens PORT. Das einfache Gleichheitszeichen lässt sich also übersetzen 
//mit "... wird zugewiesen an ..."
// Der Wert `0.0.0.0` wird zugewiesen an eine Konstante namens HOST
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
//res ist die Antwort de Servers an den Browser
//send() ist die Anweisung etwas an den Browser zu senden
//`Hello ...`ist der Wert, der an die Anweisung send()übergeben wird
//	res.send('Hello remote world!\n');
//das res objekt kann noch mehr als nur ein Zeichenettikette an den Browser zu senden
//Das res Objekt mit der funktion render () eine HTML DAtei an den Browser senden
res. render("index.ejs",{});
});
//Mit listen() wird der Server angewiesen, auf den  angegebenen Host und 
// Port zu lauschen.
app.listen(PORT, HOST);
//Mit der Anweisung console.log() wird dem server-Administrator auf der 
//Konsole angezeigt, was der Server macht. der Programierer schreibt dazu
//in die runde Klammern den Ausdruck, der auf der Konsole angezeigt
//werden soll. Die Werte der beiden Konstanten HOST und PORT werden in den
//Audruck übergeben. Ein Verb mit anschleißenden runden Klammern steht 
// immer für eine Anweisung etwas zu tun
console.log(`Running on http://${HOST}:${PORT}`);

require('./uebungen/01-grundlagen');