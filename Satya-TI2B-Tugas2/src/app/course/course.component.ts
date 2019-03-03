import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  IniTugas = 'INI Tugas Pertama Biodata';
  getIniTugas(){
    return this.IniTugas;
  }
  nama = 'Nama : Achmad Satya Pradana';
  alamat = 'Alamat : Perum Muara Sarana Indah';
  getNamaAlamat(){
    return this.nama;
    return this.alamat;
  }
  currentDate = Date.now();
  Course;
  hobi;
  constructor(private c:CourseService) {
    this.Course = c.getCourse();
    this.hobi = c.getHobby();
   }

  ngOnInit() {
  }

}
