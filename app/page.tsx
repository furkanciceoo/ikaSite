'use client';

import React, { useState, useEffect } from 'react';

export default function TeknofestArac() {
  // MOBİL MENÜ STATE'İ
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 1. MEKANİK GÖRSELLERİ
  const mekanikGorseller = [
    'https://github.com/furkanciceoo/dneme/raw/917ab5164c857ef2e71584c662ca977c04c0d2d9/yandanGorunum.png',
    'https://github.com/furkanciceoo/dneme/raw/917ab5164c857ef2e71584c662ca977c04c0d2d9/sackutuGorsel.png',
    'https://github.com/furkanciceoo/dneme/raw/917ab5164c857ef2e71584c662ca977c04c0d2d9/ondenGorunum.png',
    'https://github.com/furkanciceoo/dneme/raw/917ab5164c857ef2e71584c662ca977c04c0d2d9/izometrikGorunum.png',
    'https://github.com/furkanciceoo/dneme/raw/917ab5164c857ef2e71584c662ca977c04c0d2d9/ackermanGorsel.png',
  ];

  // 2. ELEKTRONİK GÖRSELLERİ
  const elektronikGorseller = [
    'https://github.com/furkanciceoo/dneme/raw/1f712546427669202ef1088d7e9b9e42d4f4b135/image.png',
    'https://github.com/furkanciceoo/dneme/raw/66588145fe880d1a93f9a688b91241f8854dde12/image.png',
    'https://github.com/furkanciceoo/dneme/raw/6e5f58419e9a4d680a99f36dd820776f8b0572f2/Screenshot_2026-08-28-18-47-30-308_com.android.chrome-edit.jpg',
    'https://github.com/furkanciceoo/dneme/raw/6e5f58419e9a4d680a99f36dd820776f8b0572f2/Screenshot_2026-08-28-18-49-52-231_com.android.chrome-edit.jpg',
    'https://github.com/furkanciceoo/dneme/raw/6e5f58419e9a4d680a99f36dd820776f8b0572f2/Screenshot_2026-08-28-18-51-03-732_com.android.chrome-edit.jpg',
  ];

  // 3. YAZILIM GÖRSELLERİ
  const yazilimGorseller = [
    'https://github.com/furkanciceoo/dneme/raw/62c13b04c32b56a636a9944420dfc70067784f65/otoAkisSemasi.png',
    'https://github.com/furkanciceoo/dneme/raw/62c13b04c32b56a636a9944420dfc70067784f65/kanitGorseli.png',
    'https://github.com/furkanciceoo/dneme/raw/62c13b04c32b56a636a9944420dfc70067784f65/goruntuIslemeAkisSemasi.png',
    'https://github.com/furkanciceoo/siteExmp/raw/841b6c49cacc1b4e94af0845c1b6931311b66229/IMG-20260821-WA0017.jpg',
    'https://github.com/furkanciceoo/siteExmp/raw/841b6c49cacc1b4e94af0845c1b6931311b66229/IMG-20260821-WA0032.jpg',
  ];

  // 4. TEST & SİMÜLASYON GÖRSELLERİ
  const testGorseller = [
    'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  ];

  // 5. 15 KİŞİLİK EKİP VERİSİ
  const ekipUyeleri = [
    {
      isim: 'Mustafa Emre ERBIL',
      rol: 'Danisman',
      motto: 'Otonom algoritmalar ve proje koordinasyonu.',
      gorsel:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Feyza KORKMAZ',
      rol: 'Ekip Baskani, Surec Optimizasyon & Test Sorumlusu',
      motto: 'Otonom algoritmalar ve proje koordinasyonu.',
      gorsel:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Hakan OZDIL',
      rol: 'Takim Kaptani & Sasi Tasarim ve Imalat Sorumlusu',
      motto: 'Şasi dinamiği ve üretim süreçleri.',
      gorsel:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Serdar Ozturk YILDIRIM',
      rol: 'Teknik Resim Sorumlusu',
      motto: 'Güç dağıtımı ve sensör füzyonu.',
      gorsel:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Bugra OZTURK',
      rol: 'Ekip Baskani: Otomasyon & Navigasyon',
      motto: 'YOLOv8 ve derinlik kamerası optimizasyonu.',
      gorsel:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Kursat KILICARSLAN',
      rol: 'Gömülü Sistemler Sorumlusu',
      motto: 'Alt seviye kontrol (Arduino) ve BMS iletişimi.',
      gorsel:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Umit AKPINAR',
      rol: 'Gömülü Sistemler Sorumlusu',
      motto: 'Nav2 rotalama ve haritalama algoritmaları.',
      gorsel:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Furkan CICEK',
      rol: 'Gömülü Sistemler Sorumlusu',
      motto: 'PID kontrolcü ve lazer hedefleme sistemi.',
      gorsel:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Muhammet OZKAN',
      rol: 'Gömülü Sistemler Sorumlusu',
      motto: 'Dijital ikiz ve ROS2 test senaryoları.',
      gorsel:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Üye 9',
      rol: 'Haberleşme',
      motto: 'LoRa, GCS Terminali ve E-Stop protokolleri.',
      gorsel:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Yusuf Eren BOZKURT',
      rol: 'Gömülü Sistemler Sorumlusu',
      motto: 'Batarya, dönüştürücüler ve aşırı akım koruması.',
      gorsel:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Yagiz CENGIZ',
      rol: 'Gömülü Sistemler Sorumlusu',
      motto: 'Alüminyum sigma montajı ve yapısal analiz.',
      gorsel:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Muhammed Yahya ARSLANHAN',
      rol: 'Ekip Baskani, Arac Mekanizasyonu, Sasi Kontrolu ve Genel Sistem Entegresyonu',
      motto: 'Bağımsız süspansiyon ve direksiyon geometrisi.',
      gorsel:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Ahmet Efe NEZLI',
      rol: 'Optik Algilama, Haritalama ve Taret Sistemi',
      motto: 'Birim testleri ve log yönetimi.',
      gorsel:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Muhammed Armagan SAMAST',
      rol: 'Guc Elektronigi ve Enerji Yonetimi',
      motto: 'Takım iletişimi ve sosyal medya yönetimi.',
      gorsel:
        'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=400&auto=format&fit=crop',
    },
    {
      isim: 'Selim Dincer ',
      rol: 'Sensor Agi, Veri Akis Yonetimi ve Kalibrasyonu',
      motto: 'Projenin bilimsel ve teknik danışmanlığı.',
      gorsel:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    },
  ];

  const [currentMekanikImage, setCurrentMekanikImage] = useState(0);
  const [currentElektronikImage, setCurrentElektronikImage] = useState(0);
  const [currentYazilimImage, setCurrentYazilimImage] = useState(0);
  const [currentTestImage, setCurrentTestImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMekanikImage((prev) => (prev + 1) % mekanikGorseller.length);
      setCurrentElektronikImage(
        (prev) => (prev + 1) % elektronikGorseller.length
      );
      setCurrentYazilimImage((prev) => (prev + 1) % yazilimGorseller.length);
      setCurrentTestImage((prev) => (prev + 1) % testGorseller.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [
    mekanikGorseller.length,
    elektronikGorseller.length,
    yazilimGorseller.length,
    testGorseller.length,
  ]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap');
          .font-montserrat {
            font-family: 'Montserrat', sans-serif;
          }
          body {
            overflow-x: hidden;
          }
        `,
        }}
      />

      <div className="min-h-screen bg-white text-gray-800 font-montserrat scroll-smooth">
        {/* Üst Menü (Navbar) */}
        <nav className="p-4 md:px-12 flex justify-between items-center bg-white/90 backdrop-blur-md sticky top-0 z-50 w-full border-b border-slate-100">
          <div className="flex items-center gap-3 md:gap-5">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 border border-slate-200 rounded flex items-center justify-center text-[10px] text-slate-400 tracking-widest shrink-0">
              LOGO
            </div>

            <div className="text-xl md:text-3xl text-rose-700 tracking-wider md:tracking-[0.2em] flex items-center gap-2 md:gap-6">
              <span className="font-light text-slate-500 text-base md:text-2xl">
                MAGNESIA
              </span>
              <span className="text-slate-300 font-light text-base md:text-2xl">
                |
              </span>
              <span className="font-bold">LYDIA</span>
            </div>
          </div>

          {/* Masaüstü Menü Bağlantıları */}
          <div className="hidden md:flex space-x-8 text-[13px] font-medium text-slate-700 tracking-wide">
            <a
              href="#sistem-mimarisi"
              className="hover:text-rose-700 transition-colors"
            >
              Sistem Mimarisi
            </a>
            <a
              href="#mekanik-donanim"
              className="hover:text-rose-700 transition-colors"
            >
              Mekanik Tasarım
            </a>
            <a
              href="#elektronik-donanim"
              className="hover:text-rose-700 transition-colors"
            >
              Elektronik Tasarım
            </a>
            <a
              href="#otonomi-yazilim"
              className="hover:text-rose-700 transition-colors"
            >
              Otonomi &amp; Yazılım
            </a>
            <a
              href="#test-simulasyon"
              className="hover:text-rose-700 transition-colors"
            >
              Test &amp; Simülasyon
            </a>
            <a
              href="#ekibimiz"
              className="hover:text-rose-700 transition-colors"
            >
              Ekibimiz
            </a>
          </div>

          {/* Mobil Hamburger Menü Butonu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-rose-700 focus:outline-none"
            aria-label="Menüyü Aç/Kapat"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobil Menü Açılır Alanı */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col space-y-4 text-sm font-medium text-slate-700 shadow-lg md:hidden">
              <a
                href="#sistem-mimarisi"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-rose-700 transition-colors py-1 border-b border-slate-50"
              >
                Sistem Mimarisi
              </a>
              <a
                href="#mekanik-donanim"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-rose-700 transition-colors py-1 border-b border-slate-50"
              >
                Mekanik Tasarım
              </a>
              <a
                href="#elektronik-donanim"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-rose-700 transition-colors py-1 border-b border-slate-50"
              >
                Elektronik Tasarım
              </a>
              <a
                href="#otonomi-yazilim"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-rose-700 transition-colors py-1 border-b border-slate-50"
              >
                Otonomi &amp; Yazılım
              </a>
              <a
                href="#test-simulasyon"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-rose-700 transition-colors py-1 border-b border-slate-50"
              >
                Test &amp; Simülasyon
              </a>
              <a
                href="#ekibimiz"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-rose-700 transition-colors py-1"
              >
                Ekibimiz
              </a>
            </div>
          )}
        </nav>

        {/* Kahraman Alanı (Hero Section) */}
        <header className="relative flex flex-col justify-center h-[80vh] md:h-[90vh] w-full px-0 overflow-hidden bg-white m-0 text-left">
          <div className="absolute inset-0 w-full h-full overflow-hidden m-0 p-0 z-0">
            <img
              src="https://raw.githubusercontent.com/furkanciceoo/dneme/475bdd01428b195e7006e896bfcf278e5dfcb088/IMG-20260821-WA0044.jpg"
              alt="Teknofest Aracı Arka Plan"
              className="w-full h-full object-cover m-0 p-0 block"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to bottom, black 60%, transparent 100%)',
                maskImage:
                  'linear-gradient(to bottom, black 60%, transparent 100%)',
              }}
            />
          </div>
          <div className="absolute inset-0 bg-white/40 z-10 pointer-events-none"></div>

          <div className="relative z-20 flex flex-col items-start w-full max-w-7xl mx-auto px-6 md:pl-[68px]">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[50px] font-light text-slate-900 drop-shadow-md tracking-wide leading-[1.2] md:leading-[1.1]">
              2026 TEKNOFEST <br />
              İNSANSIZ KARA ARACI FİNALİSTİ
              <br /> <span className="font-bold text-rose-800">LYDIA...</span>
            </h1>
          </div>
        </header>

        {/* 1. SİSTEM MİMARİSİ BÖLÜMÜ */}
        <section
          id="sistem-mimarisi"
          className="py-16 md:py-24 bg-white px-4 md:px-10 min-h-[60vh]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-light mb-4 text-slate-900 tracking-widest uppercase">
                Sistem Mimarisi
              </h2>
              <p className="text-slate-500 max-w-3xl mx-auto text-xs md:text-[14px] font-normal leading-relaxed tracking-wide px-2">
                MAGNESIA LYDIA, zorlu saha koşullarında yüksek performans
                göstermek üzere donanım ve yazılımın kusursuz birleşimiyle
                modüler bir mimaride tasarlanmıştır.
              </p>
            </div>

            <div className="mb-16 md:mb-24 max-w-5xl mx-auto flex items-center justify-center min-h-[200px] md:min-h-[300px]">
              <img
                src="https://github.com/furkanciceoo/dneme/raw/917ab5164c857ef2e71584c662ca977c04c0d2d9/sistemBlokSema.png"
                alt="MAGNESIA LYDIA Sistem Blok Şeması"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* BİLGİ KARTLARI VE GÖRSEL KAPSAYICISI */}
            <div className="flex flex-col gap-16 md:gap-24 w-full">
              {/* --- MEKANİK TASARIM --- */}
              <div
                id="mekanik-donanim"
                className="flex flex-col md:flex-row gap-8 md:gap-10 items-start justify-between group pt-6 md:pt-10"
              >
                {/* Sol Taraf: Sola Yakın Başlık ve Bilgi Kartları */}
                <div className="w-full md:w-[50%] flex flex-col text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1 h-10 md:h-14 bg-rose-700 rounded-full shrink-0"></div>
                    <h3 className="text-2xl md:text-4xl font-light text-slate-900 tracking-wide">
                      Mekanik
                      <br />
                      <span className="text-xl md:text-2xl text-slate-500">
                        Tasarım
                      </span>
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs md:text-[14px] leading-relaxed md:leading-[2em] mb-6 font-normal tracking-wide">
                    Araç, malzeme mukavemetini (275 MPa) korumak adına kaynak
                    yerine{' '}
                    <strong className="font-medium text-slate-900">
                      modüler cıvatalı montaj
                    </strong>{' '}
                    ile üretilmiş 6061-T6 alüminyum sigma şasiye sahiptir. Zorlu
                    arazi şokları, özel çelik alt bağlantı plakaları ve bağımsız
                    süspansiyonlar ile homojen şekilde sönümlenmektedir.
                  </p>
                  <ul className="text-xs md:text-[14px] font-normal text-slate-600 space-y-4 tracking-wide">
                    <li className="flex items-start gap-3 md:gap-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="leading-relaxed md:leading-[1.8em]">
                        <strong className="font-medium text-slate-900">
                          &quot;Fail-Safe&quot; Fren Sistemi:
                        </strong>{' '}
                        Enerji kesildiğinde aracı otomatik kilitleyen hidrolik
                        ve yaylı yapı.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="leading-relaxed md:leading-[1.8em]">
                        <strong className="font-medium text-slate-900">
                          İzole Muhafaza:
                        </strong>{' '}
                        Faraday Kafesi etkisini kırmak için tasarlanmış çift
                        katmanlı elektronik koruma.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="leading-relaxed md:leading-[1.8em]">
                        <strong className="font-medium text-slate-900">
                          Fiziksel Form:
                        </strong>{' '}
                        180x115x82 cm ölçüler, 28 cm zemin kleransı ve optimize
                        ağırlık (~85 kg).
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Sağ Taraf: Görsel Çerçevesi */}
                <div className="w-full md:w-[47%] shrink-0 flex justify-end">
                  <div className="relative w-full aspect-[4/3] max-h-[350px] md:max-h-[390px] rounded-lg bg-slate-50 overflow-hidden border border-slate-200 shadow-sm">
                    {mekanikGorseller.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Mekanik Görsel ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-1000 ease-in-out ${
                          index === currentMekanikImage
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* --- ELEKTRONİK TASARIM --- */}
              <div
                id="elektronik-donanim"
                className="flex flex-col md:flex-row gap-8 md:gap-10 items-start justify-between group pt-6 md:pt-10"
              >
                {/* Sol Taraf: Sola Yakın Başlık ve Bilgi Kartları */}
                <div className="w-full md:w-[50%] flex flex-col text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1 h-10 md:h-14 bg-rose-700 rounded-full shrink-0"></div>
                    <h3 className="text-2xl md:text-4xl font-light text-slate-900 tracking-wide">
                      Elektronik
                      <br />
                      <span className="text-xl md:text-2xl text-slate-500">
                        Tasarım
                      </span>
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs md:text-[14px] leading-relaxed md:leading-[2em] mb-6 font-normal tracking-wide">
                    Sistem güvenilirliği ve hata toleransı (Fail-Safe) merkeze
                    alınarak, tahrik (motor) ve otopilot donanımları{' '}
                    <strong className="font-medium text-slate-900">
                      iki bağımsız ve yalıtılmış güç hattı
                    </strong>{' '}
                    üzerine inşa edilmiştir. Yüksek işlem gücü gerektiren yapay
                    zeka görevleri NVIDIA Jetson Orin Nano ile, alt seviye acil
                    durum protokolleri ise Arduino destekli donanımlarla güvence
                    altına alınmıştır.
                  </p>
                  <ul className="text-xs md:text-[14px] font-normal text-slate-600 space-y-4 tracking-wide">
                    <li className="flex items-start gap-3 md:gap-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="leading-relaxed md:leading-[1.8em]">
                        <strong className="font-medium text-slate-900">
                          İzole Güç Mimarisi:
                        </strong>{' '}
                        Tahrik için 48V LiFePO4, kontrol için 14.8V LiPo batarya
                        kullanılmış olup, sistem JK &amp; Daly Smart
                        BMS&apos;ler ile korunmaktadır.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="leading-relaxed md:leading-[1.8em]">
                        <strong className="font-medium text-slate-900">
                          Sensör Füzyonu:
                        </strong>{' '}
                        MPU9250 (9-eksen) IMU konumlandırmayı sağlarken, Tmini
                        Pro 2D LiDAR ve OS30A derinlik kamerası çevre algısını
                        oluşturur.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="leading-relaxed md:leading-[1.8em]">
                        <strong className="font-medium text-slate-900">
                          Otonom Taret Sistemi:
                        </strong>{' '}
                        Hedef tespiti için IMX258 kamera, stabilizasyon için
                        BMI160 IMU ve işaretleme için 520nm yeşil lazer modülü
                        entegre edilmiştir.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Sağ Taraf: Görsel Çerçevesi */}
                <div className="w-full md:w-[47%] shrink-0 flex justify-end">
                  <div className="relative w-full aspect-[4/3] max-h-[350px] md:max-h-[390px] rounded-lg bg-slate-50 overflow-hidden border border-slate-100 flex items-center justify-center shadow-sm">
                    {elektronikGorseller.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Elektronik Görsel ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-1000 ease-in-out ${
                          index === currentElektronikImage
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* --- YAZILIM MİMARİSİ --- */}
              <div
                id="otonomi-yazilim"
                className="flex flex-col md:flex-row gap-8 md:gap-10 items-start justify-between group pt-6 md:pt-10"
              >
                {/* Sol Taraf: Sola Yakın Başlık ve Bilgi Kartları */}
                <div className="w-full md:w-[50%] flex flex-col text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1 h-10 md:h-14 bg-rose-700 rounded-full shrink-0"></div>
                    <h3 className="text-2xl md:text-4xl font-light text-slate-900 tracking-wide">
                      Yazılım
                      <br />
                      <span className="text-xl md:text-2xl text-slate-500">
                        Mimarisi
                      </span>
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs md:text-[14px] leading-relaxed md:leading-[2em] mb-6 font-normal tracking-wide">
                    Modülerlik ve yüksek performans amacıyla{' '}
                    <strong className="font-medium text-slate-900">
                      ROS2 Humble (DDS tabanlı) middleware
                    </strong>{' '}
                    üzerine inşa edilen sistem, Python 3 ve C++ ile
                    geliştirilmiştir. Yapay zeka destekli algı, gelişmiş sensör
                    füzyonu ve görev bazlı dinamik karar mekanizmalarıyla (SMACH
                    FSM) tam otonomi sağlanmaktadır.
                  </p>

                  <ul className="text-xs md:text-[14px] font-normal text-slate-600 space-y-4 tracking-wide">
                    <li className="flex items-start gap-3 md:gap-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="leading-relaxed md:leading-[1.8em]">
                        <strong className="font-medium text-slate-900">
                          SLAM &amp; Nav2 Entegrasyonu:
                        </strong>{' '}
                        EKF (Extended Kalman Filter) ile birleştirilen 6 eksenli
                        sensör verileri, SmacPlannerHybrid ve Regulated Pure
                        Pursuit algoritmalarıyla engellerden kaçış ve pürüzsüz
                        iz takibi sağlar.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="leading-relaxed md:leading-[1.8em]">
                        <strong className="font-medium text-slate-900">
                          Yapay Zeka (YOLOv8-TensorRT):
                        </strong>{' '}
                        Parkurdaki engelleri ve tabelaları gerçek zamanlı tespit
                        ederek aracın hızını, süspansiyon tepkisini ve rotasını
                        anlık optimize eder.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="leading-relaxed md:leading-[1.8em]">
                        <strong className="font-medium text-slate-900">
                          Akıllı Taret &amp; PID Kontrolcü:
                        </strong>{' '}
                        YOLOv8 ile hedef merkez tespiti yapılır; piksel farkı
                        PID denetleyicisine beslenerek &plusmn;5 piksel
                        kararlılık sağlandığında lazer ateşlenir.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="leading-relaxed md:leading-[1.8em]">
                        <strong className="font-medium text-slate-900">
                          Üç Katmanlı Haberleşme (LoRa):
                        </strong>{' '}
                        Sistem içi veri akışı CycloneDDS ile &lt;1ms hızında
                        sağlanırken, GCS (Yer İstasyonu) telemetrisi ve E-Stop
                        komutları 915 MHz LoRa üzerinden aktarılır.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Sağ Taraf: Görsel Çerçevesi */}
                <div className="w-full md:w-[47%] shrink-0 flex justify-end">
                  <div className="relative w-full aspect-[4/3] max-h-[350px] md:max-h-[390px] rounded-lg bg-slate-50 overflow-hidden border border-slate-100 flex items-center justify-center shadow-sm">
                    {yazilimGorseller.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Yazılım Görsel ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-1000 ease-in-out ${
                          index === currentYazilimImage
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* --- TEST VE SİMÜLASYON --- */}
              <div
                id="test-simulasyon"
                className="flex flex-col md:flex-row gap-8 md:gap-10 items-start justify-between group pt-6 md:pt-10"
              >
                {/* Sol Taraf: Sola Yakın Başlık ve Bilgi Kartları */}
                <div className="w-full md:w-[50%] flex flex-col text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1 h-10 md:h-14 bg-rose-700 rounded-full shrink-0"></div>
                    <h3 className="text-2xl md:text-4xl font-light text-slate-900 tracking-wide">
                      Test &amp;
                      <br />
                      <span className="text-xl md:text-2xl text-slate-500">
                        Simülasyon
                      </span>
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs md:text-[14px] leading-relaxed md:leading-[2em] mb-6 font-normal tracking-wide">
                    LYDIA platformunun güvenilirliği; Birim, Entegrasyon ve
                    Sistem olmak üzere üç temel seviyede yürütülen zorlu test
                    senaryolarıyla kanıtlanmaktadır. Hem dijital ikiz üzerinden
                    yapılan ROS2/Gazebo simülasyonları hem de zorlu saha
                    koşullarındaki fiziksel denemeler ile aracın yarışma
                    parkuruna kusursuz hazırlığı sağlanmaktadır.
                  </p>

                  <ul className="text-xs md:text-[14px] font-normal text-slate-600 space-y-4 tracking-wide">
                    <li className="flex items-start gap-3 md:gap-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="leading-relaxed md:leading-[1.8em]">
                        <strong className="font-medium text-slate-900">
                          Fiziksel Dayanım &amp; Mekanik Testler:
                        </strong>{' '}
                        %45 eğimde &quot;Fail-Safe&quot; fren tutunması, şasi
                        maksimum kuvvet dayanımı ve süspansiyon esneme/klerans
                        testleri ile donanım sınırları fiziksel olarak
                        zorlanmaktadır.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="leading-relaxed md:leading-[1.8em]">
                        <strong className="font-medium text-slate-900">
                          Yazılım &amp; Simülasyon (Gazebo/WSL2):
                        </strong>{' '}
                        TF zinciri bütünlüğü, Nav2 ile otonom hedefe ulaşma ve
                        dinamik engellerden kaçınma algoritmaları gerçek dünya
                        testlerinden önce sanal ortamda doğrulanmıştır.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="leading-relaxed md:leading-[1.8em]">
                        <strong className="font-medium text-slate-900">
                          Sistem Entegrasyonu &amp; Tam Parkur:
                        </strong>{' '}
                        Tam yük altında güç dağılımı, acil durum (E-Stop) tepki
                        süreleri ve donanımların sızdırmazlığını kanıtlayan su
                        geçişi dahil tüm otonom parkur aşamaları sahada test
                        edilmektedir.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Sağ Taraf: Görsel Çerçevesi */}
                <div className="w-full md:w-[47%] shrink-0 flex justify-end">
                  <div className="relative w-full aspect-[4/3] max-h-[350px] md:max-h-[390px] rounded-lg bg-slate-50 overflow-hidden border border-slate-100 flex items-center justify-center shadow-sm">
                    {testGorseller.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Test Görsel ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-1000 ease-in-out ${
                          index === currentTestImage
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EKİBİMİZ BÖLÜMÜ */}
        <section
          id="ekibimiz"
          className="py-16 md:py-24 bg-slate-50 px-4 md:px-6 border-t border-slate-100"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-light mb-4 text-slate-900 tracking-widest uppercase">
                Ekibimiz
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-xs md:text-[14px] font-normal leading-relaxed tracking-wide px-2">
                Farklı mühendislik disiplinlerinden gelen, otonom sistemler ve
                savunma sanayii teknolojilerine tutkulu 15 kişilik dev
                geliştirici kadromuz.
              </p>
            </div>

            {/* EKİP GRID YAPISI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto justify-items-center">
              {ekipUyeleri.map((uye, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white rounded border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group w-full max-w-[300px]"
                >
                  {/* Fotoğraf Alanı */}
                  <div className="w-full aspect-square overflow-hidden bg-slate-100 relative">
                    <img
                      src={uye.gorsel}
                      alt={uye.isim}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                  </div>

                  {/* Bilgi Alanı */}
                  <div className="p-5 md:p-6 flex flex-col flex-grow text-center items-center">
                    <h4 className="text-base md:text-lg font-bold text-slate-900 tracking-wide">
                      {uye.isim}
                    </h4>
                    <span className="text-rose-700 text-xs font-semibold tracking-widest uppercase mt-1 mb-3">
                      {uye.rol}
                    </span>
                    <p className="text-slate-500 text-xs md:text-[13px] leading-relaxed font-light mb-4 flex-grow">
                      {uye.motto}
                    </p>

                    {/* Sosyal Medya İkonları */}
                    <div className="flex gap-4 mt-auto pt-4 border-t border-slate-50 w-full justify-center">
                      <a
                        href="#"
                        className="text-slate-300 hover:text-slate-900 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-slate-300 hover:text-slate-900 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
