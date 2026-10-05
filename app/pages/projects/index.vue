<template>
  <section class="py-16 space-y-6">

    <div>
      <p class="eyebrow">Selected work</p>
      <h1 class="section-title">Projects</h1>
      <p class="section-sub">
        Production systems built across logistics, finance, and payment infrastructure.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-5 pt-2">

      <!-- PT DESA AIR CARGO -->
      <div class="card">
        <svg class="card-illus" viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="360" height="320" fill="#0a1a12"/>
          <circle cx="300" cy="40" r="90" fill="#0d2b1a" opacity=".7"/>
          <circle cx="60" cy="260" r="70" fill="#0a2214" opacity=".6"/>
          <g opacity=".45">
            <rect x="40" y="80" width="80" height="55" rx="5" fill="none" stroke="#1adb7a" stroke-width=".8"/>
            <rect x="50" y="92" width="55" height="5" rx="2" fill="#1adb7a" opacity=".4"/>
            <rect x="50" y="103" width="40" height="3" rx="1" fill="#1adb7a" opacity=".25"/>
            <rect x="50" y="112" width="48" height="3" rx="1" fill="#1adb7a" opacity=".25"/>
            <polyline points="50,125 58,117 66,122 74,111 82,115 90,108 98,114 106,106" fill="none" stroke="#1adb7a" stroke-width="1.2"/>
          </g>
          <g opacity=".35" transform="translate(200,60)">
            <circle cx="0" cy="0" r="28" fill="none" stroke="#1adb7a" stroke-width=".6" stroke-dasharray="4 3"/>
            <circle cx="0" cy="0" r="18" fill="none" stroke="#1adb7a" stroke-width=".5"/>
            <line x1="-28" y1="0" x2="28" y2="0" stroke="#1adb7a" stroke-width=".4" opacity=".5"/>
            <line x1="0" y1="-28" x2="0" y2="28" stroke="#1adb7a" stroke-width=".4" opacity=".5"/>
            <circle cx="-12" cy="-8" r="2.5" fill="#1adb7a" opacity=".6"/>
            <circle cx="14" cy="10" r="2" fill="#1adb7a" opacity=".5"/>
            <circle cx="6" cy="-16" r="1.5" fill="#1adb7a" opacity=".4"/>
          </g>
          <g opacity=".3" transform="translate(160,190)">
            <rect x="-50" y="-20" width="100" height="40" rx="4" fill="none" stroke="#1adb7a" stroke-width=".6"/>
            <rect x="-42" y="-12" width="35" height="4" rx="2" fill="#1adb7a" opacity=".5"/>
            <rect x="-42" y="-4" width="60" height="3" rx="1" fill="#1adb7a" opacity=".3"/>
            <rect x="-42" y="5" width="50" height="3" rx="1" fill="#1adb7a" opacity=".3"/>
            <rect x="18" y="-12" width="18" height="24" rx="2" fill="#1adb7a" opacity=".15"/>
          </g>
          <line x1="0" y1="140" x2="360" y2="140" stroke="#1adb7a" stroke-width=".3" opacity=".2"/>
          <line x1="120" y1="0" x2="120" y2="320" stroke="#1adb7a" stroke-width=".3" opacity=".15"/>
          <line x1="240" y1="0" x2="240" y2="320" stroke="#1adb7a" stroke-width=".3" opacity=".15"/>
        </svg>
        <div class="card-overlay"></div>
        <div class="card-body">
          <div>
            <div class="card-accent" style="background:#10b981"></div>
            <span class="card-year" style="color:#10b981">2019</span>
          </div>
          <div>
            <h3 class="card-title">Sistem Informasi Manajemen Operasional</h3>
            <p class="card-company">PT Desa Air Cargo Batam</p>
          </div>
          <p class="card-desc">
            Sistem manajemen operasional pengolahan limbah B3 berbasis web. Mengoptimalkan
            proses administrasi dan meningkatkan transparansi pengelolaan limbah dari sisi operasional.
          </p>
          <div class="tags-tech">
            <span class="tag-tech">CodeIgniter 3</span>
            <span class="tag-tech">Bootstrap</span>
            <span class="tag-tech">MySQL</span>
          </div>
          <div class="tags-cat">
            <span class="tag-cat" style="background:rgba(16,185,129,.12);color:#34d399">Limbah B3</span>
            <span class="tag-cat" style="background:rgba(6,182,212,.12);color:#67e8f9">Administrasi</span>
            <span class="tag-cat" style="background:rgba(6,182,212,.12);color:#67e8f9">Transparansi</span>
          </div>
          <div class="card-actions">
            <NuxtLink to="/projects/desa-air-cargo" class="btn">
              <Icon name="mdi:information-outline" /> Detail
            </NuxtLink>
            <button disabled class="btn btn-disabled">
              <Icon name="mdi:arrow-right" /> Demo — Internal
            </button>
          </div>
        </div>
      </div>

      <!-- PT LINTAS SAMUDERA -->
      <div class="card">
        <svg class="card-illus" viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="360" height="320" fill="#080e1a"/>
          <circle cx="320" cy="30" r="100" fill="#081630" opacity=".7"/>
          <circle cx="40" cy="280" r="80" fill="#06102a" opacity=".6"/>
          <g opacity=".5" transform="translate(60,60)">
            <rect x="0" y="0" width="70" height="50" rx="4" fill="none" stroke="#3b82f6" stroke-width=".8"/>
            <rect x="8" y="10" width="30" height="4" rx="2" fill="#3b82f6" opacity=".5"/>
            <rect x="8" y="20" width="50" height="3" rx="1" fill="#3b82f6" opacity=".3"/>
            <rect x="8" y="28" width="42" height="3" rx="1" fill="#3b82f6" opacity=".3"/>
            <rect x="8" y="36" width="38" height="3" rx="1" fill="#3b82f6" opacity=".3"/>
          </g>
          <g opacity=".4" transform="translate(200,50)">
            <rect x="-5" y="0" width="80" height="14" rx="3" fill="none" stroke="#3b82f6" stroke-width=".7"/>
            <rect x="-5" y="22" width="65" height="14" rx="3" fill="none" stroke="#3b82f6" stroke-width=".7"/>
            <rect x="-5" y="44" width="72" height="14" rx="3" fill="none" stroke="#3b82f6" stroke-width=".7"/>
            <line x1="30" y1="14" x2="30" y2="22" stroke="#3b82f6" stroke-width=".6" opacity=".5"/>
            <line x1="30" y1="36" x2="30" y2="44" stroke="#3b82f6" stroke-width=".6" opacity=".5"/>
            <circle cx="30" cy="7" r="2" fill="#3b82f6" opacity=".5"/>
            <circle cx="30" cy="29" r="2" fill="#3b82f6" opacity=".4"/>
            <circle cx="30" cy="51" r="2" fill="#3b82f6" opacity=".3"/>
          </g>
          <g opacity=".3" transform="translate(30,180)">
            <polyline points="0,60 30,40 60,50 90,20 120,35 150,10 180,25 210,5" fill="none" stroke="#3b82f6" stroke-width="1.2"/>
            <circle cx="90" cy="20" r="3.5" fill="#3b82f6" opacity=".6"/>
            <circle cx="150" cy="10" r="3.5" fill="#3b82f6" opacity=".6"/>
            <line x1="0" y1="65" x2="210" y2="65" stroke="#3b82f6" stroke-width=".4" opacity=".3"/>
          </g>
          <g opacity=".25">
            <line x1="0" y1="0" x2="360" y2="320" stroke="#3b82f6" stroke-width=".3"/>
            <line x1="360" y1="0" x2="0" y2="320" stroke="#3b82f6" stroke-width=".3"/>
          </g>
        </svg>
        <div class="card-overlay" style="background:linear-gradient(160deg,rgba(8,14,26,.15) 0%,rgba(8,14,26,.82) 55%,rgba(8,14,26,.97) 100%)"></div>
        <div class="card-body">
          <div>
            <div class="card-accent" style="background:#3b82f6"></div>
            <span class="card-year" style="color:#60a5fa">2022</span>
          </div>
          <div>
            <h3 class="card-title">Sistem Ekspedisi & ERP</h3>
            <p class="card-company">PT Lintas Samudera Jaya Express</p>
          </div>
          <p class="card-desc">
            Platform ERP lengkap untuk optimalisasi operasional logistik: manajemen STT & resi,
            penjurnalan keuangan otomatis, modul HRD, serta pelaporan terintegrasi.
          </p>
          <div class="tags-tech">
            <span class="tag-tech">Laravel</span>
            <span class="tag-tech">MySQL</span>
            <span class="tag-tech">Blade</span>
          </div>
          <div class="tags-cat">
            <span class="tag-cat" style="background:rgba(59,130,246,.12);color:#93c5fd">Logistik</span>
            <span class="tag-cat" style="background:rgba(245,158,11,.12);color:#fcd34d">Finance</span>
            <span class="tag-cat" style="background:rgba(16,185,129,.12);color:#6ee7b7">HRD</span>
          </div>
          <div class="card-actions">
            <NuxtLink to="/projects/lintas-samudera" class="btn">
              <Icon name="mdi:information-outline" /> Detail
            </NuxtLink>
            <button disabled class="btn btn-disabled">
              <Icon name="mdi:arrow-right" /> Demo — Internal
            </button>
          </div>
        </div>
      </div>

      <!-- DALWA PAYMENT -->
      <div class="card">
        <svg class="card-illus" viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="360" height="320" fill="#100e06"/>
          <circle cx="290" cy="50" r="110" fill="#1e1600" opacity=".8"/>
          <circle cx="50" cy="270" r="75" fill="#1a1200" opacity=".6"/>
          <g opacity=".45" transform="translate(50,55)">
            <rect x="0" y="0" width="105" height="65" rx="7" fill="none" stroke="#f59e0b" stroke-width=".9"/>
            <rect x="0" y="16" width="105" height="1" stroke="#f59e0b" stroke-width=".5" opacity=".3"/>
            <rect x="10" y="6" width="22" height="6" rx="2" fill="#f59e0b" opacity=".25"/>
            <circle cx="88" cy="9" r="4" fill="none" stroke="#f59e0b" stroke-width=".7" opacity=".5"/>
            <rect x="10" y="25" width="45" height="4" rx="2" fill="#f59e0b" opacity=".2"/>
            <rect x="10" y="35" width="60" height="3" rx="1" fill="#f59e0b" opacity=".15"/>
            <rect x="10" y="44" width="30" height="8" rx="3" fill="#f59e0b" opacity=".2"/>
            <rect x="50" y="44" width="45" height="8" rx="3" fill="#f59e0b" opacity=".12"/>
          </g>
          <g opacity=".4" transform="translate(220,90)">
            <rect x="-30" y="-30" width="60" height="60" rx="4" fill="none" stroke="#f59e0b" stroke-width=".8"/>
            <rect x="-20" y="-20" width="40" height="40" rx="2" fill="none" stroke="#f59e0b" stroke-width=".6"/>
            <rect x="-10" y="-10" width="20" height="20" rx="1" fill="#f59e0b" opacity=".2"/>
            <line x1="-30" y1="0" x2="-20" y2="0" stroke="#f59e0b" stroke-width=".5"/>
            <line x1="20" y1="0" x2="30" y2="0" stroke="#f59e0b" stroke-width=".5"/>
            <line x1="0" y1="-30" x2="0" y2="-20" stroke="#f59e0b" stroke-width=".5"/>
            <line x1="0" y1="20" x2="0" y2="30" stroke="#f59e0b" stroke-width=".5"/>
          </g>
          <g opacity=".3" transform="translate(40,190)">
            <circle cx="0" cy="0" r="15" fill="none" stroke="#f59e0b" stroke-width=".7"/>
            <line x1="15" y1="0" x2="55" y2="0" stroke="#f59e0b" stroke-width=".6" stroke-dasharray="3 2"/>
            <circle cx="70" cy="0" r="15" fill="none" stroke="#f59e0b" stroke-width=".7"/>
            <line x1="85" y1="0" x2="125" y2="0" stroke="#f59e0b" stroke-width=".6" stroke-dasharray="3 2"/>
            <circle cx="140" cy="0" r="15" fill="none" stroke="#f59e0b" stroke-width=".7"/>
            <text x="-7" y="4" font-size="9" fill="#f59e0b" opacity=".6" font-family="monospace">VA</text>
            <text x="58" y="4" font-size="7" fill="#f59e0b" opacity=".6" font-family="monospace">GW</text>
            <text x="126" y="4" font-size="7" fill="#f59e0b" opacity=".6" font-family="monospace">APP</text>
          </g>
          <g opacity=".2">
            <line x1="0" y1="80" x2="360" y2="80" stroke="#f59e0b" stroke-width=".4" stroke-dasharray="6 4"/>
            <line x1="0" y1="160" x2="360" y2="160" stroke="#f59e0b" stroke-width=".4" stroke-dasharray="6 4"/>
            <line x1="0" y1="240" x2="360" y2="240" stroke="#f59e0b" stroke-width=".4" stroke-dasharray="6 4"/>
          </g>
        </svg>
        <div class="card-overlay" style="background:linear-gradient(160deg,rgba(16,14,6,.15) 0%,rgba(16,14,6,.82) 55%,rgba(16,14,6,.97) 100%)"></div>
        <div class="card-body">
          <div>
            <div class="card-accent" style="background:#f59e0b"></div>
            <span class="card-year" style="color:#fbbf24">2025 – 2026</span>
          </div>
          <div>
            <h3 class="card-title">Payment Channel Integration</h3>
            <p class="card-company">PT Santechnology — Dalwa</p>
          </div>
          <p class="card-desc">
            Sistem manajemen payment gateway internal: integrasi antar bank ke aplikasi internal
            Dalwa untuk keperluan transaksi santri. Mendukung multi-channel dan rekonsiliasi otomatis.
          </p>
          <div class="tags-tech">
            <span class="tag-tech">Laravel 11</span>
            <span class="tag-tech">Vue 3</span>
            <span class="tag-tech">Inertia.js</span>
            <span class="tag-tech">Midtrans</span>
            <span class="tag-tech">Espay</span>
            <span class="tag-tech">MySQL</span>
          </div>
          <div class="tags-cat">
            <span class="tag-cat" style="background:rgba(245,158,11,.12);color:#fcd34d">Payment Gateway</span>
            <span class="tag-cat" style="background:rgba(239,68,68,.12);color:#fca5a5">VA / QRIS</span>
            <span class="tag-cat" style="background:rgba(168,85,247,.12);color:#d8b4fe">Multi-bank</span>
            <span class="tag-cat" style="background:rgba(59,130,246,.12);color:#93c5fd">Santri</span>
          </div>
          <div class="card-actions">
            <NuxtLink to="/projects/dalwa-payment" class="btn">
              <Icon name="mdi:information-outline" /> Detail
            </NuxtLink>
            <button disabled class="btn btn-disabled">
              <Icon name="mdi:arrow-right" /> Demo — Private
            </button>
          </div>
        </div>
      </div>

      <!-- ERP ACCOUNTING -->
      <div class="card">
        <svg class="card-illus" viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="360" height="320" fill="#0d0814"/>
          <circle cx="310" cy="40" r="95" fill="#160d22" opacity=".75"/>
          <circle cx="50" cy="280" r="80" fill="#120a1e" opacity=".65"/>
          <g opacity=".4" transform="translate(45,55)">
            <rect x="0" y="0" width="120" height="80" rx="5" fill="none" stroke="#a855f7" stroke-width=".8"/>
            <rect x="0" y="18" width="120" height=".6" fill="#a855f7" opacity=".3"/>
            <text x="8" y="12" font-size="8" fill="#a855f7" opacity=".7" font-family="monospace">GENERAL LEDGER</text>
            <rect x="8" y="25" width="35" height="4" rx="2" fill="#a855f7" opacity=".3"/>
            <rect x="8" y="34" width="55" height="3" rx="1" fill="#a855f7" opacity=".2"/>
            <rect x="8" y="42" width="45" height="3" rx="1" fill="#a855f7" opacity=".2"/>
            <rect x="8" y="50" width="50" height="3" rx="1" fill="#a855f7" opacity=".2"/>
            <rect x="8" y="58" width="40" height="3" rx="1" fill="#a855f7" opacity=".2"/>
            <rect x="75" y="25" width="35" height="45" rx="2" fill="#a855f7" opacity=".1"/>
            <polyline points="78,65 85,52 92,58 100,42 107,48" fill="none" stroke="#a855f7" stroke-width="1.1"/>
          </g>
          <g opacity=".35" transform="translate(210,60)">
            <rect x="-15" y="0" width="90" height="20" rx="3" fill="none" stroke="#a855f7" stroke-width=".6"/>
            <rect x="-15" y="28" width="90" height="20" rx="3" fill="none" stroke="#a855f7" stroke-width=".6"/>
            <rect x="-15" y="56" width="90" height="20" rx="3" fill="none" stroke="#a855f7" stroke-width=".6"/>
            <line x1="30" y1="20" x2="30" y2="28" stroke="#a855f7" stroke-width=".5" opacity=".5"/>
            <line x1="30" y1="48" x2="30" y2="56" stroke="#a855f7" stroke-width=".5" opacity=".5"/>
            <rect x="-7" y="6" width="28" height="4" rx="2" fill="#a855f7" opacity=".25"/>
            <rect x="-7" y="34" width="35" height="4" rx="2" fill="#a855f7" opacity=".2"/>
            <rect x="-7" y="62" width="30" height="4" rx="2" fill="#a855f7" opacity=".2"/>
          </g>
          <g opacity=".3" transform="translate(30,195)">
            <rect x="0" y="0" width="40" height="25" rx="3" fill="none" stroke="#a855f7" stroke-width=".6"/>
            <rect x="55" y="0" width="40" height="25" rx="3" fill="none" stroke="#a855f7" stroke-width=".6"/>
            <rect x="110" y="0" width="40" height="25" rx="3" fill="none" stroke="#a855f7" stroke-width=".6"/>
            <rect x="165" y="0" width="40" height="25" rx="3" fill="none" stroke="#a855f7" stroke-width=".6"/>
            <line x1="40" y1="12" x2="55" y2="12" stroke="#a855f7" stroke-width=".5" opacity=".5"/>
            <line x1="95" y1="12" x2="110" y2="12" stroke="#a855f7" stroke-width=".5" opacity=".5"/>
            <line x1="150" y1="12" x2="165" y2="12" stroke="#a855f7" stroke-width=".5" opacity=".5"/>
            <text x="5" y="15" font-size="7" fill="#a855f7" opacity=".5" font-family="monospace">CO.1</text>
            <text x="60" y="15" font-size="7" fill="#a855f7" opacity=".4" font-family="monospace">CO.2</text>
            <text x="115" y="15" font-size="7" fill="#a855f7" opacity=".4" font-family="monospace">CO.3</text>
            <text x="170" y="15" font-size="7" fill="#a855f7" opacity=".3" font-family="monospace">CO.N</text>
          </g>
        </svg>
        <div class="card-overlay" style="background:linear-gradient(160deg,rgba(13,8,20,.15) 0%,rgba(13,8,20,.82) 55%,rgba(13,8,20,.97) 100%)"></div>
        <div class="card-body">
          <div>
            <div class="card-accent" style="background:#a855f7"></div>
            <span class="card-year" style="color:#c084fc">2025 - 2026
            </span>
          </div>
          <div>
            <h3 class="card-title">ERP Accounting System</h3>
            <p class="card-company">PT Mitra Distribusi Utama</p>
          </div>
          <p class="card-desc">
            Sistem akuntansi internal berbasis web: general ledger, jurnal, purchasing, cash & bank,
            multi-company, dan pelaporan keuangan terintegrasi untuk distribusi digital.
          </p>
          <div class="tags-tech">
            <span class="tag-tech">FastAPI</span>
            <span class="tag-tech">Nuxt 3</span>
            <span class="tag-tech">PostgreSQL</span>
          </div>
          <div class="tags-cat">
            <span class="tag-cat" style="background:rgba(168,85,247,.12);color:#d8b4fe">Accounting</span>
            <span class="tag-cat" style="background:rgba(245,158,11,.12);color:#fcd34d">Finance</span>
            <span class="tag-cat" style="background:rgba(59,130,246,.12);color:#93c5fd">Multi-company</span>
          </div>
          <div class="card-actions">
            <NuxtLink to="/projects/erp-accounting" class="btn">
              <Icon name="mdi:information-outline" /> Detail
            </NuxtLink>
            <button disabled class="btn btn-disabled">
              <Icon name="mdi:arrow-right" /> Demo — Internal
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.eyebrow {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgb(107 114 128);
  margin-bottom: 0.25rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
}

