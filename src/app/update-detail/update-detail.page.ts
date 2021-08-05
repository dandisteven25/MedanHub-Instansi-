import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from '../services/database.service';
import firebase from '@firebase/app';
import '@firebase/auth';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update-detail',
  templateUrl: './update-detail.page.html',
  styleUrls: ['./update-detail.page.scss'],
})
export class UpdateDetailPage implements OnInit {
  user;
  status: string = '';
  selected_option: string = '';

  constructor(
    private dbService: DatabaseService,
    private authService: AuthService,
    private dataService: DataserviceService,
    private alert: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    let idLaporan = this.dbService.laporanId;
    this.dbService.getDetailLaporan(idLaporan).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }

  update_laporan() {
    this.status = this.selected_option;
    let id_laporan = this.dbService.laporanId;
    this.dbService.update_laporan(id_laporan, { status: this.status });
    this.showAlert('Berhasil Update Status...');
    this.navCtrl.navigateRoot('/detail');
  }

  async showAlert(message: string) {
    const alert = await this.alert.create({
      message,
    });
    await alert.present();
  }
}
