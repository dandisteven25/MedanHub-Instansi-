import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import '@firebase/auth';


@Component({
  selector: 'app-detail-selesai',
  templateUrl: './detail-selesai.page.html',
  styleUrls: ['./detail-selesai.page.scss'],
})
export class DetailSelesaiPage implements OnInit {

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
