import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  values = '';

  constructor() { }
  @ViewChild('first') firstElement: ElementRef;
  @ViewChild('search') searchElement: ElementRef;
  @ViewChild('btn') btnElement: ElementRef;

  ngOnInit(): void {
  }

  onKey(event: any) { // without type info
    this.values = event.key + ' | ';
    console.log(event.target);
    this.searchElement.nativeElement.focus();
  }

  onKey2(event: any) { // without type info
    this.values = event.key + ' | ';
    console.log(event.target);
    this.btnElement.nativeElement.focus();
  }

  Test(){
alert('test');
  }

  onKey3(event: any) { // without type info
    this.values = 'QQ';
    console.log(event.target);
    this.firstElement.nativeElement.focus();
  }

}
