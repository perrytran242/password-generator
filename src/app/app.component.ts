import { Component, SimpleChange, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  passwordLength: string;
  length: any;
  randomStr: string;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  password = '';

  ngOnInit() {}

  get letters() {
    return this.useLetters;
  }

  get numbers() {
    return this.useNumbers;
  }

  get symbols() {
    return this.useSymbols;
  }

  onGeneratePassword() {
    this.password = '';
    const parsedValue = parseInt(this.passwordLength);

    if ( !isNaN(parsedValue)) {
      this.length = parsedValue;
    }
    const numbers = '1234567890';
    const letters = 'abcdefghijlmnkopqrstuvwxyz';
    const symbols = '!@#$%^&*()-=_+';

    let validChars = '';


    if (this.letters && this.numbers && this.symbols) {
      for (let i = 0; i < this.length; i++) {
        validChars = numbers + letters + symbols;
        const randomNum = this.getRandomInt(0, validChars.length);
        this.password += validChars[randomNum];
      }
    }
    console.log(this.password);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
