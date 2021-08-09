import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { LoadingService } from 'src/app/services/loading.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-notifikasi',
  templateUrl: './notifikasi.page.html',
  styleUrls: ['./notifikasi.page.scss'],
})
export class NotifikasiPage implements OnInit {
  user;
  akun;

  constructor(
    private dbService: DatabaseService,
    private authService: AuthService,
    private loadingService: LoadingService,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.authService.checkAuthState().subscribe((user) => {
      //console.log(user.email);
      this.firestore
        .collection('layanan_publik', (ref) =>
          ref.where('email', '==', user.email)
        )
        .snapshotChanges()
        .subscribe((data) => {
          this.akun = data.map((item) => {
            this.akun = item.payload.doc.data();
            this.firestore
              .collection('laporan', (ref) =>
                ref
                  .where('nama_layanan', '==', this.akun.fullname)
                  .orderBy('tanggal', 'desc')
              )
              .snapshotChanges()
              .subscribe((data) => {
                this.loadingService.onDismiss;
                console.log('Semua Data Laporan User');
                this.user = data.map((user) => user.payload.doc.data());
                console.log(this.user);
                this.user = data.map((item) => {
                  return {
                    id: item.payload.doc.id,
                    data: item.payload.doc.data(),
                  };
                });
              });
          });
        });
    });

    // this.dbService.getLaporanUser().subscribe((data) => {
    //   this.loadingService.onDismiss;
    //   console.log('Semua Data Laporan User');
    //   this.user = data.map((user) => user.payload.doc.data());
    //   console.log(this.user);
    //   this.user = data.map((item) => {
    //     return {
    //       id: item.payload.doc.id,
    //       data: item.payload.doc.data(),
    //     };
    //   });
    // });
  }

  gotoDetail(idLaporan) {
    this.dbService.laporanId = idLaporan;
    this.navCtrl.navigateForward('/detail');
  }

  doRefresh(event) {
    this.refresh();
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
}
