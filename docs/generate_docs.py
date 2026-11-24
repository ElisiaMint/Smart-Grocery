import os
import base64

ROOT_DIR = r"c:\Users\RACHEL ALLEN WU\OneDrive\Documents\Sekolah\Kelas 12\DT ICT\Smart-Grocery"
DOCS_DIR = os.path.join(ROOT_DIR, "docs")
IMAGES_DIR = os.path.join(DOCS_DIR, "images")

def get_b64(path):
    if not os.path.isabs(path):
        path = os.path.join(ROOT_DIR, path)
    if os.path.exists(path):
        with open(path, "rb") as f:
            data = base64.b64encode(f.read()).decode("utf-8")
        ext = os.path.splitext(path)[1].lower().replace(".", "")
        if ext == "png":
            return f"data:image/png;base64,{data}"
        elif ext in ["jpg", "jpeg"]:
            return f"data:image/jpeg;base64,{data}"
    return ""

img_logo = get_b64("icon-192.png")
img_qr = get_b64(os.path.join(IMAGES_DIR, "qr_code_live_demo.png"))
img_setup = get_b64(os.path.join(IMAGES_DIR, "screenshot_1_setup.png"))
img_catalog = get_b64(os.path.join(IMAGES_DIR, "screenshot_2_catalog.png"))
img_add_product = get_b64(os.path.join(IMAGES_DIR, "screenshot_3_add_product.png"))
img_cart = get_b64(os.path.join(IMAGES_DIR, "screenshot_4_cart.png"))
img_receipt = get_b64(os.path.join(IMAGES_DIR, "screenshot_5_checkout_receipt.png"))
img_history = get_b64(os.path.join(IMAGES_DIR, "screenshot_6_history.png"))

