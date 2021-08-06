import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { LoadingService } from 'src/app/services/loading.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-selesai',
  templateUrl: './selesai.page.html',
  styleUrls: ['./selesai.page.scss'],
})
export class SelesaiPage implements OnInit {
  user;
  kondisi;
  userEmail;
  fullname2;
  akun;
  // collectionName = 'instansi';
  // laporanId = '';

  constructor(
    private dbService: DatabaseService,
    private authService: AuthService,
    private loadingService: LoadingService,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.authService.checkAuthState().subscribe((user) => {
      //console.log(user.email);
      this.firestore
        .collection('instansi', (ref) => ref.where('email', '==', user.email))
        .snapshotChanges()
        .subscribe((data) => {
          this.akun = data.map((item) => {
            this.akun = item.payload.doc.data();
            //console.log(this.akun.fullname);
            this.firestore
              .collection('laporan', (ref) =>
                ref
                  .where('nama_layanan', '==', this.akun.fullname)
                  .where('status', '==', 'Selesai')
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
    this.navCtrl.navigateForward('/detail-selesai');
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
