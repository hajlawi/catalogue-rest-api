import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../services/Produit.service";
import {ActivatedRoute} from "@angular/router";
import {Produit} from "../../models/produit.model";

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  currentProduct: Produit;
  private url: string;

  constructor(private produitservice: ProduitService,private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.url=atob(this.activateroute.snapshot.params.id);
    this.produitservice.getProduct(this.url).subscribe(
      (resp:Produit)=>{
        this.currentProduct=resp;
      },err=>console.log(err)
    );

  }

  editProduct(form) {
   this.produitservice.updateProduct(this.url,form).subscribe(
     resp=>{
       console.log(resp);
       alert('MAJ effectuer');
     }
   );

  }
}
