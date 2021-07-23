import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.page.html',
  styleUrls: ['./laporan.page.scss'],
})
export class LaporanPage implements OnInit {

  instansi

  constructor(private dbService: DatabaseService, private authService: AuthService) { }

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

}
