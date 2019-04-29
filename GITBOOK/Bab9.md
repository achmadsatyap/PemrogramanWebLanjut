### Jobsheet-9: HTTP Service

#### Praktikum - Bagian 2 : Getting Data

- Buat component baru dengan nama posts dengan perintah ng g c posts

![](image/Bab9/1.PNG)

- Untuk menggunakan HTTPService, kita perlu melakukan import HttpModule pada app.module.ts.

![](image/Bab9/2.PNG)

- Setelah kita menambahkan HttpModule pada bagian imports, maka secara otomatis akan menambah imports pada bagian paling atas

![](image/Bab9/2.1.PNG)

- Hint :
Jika HttpModule tidak muncul secara otomatis maka anda harus menginstal terlebih dahulu dengan perintah npm i @angular/http

![](image/Bab9/2.2.PNG)

- Modifikasi file posts.component.ts menjadi seperti berikut:

![](image/Bab9/3.PNG)

Class Http pada contructor digunakan untuk melakukan HTTP request ke back end.


- Ubah file app.component.html seperti berikut :

![](image/Bab9/4.PNG)

- Jalankan dan Catat hasilnya

![](image/Bab9/5.PNG)

- Bagaimana jika anda lupa melakukan import HttpModule pada langkah ke-2 ? Lakukan commenting pada HttpModule seperti pada kode berikut :

![](image/Bab9/6.PNG)

- Apa yang terjadi pada console? 

![](image/Bab9/7.PNG)

- Lengkapi kode program pada posts.component.ts menjadi :

![](image/Bab9/9.1.PNG)

- Jalankan pada browser 

![](image/Bab9/9.PNG)

- perbedaan yang terjadi pada console jika kode pada posts.component.ts diubah menjadi :

![](image/Bab9/10.1.PNG)

![](image/Bab9/10.PNG)

- Untuk menampilkan data pada halaman browser, ubah kode program pada posts.component.html seperti berikut :

![](image/Bab9/11.PNG)

- Ubah kode program pada posts.component.ts :

![](image/Bab9/12.PNG)

- Jalankan

![](image/Bab9/13.PNG)

#### Praktikum - Bagian 3 : Creating Data

- Pertama, tambahkan input elemen pada posts.component.html :

![](image/Bab9/14.PNG)

- Modifikasi kode program pada posts.component.ts 

![](image/Bab9/15.PNG)

- Simpan dan jalankan pada browser.

![](image/Bab9/16.PNG)

#### Praktikum - Bagian 4 : Updating Data

- Tambahkan button Update dengan modifikasi kode program seperti di bawah ini :

![](image/Bab9/17.PNG)

- Tambahkan fungsi updatePost pada posts.ts seperti di bawah :

![](image/Bab9/18.PNG)

- Simpan dan jalankan pada browser.

![](image/Bab9/19.PNG)

#### Praktikum - Bagian 5 : Deleting Data

- Tambahkan button Delete dengan modifikasi kode program seperti di bawah ini :

![](image/Bab9/20.PNG)

- Tambahkan fungsi deletePost pada posts.ts seperti di bawah :

![](image/Bab9/21.PNG)

- Simpan dan jalankan pada browser.

![](image/Bab9/22.PNG)