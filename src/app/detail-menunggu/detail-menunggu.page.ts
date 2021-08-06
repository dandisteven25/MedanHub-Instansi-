import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import '@firebase/auth';

@Component({
  selector: 'app-detail-menunggu',
  templateUrl: './detail-menunggu.page.html',
  styleUrls: ['./detail-menunggu.page.scss'],
})
export class DetailMenungguPage implements OnInit {
  user

  constructor(
    private dbService: DatabaseService)
    { }

  ngOnInit() {
    let idLaporan = this.dbService.laporanId
    this.dbService.getDetailLaporan(idLaporan).subscribe(data=>{
      console.log(data)
      this.user=data
    })

  }

}
