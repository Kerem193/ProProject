/**Datei: Projektmanager.js
 * Beschreibung: Dient zur Verwaltung der Projekte
 * Hinweis: 
 * Entwickler: Engin Aslan, Kerem Uyanik
 * Version : 1.1 Projekt anlegen
 */
var exports = module.exports = {};





/**Funktion: projektanlegen
 * Beschreibung: Einfügen der Projekte in die Datenbank
 * Hinweis: 
 */
exports.projektanlegen = function(conn,projektname,wahrscheinlichkeit,tagessatz,ansprechpartner,aufgabe){
    
    //Prüfungen auf Datenrichtigkeit
    
    //Einfügen in die Datenbank
   conn.query('insert into test.Projekt values('+ 3 +','+projektname+','+wahrscheinlichkeit+',' + tagessatz + ')', function(err, result){
    console.log(result);
       console.log(err);
        if(err){
        console.log("Fehler");
        }else{
        
        console.log("Kein Fehler");
        }
    conn.end();

    
    });

    
    projektanlegenhelfer();

};




function projektanlegenhelfer(){
console.log("Ich helfe projektanlegen");
}




/**Funktion: projektaufrufen
 * Beschreibung: Aufruf der Projekte von der Datenbank
 * Hinweis: 
 */
exports.projektaufrufen = function(conn){
    
    
    conn.query('select * from test.Student', function(err, result){
    console.log(result);
        if(err){
        console.log("Fehler");
        }else{
        console.log("Kein Fehler");
        }
    conn.end();
    
    });
    
    
}


exports.projektloeschen = function(){
}



exports.projektaendern = function(){
}