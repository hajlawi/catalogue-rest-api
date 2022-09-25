import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../services/Produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Produit} from "../../models/produit.model";

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.css']
})
export class NewProduitComponent implements OnInit {
  currentproduit:Produit;
url:string;
  constructor(private produitservice:ProduitService, private router:Router) { }

  ngOnInit(): void {
  }

  addProduct(data) {

    this.produitservice.saveProduct(this.url,data).subscribe(
      (resp:Produit)=>{
        this.currentproduit=resp
        this.router.navigate(["/produitslist"])
      },err=>{
        console.log(err)
      }
    );

  }
}
