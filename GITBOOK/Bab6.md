# Bab 6 Template-Driven Forms 

### Membuat Form Boostrap 

- buatlah sebuah component dengan nama contact 

![](image/Bab6/1.PNG)

- buka file contact.component.html dan tambahkan code berikut:

![](image/Bab6/2.PNG)

- buka file app.component.html dan tambahkan code berikut 

![](image/Bab6/3.PNG)

- jalankan servernya maka hasilnya seperti berikut

![](image/Bab6/4.PNG)

- generate 2 buah component dengan nama reactive-form dan template-driven

![](image/Bab6/5.PNG)

- buka file reactive-form.component.html dan buatlah code seperti berikut 

![](image/Bab6/6.PNG)

- buka file app.component.html dan tambahkan code berikut 

![](image/Bab6/7.PNG)

- sehingga hasilnya seperti berikut 

![](image/Bab6/8.PNG)

- langkah berikutnya buatlah sebuah interface dengan nama mahasiswa.interface.ts dan tambahkan code berikut

![](image/Bab6/9.PNG)

- Dikarenakan untuk menggunakan reactive-forms diperlukan FormBuilder dan FormGroup dari module ReactiveFormsModule maka kita harus tambahkan ReactiveFormModule dan FormGroup  pada app.module.ts seperti pada gambar berikut

![](image/Bab6/10.PNG)

- buka file reactive-form.component.ts, import terlebih dahulu FormBuilder dan FormsGroup dan tambahkan beberapa code berikut

![](image/Bab6/11.PNG)

-  method yang digunakan untuk mengenerate form yang sesuai dengan structur form 

![](image/Bab6/12.PNG)

- buka file reactive-form.component.html dan modifikasi codenya menjadi seperti berikut  

![](image/Bab6/13.PNG)

-  FormGroup yaitu mahasiswa dan pendidikan seperti pada mahasiswa.interface.ts 

![](image/Bab6/12.PNG)

- jalan server localhost maka hasilnya seperti berikut

![](image/Bab6/16.PNG)

- untuk template-driven kita membutuhkan FormsModule pada app.module.ts, jadi buka file app.module.ts dan tambahkan FormsModule 

![](image/Bab6/17.PNG)

- buka file template-driven.componentn.ts dan tambahkan struktur form seperti berikut 

![](image/Bab6/18.PNG)

- buka file template-driven.component.html dan tambahkan code berikut 

![](image/Bab6/19.PNG)

- tambahkan method onSubmit pada template-driven.component.ts 

![](image/Bab6/20.PNG)

- buka file app.component.html tambahkan code berikut 

![](image/Bab6/21.PNG)

- hasil

![](image/Bab6/22.PNG)

### ngModel

- buka file contact-form.component.html dan tambahkan ngmodel seperti berikut

![](image/Bab6/23.PNG)

- buka file contact-form.component.ts dan tambahkan decorator input 

![](image/Bab6/24.PNG)

- coba jalan servernya dan lihat terdapat pesan error seperti pada gambar berikut 

![](image/Bab6/25.PNG)

- tambahkan atribut name pada tag input 

![](image/Bab6/26.PNG)

- jalankan servernya ( cat:tidak perlu diklik button untuk menampilkan data karena tidak menggunakan event binding jadi inputan akan langsung tampil saat user memasukan data) 
 
 ![](image/Bab6/27.PNG)

 - buka file contact.component.html modifikasi code berikut ini:

 ![](image/Bab6/28.PNG)

 - Pada textarea tambahkan juga ngModel seperti pada gambar berikut

 ![](image/Bab6/28.1.PNG)

 - buka file contact.component.ts modifikasi code berikut ini 

 ![](image/Bab6/29.PNG)

 - jalankan server dan lihat pada inspect maka akan muncul property dari ngModel 

 ![](image/Bab6/30.PNG)

 ### Validasi

 - buka file contact.component.html dan tambahkan code berikut 

 ![](image/Bab6/31.PNG)

 - jalankan localhost dan lihat hasilnya 

 ![](image/Bab6/32.PNG)

 - Buka file contact.component.html dan tambahkan code berikut

 ![](image/Bab6/33.PNG)

 - jalankan localhost pada saat dijalankan maka secara default alert tidak akan muncul dan pada saat field nama dikosongkan maka akan muncul alert “Nama harus diisi” 

