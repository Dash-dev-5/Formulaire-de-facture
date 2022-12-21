// import OrdreData  from "/module.js";
console.log('BONJOUR');
let table=document.getElementById('table');
let num=4;
class OrdreData {
    id;
    materiel;
    prixUnitaire;
    quantite;

    constructor(id, materiel, prixUnitaire, quantite) {
        this.id = id;
        this.materiel = materiel;
        this.prixUnitaire = prixUnitaire;
        this.quantite = quantite;
    }

    calcPrixTotale() {
        return this.prixUnitaire * this.quantite;
    }

    ordreToTableRow() {
        let tr = document.createElement('tr');
        console.log(this.materiel + ' ' + this.prixUnitaire + ' ' + this.quantite);
            
        if (!(this.materiel==='') && !(this.prixUnitaire==='') && !(this.quantite==='')) {
            let td1= document.createElement('td');
            let td2= document.createElement('td');
            let td3= document.createElement('td');
            let td4= document.createElement('td');
            let td5= document.createElement('td');
            td1.appendChild(document.createTextNode(this.id));
            td2.appendChild(document.createTextNode(this.materiel));
            td3.appendChild(document.createTextNode(this.prixUnitaire));
            td4.appendChild(document.createTextNode(this.quantite));
            td5.appendChild(document.createTextNode(this.calcPrixTotale()));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
        }
        else {
            console.log('ordre invalide');
            alert('Remplir toute les champs');
        }
        return tr;
   }
}

function apprent(){
        let ordreData = new OrdreData(num++,
                document.getElementById('materiel').value,
                document.getElementById('prixUnitaire').value,
                document.getElementById('quantite').value);
        console.log("ordreData" + ordreData);
        table.appendChild(ordreData.ordreToTableRow());

      }    
     