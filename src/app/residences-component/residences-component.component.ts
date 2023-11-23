import { Component } from '@angular/core';
import { Residence } from '../Core/Models/residence';
import { Apartment } from '../Core/Models/apartment';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.scss']
})
export class ResidencesComponentComponent {
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg"},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg"},
    {id:4,"name": "El Anber","address":"Manzah 5",
    "image":"../../assets/images/R4.jpg"}
    ];
  
    listApartments:Apartment[]=[
      {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"AppartementS+1","residence":this.listResidences[0] },
      {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"AppartementS+2","residence":this.listResidences[0] },
      {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartements+3","residence":this.listResidences[0]}
    ];
    listApat:Apartment[]=[]
    showApartment(id:number)
{
this.listApat=this.listApartments.filter((appart:Apartment)=>appart.residence.id==id)
console.log(this.listApat)

}  
favorisList: Apartment[] = [];

goFavoris(A: Apartment) {
 
  const isAlreadyInFavoris = this.favorisList.some(favori => favori.appartNum === A.appartNum);
  if (!isAlreadyInFavoris) {
    this.favorisList.push(A);
    console.log('Appartement ajouté aux favoris :', A);
  } else {
    console.log('Appartement déjà dans les favoris :', A);
  }
}
searchTerm: string = "";
filteredApartments: Apartment[] = [];

updateFilteredApartments() {
  // Filtrer la liste en fonction du terme de recherche
  this.filteredApartments = this.listApat.filter(A => A.description==this.searchTerm);
  console.log(this.searchTerm)
}

}
