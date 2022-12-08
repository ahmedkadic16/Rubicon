import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible:boolean;
  searchWord:string='';
  constructor() {
    this.visible=true;
  }
  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  setWord(word:string) {
    this.searchWord=word;
  }
  getWord(){
    return this.searchWord;
  }
}
