import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  AddStyle(){
    var number = 6;
    if(number == 5){
      return {
        'font-size.px':25,
        'font-style': "Bold",
        'color': 'blue'
      }
    }
    else{
      return {
        'font-size.px':25,
        'font-style': "Bold",
        'color': 'red'
      }
    }

  }

  AddClass(){
    return{
      'btn':true,
      'btn-primary':true,
      'btn-warning':false
    }
  }

}
