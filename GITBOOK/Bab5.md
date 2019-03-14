# Bab 5 Directive 

### ngIf

- Directive ngIf digunakan untuk sebuah kondisi percabangan

- buka file app.component.ts

![](image/Bab5/1.PNG)

- buka file app.component.html

![](image/Bab5/1.1.PNG)

- Jalankan localhost hasil seperti berikut

![](image/Bab5/1.2.PNG)

#### contoh kedua menggunakan else:

- buka file app.component.html modifikasi kodenya

![](image/Bab5/2.PNG)

- Jalankan localhost dengan konndisi array pada app.component

![](image/Bab5/2.4.PNG)

- dengan array kosong

![](image/Bab5/2.1.PNG)

- hasilnya :

![](image/Bab5/2.2.PNG)

- dengan array ada isi

![](image/Bab5/2.3.PNG)

- hasilnya :

![](image/Bab5/2.4.PNG)

#### cara ketiga :

- buka file app.component.html modifikasi kodenya

![](image/Bab5/3.PNG)

- jalankan localhost dengan kondisi array pada app.component
- dengan array kosng

![](image/Bab5/3.1.PNG)

- hasilnya :

![](image/Bab5/3.2.PNG)

- dengan array ada isi

![](image/Bab5/3.3.PNG)

- hasilnya :

![](image/Bab5/3.4.PNG)

### Hidden Property

- buka app.component.html

![](image/Bab5/4.PNG)

- jalankan localhost hasilnya :

![](image/Bab5/4.1.PNG)

- selain contoh diatas kita juga dapat memberikan property

![](image/Bab5/5.PNG)

##### dengan catattan pada app.component.ts pada courses terdapat array courses dengan nilai 1 dan 2

![](image/Bab5/5.1.PNG)

- hasilnya :

![](image/Bab5/5.2.PNG)

- kita inspect element akan terlihat property hidden tidak terdapat kondisi true ataupun false

![](image/Bab5/5.3.PNG)

- berbeda jika menggunakan ngIF terdapat bindings dengan nilai false

![](image/Bab5/5.4.PNG)

#### ngSwitchCase

- buka file app.component.html modifikasi codenya

![](image/Bab5/6.PNG) 

- buka file app.component.ts tambahkan property viewMode

![](image/Bab5/6.1.PNG)

- hasilnya :

![](image/Bab5/6.2.PNG)

#### ngFor

- buka app.component.ts property CoursesFor yang berisikan array

![](image/Bab5/7.1.PNG)

- buka file app.component.html tambahkan directive ngFor pada element li

![](image/Bab5/7.PNG)

- hasilnya :

![](image/Bab5/7.2.PNG)

- kita juga dapat memberi tanda tertentu pada index yang bernilai ganjil dengan menggunakan isEven

![](image/Bab5/7.3.PNG)

- hasilnya :

![](image/Bab5/7.4.PNG)

#### ngFor dang change Detection

- Pada percobaan ini kita akan menambahkan sebuah data array pada coursesFor 
- tambahkan button pada app.component.html 

![](image/Bab5/8.PNG)

- tambahkan method onAdd() 

![](image/Bab5/8.1.PNG)

- sehingga hasilnya seperti berikut (jika kita tekan button add maka akan ditambahkan sebuah data courses 6)

![](image/Bab5/8.2.PNG)

![](image/Bab5/8.3.PNG)

- setelah kita berhasil menambahkan sebuah data array pada courseFor maka untuk selanjutnya kita akan mencoba untuk melakukan penghapusan data. 
- Tambahkan sebuah method onRemove pada app.component.ts 

![](image/Bab5/9.1.PNG)

- inspect element pada saat klick button remove

![](image/Bab5/9.2.PNG)

- Buka app.component.html dan tambahkan sebuah button untuk menghapus 

![](image/Bab5/9.PNG)

- hasilnya seperti berikut (pada saat button remove diclick maka salah satu data akan hilang sementara) 

![](image/Bab5/9.3.PNG)

![](image/Bab5/9.4.PNG)

- selain itu kita juga dapat melakukan perubahan status menggunakan event click 
- buka file app.component.html tambahkan button

![](image/Bab5/10.PNG)

- buka file app.component.ts buatlah sebuah method onChange dengan parameter item dan didalam method tersebut adanya perubahan string menjadi updated 

