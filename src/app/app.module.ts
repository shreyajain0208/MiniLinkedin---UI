import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PropernamePipe } from './propername.pipe';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { LinkedInEntryComponent } from './linked-in-entry/linked-in-entry.component';
import { LinkedInDisplayComponent } from './linked-in-display/linked-in-display.component';
import { LinkedInService } from './linked-in.service';
import { ProfileViewComponent } from './profile-view/profile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PropernamePipe,
    HighlightDirective,
    UnlessDirective,
    LinkedInEntryComponent,
    LinkedInDisplayComponent,
    ProfileViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LinkedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
