import { API_PATH } from './../environments/environment';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Info } from '../models/info.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  language: string;
  private value;
  items: any[];
  list: any;
  itemList: any;
constructor(private httpClient: HttpClient) { }

  onCollect = new EventEmitter<any>();

  setValue(newValue) {
    this.value = newValue;
    this.language = this.value;
  }

  getInfo(): Observable<Info[]> {
    return this.httpClient.get<Info[]>(`${API_PATH}${this.language}`);
  }

  getInfoApi() {
    this.getInfo().subscribe((results: Info[]) => {
      this.items = results['items'];
      for(let i=0; i< this.items.length; i++ ) {
        this.items[i];
        console.log(this.items[i]);
        }
        const items = this.items;
        this.onCollect.emit(items);
      })
    }
}
