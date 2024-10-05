import { Component, OnInit } from '@angular/core';
import { CatFactService } from '../services/cat-fact.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  catFact: string = '';

  constructor(private catFactService: CatFactService) { }

  ngOnInit() {
    this.fetchCatFact();
  }

  fetchCatFact() {
    this.catFactService.getCatFact().subscribe((data) => {
      this.catFact = data.fact;
    });
  }
}

