import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home",
  },
  {
    path: "home",
    loadChildren: () => import("./modules/home/home.module").then((m) => m.HomeModule),
  },
  { path: "product/:productId", loadChildren: () => import("./modules/product/product.module").then((m) => m.ProductModule) },
  { path: "checkout", loadChildren: () => import("./modules/checkout/checkout.module").then((m) => m.CheckoutModule) },
  { path: 'contactus', loadChildren: () => import('./modules/contactus/contactus.module').then(m => m.ContactusModule) },
  { path: 'aboutus', loadChildren: () => import('./modules/aboutus/aboutus.module').then(m => m.AboutusModule) },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