![](image/Bab5/10.1.PNG)

- hasilnya :

![](image/Bab5/10.2.PNG)

![](image/Bab5/10.3.PNG)

#### ngFor dan trackby 

- Buka file app.component.ts buatlah sebuah method dengan nama loadCourses, tapi sebelumnya buat sebuah property dengan nama coursesForOne

![](image/Bab5/11.1.PNG)

- buka file app.component.html dan tambahkan code 

![](image/Bab5/11.PNG)

- hasilnya saat button diclick 

![](image/Bab5/11.2.PNG)

![](image/Bab5/11.3.PNG)

- sekarang kita lakukan analisa buka inspect element, saat button belum diclick 

![](image/Bab5/11.4.PNG)

- dan saat button diklik maka element ul akan muncul

![](image/Bab5/11.5.PNG)

- jika kita lakukan klik kembali maka button akan merespon kembali dengan menampilkan data yang sudah ada dalam arti mengunduh ulang yang sudah ada

![](image/Bab5/11.6.PNG)

- oleh karena itu kita membutuhkan TrackBy yang nanti digunakan untuk mengecek jika data sudah ada maka button tidak perlu melakukan actionnya kembali 

- untuk menambahkan TrackBy dengan cara menambahkan pada app.component.html pada directive ngFor 

![](image/Bab5/12.1.PNG)

- selain itu tambahkan juga sebuah method trackCourse dengan parameter index dan itemone pada app.component.ts  

![](image/Bab5/12.2.PNG)

- jika berhasil maka pada saat button tampilkan data diklik untuk kedua kalinya pada inspect element tidak ada muncul highlight ungu pada masing-masing element li

![](image/Bab5/12.PNG)

### The leading Asterik 

-  kita memberi tahu angular untuk menulis ulang markup tertentu

![](image/Bab5/13.PNG)

- menggunakan ng template dengan menggunakan property binding 

![](image/Bab5/13.1.PNG)

- class binding fa-star dan fa-star-o 

![](image/Bab5/14.PNG)

- selain menggunakan class binding seperti diatas kita juga dapat menggunakan attribute directive

![](image/Bab5/14.1.PNG)

#### Custom Directive 

- pertama kita harus membuat directive dengan nama input-format terlebih 

![](image/Bab5/15.PNG)

- jika directive berhasil digenerate maka kita pastikan di app.module.ts pada @NgModule terdapat nama directive yang kita buat tadi 

![](image/Bab5/16.PNG)

- buka input-format.directive.ts dan tambahkan decorator HostListener

![](image/Bab5/16.1.PNG)

- Buka file app.component.html dan tambahakn code 

![](image/Bab5/17.PNG)

- terdapat appInputFormat adalah selector pada inputformat.directive.ts 
 
 ![](image/Bab5/17.1.PNG)

 - Kita jalan localhost:4200 setelah itu lakukan percobaan click pada textbox dan click diluar textbox

 ![](image/Bab5/17.2.PNG)

 ![](image/Bab5/17.3.PNG)

 - buka file input-format.directive.ts dan modifikasi codenya 

 ![](image/Bab5/18.PNG)

 - Jalankan localhost dan berikan masukan dengan huruf besar semua setelah itu tekan tab

 ![](image/Bab5/20.3.PNG)

 ![](image/Bab5/18.1.PNG)

 - buka file app.component.html dan tambahkan property binding dengan nama format

 ![](image/Bab5/19.PNG)

 - buka file input-format.directive.ts tambahkan decorator input dan modifikasi codenya

 ![](image/Bab5/19.1.PNG)

 - buka  app.component.html 

 ![](image/Bab5/19.2.PNG)

 -  atau kita juga dapat menggunakan cara lain yaitu menggunakan nama selector sebagai property binding 

 - buka app.component.hml modifikasi codenya 

 ![](image/Bab5/20.PNG)

 - buka input-format.directive.ts dan tambahkan decorator input dengan parameter appInputFormat 

 - Jika dijalankan sebagai contoh kita memasukkan kalimat dengan huruf kecil dan pada saat kita tab maka akan berubah menjadi huruf besar semua seperti berikut 

 ![](image/Bab5/20.2.PNG)

 ![](image/Bab5/20.3.PNG)
