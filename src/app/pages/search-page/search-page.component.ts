import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-page',
  imports: [],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  searchResult = ""

  @Input()
  set id(value: string) {
    this.searchResult = value
  }

  
}
