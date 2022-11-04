import { InfoService } from 'src/services/info.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  p:number = 1;
  listItems: any[];

  @Input() items:any[];

  constructor(private InfoService: InfoService) {
  }

    getListItems() {
    const buttonResult = document.querySelector('.button-results');
    const buttonSearch = document.querySelector('.button-search')
    this.listItems = this.InfoService.items;
    buttonResult.classList.add('hidden');
    buttonSearch.classList.remove('hidden');
    }

  ngOnInit(): void {
  }
}

