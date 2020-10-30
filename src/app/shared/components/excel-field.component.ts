import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel-field',
  templateUrl: './excel-field.component.html',
  styleUrls: ['./excel-field.component.css']
})
export class ExcelFieldComponent implements OnInit {
  value: string = 'foo';

  constructor() {
  }

  ngOnInit(): void {
  }

  onPaste(event) {
    this.value += event.clipboardData.getData('text');
  }

}
