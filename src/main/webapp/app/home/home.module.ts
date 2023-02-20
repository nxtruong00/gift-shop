import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import {ProductModule} from "../entities/product/product.module";

@NgModule({
    imports: [SharedModule, RouterModule.forChild([HOME_ROUTE]), ProductModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
