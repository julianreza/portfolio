# Portfolio Website

Website portofolio personal yang ringan, modern, dan responsif, dibangun menggunakan standar web murni (HTML5, CSS3, dan Vanilla JavaScript).

## Struktur Direktori

```
portfolio/
├── .editorconfig          # Konfigurasi standardisasi editor
├── .gitignore             # File dan direktori yang diabaikan Git
├── AGENTS.md              # Konteks runtime agent
├── README.md              # Dokumentasi proyek
├── package.json           # Konfigurasi proyek & skrip lokal
├── index.html             # Halaman utama portofolio
├── css/
│   └── style.css          # Desain sistem, CSS custom properties, responsive styles
├── js/
│   └── main.js           # Logika interaktif, dark/light theme, navigasi
├── data/
│   ├── content.js         # Sumber data portofolio (ES module/global)
│   └── content.json       # Format data portofolio JSON
├── assets/
│   ├── icons/             # Ikon SVG (GitHub, LinkedIn, Email, External Link)
│   └── images/            # Foto profil & thumbnail proyek
└── docs/
    └── CONTENT.md         # Dokumentasi spesifikasi konten
```

## Fitur Utama

- **Single Page Architecture:** Navigasi cepat dengan header sticky dan smooth scrolling.
- **Dark & Light Mode:** Dukungan tema gelap/terang otomatis mengikuti preferensi sistem dan disimpan di `localStorage`.
- **Desain Responsif:** Layout adaptif untuk layar mobile, tablet, dan desktop tanpa horizontal overflow.
- **Aksesibel & Semantik:** Menggunakan elemen HTML5 semantik, kontras warna yang nyaman, dan atribut ARIA.

## Menjalankan Proyek Secara Lokal

Buka file `index.html` langsung di browser, atau jalankan local server menggunakan Node.js/Bun:

```bash
# Menggunakan npx serve
npx serve .

# Atau menggunakan Python 3
python3 -m http.server 3000
```

Akses situs di browser melalui `http://localhost:3000`.
