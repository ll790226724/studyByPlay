import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntroductionComponent } from './introduction/introduction.component';
@NgModule({
  declarations: [ MainComponent, WelcomeComponent, IntroductionComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    NgZorroAntdModule.forRoot()
  ]
})
export class MainModule { }
