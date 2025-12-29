# Portfolio Website - Moch Syaiful

Portfolio website untuk Backend Developer dengan tema terminal/command line.

## Teknologi

- HTML5
- CSS3
- JavaScript (Vanilla)
- Nginx (untuk Docker)

## Menjalankan dengan Docker Compose

### Prerequisites
- Docker
- Docker Compose

### Cara Menjalankan

1. Build dan jalankan container:
```bash
docker-compose up -d
```

2. Akses website di browser:
```
http://localhost:8080
```

3. Untuk melihat logs:
```bash
docker-compose logs -f
```

4. Untuk menghentikan:
```bash
docker-compose down
```

### Perintah Lainnya

- Rebuild container setelah perubahan:
```bash
docker-compose up -d --build
```

- Stop container:
```bash
docker-compose stop
```

- Start container yang sudah ada:
```bash
docker-compose start
```

## Menjalankan tanpa Docker

Buka file `index.html` langsung di browser atau gunakan web server sederhana:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (dengan http-server)
npx http-server -p 8000
```

## Struktur Project

```
portofolio/
├── index.html          # Halaman utama
├── style.css          # Stylesheet
├── script.js          # JavaScript
├── assets/            # Assets (images, icons)
├── Dockerfile         # Docker image configuration
├── docker-compose.yml # Docker Compose configuration
└── README.md          # Dokumentasi
```

