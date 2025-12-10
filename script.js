// notizen erstellen und anzeigen lassen
// 1. Ich brauche Notizen.
let notes = ['banana', 'rasen mähen'];

// Papierkorb für gelöschte Notizen
let trashNotes = [];

// 2. Wann werden sie angezeigt?
function renderNotes() { // WANN? renderNotes() wird am Anfang mit onload im body-Tag aufgerufen.
// 3. Ich muss definieren, wo sie anzuzeigen sind.
// In dem Fall gebe ich der id content eine Variable namens contentRef.
let contentRef = document.getElementById('content'); // WO? sie werden im div mit der id "content" angezeigt.
// Der Inhalt des divs mit der id "content" wird geleert, damit nicht immer wieder die alten Notizen dazustehen.
contentRef.innerHTML = ""; 

// For-loop:
// Es startet bei indexNote = 0
// Solange indexNote kleiner ist als die Länge des arrays notes, wird der loop ausgeführt
// indexNote wird bei jedem Durchlauf mit indexNote++ um 1 erhöht
for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    // Der Inhalt des divs mit der id "content" wird um den Wert der Variable note erweitert
    // Dazu wird die Funktion getNoteTemplate aufgerufen, der die Variable note übergeben wird.
    contentRef.innerHTML += getNoteTamplate(indexNote);
}
}

// Papierkorb Bereich
// Funktion zum Rendern der gelöschten Notizen im Papierkorb
function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content'); // Referenz zum div mit der id "trash_content"
    // Den Inhalt des divs mit der id "trash_content" leeren
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}


// 4. Wie werden sie angezeigt?
// Die Funktion getNoteTemplate bekommt eine Variable note übergeben und gibt einen HTML-String zurück.
function getNoteTamplate(indexNote) {
    // Der HTML-String wird zurückgegeben:
    // Der Wert der Notiz wird aus dem array notes mit dem übergebenen indexNote ausgelesen.
    // Ein button mit onclick wurde hinzugefügt, der die Funktion pushToTrash mit dem index der Notiz aufruft.
    // Beim Klicken auf den Button wird die entsprechende Notiz gelöscht.
    return `<p>+ ${notes[indexNote]}<button onclick="pushToTrash(${indexNote})">X</button></p>`; // Ein button mit X wurde hinzugefügt, um die Notiz zu löschen.
}

// Funktion zum Generieren des HTML-Strings für eine gelöschte Notiz im Papierkorb
function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ ${trashNotes[indexTrashNote]}<button onclick="deleteTrashNote(${indexTrashNote})">X</button></p>`;
}

// 5. notizen hinzufügen
// Eingabe vom User definieren:
// Funktion addNote wird aufgerufen, wenn der User auf den Button "Notiz speichern" klickt.
function addNote() {
    let noteInputRef = document.getElementById('note_input'); // Die Variable noteInputRef bekommt das Input-Feld mit der id "note_input"
    // Eingabe auslesen:
    let noteInput = noteInputRef.value; // Die Variable noteInput bekommt den Wert des Input-Felds durch .value
    // Referenzen zu den HTML-Elementen und das was man dann damit maccht, sollte man voneinander trennen.

    // Eingabe speichern (den array notes hinzufügen):
    notes.push(noteInput); // Die Eingabe wird dem Array notes hinzugefügt.

    // Eingabe anzeigen lassen:
    renderNotes(); // Die Funktion renderNotes() wird aufgerufen, damit die neue Notiz angezeigt wird.

    noteInputRef.value = ""; // Das Input-Feld wird geleert, damit der User eine neue Notiz eingeben kann.
}

// 6. notizen löschen
// Funktion deleteNote wird aufgerufen, wenn der User eine Notiz löschen möchte.
// Der Funktion wird der Index der zu löschenden Notiz übergeben.
function pushToTrash(indexNote) {
    // Notiz aus dem array notes mit splice löschen:
    // splice(index, anzahl der zu löschenden einträge)
    let trashNote = notes.splice(indexNote, 1); // Ich splice die Notiz aus dem array notes und speichere sie in der Variable trashNote.
    trashNotes.push(trashNote); // Die gelöschte Notiz wird dem array trashNotes hinzugefügt.

    // Eingabe anzeigen lassen:
    renderNotes(); // Die Funktion renderNotes() wird aufgerufen, damit die gelöschte Notiz nicht mehr angezeigt wird.
    renderTrashNotes(); // Die Funktion renderTrashNotes() wird aufgerufen, damit die gelöschte Notiz im Papierkorb angezeigt wird.
}

// Notiz endgültig löschen
function deleteTrashNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1); // Ich splice die Notiz aus dem array trashNotes.
    renderTrashNotes(); // Die Funktion renderTrashNotes() wird aufgerufen, damit die Notiz nicht mehr im Papierkorb angezeigt wird.
}




// notizen Archivieren

// notizen wiederherstellen