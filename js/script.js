/**
 * Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.

 */

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const ourTeam = [
    {
        name: "Wayne Barnett",
        position: "ounder & CEO",
        "img string": "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        position: "Chief Editor",
        "img string": "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        position: "Office Manager",
        "img string": "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        position: "Social Media",
        "img string": "Manager  angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        position: "Developer",
        "img string": "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        position: "Graphic Designer",
        "img string": "barbara-ramos-graphic-designer.jpg"
    }
];


// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let index = 0; index < ourTeam.length; index++) {
    const teamMate = ourTeam[index];
    console.log(teamMate.name, "/", teamMate.position, "/", teamMate["img string"])
}
