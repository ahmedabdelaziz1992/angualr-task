import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu', {static: false}) menu: ElementRef;
  @ViewChild('menuBtn', {static: false}) menuBtn: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  handleMenu() {
    this.menuBtn.nativeElement.classList.toggle('is-active');
    this.menu.nativeElement.classList.toggle('opened');
  }

  handleActiveClass(e) {
    this.menu.nativeElement.querySelectorAll('.nav-list-item').forEach(el => {
      el.classList.remove('active');
    });

    if (e.target.tagName.toLowerCase() === 'li' || e.target.closest('li')) {
      e.target.classList.add('active');
      e.target.closest('li').classList.add('active');
    }

  }

}
