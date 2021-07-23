import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from '../services/database.service';
import firebase from '@firebase/app';
import '@firebase/auth';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  user


  constructor(
    private dbService: DatabaseService,
    private authService: AuthService,
    private dataService: DataserviceService,
    private router: Router,
    private activeRouter: ActivatedRoute)
    { }

  ngOnInit() {
    let idLaporan = this.dbService.laporanId
    this.dbService.getDetailLaporan(idLaporan).subscribe(data=>{
      console.log(data)
      this.user=data
    })

  }

}
