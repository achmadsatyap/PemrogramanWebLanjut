### Routing dan Navigasi

- Buat project baru yang berisi komponen posts (praktikum http service), form-member (soal uts), navbar, not-found, home

![](image/Bab10/1.PNG)

![](image/Bab10/1.1.PNG)

![](image/Bab10/1.2.PNG)

![](image/Bab10/1.3.PNG)

- Buka file app.module.ts. Pastikan komponen pada langkah 1 sudah terdaftar seperti gambar dibawah ini

![](image/Bab10/2.PNG)

- Tambahkan module router pada halaman app.module.ts seperti gambar dibawah ini:

![](image/Bab10/2.1.PNG)

- Buka halaman navbar.component.html dan tambahkan kode dibawah ini:

![](image/Bab10/3.PNG)

- Buka halaman app.component.html. tambahkan kode dibawah ini:

![](image/Bab10/4.PNG)

- Jalankan dan catat hasilnya 

![](image/Bab10/5.PNG)

- Buka halaman app.component.html dan rubah menjadi seperti dibawah ini:

![](image/Bab10/6.PNG)

- Jalankan dan inspect elemen seperti pada gambar dibawah ini

![](image/Bab10/7.PNG)

- Jalankan link dibawah ini localhost:4200/form 

![](image/Bab10/8.PNG)

- Jalankan link dibawah ini localhost:4200/post 

![](image/Bab10/9.PNG)

- Jalankan link dibawah ini localhost:4200/coba 

![](image/Bab10/10.PNG)

- SImpulkan langkah 3, 4 dan 5 
- output yang dikeluarkan akan berbeda sesuai dengan link yang kita ketik. hasil dari link form adalah form-member works, hasil link post adalah post works sedangkan yang link coba adalah not-found works

- Buka halaman navbar.component.html. tambahkan link pada href tiap menu seperti gambar dibawah ini:

![](image/Bab10/11.PNG)

- Jalankan, catat dan berikan penjelasan 

![](image/Bab10/12.PNG)

![](image/Bab10/13.PNG)

![](image/Bab10/14.PNG)

- Modifikasi href menjadi routerLink pada halaman navbar.component.html seperti gambar dibawah ini:

![](image/Bab10/15.1.PNG)

- Jalankan, inspect element, coba link dan cek pada tab network. Catat dan beri penjelasan 

![](image/Bab10/15.PNG)

- Modifikasi class li pada halaman navbar.component.html menjadi seperti pada gambar dibawah ini:

![](image/Bab10/16.PNG)

- Buat komponen baru dengan nama profile dengan perintah ng g c profile

![](image/Bab10/17.PNG)

- Buka app.module.ts dan tambahkan route untuk profile seperti gambar dibawah ini:

![](image/Bab10/18.PNG)

- Modifikasi halaman home.component.html menjadi seperti gambar dibawah ini

![](image/Bab10/19.PNG)

- Jalankan, klik tombol home kemudian kliklink joko bowo kemudia inspect element seperti dibawah ini:

![](image/Bab10/20.PNG)

- Modifikasi file profile.component.ts menjadi seperti pada gambar dibawah ini:


![](image/Bab10/23.PNG)

- Jalankan, klik tombol home kemudian klik link joko bowo kemudia inspect element. Catat dan berikan penjelasan 

![](image/Bab10/21.PNG)