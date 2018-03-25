import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  Array = ['Sahil Sinha', 'Komal Srivastava', 'Abhishek Srivastava'];
  constructor() {  }

  ngOnInit() {
  }

}
