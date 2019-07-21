import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './hero/index/index.component';
import { InvoiceComponent } from './invoicing/invoice/invoice.component';
import { ClientsFinderComponent } from './clients/clients/clients-finder/clients-finder.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'invoicing', component: InvoiceComponent},
  {path: 'clients', component: ClientsFinderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