![](image/Bab6/34.PNG)

![](image/Bab6/35.PNG)

### spesific validasi error

- buka file conctact.component.html dan tambahkan beberapa code berikut

![](image/Bab6/36.PNG)

- jalankan localhost jika kita masukkan angka 1

![](image/Bab6/37.PNG)

- jika kita inspect element maka pada bagian property errors terdapat jenis-jenis validasi yang digunakan seperti pada gambar berikut

![](image/Bab6/38.PNG)

### styling Invalid input field

- jika kita inspect element pada tab element dan kita click pada bagian form validation, maka pada element akan menunjukkan sebuah code angular ng-content class ng-invalid,ng-dirty dan ng-touched

- pada sub bab ini kita akan memodifikasi agar selain muncul alert pada form input akan merah juga 

![](image/Bab6/39.png)

- buka file contact.component.css dan tambahkan code berikut

![](image/Bab6/40.PNG)

- jalankan localhost jika kita inputkan salah

![](image/Bab6/41.PNG)

### ngForm

- buka file contact.component.ts dan tambahkan sebuah method submit seperti pada gambar berikut

![](image/Bab6/42.PNG)

- buka file contact.component.html dan buatlah sebuah template variabel ngForm atau property ngForm dengan nama form (#form) yang nanti digunakan sebagai parameter dari method submit seperti pada gambar berikut

![](image/Bab6/42.1.PNG)

- pada button rubah codenya menjadi 

```typescript
<button type="submit" class="btn btn-primary">
```

- jalankan localhost dan inspect element

![](image/Bab6/43.JPG)

### ngModelGroup

- buka file contact.component.html dan tambahkan code dan copy paste inputan nama ke dalam div ngModelGroup seperti pada gambar

![](image/Bab6/44.PNG)

- jika kita ingin membuat validasi pada ngFormGroup maka kita dapat menambahkan template variabel seperti pada gambar berikut

![](image/Bab6/45.PNG)

### Disabling the submit button

- buka file contact.component.html dan tambahkan code berikut pada tag button

![](image/Bab6/46.PNG)

![](image/Bab6/47.PNG)

### bekerja dengan check box 

- buka file contact.component.html dan tambahkan code check box seperti pada gambar berikut 

![](image/Bab6/48.1.PNG)

- jalankan localhost

![](image/Bab6/48.PNG)

### bekerja dengan drop-down list

- buka file contact.component.html tambahkan code untuk dropdown list seperti pada gambar berikut

![](image/Bab6/49.PNG)

- buka file contact.component.ts dan tambahkan code berikut

![](image/Bab6/50.PNG)

- jalankan localhost maka hasilnya seperti berikut

![](image/Bab6/51.PNG)

-  kita juga dapat menampilkan property id dan property nama dengan menggunakan property ngValue seperti berikut

![](image/Bab6/52.PNG)

- sehingga hasilnya seperti berikut

![](image/Bab6/53.PNG)

- selain itu juga kita dapat menggunakan multiple  jika ingin memilih keduanya seperti pada gambar berikut

![](image/Bab6/54.1.PNG)

- sehingga hasilnya seperti berikut (tekan control untuk dapat memilih keduanya)

![](image/Bab6/54.PNG)

### bekerja dengan radio button

- buka file contact.component.html dan tambahkan code berikut

- catatan jika kita tidak menambahkan ngModel pada input maka saat kita memilih salah satu radio button value tidak bisa muncul

![](image/Bab6/55.PNG)

- jalankan localhost (menggunakan ngModel)

![](image/Bab6/56.PNG)

- jalankan localhost (tanpa menggunakan ngModel)

![](image/Bab6/57.PNG)

- atau kita bisa menggunakan directive ngFor untuk menampilkan value seperti berikut

![](image/Bab6/59.PNG)

- sehingga hasilnya juga sama

![](image/Bab6/58.PNG)