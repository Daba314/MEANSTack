import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable()
export class PageService {

  constructor(private http: HttpClient) {}
  //if I add,delete new page it would show up in nav bar immideatelly
  public pagesBS = new BehaviorSubject<String | null>(null);
  getPages(){
    return this.http.get('http://localhost:4000/pages')
    //json format
    .pipe(map((res:any) => res))
  }

  getPage(header: any){
    return this.http.get('http://localhost:4000/pages/' + header)
    .pipe(map((res:any) => res))
  }
}
