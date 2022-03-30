import { Component } from '@angular/core';
import { range } from 'rxjs';
import countries from 'src/utils/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Countries-generator';
  country: any = "";
  limit = 25;

  rangeHandle(newlimit: any) {
    this.limit = newlimit.target.value;
  }

  generate() {
    this.country = " ";
    for (let i = 0; i < this.limit; i++) {
      let num: number = Math.floor(Math.random() * 248 + 1);
      this.country = this.country + countries[num] + ", ";
    }
  }
}
