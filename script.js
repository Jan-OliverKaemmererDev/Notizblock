// notizen erstellen und anzeigen lassen
// 1. Ich brauche Notizen.
let notes = ['banana', 'rasen mähen'];

// 3. Wann werden sie angezeigt?
function renderNotes() { // WANN? renderNotes() wird am Anfang mit onload im body-Tag aufgerufen.
// 2. Ich muss definieren, wo sie anzuzeigen sind.
let contentRef = document.getElementById('content'); // WO? sie werden im div mit der id "content" angezeigt.

contentRef.innerHTML = notes;

}




// notizen hinzufügen

// notizen löschen

// notizen Archivieren

// notizen wiederherstellen