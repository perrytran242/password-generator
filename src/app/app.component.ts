import { Component, SimpleChange } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  passwordLength: any;
  password = '';
  randomStr: string;
  useLetters: boolean;

  ngOnInit() {
    this.randomStr = String.fromCharCode(65);
  }

  get letters() {
    return this.useLetters;
  }

  onGeneratePassword() {

    if (this.letters) {
      this.passwordLength = parseInt(this.passwordLength)
      for (let i = 0; i < this.passwordLength; i++) {
        const randomNum = this.getRandomInt(65, 122);
        this.password += String.fromCharCode(randomNum);
      }
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
