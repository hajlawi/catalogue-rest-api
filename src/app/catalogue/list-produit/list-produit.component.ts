import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../../services/Produit.service';
import {Form, FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
 currentpage=0;
   size=5;
   motcle="";
 produits:any;
 totalpages:number;
 pages:any
  url:string;
  constructor(private prduitservice:ProduitService,private router:Router) { }

  ngOnInit(): void {
  }

  chercher() {

this.prduitservice.getProduit(this.motcle,this.currentpage,this.size).subscribe(
  (data)=>{
   this.produits=data;
   console.log(data)
  this.totalpages=data['page'].totalPages;
  this.pages=new Array<number>(this.totalpages);
  },error=>{
    console.log(error);
  }
);
  }
onFetch(form){
  this.currentpage=0;
  this.motcle=form.mc
  this.chercher();
}
  onLoad(i: number) {
    this.currentpage=i;
    this.chercher();
  }

  OnEditContact(p) {
   let url=p._links.self.href;
    this.router.navigate(["editproduit/"+btoa(url)])
  }

  OnDeleteContact(p) {
    let conf=confirm("voulez vous suprimer");
    if(conf){
      this.prduitservice.deleteProduit(p._links.self.href).subscribe(
        resp=>{
          this.chercher()
        },error=>{console.log(error)}
      );
    }
  }
}
