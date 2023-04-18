import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  ngOnInit(): void {}
  selectedCategory = '';

  constructor(private router: Router) {}

  onCategorySelect() {
    if (this.selectedCategory) {
      this.router.navigate([this.selectedCategory]);
    }
  }
}