.section-sub {
  font-size: 0.875rem;
  color: rgb(156 163 175);
  margin-top: 0.25rem;
}

/* Card */
.card {
  position: relative;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 380px;
  transition: border-color 0.2s ease;
}

.card:hover {
  border-color: rgba(255, 255, 255, 0.2);
}

/* SVG illustration — fills the entire card as background */
.card-illus {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* Dark gradient overlay so text stays legible */
.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(10, 10, 14, 0.18) 0%,
    rgba(10, 10, 14, 0.82) 55%,
    rgba(10, 10, 14, 0.97) 100%
  );
}

/* Content sits above illustration + overlay */
.card-body {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  height: 100%;
  justify-content: flex-end;
}

.card-accent {
  height: 2px;
  width: 28px;
  border-radius: 2px;
  margin-bottom: 2px;
}

.card-year {
  font-size: 11px;
  font-family: ui-monospace, monospace;
  letter-spacing: 0.08em;
}

.card-title {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  line-height: 1.3;
}

.card-company {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
}

.card-desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.65;
}

/* Tech stack tags */
.tags-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tag-tech {
  font-size: 10px;
  font-family: ui-monospace, monospace;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.04);
}

/* Category tags */
.tags-cat {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tag-cat {
  font-size: 10px;
  padding: 2px 9px;
  border-radius: 999px;
}

/* Action buttons */
.card-actions {
  display: flex;
  gap: 8px;
  margin-top: 4px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  padding: 5px 14px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
  text-decoration: none;
  transition: background 0.18s;
}

.btn:hover {
  background: rgba(255, 255, 255, 0.13);
}

.btn-disabled {
  border-color: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.22);
  background: transparent;
  cursor: not-allowed;
}
</style>