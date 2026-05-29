# TR
# Hesap Makinesi
Karanlık temalı, animasyonlu, dört işlem ve ondalık sayı desteği sunan tarayıcı tabanlı hesap makinesi. Saf HTML, CSS ve Vanilla JavaScript ile geliştirilmiştir.

## Canlı Önizleme

Projeyi deploy ettikten sonra linki buraya ekleyin.


## Özellikler

- Dört İşlem — Toplama, çıkarma, çarpma ve bölme
- Ondalık Sayı Desteği — . butonuyla ondalık giriş; aynı sayıya ikinci nokta eklenmez
- Zincirleme İşlem — Sonuç üzerinden yeni işlem yapmaya devam edilebilir
- 7 Ondalık Hane Duyarlılığı — toFixed(7) ile yuvarlama hataları minimize edilir
- AC Butonu — Ekranı sıfırlar, tüm durum değişkenleri başa döner
- Ripple & Hover Animasyonları — Buton tıklamalarında ::after pseudo-element ile efekt, hover'da translateY ile kalkma
- Olay Delegasyonu — Her butona ayrı listener yerine tek click listener tüm ızgarayı yönetir
- clamp() ile Akışkan Yazı Boyutu — Ekran genişliğine göre otomatik ölçeklenen font


🎛️ Buton Düzeni
[ +  ]  [ -  ]  [ ×  ]  [ ÷  ]
[ 7  ]  [ 8  ]  [ 9  ]  [    ]
[ 4  ]  [ 5  ]  [ 6  ]  [ =  ]
[ 1  ]  [ 2  ]  [ 3  ]  [    ]
[ 0  ]  [ .  ]  [ AC ]  [    ]

= butonu CSS Grid ile sağ sütunda 4 satır boyunca uzanır (grid-area: 2 / 4 / 6 / 5).


⚙️ Durum Değişkenleri
DeğişkenAçıklamadisplayValueEkranda görünen değerfirstValueİlk girilen sayıoperatorSeçilen işlem operatörüwaitingForSecondValueİkinci sayı girişi bekleniyor mu?

🛠️ Teknolojiler
TeknolojiAçıklamaHTML5Semantik sayfa yapısıCSS3CSS değişkenleri, Grid, clamp(), @media sorgularıJavaScript (Vanilla)Hesap mantığı, DOM manipülasyonu, olay delegasyonuGoogle FontsDM Sans (arayüz), Space Mono (ekran ve butonlar)

📁 Proje Yapısı
calculator/
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── calculator.js

🚀 Kurulum
Proje herhangi bir bağımlılık gerektirmez.
bash# Repoyu klonlayın
git clone https://github.com/kullanici-adi/calculator.git

# Proje klasörüne girin
cd calculator

# index.html dosyasını tarayıcıda açın
open index.html

Not: calculator.js dosyası defer ile yüklenir; DOM hazır olmadan önce çalışmaz.


🎨 Tasarım Detayları

Tema: Tam karanlık (dark-only)
Renk Paleti (CSS değişkenleri):

--bg: #0f0f13 — Sayfa arka planı
--surface: #1a1a24 — Hesap makinesi yüzeyi
--accent: #7c6af7 — Mor vurgu (operatör butonları ve =)
--green: #4ade98 — Yeşil (ondalık nokta butonu)
--red: #f75a6a — Kırmızı (AC butonu)
--text-pri: #f0eeff — Birincil metin


Fontlar: DM Sans (arayüz) · Space Mono (ekran ve tuş takımı)
= Butonu: linear-gradient ile mor degrade, glow box-shadow ve grid'de tam sütun yüksekliği
Arka Plan: İki radial gradient ile mor ve yeşil ışıma efekti
Üst Işıma: .calculator::before ile ince yatay gradient çizgi
