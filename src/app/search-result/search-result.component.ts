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
    this.listItems = this.InfoService.items;
    }

  ngOnInit(): void {
  }
}