# 1. GENERATE HTML (Optimized for Google Docs copy-paste and PDF printing with 0.75in margins & Times New Roman)
html_content = f"""<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Dokumentasi Project • Shopping List Tracker - Grocery & Budget</title>
  <style>
    @page {{
      size: A4;
      margin: 0.75in;
    }}
    body {{
      font-family: 'Times New Roman', Times, serif;
      font-size: 12pt;
      line-height: 1.5;
      color: #111111;
      background: #ffffff;
      margin: 0 auto;
      padding: 0.75in;
      max-width: 8.27in;
    }}
    h1 {{
      font-size: 16pt;
      font-weight: bold;
      text-align: center;
      margin-top: 18pt;
      margin-bottom: 8pt;
      text-transform: uppercase;
      color: #1a1a1a;
    }}
    h2 {{
      font-size: 14pt;
      font-weight: bold;
      margin-top: 16pt;
      margin-bottom: 6pt;
      border-bottom: 1.5pt solid #333333;
      padding-bottom: 3pt;
      color: #1a1a1a;
      page-break-after: avoid;
    }}
    h3 {{
      font-size: 12.5pt;
      font-weight: bold;
      margin-top: 12pt;
      margin-bottom: 4pt;
      color: #222222;
      page-break-after: avoid;
    }}
    p {{
      margin-top: 0;
      margin-bottom: 6pt;
      text-align: justify;
      text-indent: 0;
    }}
    ul, ol {{
      margin-top: 0;
      margin-bottom: 6pt;
      padding-left: 22pt;
    }}
    li {{
      margin-bottom: 3pt;
      text-align: justify;
    }}
    table {{
      width: 100%;
      border-collapse: collapse;
      margin: 8pt 0 12pt 0;
      font-size: 11pt;
    }}
    th, td {{
      border: 1pt solid #444444;
      padding: 6pt 8pt;
      vertical-align: top;
      text-align: left;
    }}
    th {{
      background-color: #f2f2f2;
      font-weight: bold;
    }}
    .text-center {{
      text-align: center;
    }}
    .cover-box {{
      text-align: center;
      border: 2pt solid #2c3e50;
      padding: 18pt;
      margin-bottom: 24pt;
      background: #fafafa;
    }}
    .app-logo {{
      width: 72pt;
      height: 72pt;
      margin-bottom: 8pt;
      border-radius: 12pt;
    }}
    .qr-img {{
      width: 90pt;
      height: 90pt;
      margin-top: 6pt;
      border: 1pt solid #888;
    }}
    .screenshot-container {{
      text-align: center;
      margin: 10pt 0 14pt 0;
      page-break-inside: avoid;
    }}
    .screenshot-img {{
      max-width: 200pt;
      height: auto;
      border: 1pt solid #bbbbbb;
      box-shadow: 0 2pt 4pt rgba(0,0,0,0.1);
      border-radius: 4pt;
    }}
    .screenshot-caption {{
      font-size: 10pt;
      font-style: italic;
      color: #555555;
      margin-top: 4pt;
      text-align: center;
    }}
    .callout-box {{
      border-left: 3pt solid #2c3e50;
      background-color: #f8f9fa;
      padding: 6pt 10pt;
      margin: 8pt 0;
      font-size: 11pt;
    }}
    .page-break {{
      page-break-before: always;
    }}
    a {{
      color: #0b5394;
      text-decoration: underline;
    }}
  </style>
</head>
<body>

  <!-- COVER / HEADER IDENTITAS -->
  <div class="cover-box">
    <img src="{img_logo}" alt="App Logo" class="app-logo">
    <h1>DOKUMENTASI PROJECT & USER MANUAL PRODUK</h1>
    <p style="font-size: 13pt; font-weight: bold; margin-bottom: 4pt; color: #333333;">Aplikasi Web: Shopping List Tracker - Grocery & Budget (Smart Grocery Tracker)</p>
    <p style="font-size: 10.5pt; color: #666666; margin-bottom: 12pt;">Evaluasi Practical Test (PT) Pertemuan 18 ~ 19 &bull; Kurikulum Informatika Kelas 12 SMA Mutiara Bangsa 2</p>
    <hr style="border: 0.5pt solid #cccccc; margin: 10pt 0;">
    <table style="border: none; margin: 0 auto; width: 90%; font-size: 11pt;">
      <tr style="border: none;">
        <td style="border: none; width: 65%;">
          <b>Nama Pengembang:</b> Rachel Allen Wu<br>
          <b>Kelas:</b> 12 MIPA / IPS<br>
          <b>Nomor Absen:</b> [Nomor Absen]<br>
          <b>Sekolah:</b> SMA Mutiara Bangsa 2 Tangerang<br>
          <b>Live Website URL:</b> <a href="https://shopping-tracker-70b66.web.app" target="_blank">https://shopping-tracker-70b66.web.app</a><br>
          <b>GitHub Repository:</b> <a href="https://github.com/ElisiaMint/Smart-Grocery" target="_blank">https://github.com/ElisiaMint/Smart-Grocery</a>
        </td>
        <td style="border: none; width: 35%; text-align: center;">
          <img src="{img_qr}" alt="QR Code Live Demo" class="qr-img"><br>
          <span style="font-size: 9pt; color: #555;"><b>Scan QR Code Live Demo</b><br>(Akses Instan Smartphone)</span>
        </td>
      </tr>
    </table>
  </div>

  <!-- BAGIAN 1 -->
  <h2>Bagian 1 &bull; Identitas Project & Pembuat</h2>
  <p>
    Laporan Dokumentasi Project ini disusun sebagai pemenuhan deliverable resmi pada evaluasi <i>Practical Test (PT)</i> Pertemuan 18 dan 19 mata pelajaran Informatika (DT ICT) Kelas 12. Dokumen ini merepresentasikan produk rekayasa perangkat lunak mandiri bertajuk <b>Shopping List Tracker - Grocery &amp; Budget</b> (atau dikenal sebagai <i>Smart Grocery Tracker</i>).
  </p>
  <table>
    <thead>
      <tr>
        <th style="width: 30%;">Atribut Identitas</th>
        <th style="width: 70%;">Keterangan Lengkap</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Judul Dokumen</b></td>
        <td>Dokumentasi Project &bull; Shopping List Tracker - Grocery &amp; Budget</td>
      </tr>
      <tr>
        <td><b>Nama Resmi Produk</b></td>
        <td>Shopping List Tracker - Grocery &amp; Budget (Smart Grocery Tracker PWA)</td>
      </tr>
      <tr>
        <td><b>Identitas Siswa (Developer)</b></td>
        <td>Rachel Allen Wu (Akun GitHub: <b>ElisiaMint</b>)</td>
      </tr>
      <tr>
        <td><b>Tingkat &amp; Satuan Pendidikan</b></td>
        <td>Kelas 12 &bull; SMA Mutiara Bangsa 2 Tangerang</td>
      </tr>
      <tr>
        <td><b>Tautan Live Demo Website</b></td>
        <td><a href="https://shopping-tracker-70b66.web.app" target="_blank">https://shopping-tracker-70b66.web.app</a> (Telah dideploy aktif di Firebase Hosting)</td>
      </tr>
      <tr>
        <td><b>Tautan GitHub Repository</b></td>
        <td><a href="https://github.com/ElisiaMint/Smart-Grocery" target="_blank">https://github.com/ElisiaMint/Smart-Grocery</a></td>
      </tr>
      <tr>
        <td><b>Teknologi yang Digunakan</b></td>
        <td>HTML5 Semantik, Vanilla CSS3 (Custom Properties &amp; Mobile Mockup Frame), JavaScript (ES6+ Modules), Service Worker (PWA Offline Caching), Google Firebase Firestore &amp; Hosting</td>
      </tr>
    </tbody>
  </table>

  <!-- BAGIAN 2 -->
  <h2>Bagian 2 &bull; Tentang Aplikasi (Deskripsi &amp; Manfaat)</h2>
  <h3>2.1 Deskripsi Singkat</h3>
  <p>
    <b>Shopping List Tracker</b> adalah aplikasi web modern berbasis <i>Progressive Web App (PWA)</i> yang dirancang khusus untuk memandu pengguna saat berbelanja di berbagai supermarket terkemuka di Indonesia (seperti <i>Lotte Mart, Family Mart, Indomaret, Alfamart,</i> dan <i>Alfamidi</i>). Mengusung tema visual <i>Cream &amp; Brown Aesthetic</i> yang nyaman di mata dan berorientasi pada kemudahan penggunaan satu tangan (<i>thumb-zone navigation</i>), aplikasi ini mengintegrasikan katalog produk promo resmi, batas anggaran belanja (<i>strict budget limit</i>), serta pemantauan riwayat belanja secara terpadu.
  </p>

  <h3>2.2 Solusi Nyata &amp; Manfaat</h3>
  <p>
    Di era modern, konsumen kerap menghadapi kendala klasik ketika berbelanja di pasar swalayan:
  </p>
  <ul>
    <li><b>Pencegahan Impulsive Buying &amp; Overbudget:</b> Konsumen sering kali memasukkan barang ke keranjang tanpa kalkulasi pasti sehingga tagihan di kasir melebihi saldo. Aplikasi ini memecahkannya melalui mekanisme kunci batas anggaran belanja (<i>Budget Lock</i>) yang secara otomatis menghitung akumulasi total secara <i>real-time</i> dan memberi peringatan visual jika barang yang hendak dimasukkan melebihi anggaran.</li>
    <li><b>Transparansi Fluktuasi Harga (Price Trend Monitor):</b> Setiap item dalam katalog dilengkapi label perbandingan harga bulan lalu (status <b>⬆ Naik</b>, <b>⬇ Turun</b>, atau <b>= Tetap</b>) sehingga konsumen dapat mengambil keputusan cerdas apakah suatu barang layak dibeli sekarang.</li>
    <li><b>Kalkulasi Diskon Akurat:</b> Sistem mendukung diskon reguler maupun diskon bertingkat (<i>compound discount</i> seperti -50% + 20%) yang langsung terhitung netto tanpa memerlukan kalkulator manual tambahan.</li>
    <li><b>Akses Tanpa Hambatan (Offline Capability):</b> Didukung oleh teknologi Service Worker PWA, aplikasi tetap dapat dibuka dan dioperasikan secara penuh di area basement supermarket yang minim atau tanpa sinyal internet sama sekali.</li>
  </ul>

  <h3>2.3 Target Pengguna</h3>
  <ul>
    <li><b>Ibu Rumah Tangga &amp; Pengelola Finansial Keluarga:</b> Membantu mematuhi pos anggaran belanja dapur bulanan tanpa risiko pembengkakan biaya kasir.</li>
    <li><b>Pelajar &amp; Mahasiswa:</b> Memberikan panduan belanja hemat dan disiplin anggaran bagi anak kos dengan alokasi uang saku terbatas.</li>
    <li><b>Smart Shopper &amp; Masyarakat Umum:</b> Siapa pun yang menginginkan kepraktisan membuat daftar belanja digital yang rapi, cepat, dan otomatis.</li>
  </ul>

  <div class="page-break"></div>

  <!-- BAGIAN 3 -->
  <h2>Bagian 3 &bull; Penjelasan Fitur &amp; Langkah Penggunaan</h2>
  <p>
    Bagian ini memaparkan fitur-fitur fungsional utama aplikasi yang telah berjalan secara nyata, dilengkapi dengan tangkapan layar (<i>screenshot</i>) antarmuka aktual dan alur pengoperasian langkah-demi-langkah.
  </p>

  <!-- FITUR 1 -->
  <h3>3.1 Fitur 1: Inisialisasi Toko &amp; Batas Budget Belanja (Setup View)</h3>
  <p>
    <b>Fungsi &amp; Manfaat:</b> Modul gerbang awal untuk memilih supermarket sasaran belanja dan menentukan batas pengeluaran maksimal (<i>Budget Cap</i>). Nilai anggaran ini akan dikunci dan dijadikan acuan kalkulator pengurang saldo belanja.
  </p>
  <div class="screenshot-container">
    <img src="{img_setup}" alt="Screenshot Halaman Setup Supermarket & Budget" class="screenshot-img"><br>
    <div class="screenshot-caption">Gambar 1 &bull; Antarmuka Pemilihan Supermarket dan Penentuan Batas Anggaran Belanja (Setup Screen)</div>
  </div>
  <p><b>Langkah Penggunaan (Step-by-Step):</b></p>
  <ol>
    <li>Buka aplikasi melalui tautan web browser atau ikon di Home Screen ponsel.</li>
    <li>Pada kolom <b>Pilih Supermarket</b>, ketuk menu <i>dropdown</i> dan pilih salah satu gerai (contoh: <i>Indomaret</i> atau <i>Lotte Mart</i>).</li>
    <li>Pada kolom <b>Batas Budget Belanja</b>, ketikkan jumlah uang maksimal yang dialokasikan (misalnya: <code>150.000</code>) atau ketuk salah satu tombol cepat (<i>quick chips</i>: <code>50 rb</code>, <code>100 rb</code>, <code>200 rb</code>, <code>300 rb</code>).</li>
    <li>Ketuk tombol cokelat <b>Confirm &amp; Cek Promo Database</b>. Sistem akan menyimulasikan koneksi basis data katalog toko dan langsung mengarahkan pengguna ke katalog belanja.</li>
  </ol>

  <!-- FITUR 2 -->
  <h3>3.2 Fitur 2: Katalog Promo Toko &amp; Indikator Tren Harga Bulan Lalu (Store Tab)</h3>
  <p>
    <b>Fungsi &amp; Manfaat:</b> Menyajikan etalase produk resmi yang disesuaikan dengan gerai yang dipilih, lengkap dengan harga coret diskon, label promo persentase, indikator komparasi harga bulan lalu, serta filter pencarian instan.
  </p>
  <div class="screenshot-container">
    <img src="{img_catalog}" alt="Screenshot Katalog Belanja dan Tren Harga" class="screenshot-img"><br>
    <div class="screenshot-caption">Gambar 2 &bull; Katalog Produk Toko Resmi Dilengkapi Badge Diskon dan Status Fluktuasi Harga</div>
  </div>
  <p><b>Langkah Penggunaan (Step-by-Step):</b></p>
  <ol>
    <li>Pada tab <b>Store</b> (ikon 🏷️), gulir ke bawah untuk menelusuri katalog barang yang tersedia.</li>
    <li>Gunakan fitur <b>Search Bar</b> untuk mengetik nama barang (contoh: "Kopi", "Roti", atau "Minyak").</li>
    <li>Pilih filter kategori cepat (<b>All</b>, <b>Minuman</b>, <b>Makanan</b>, <b>Alat Mandi</b>) untuk mempersempit daftar barang.</li>
    <li>Perhatikan badge tren harga di pojok kanan kartu produk (hijau <i>⬇ Turun</i> mengindikasikan harga lebih hemat dibanding bulan lalu, sedangkan merah <i>⬆ Naik</i> mengindikasikan lonjakan harga).</li>
    <li>Ketuk tombol <b>+ Add to list</b> pada produk yang diinginkan untuk memasukkannya ke dalam daftar belanja aktif.</li>
  </ol>

  <div class="page-break"></div>

  <!-- FITUR 3 -->
  <h3>3.3 Fitur 3: Kancing Cepat Tambah Produk Kustom (Custom Product Modal)</h3>
  <p>
    <b>Fungsi &amp; Manfaat:</b> Memungkinkan pengguna menambahkan barang unik atau kebutuhan pribadi di luar katalog bawaan supermarket. Produk baru ini akan otomatis tersimpan di memori perangkat sehingga dapat digunakan kembali pada sesi belanja selanjutnya.
  </p>
  <div class="screenshot-container">
    <img src="{img_add_product}" alt="Screenshot Modal Tambah Produk Baru" class="screenshot-img"><br>
    <div class="screenshot-caption">Gambar 3 &bull; Modal Pop-Up Kancing Tambah Produk Kustom ke Katalog</div>
  </div>
  <p><b>Langkah Penggunaan (Step-by-Step):</b></p>
  <ol>
    <li>Di tab Store, ketuk tombol bulat kancing melayang (simbol <b>+</b>) di pojok kanan bawah layar.</li>
    <li>Jendela pop-up (<i>Modal</i>) <b>Tambah Produk Baru</b> akan muncul dengan efek visual <i>pulse zoom</i>.</li>
    <li>Isi kolom <b>Nama Produk</b> (contoh: "Susu Kedelai Organik 1L").</li>
    <li>Ketik nominal pada kolom <b>Harga Produk</b> (sistem otomatis memformat angka ke notasi Rupiah).</li>
    <li>Ketuk tombol cokelat <b>Confirm</b>. Barang baru akan seketika masuk ke urutan teratas katalog supermarket tersebut dan siap dimasukkan ke keranjang.</li>
  </ol>

  <!-- FITUR 4 -->
  <h3>3.4 Fitur 4: Keranjang Belanja Dinamis &amp; Kunci Transaksi (List Tab &amp; Checkout)</h3>
  <p>
    <b>Fungsi &amp; Manfaat:</b> Memantau kalkulasi total pengeluaran secara langsung (<i>real-time calculation</i>), mengatur kuantitas barang, menampilkan sisa saldo anggaran belanja pada bilah atas, dan mengunci transaksi belanja yang telah tuntas.
  </p>
  <div class="screenshot-container">
    <table style="border:none; margin:0 auto; width:100%;">
      <tr style="border:none;">
        <td style="border:none; text-align:center; width:50%;">
          <img src="{img_cart}" alt="Screenshot Keranjang Belanja" class="screenshot-img"><br>
          <div class="screenshot-caption">Gambar 4a &bull; Keranjang Belanja (List Tab) dengan Progress Bar Anggaran</div>
        </td>
        <td style="border:none; text-align:center; width:50%;">
          <img src="{img_receipt}" alt="Screenshot Checkout Modal" class="screenshot-img"><br>
          <div class="screenshot-caption">Gambar 4b &bull; Struk Digital Penguncian Transaksi Sukses</div>
        </td>
      </tr>
    </table>
  </div>
  <p><b>Langkah Penggunaan (Step-by-Step):</b></p>
  <ol>
    <li>Ketuk tab navigasi <b>List</b> (ikon 📝) yang memiliki badge merah penghitung jumlah barang.</li>
    <li>Ubah kuantitas barang menggunakan tombol <b>+</b> atau <b>-</b>, atau ketuk tanda silang merah (<b>✕</b>) untuk membatalkan pembelian barang.</li>
    <li>Perhatikan nilai <b>Total Belanja</b> di bilah bawah serta <b>Sisa Budget</b> di pill atas. Bila belanja mendekati batas anggaran, warna progress bar akan bergradasi lembut mengingatkan pengguna.</li>
    <li>Setelah seluruh barang masuk keranjang kasir, ketuk tombol <b>🔒 Checkout</b>.</li>
    <li>Struk digital akan muncul memuat rincian transaksi: nama toko, jumlah item, total belanja, dan sisa uang kembalian. Transaksi berhasil dikunci dan diarsipkan.</li>
  </ol>

  <div class="page-break"></div>

  <!-- FITUR 5 -->
  <h3>3.5 Fitur 5: Riwayat Belanja Terpadu &amp; Sinkronisasi Cloud (History Tab)</h3>
  <p>
    <b>Fungsi &amp; Manfaat:</b> Menyimpan seluruh arsip nota belanja masa lalu beserta tanggal dan waktu transaksi. Data ini otomatis disinkronkan ke <b>Google Cloud Firestore</b> sehingga rekam jejak belanja tersimpan permanen dan tidak hilang saat aplikasi ditutup.
  </p>
  <div class="screenshot-container">
    <img src="{img_history}" alt="Screenshot Tab History Belanja" class="screenshot-img"><br>
    <div class="screenshot-caption">Gambar 5 &bull; Riwayat Belanja Tersimpan Rapi Menurut Waktu dan Gerai Toko</div>
  </div>
  <p><b>Langkah Penggunaan (Step-by-Step):</b></p>
  <ol>
    <li>Ketuk tab <b>History</b> (ikon 📜) pada bilah navigasi utama.</li>
    <li>Daftar kartu transaksi belanja terdahulu akan ditampilkan secara kronologis (dilengkapi label waktu seperti <i>Today, 19:09</i> dan nama gerai supermarket).</li>
    <li>Setiap kartu merinci nama barang yang dibeli, harga satuan, dan kuantitas (<i>quantity</i>) saat transaksi diselesaikan.</li>
    <li>Pengguna dapat meninjau riwayat ini untuk melakukan evaluasi pengeluaran mingguan atau bulanan.</li>
  </ol>

  <!-- BAGIAN 4 -->
  <h2>Bagian 4 &bull; Cara Membuka &amp; Menjalankan Aplikasi</h2>
  <p>
    Aplikasi dirancang dengan standar web terbuka sehingga fleksibel dijalankan di berbagai platform perangkat tanpa memerlukan instalasi rumit dari toko aplikasi (<i>App Store</i> atau <i>Google Play Store</i>):
  </p>
  <ul>
    <li>
      <b>1. Akses Melalui Web Browser Desktop (Laptop / PC):</b>
      <br>Buka peramban modern seperti <i>Google Chrome, Mozilla Firefox, Microsoft Edge,</i> atau <i>Apple Safari</i>. Kunjungi alamat URL: <code>https://shopping-tracker-70b66.web.app</code>. Aplikasi akan otomatis merender antarmuka di dalam <i>Phone Frame Mockup</i> yang elegan dengan rasio aspek 9:16 di tengah layar monitor.
    </li>
    <li>
      <b>2. Akses Melalui Smartphone (Mobile Browser):</b>
      <br>Buka browser ponsel dan ketik URL di atas, atau cukup pindai (<i>scan</i>) <b>QR Code</b> pada halaman sampul dokumen ini. Aplikasi secara otomatis beradaptasi penuh memenuhi layar smartphone tanpa bingkai hitam tambahan (<i>fully responsive mobile viewport</i>).
    </li>
    <li>
      <b>3. Instalasi Mode Aplikasi PWA (Add to Home Screen):</b>
      <br>&bull; <b>Pengguna Android (Google Chrome):</b> Ketuk tombol <i>"📲 Install Aplikasi ke Layar HP"</i> yang muncul di halaman pengaturan, atau ketuk menu titik tiga di browser Chrome &rarr; pilih <b>"Install app"</b> / <b>"Tambahkan ke Layar Utama"</b>.
      <br>&bull; <b>Pengguna iOS / iPhone (Apple Safari):</b> Ketuk tombol <b>Bagikan (Share)</b> berupa ikon kotak panah ke atas di bilah navigasi bawah Safari &rarr; gulir ke bawah dan ketuk opsi <b>"Tambahkan ke Layar Utama" (Add to Home Screen)</b> &rarr; ketuk <b>Tambah (Add)</b> di pojok kanan atas. Ikon aplikasi bernuansa cokelat estetik akan muncul di layar utama ponsel dan dapat dibuka layaknya aplikasi native tanpa bar navigasi URL peramban.
    </li>
  </ul>

  <!-- BAGIAN 5 -->
  <h2>Bagian 5 &bull; Tanya Jawab &amp; Kendala Umum (FAQ)</h2>
  <p>
    Berikut adalah rangkuman potensi kendala teknis yang mungkin dihadapi pengguna saat mengoperasikan aplikasi, beserta panduan solusi dan penjelasannya:
  </p>
  <table>
    <thead>
      <tr>
        <th style="width: 25%;">Kategori Kendala</th>
        <th style="width: 35%;">Pertanyaan / Masalah</th>
        <th style="width: 40%;">Solusi Teknis &amp; Penjelasan</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Penyimpanan Data &amp; Sinkronisasi</b></td>
        <td><i>"Apakah daftar belanja saya hilang jika saya tidak sengaja menutup tab browser atau me-refresh halaman?"</i></td>
        <td><b>Tidak hilang.</b> Aplikasi menerapkan arsitektur <i>dual-storage</i>. Setiap perubahan keranjang dan status anggaran langsung disimpan ke <b>Local Storage</b> browser secara otomatis. Ketika di-checkout, arsip transaksi diteruskan dan disinkronkan ke basis data <b>Google Cloud Firestore</b>.</td>
      </tr>
      <tr>
        <td><b>Validasi Input &amp; Keamanan</b></td>
        <td><i>"Mengapa tombol Confirm tidak bisa ditekan, atau kartu budget bergoyang warna merah?"</i></td>
        <td>Aplikasi memiliki validasi ketat: (1) Kolom supermarket dan batas budget adalah <i>mandatory field</i> (wajib diisi). (2) Bila barang yang hendak ditambahkan menyebabkan total belanja melebihi sisa anggaran, sistem secara otomatis menolak aksi penambahan (<i>shake animation</i>) untuk melindungi pengguna dari <i>overspending</i>.</td>
      </tr>
      <tr>
        <td><b>Konektivitas &amp; Mode Offline</b></td>
        <td><i>"Apakah aplikasi tetap berfungsi jika tidak ada sinyal internet di dalam supermarket?"</i></td>
        <td><b>Ya, tetap berfungsi penuh.</b> Berkat teknologi <i>Service Worker</i> (file <code>sw.js</code>), seluruh aset HTML, CSS, JavaScript, dan katalog produk telah disimpan ke dalam memori cache lokal. Pengguna tetap dapat memilih barang, melihat harga promo, dan menghitung belanjaan secara <i>offline</i>. Sinkronisasi Cloud akan dilanjutkan otomatis begitu internet terhubung kembali.</td>
      </tr>
    </tbody>
  </table>

  <!-- BAGIAN 6 -->
  <h2>Bagian 6 &bull; Rencana Fitur Tambahan (Wishlist Masa Depan)</h2>
  <p>
    Untuk menjaga skalabilitas dan relevansi produk dalam jangka panjang, berikut 3 inisiatif pengembangan fitur lanjutan yang direncanakan:
  </p>
  <ol>
    <li>
      <b>Otomasi Pemindaian Struk Belanja berbasis AI Vision (OCR &amp; Gemini AI):</b>
      <br>Menyediakan fitur pemindaian kamera langsung terhadap struk fisik kasir. Algoritma <i>Optical Character Recognition (OCR)</i> yang diintegrasikan dengan Google Gemini API akan mengekstraksi nama barang dan harga secara instan untuk verifikasi belanja tanpa input manual.
    </li>
    <li>
      <b>Ekspor Laporan Finansial ke PDF &amp; Spreadsheet (CSV / Excel):</b>
      <br>Menghadirkan tombol unduh laporan pengeluaran bulanan dalam bentuk dokumen PDF berformat rapi atau lembar kerja Excel agar pengguna dapat mengarsipkan pembukuan rumah tangga secara profesional.
    </li>
    <li>
      <b>Smart Pantry &amp; Notifikasi Kedaluwarsa Produk (Expiry Alert):</b>
      <br>Mengubah daftar barang yang telah dibeli menjadi inventaris bahan dapur digital, lengkap dengan pengingat waktu estimasi kedaluwarsa serta saran resep masakan berdasarkan bahan yang tersisa di rumah.
    </li>
  </ol>

  <!-- NILAI TAMBAH A+ -->
  <h2>Nilai Tambah (Nilai A+) &bull; Tips Belanja Cerdas &amp; Efisiensi Produk</h2>
  <div class="callout-box">
    <b>💡 Panduan Efisiensi Belanja (Smart Shopping Cheat Sheet):</b>
    <ul style="margin-top: 4pt; margin-bottom: 0;">
      <li><b>Prioritaskan Badge ⬇ Turun:</b> Produk dengan label hijau adalah barang yang sedang mengalami diskon atau penurunan harga riil dibanding bulan sebelumnya. Prioritaskan memasukkan barang ini untuk efisiensi maksimal.</li>
      <li><b>Manfaatkan Diskon Kompound:</b> Barang bertanda <code>-50% + 20%</code> memberikan potongan akumulatif yang signifikan pada total belanjaan Anda.</li>
      <li><b>Gunakan Fitur Logout dengan Bijak:</b> Menekan tombol <i>Log out</i> di pojok kanan atas akan mengembalikan Anda ke menu pemilihan supermarket dan me-reset keranjang aktif. Pastikan Anda telah menekan tombol <i>Checkout</i> terlebih dahulu jika ingin mengarsipkan belanjaan ke tab <i>History</i>.</li>
    </ul>
  </div>

  <hr style="border: 0.5pt solid #dddddd; margin-top: 20pt; margin-bottom: 10pt;">
  <p style="font-size: 9.5pt; text-align: center; color: #777777;">
    Dokumen Penilaian Praktik Mandiri &bull; Modul P18~P19 Practical Test (PT) &bull; Laboratorium Komputer SMA Mutiara Bangsa 2 Tangerang<br>
    Dikembangkan dengan bangga oleh <b>Rachel Allen Wu</b> &bull; Kelas 12 Informatika &bull; Tahun Ajaran 2026/2027
  </p>

</body>
</html>
"""

