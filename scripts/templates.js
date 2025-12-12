// 4. Wie werden sie angezeigt?
// Die Funktion getNoteTemplate bekommt eine Variable note übergeben und gibt einen HTML-String zurück.
function getNoteTamplate(indexNote) {
    // Der HTML-String wird zurückgegeben:
    // Der Wert der Notiz wird aus dem array notes mit dem übergebenen indexNote ausgelesen.
    // Ein button mit onclick wurde hinzugefügt, der die Funktion pushToTrash mit dem index der Notiz aufruft.
    // Beim Klicken auf den Button wird die entsprechende Notiz gelöscht.
    return `
    <div class="note">
        <h3>${notesTitles[indexNote]}</h3>
        <p>${notes[indexNote]}</p>
        <div>
            <button class="btn" onclick="pushToArchiveNote(${indexNote})">A</button>
            <button class="btn" onclick="pushToTrash(${indexNote})">X</button>
        </div>
    </div>
    `;
}

function getArchiveNoteTemplate(indexArchiveNote) {
    return `
    <div class="note">
        <h3>${archiveNotesTitles[indexArchiveNote]}</h3>
        <p>${archiveNotes[indexArchiveNote]}</p>
        <div>
            <button class="btn" onclick="pushFromArchiveToNote(${indexArchiveNote})">N</button>
            <button class="btn" onclick="pushFromArchiveToTrash(${indexArchiveNote})">X</button>
        </div>
    </div>
    `;
}

// Funktion zum Generieren des HTML-Strings für eine gelöschte Notiz im Papierkorb
function getTrashNoteTemplate(indexTrashNote) {
    return `
    <div class="note">
        <h3>${trashNotesTitles[indexTrashNote]}</h3>
        <p>${trashNotes[indexTrashNote]}</p>
        <div>
            <button onclick="pushFromTrashToNote(${indexTrashNote})" class="btn" >N</button>
            <button onclick="deleteTrashNote(${indexTrashNote})" class="btn" >X</button>
        </div>
    </div>
    `;
}