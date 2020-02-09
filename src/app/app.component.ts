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

    const letters = 'ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijlmnkopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()-=_+';

    let validChars = '';

    if (this.letters) {
      validChars += letters;
    }
    if (this.numbers) {
      validChars += numbers;
    }
    if (this.symbols) {
      validChars += symbols;
    }

    for (let i = 0; i < parsedValue; i++) {
      const index = this.getRandomInt(0, validChars.length);
      this.password += validChars[index];
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
