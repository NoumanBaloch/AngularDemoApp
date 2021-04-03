import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { InputFormatDirective } from './input-format.directive';
import { CoursesComponent } from './courses/courses.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    InputFormatDirective,
    CoursesComponent,
    SummaryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
