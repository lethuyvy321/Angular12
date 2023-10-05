import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Huy';
  public age = 18;
  public traiCay = ['dưa hấu', 'mãng cầu'];
  public traiCay2 = [
    { name: 'Táo', price: -13, discount: true },
    { name: 'Bưởi', price: 12, discount: false },
    { name: 'Cam', price: 22, discount: true }
  ];public districts: any[] = ['Chọn quận/huyện'];
  public cities = [
    {
      city: 'Chọn thành phố',
      district: [
        'Chọn quận/huyện'
      ]
    },
    {
      city: 'An Giang',
      district: [
        "Thành phố Long Xuyên",
        "Thành phố Châu Đốc",
        "Thị xã Tân Châu",
        "Huyện An Phú",
        "Huyện Châu Phú",
        "Huyện Châu Thành",
        "Huyện Chợ Mới",
        "Huyện Phú Tân",
        "Huyện Thoại Sơn",
        "Huyện Tịnh Biên",
        "Huyện Tri Tôn"
      ]
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        "Thành phố Vũng Tàu",
        "Thị xã Bà Rịa",
        "Thị xã Phú Mỹ",
        "Huyện Châu Đức",
        "Huyện Côn Đảo",
        "Huyện Đất Đỏ",
        "Huyện Long Điền",
        "Huyện Tân Thành",
        "Huyện Xuyên Mộc"
      ]
    },
    {
      city: 'Bạc Liêu',
      district: [
        "Thành phố Bạc Liêu",
        "Huyện Đông Hải",
        "Huyện Giá Rai",
        "Huyện Hòa Bình",
        "Huyện Hồng Dân",
        "Huyện Phước Long",
        "Huyện Vĩnh Lợi"
      ]
    }
  ];
  public counter = 0;
  public counterBinhPhuong = 0;
  constructor(private common : CommonService) { }
  public ngOnInit(): void {
    console.log('cities = ', this.cities)
    this.counter = this.common.getCounter();
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.setCounter(this.counter+1);
  }
  public changeCity(event: any) {
    const city = event.target.value;
    if(!city){
      return;
    }
    //cách 1
    // const search = this.cities.filter((a) => a.city === city);
    // console.log('search', search)
    // if(search && search.length > 0){
    //   this.districts = search[0].district;
    // }

    //cách 2
    this.districts = this.cities.find(a => a.city === city)?.district || [];
  }
}
