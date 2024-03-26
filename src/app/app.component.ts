import { Component, OnInit } from "@angular/core";
import { SimpleProduct } from "./interfaces/produit";
import { createProduct, createProducts } from "./donnees/produit.generator";

@Component({
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  selector: 'app-root',
})
export class AppComponent implements OnInit {
  public productCache!: SimpleProduct[];
  public produits!: SimpleProduct[];
  public produit: SimpleProduct = createProduct();
  public message = 'Acceuil - Recherche';
  private pr = "test";
  constructor() {}

  // Avant de demmarrer fais ceci
  public ngOnInit() {

    this.produits = createProducts(36);
    this.productCache = this.produits;
  }

  public isPromo(produit: SimpleProduct): boolean {
    return produit.promo;
  }

  public addToCart(ev: any) {
    console.log(ev);
  }

  public filtrerProduits(text: string) {
    this.handleFiltering(text);
  }

  private handleFiltering(t: string) {
    if(t === null || !t.length) {
      this.produits = this.productCache;
    }

    this.produits = this.productCache.filter((_produit) =>  _produit.name.includes(t));
  }
}