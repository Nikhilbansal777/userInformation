import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../api-connect.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  userInformation: any;
  todaysDate: any;
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor(private apiConnnectService: ApiConnectService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getUserInformation();
    this.changeDateFormat();
  }

  changeDateFormat() {
    var date = new Date();
    this.todaysDate = date.getDate() + '-' + this.monthNames[date.getMonth()] + '-' + date.getFullYear();
  }

  getUserInformation() {
    this.apiConnnectService.getUserInformation().subscribe((response) => {
      this.userInformation = response;
    });
  }

}
