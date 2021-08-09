import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import '@firebase/auth';
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
    this.navCtrl.navigateRoot('/home/laporan');
  }

  async showAlert(message: string) {
    const alert = await this.alert.create({
      message,
    });
    await alert.present();
  }
}
