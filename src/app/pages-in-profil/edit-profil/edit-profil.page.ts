import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import firebase from '@firebase/app';
import '@firebase/auth';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.page.html',
  styleUrls: ['./edit-profil.page.scss'],
})
export class EditProfilPage implements OnInit {
  photo= ""
  fullname= ""
  username= ""

  instansi

  constructor(private camera: Camera, private dbService: DatabaseService, private authService: AuthService, private navCtrl: NavController) { }

  ngOnInit() {
    console.log(this.authService.userData)
    try{
      this.authService.checkAuthState().subscribe(data=>{
        this.dbService.getInstansi(data.uid).subscribe((data)=>{
          this.instansi = data.payload.data()
          console.log(this.instansi)
        })
      })
    }catch(e){console.log(e)}
  }


  async getGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photo=base64Image;
      console.log('This Is Image From Edit Profil:'+ base64Image);
     }, (err) => {
      // Handle error
      console.log(err);
     });
  }

  update_instansi(){
    this.dbService.update_instansi(this.authService.userData.uid, {"fullname":this.fullname,"username":this.username})
    this.navCtrl.navigateRoot("/home/profil")
  }

}
