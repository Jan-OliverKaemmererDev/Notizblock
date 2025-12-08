// notizen erstellen und anzeigen lassen
// 1. Ich brauche Notizen.
let notes = ['banana', 'rasen mähen'];

// 3. Wann werden sie angezeigt?
function renderNotes() { // WANN? renderNotes() wird am Anfang mit onload im body-Tag aufgerufen.
// 2. Ich muss definieren, wo sie anzuzeigen sind.
// In dem Fall gebe ich der id content eine Variable namens contentRef.
let contentRef = document.getElementById('content'); // WO? sie werden im div mit der id "content" angezeigt.
// Der Inhalt des divs mit der id "content" wird geleert, damit nicht immer wieder die alten Notizen dazustehen.
contentRef.innerHTML = ""; 

// For-loop:
// Es startet bei indexNote = 0
// Solange indexNote kleiner ist als die Länge des arrays notes
// indexNote wird bei jedem Durchlauf mit indexNote++ um 1 erhöht
for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    // Die neue Variable note bekommt den Wert des aktuellen Eintrags im Array notes
    const note = notes[indexNote];
    // Der Inhalt des divs mit der id "content" wird um den Wert der Variable note erweitert
    // Dazu wird die Funktion getNoteTemplate aufgerufen, der die Variable note übergeben wird.
    contentRef.innerHTML += getNoteTamplate(note);
}
}
// 4. Wie werden sie angezeigt?
// Die Funktion getNoteTemplate bekommt eine Variable note übergeben und gibt einen HTML-String zurück.
function getNoteTamplate(note) {
    return `<p>+ ${note}</p>`;
}


// notizen hinzufügen

// notizen löschen

// notizen Archivieren

// notizen wiederherstellen