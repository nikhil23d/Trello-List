import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropComponent } from './drag-drop/drag-drop.component';

@NgModule({
  declarations: [AppComponent, DragDropComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    FormsModule,
    MatExpansionModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
