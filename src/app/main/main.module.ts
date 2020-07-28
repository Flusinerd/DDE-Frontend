import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { TerminalModule } from '../terminal/terminal.module';
import { TerminalComponent } from '../terminal/terminal.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, children: [
    { path: 'terminal', component: TerminalComponent},
  ]},
]

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    TerminalModule,
    CommonModule
  ],
})
export class MainModule { }