# Write HTML file
html_path = os.path.join(DOCS_DIR, "Dokumentasi_Project_Google_Docs.html")
with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)
print(f"Generated: {html_path}")

# 2. GENERATE MARKDOWN
md_content = f"""# DOKUMENTASI PROJECT & USER MANUAL PRODUK
### Shopping List Tracker - Grocery & Budget (Smart Grocery Tracker)
**Mata Pelajaran:** Informatika (DT ICT) &bull; Modul P18~P19 Practical Test (PT)  
**Sekolah:** SMA Mutiara Bangsa 2 Tangerang  

---

## Bagian 1 &bull; Identitas Project & Pembuat

| Atribut Identitas | Keterangan Lengkap |
| :--- | :--- |
| **Judul Dokumen** | Dokumentasi Project &bull; Shopping List Tracker - Grocery & Budget |
| **Nama Resmi Aplikasi** | Shopping List Tracker - Grocery & Budget (Smart Grocery Tracker) |
| **Nama Pembuat (Developer)** | **Rachel Allen Wu** (GitHub: [`ElisiaMint`](https://github.com/ElisiaMint)) |
| **Kelas / Nomor Absen** | Kelas 12 MIPA / IPS &bull; No. Absen: [Nomor Absen] |
| **Tautan Live Website (Hosting)** | [https://shopping-tracker-70b66.web.app](https://shopping-tracker-70b66.web.app) |
| **Tautan GitHub Repository** | [https://github.com/ElisiaMint/Smart-Grocery](https://github.com/ElisiaMint/Smart-Grocery) |
| **Akses Cepat (QR Code)** | ![QR Code Live Website](./images/qr_code_live_demo.png) *(Scan dengan smartphone)* |

---

## Bagian 2 &bull; Tentang Aplikasi (Deskripsi & Manfaat)

### 2.1 Deskripsi Singkat
**Shopping List Tracker** adalah aplikasi perencana dan pencatat belanja supermarket berbasis *Progressive Web App (PWA)* dengan desain mobile modern bernuansa *Cream & Brown Aesthetic*. Aplikasi ini dirancang untuk mendampingi pengguna secara interaktif saat berbelanja di berbagai jaringan pasar swalayan Indonesia seperti **Lotte Mart, Family Mart, Indomaret, Alfamart,** dan **Alfamidi**.

### 2.2 Solusi Nyata & Manfaat
1. **Mencegah Overbudget & Impulsive Buying:** Pengguna menentukan batas anggaran sebelum berbelanja. Setiap kali barang ditambahkan ke daftar, sistem menghitung sisa anggaran secara *real-time* dan memblokir penambahan barang jika total biaya melebihi pagu anggaran.
2. **Indikator Tren Harga Bulan Lalu (*Price Trend Monitor*):** Setiap barang menampilkan label fluktuasi harga bulan lalu (**⬆ Naik**, **⬇ Turun**, atau **= Tetap**), memberikan pertimbangan objektif bagi pengguna untuk berhemat.
3. **Kalkulasi Diskon Akurat & Bertingkat:** Mendukung kalkulasi diskon tunggal maupun diskon kompound (*compound discount*, e.g. `-50% + 20%`).
4. **Dukungan Penuh Mode Offline:** Memanfaatkan *Service Worker* sehingga aplikasi tetap dapat diakses di area minim sinyal seperti basement gedung supermarket.

### 2.3 Target Pengguna
- **Ibu Rumah Tangga:** Untuk mengelola anggaran belanja bulanan keluarga.
- **Siswa & Mahasiswa:** Untuk mengatur pengeluaran uang saku secara disiplin dan terencana.
- **Masyarakat Umum / Smart Shopper:** Pemburu promo yang menginginkan catatan belanja praktis.

---

## Bagian 3 &bull; Penjelasan Fitur & Langkah Penggunaan

### 3.1 Fitur 1: Inisialisasi Toko & Batas Budget Belanja (Setup Screen)
- **Fungsi & Manfaat:** Mengunci supermarket sasaran dan batas modal belanja yang tidak dapat dimanipulasi selama sesi belanja aktif.
- **Screenshot Tampilan Asli:**  
  ![Screenshot Setup View](./images/screenshot_1_setup.png)
- **Langkah Penggunaan (Step-by-Step):**
  1. Buka aplikasi pada browser atau ikon Home Screen ponsel.
  2. Pilih supermarket pada dropdown *Pilih Supermarket* (misal: *Indomaret* atau *Lotte Mart*).
  3. Masukkan nominal batas belanja pada kolom *Batas Budget Belanja* (atau gunakan chip praktis: 50 rb, 100 rb, 200 rb, 300 rb).
  4. Ketuk tombol **Confirm & Cek Promo Database**.

### 3.2 Fitur 2: Katalog Promo Supermarket & Tren Harga (Store Tab)
- **Fungsi & Manfaat:** Menjelajahi katalog resmi toko dengan label diskon coret, filter kategori, dan pencarian cepat.
- **Screenshot Tampilan Asli:**  
  ![Screenshot Catalog Store](./images/screenshot_2_catalog.png)
- **Langkah Penggunaan (Step-by-Step):**
  1. Pada tab **Store** (🏷️), telusuri produk yang diinginkan.
  2. Gunakan kolom *Search* untuk mencari barang secara spesifik.
  3. Manfaatkan chip kategori (*All, Minuman, Makanan, Alat Mandi*).
  4. Amati tren harga bulan lalu (hijau ⬇ Turun untuk harga promo terbaik).
  5. Ketuk tombol **+ Add to list** untuk memasukkan barang ke daftar belanja.

### 3.3 Fitur 3: Kancing Cepat Tambah Produk Kustom (Custom Product Modal)
- **Fungsi & Manfaat:** Menambahkan item barang kebutuhan pribadi yang belum terdaftar di katalog bawaan toko.
- **Screenshot Tampilan Asli:**  
  ![Screenshot Modal Tambah Produk](./images/screenshot_3_add_product.png)
- **Langkah Penggunaan (Step-by-Step):**
  1. Ketuk tombol bulat melayang berikon **+** di pojok kanan bawah tab Store.
  2. Masukkan nama barang pada kolom *Nama Produk*.
  3. Masukkan nominal estimasi pada kolom *Harga Produk*.
  4. Ketuk tombol **Confirm**. Produk baru akan tersimpan di katalog toko lokal.

### 3.4 Fitur 4: Keranjang Belanja Interaktif & Kunci Checkout (List Tab)
- **Fungsi & Manfaat:** Memantau akumulasi total harga, mengatur kuantitas barang, dan mengunci transaksi saat belanja usai.
- **Screenshot Tampilan Asli:**  
  ![Screenshot Keranjang Belanja](./images/screenshot_4_cart.png)  
  *Struk Digital Checkout Sukses:*  
  ![Screenshot Checkout Receipt](./images/screenshot_5_checkout_receipt.png)
- **Langkah Penggunaan (Step-by-Step):**
  1. Masuk ke tab **List** (📝).
  2. Sesuaikan kuantitas barang menggunakan tombol `+` atau `-`.
  3. Pantau bilah visual progress bar anggaran dan sisa saldo belanja.
  4. Ketuk tombol **🔒 Checkout** di kasir untuk mengunci transaksi dan melihat struk digital.

### 3.5 Fitur 5: Riwayat Belanja & Sinkronisasi Cloud Firestore (History Tab)
- **Fungsi & Manfaat:** Mengarsipkan setiap transaksi secara kronologis dan otomatis menyinkronkannya ke *Google Cloud Firestore*.
- **Screenshot Tampilan Asli:**  
  ![Screenshot History View](./images/screenshot_6_history.png)
- **Langkah Penggunaan (Step-by-Step):**
  1. Buka tab **History** (📜).
  2. Periksa detail belanja masa lalu yang tersusun rapi berdasarkan tanggal dan jam belanja.
  3. Data tetap tersimpan aman di cloud meskipun cache perangkat dibersihkan.

---

## Bagian 4 &bull; Cara Membuka & Menjalankan Aplikasi

1. **Akses Web Browser Komputer (PC / Laptop):**  
   Buka peramban (Chrome, Edge, Safari) dan navigasikan ke `https://shopping-tracker-70b66.web.app`. Aplikasi akan tampil dalam bingkai smartphone 9:16 yang interaktif.
2. **Akses Smartphone (Mobile Browser):**  
   Buka tautan website pada browser seluler atau scan QR Code di atas. Desain otomatis responsif penuh satu layar.
3. **Instalasi Progressive Web App (PWA) ke Layar Utama:**  
   - **Android Chrome:** Ketuk tombol *"Install Aplikasi ke Layar HP"* pada aplikasi, atau pilih menu titik tiga &rarr; *Install app / Tambahkan ke Layar Utama*.
   - **iOS Safari (iPhone):** Ketuk ikon *Share* (kotak panah ke atas) &rarr; pilih *"Add to Home Screen"* &rarr; ketuk *Add*.

---

## Bagian 5 &bull; Tanya Jawab & Kendala Umum (FAQ)

| Kendala Teknis | Pertanyaan | Solusi Teknis |
| :--- | :--- | :--- |
| **Penyimpanan Data** | *Apakah daftar belanja hilang bila tab browser ditutup?* | **Aman.** Aplikasi menggunakan *dual-storage*: LocalStorage untuk sesi aktif realtime dan Google Firebase Cloud Firestore untuk riwayat checkout permanen. |
| **Validasi Input** | *Mengapa muncul animasi getar merah pada saldo budget?* | Sistem mendeteksi barang yang hendak dimasukkan melebihi sisa batas anggaran (*budget cap*). Kurangi kuantitas barang lain terlebih dahulu. |
| **Konektivitas** | *Dapatkah aplikasi dipakai di lantai basement supermarket tanpa sinyal?* | **Bisa.** Berkat Service Worker PWA, seluruh aplikasi berjalan penuh secara offline. Data tersimpan di memori lokal dan disinkronkan ke server saat kembali online. |

---

## Bagian 6 &bull; Rencana Fitur Tambahan (Wishlist)

1. **Otomasi Pemindaian Struk Belanja dengan Kamera (OCR & Google Gemini AI):** Deteksi otomatis nama barang dan harga langsung dari foto struk belanjaan fisik.
2. **Fitur Ekspor Laporan Finansial ke Format PDF / Excel:** Unduh ringkasan pengeluaran bulanan dalam bentuk dokumen PDF formal atau lembar kerja spreadsheet.
3. **Smart Pantry & Expiry Alert:** Pengingat otomatis masa kedaluwarsa bahan makanan yang telah dibeli beserta saran resep masakan cerdas.

---

## Nilai Tambah (Nilai A+) &bull; Tips Efisiensi Penggunaan
- **Utamakan Produk Berlabel ⬇ Turun:** Produk berlabel hijau menawarkan harga lebih ekonomis dibanding bulan sebelumnya.
- **Kunci Belanja via Checkout:** Selalu ketuk tombol *Checkout* sebelum keluar (*Log out*) agar histori transaksi tersimpan sempurna di cloud.
"""

md_path = os.path.join(DOCS_DIR, "DOKUMENTASI_PROJECT.md")
with open(md_path, "w", encoding="utf-8") as f:
    f.write(md_content)
print(f"Generated: {md_path}")
