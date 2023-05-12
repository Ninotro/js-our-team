

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

const divCollaboratori = document.getElementById("figurine-collaboratori")

for (i=0; i < collaboratori.length ; i++ ) {
    let collaboratoreIesimo = collaboratori[i]
    // console.log(collaboratoreIesimo);
        const containerFigurina = document.createElement("div")
        divCollaboratori.append(containerFigurina)
        const name = document.createElement("div");
    
        name.append(collaboratoreIesimo.nome);
        
        const role = document.createElement("div")
        role.append(collaboratoreIesimo.ruolo)
       
    
        
        const immage = document.createElement("div")
        immage.append(collaboratoreIesimo.immagine)
        
        containerFigurina.append(name,role,immage)

        containerFigurina.classList.add("square")
    

    
}