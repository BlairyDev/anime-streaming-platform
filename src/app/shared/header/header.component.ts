import { Component, Input } from '@angular/core';
import { RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  searchResult = ""
  

  @Input()
  set id(value: string) {
    this.searchResult = value
  }


}
