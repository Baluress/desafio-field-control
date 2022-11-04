import { InfoService } from 'src/services/info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  value: string;

  constructor(private InfoService: InfoService,) {
   }

  getValue() {
    const buttonResult = document.querySelector('.button-results');
    const buttonSearch = document.querySelector('.button-search')
    const value = this.value;
    this.InfoService.setValue(value)
    this.InfoService.getInfoApi();
    buttonResult.classList.remove('hidden');
    buttonSearch.classList.add('hidden');
  }

 ngOnInit(): void {
}

}
