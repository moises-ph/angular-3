import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})

export class Comp1Component implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    document.getElementById("xd")?.addEventListener('click', (e)=>{
      console.log("xd");
    })
  }

}
