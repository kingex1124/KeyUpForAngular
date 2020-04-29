import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutService } from '../service/layout.service';
import { Operation } from '../models/operation.enum';
// import { app, BrowserWindow, remote  } from 'electron';
import {  BrowserWindow, remote } from 'electron';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // 轉頁屬性
  operation = Operation;
  currOperation: Operation = Operation.home;

  constructor(private layoutService: LayoutService) { }

  @ViewChild('ControllerRegin') controllerReginElement: ElementRef;

  ngOnInit(): void {
    // 設定分頁
    this.layoutService.layoutChanged$.subscribe(o => {
      this.currOperation = o;
    });
    setTimeout( () => {
      this.controllerReginElement.nativeElement.focus();
     }, 0 );
  }

  onKey(event: any) { // without type info

    switch (event.key) {
      case 'c': {
        this.layoutService.changeOperation(Operation.page1);
        let newWin = new BrowserWindow({
          width: 500,
          height: 500
      });
        newWin.loadFile('yellow.html');
        newWin.on('closed',() =>{
          newWin = null;
      });
        break;
      }
      case 'v': {
        this.layoutService.changeOperation(Operation.page2);
        break;
      }
      case 'b': {
        this.layoutService.changeOperation(Operation.page3);
        break;
      }
      case 'n': {
        this.layoutService.changeOperation(Operation.page4);
        break;
      }

    }
  }

  onClick1(){
    this.layoutService.changeOperation(Operation.page1);
  }
  onClick2(){
    this.layoutService.changeOperation(Operation.page2);
  }
  onClick3(){
    this.layoutService.changeOperation(Operation.page3);
  }
  onClick4(){
    this.layoutService.changeOperation(Operation.page4);
  }

  focusInputBind(s) {
      setTimeout( () => {
          this.controllerReginElement.nativeElement.focus();
         }, 0 );
  }
}
