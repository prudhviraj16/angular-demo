import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { SuccessComponent } from '../success/success.component';
import { InputRestrictionDirective } from 'src/app/core/directives/input-restriction-directive';

@NgModule({
  declarations: [ContactComponent, SuccessComponent,InputRestrictionDirective,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactRoutingModule,
    
  ]
})
export class ContactModule { }
