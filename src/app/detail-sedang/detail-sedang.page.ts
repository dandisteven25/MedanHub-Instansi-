import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import '@firebase/auth';


@Component({
  selector: 'app-detail-sedang',
  templateUrl: './detail-sedang.page.html',
  styleUrls: ['./detail-sedang.page.scss'],
})
export class DetailSedangPage implements OnInit {
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
