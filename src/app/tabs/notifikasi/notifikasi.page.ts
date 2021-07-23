import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-notifikasi',
  templateUrl: './notifikasi.page.html',
  styleUrls: ['./notifikasi.page.scss'],
})
export class NotifikasiPage implements OnInit {

  user

  constructor(
    private dbService: DatabaseService,
    private authService: AuthService,
    private loadingService: LoadingService,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.dbService.getLaporanUser().subscribe(data=>{
      this.loadingService.onDismiss
      console.log("Semua Data Laporan User")
      this.user = data.map(user=> user.payload.doc.data())
      console.log(this.user)
      this.user= data.map(item=> {
        return {
          id:item.payload.doc.id,
          data:item.payload.doc.data()
        }
      })
     });
  }

  gotoDetail(idLaporan){
    this.dbService.laporanId= idLaporan
    this.navCtrl.navigateForward("/detail")
}

doRefresh(event) {
  this.refresh();
  console.log('Begin async operation');
  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  },1000);
}

}
