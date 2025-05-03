# Try Movie App

Aplikasi simple berbasis **React** dan **Vite** untuk mencari film menggunakan **The Movie Database (TMDB) API**, serta menampilkan daftar film trending berdasarkan statistik pencarian yang tersimpan di **Appwrite**.

---

## Fitur

- 🔍 **Pencarian Film**: Cari film berdasarkan judul.
- 📈 **Trending Movies**: Tampilkan daftar 5 film dengan pencarian terbanyak.
- ⏳ **Debounce**: Menghindari pemanggilan API berlebih saat mengetik.
- 🚀 **Responsif**: Tampilan mendukung berbagai ukuran layar.

---

## Teknologi

- **Vite** - Build tool ultra-fast untuk React
- **React** (v19) - Library UI
- **TailwindCSS** - Utility-first CSS framework
- **Appwrite** - Menyimpan dan mengambil data statistik pencarian
- **react-use** - Hook tambahan seperti `useDebounce`

---

## Demo

> Link demo (jika sudah dideploy):
> [https://rafly-id-try-movie-app.vercel.app](https://rafly-id-try-movie-app.vercel.app)

---

## Prasyarat

- Node.js v14 atau lebih baru
- npm atau yarn

---

## Instalasi & Konfigurasi

1. **Clone repository**
   ```bash
   git clone https://github.com/rafly-id/rafly_id_tryMovieApp.git
   cd rafly_id_tryMovieApp
   ```
2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```
3. **Buat file `.env`** di root project dengan variabel berikut:
   ```ini
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

> **Catatan:** API key TMDB bisa didapatkan dari https://www.themoviedb.org/settings/api

---

## Menjalankan Aplikasi

- **Development**
  ```bash
  npm run dev
  ```
  Akses di: http://localhost:5173

- **Build untuk Production**
  ```bash
  npm run build
  ```
  Hasil build ada di folder `dist/`.

---

## Struktur Direktori

```
├── public/             # Static files
│   └── hero.png        # Gambar banner
│
├── src/                # Sumber kode aplikasi
│   ├── assets/         # Aset seperti gambar
│   ├── components/     # Komponen React:
│   │   ├── Search.jsx
│   │   ├── Spinner.jsx
│   │   └── MovieCard.jsx
│   ├── appWrite.js     # Logika Appwrite (update & get trending)
│   ├── App.jsx         # Entry utama UI
│   └── main.jsx        # Mount React ke DOM
│
├── .env                # Variabel lingkungan (gitignored)
├── package.json        # Konfigurasi npm & skrip
├── tailwind.config.js  # Konfigurasi TailwindCSS
└── vite.config.js      # Konfigurasi Vite
```
