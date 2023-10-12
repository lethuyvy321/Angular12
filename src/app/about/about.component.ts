import { Component } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public loginName = 'user';
  public myColor = 'red';
  /**
   *
   */
  public counter = 0;
  public counterBinhPhuong = 0;
  constructor(private common:CommonService) {
  }
  ngOnInit(): void{
    this.counter = this.common.getCounter();
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.setCounter(this.counter+1);
  }
}
