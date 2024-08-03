import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import {
  TestJSAngularDashboardModule,
  TestJSAngularStatusBarModule,
  TestJSAngularDragDropModule,
  TestJSAngularProgressBarModule,
  TestJSAngularDashboardModalModule,
} from '@TestJS' +
  /angular'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TestJSAngularDashboardModule,
    TestJSAngularStatusBarModule,
    TestJSAngularDashboardModalModule,
    TestJSAngularDragDropModule,
    TestJSAngularProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
