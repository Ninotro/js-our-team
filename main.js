

// creo l'array di oggetti dei collaboratori
const collaboratori = [
    {
    "nome" : "Wayne Barnett" ,
    "ruolo" : "Founder & CEO" ,
    "immagine" : "wayne-barnett-founder-ceo.jpg"
    } ,

    {
    "nome" : " Angela Caroll" ,
    "ruolo" : "Chief Editor" ,
    "immagine" : "angela-caroll-chief-editor.jpg"
    } ,

    {
    "nome" : " Walter Gordon" ,
    "ruolo" : "Social Media Manager" ,
    "immagine" : "walter-gordon-office-manager.jpg"
    } ,

    {
    "nome" : " Angela Lopez" ,
    "ruolo" : "Office Manager" ,
    "immagine" : "angela-lopez-social-media-manager.jpg"
    } ,
    {
    "nome" : " Scott Estrada" ,
    "ruolo" : "Developer" ,
    "immagine" : "scott-estrada-developer.jpg"
    } ,
    {
    "nome" : " Barbara Ramos" ,
    "ruolo" : "Graphic Designer" ,
    "immagine" : "barbara-ramos-graphic-designer.jpg"
    } ,




]



for (i=0; i < collaboratori.length ; i++ ) {
    let collaboratoreIesimo = collaboratori[i]
    // console.log(collaboratoreIesimo);
   

    for (let key in collaboratoreIesimo) {
        
       console.log(collaboratoreIesimo[key]);
        document.getElementById("collaboratori").innerHTML = "" + collaboratoreIesimo.toString() 

    }
}