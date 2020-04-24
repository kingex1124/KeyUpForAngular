import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { LayoutService } from '../service/layout.service';
import { Operation } from '../models/operation.enum';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  // 轉頁屬性
  operation = Operation;
  currOperatiom: Operation = Operation.page1;

  constructor(private layoutService: LayoutService) { }
  @ViewChild('ControllerRegin') controllerReginElement: ElementRef;
  @Output() focusInput: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    // 設定分頁
    this.layoutService.layoutChanged$.subscribe(o => {
      this.currOperatiom = o;
    });
    setTimeout( () => {
      this.controllerReginElement.nativeElement.focus();
     }, 0 );
  }

  onKey(event: any) {
    switch (event.key) {
      case 'Escape': {
        this.layoutService.changeOperation(Operation.home);
        this.focusInput.emit('');
        break;
      }
    }
  }
}
