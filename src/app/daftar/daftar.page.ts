import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from '@firebase/app';
import '@firebase/auth';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';
import { DataserviceService } from '../services/dataservice.service';


@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.page.html',
  styleUrls: ['./daftar.page.scss'],
})
export class DaftarPage implements OnInit {

  email: string= "";
  password: string= "";
  username:string= "";
  contactnumber:string= "";
  nama_layanan:string="";
  id_layanan: string="";


  constructor(private dataService: DataserviceService, public alert:AlertController, public router:Router, private databaseService: DatabaseService) { }

  ngOnInit() {

  }

  async signup(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
      async (data)=>{
        this.showAlert("Berhasil Daftar, Silahkan Login");
        console.log("Berhasil Daftar")
        this.id_layanan = data.user.uid;
        await this.databaseService.setInstansi(data.user.uid,{"username": this.username, "nama_layanan": this.nama_layanan, "contactnumber":this.contactnumber,"email":this.email, "id_layanan":this.id_layanan})
        this.router.navigate(["/login"])

      }).catch((err)=> {
        this.showAlert("Gagal Daftar Akun");
        console.log(err)
      })
  }

  async showAlert(message:string){
    const alert = await this.alert.create({
      message
    });
    await alert.present()
  }

}
