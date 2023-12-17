Langkah langkah membuat database pada sql : 

-> Buka aplikasi manajemen MySQL, melalui XAMPP atau plaftform lainnya
-> Buka shell atau terminal
-> ketik 'mysql -u root'
-> Buat database baru atau pilih database yang sudah ada
-> Kalau membuat database baru, ketik 'create nama_database';
-> ketik 'use nama_database'
-> jalankan queery sql membuat tabel berikut : 
CREATE TABLE IF NOT EXISTS FormData (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nim INT NOT NULL,
    statusMhs VARCHAR(10) NOT NULL,
    kelas VARCHAR(10) NOT NULL
);