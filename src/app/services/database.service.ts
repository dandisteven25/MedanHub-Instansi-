import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  collectionName = 'layanan_publik';
  laporanId = '';

  constructor(
    private loadingService: LoadingService,
    private firestore: AngularFirestore
  ) {}

  create_instansi(record) {
    this.loadingService.presentLoading();
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_instansi() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  setInstansi(id, user) {
    return this.firestore.collection(this.collectionName).doc(id).set(user);
  }

  getInstansi(id) {
    this.loadingService.presentLoading();
    return this.firestore
      .collection(this.collectionName)
      .doc(id)
      .snapshotChanges();
  }

  getUser(id) {
    this.loadingService.presentLoading();
    return this.firestore.collection('user').doc(id).snapshotChanges();
  }

  getUsers() {
    return this.firestore.collection('user').snapshotChanges();
  }

  getLaporanUser() {
    this.loadingService.presentLoading();
    return this.firestore.collection('laporan').snapshotChanges();
  }

  getLaporan(id) {
    this.loadingService.presentLoading();
    return this.firestore
      .collection('laporan', (ref) => ref.where('userId', '==', id))
      .snapshotChanges();
  }

  getDetailLaporan(id) {
    this.loadingService.presentLoading();
    return this.firestore.collection('laporan').doc(id).valueChanges();
  }

  update_instansi(recordID, record) {
    this.loadingService.presentLoading();
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  update_laporan(recordID, record) {
    this.loadingService.presentLoading();
    this.firestore.doc('laporan' + '/' + recordID).update(record);
  }

  delete_instansi(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}
