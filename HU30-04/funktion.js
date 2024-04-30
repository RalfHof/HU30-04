function auswertungUndAusgabe() {
    let hallo = prompt()
    const interpretation = auswertungPunktzahl(punktzahl);
    console.log("Die Punktzahl " + punktzahl + " wird als " + interpretation + " bewertet.");
}
auswertungUndAusgabe();