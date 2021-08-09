import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import firebase from '@firebase/app';
import '@firebase/auth';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  layanan_publik

  constructor(private dbService: DatabaseService,
    private authService: AuthService,
    private alert: AlertController,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    console.log(this.authService.userData)
    try{
      this.authService.checkAuthState().subscribe(data=>{
        this.dbService.getInstansi(data.uid).subscribe((data)=>{
          this.layanan_publik = data.payload.data()
          console.log(this.layanan_publik)
        })
      })
    }catch(e){console.log(e)}
  }

  signOut(){
    this.authService.SignOut()
    this.showAlert("Berhasil Logout");
        console.log("Logout Account")
    this.navCtrl.navigateRoot("/login")
  }

  async showAlert(message:string){
    const alert = await this.alert.create({
      message
    });
    await alert.present()
  }

}
