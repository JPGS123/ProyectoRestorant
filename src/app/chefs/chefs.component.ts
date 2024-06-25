import { Component, OnInit } from '@angular/core';
import { ChefsService } from '../services/chefs.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss']
})
export class ChefsComponent implements OnInit {
  chefs: any[] = [];

  constructor(private chefsService: ChefsService) { }

  ngOnInit(): void {
    this.fetchChefs();
  }

  fetchChefs(): void {
    this.chefsService.getChefs().subscribe(
      data => {
        this.chefs = data.results;
        console.log('Chefs:', this.chefs);
      },
      error => {
        console.error('Error fetching chefs', error);
      }
    );
  }
}
