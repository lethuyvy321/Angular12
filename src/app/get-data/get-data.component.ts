import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Service/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {
  /**
   *
   */
  constructor(private httpServerService: HttpServerService) {

  }
  public ngOnInit(): void {
    this.httpServerService.getComments().subscribe(a => {
      console.log('data', a);
    });

    this.httpServerService.getRandomUser(5).subscribe(a => {
      console.log('getRandomUser', a.results);
    });
  }
}
