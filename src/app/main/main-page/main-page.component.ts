import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav') sideNav: MatSidenav;

  private _sideNavOpen = true;
  currentTime = '12:00';
  clockInterval;

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._updateTime();
    this.clockInterval = setInterval(() => {
      this._updateTime();
    }, 500);
  }

  ngAfterViewInit(): void {
    this.sideNav.toggle();
    this._changeDetectorRef.detectChanges();
  }

  toggleSidenav(): void {
    this._sideNavOpen = !this._sideNavOpen;
    this.sideNav.toggle();
  }

  private _updateTime(): void {
    const date = new Date();
    let minutes: string;
    if (date.getMinutes().toString().length === 1) {
      minutes = `0${date.getMinutes()}`;
    } else {
      minutes = date.getMinutes().toString();
    }
    this.currentTime = `${date.getHours()}:${minutes}`;
  }

}
