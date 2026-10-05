<template>
  <div class="page">
    <CaseStudyHeader
      :accent="accent"
      project-title="Payment Channel Integration"
      subtitle="Sistem payment gateway internal untuk kebutuhan transaksi multi-channel dan rekonsiliasi otomatis."
      :year="year"
      :role="role"
    />

    <section class="section">
      <h2 class="h2">Overview</h2>
      <div class="body">
        <p>
          Operasional pembayaran membutuhkan konsistensi dari proses penerbitan instruksi hingga konfirmasi bank.
          Tantangan utamanya adalah memastikan setiap channel (VA/QRIS, transfer, dan callback gateway) tercatat
          dengan status yang seragam, serta mudah diaudit.
        </p>
        <p>
          Sistem ini dirancang untuk memudahkan tim finance dan operasional memantau transaksi secara real-time,
          sekaligus menyediakan rekonsiliasi otomatis agar selisih antar data tidak menumpuk di akhir periode.
        </p>
        <p>
          Dengan skala transaksi harian yang tinggi, pendekatan yang digunakan menekankan ketahanan integrasi,
          standardisasi event, dan pengelolaan idempotency untuk mencegah duplikasi penjurnalan.
        </p>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">My Role & Technical Approach</h2>

      <div class="grid gap-5 lg:grid-cols-2">
        <div class="list">
          <div class="li">
            <Icon name="mdi:database" class="li-icon" />
            <div>
              <div class="li-title">Backend: event & reconciliation pipeline</div>
              <div class="li-desc">
                Mendesain alur penerimaan callback, validasi payload, dan pembentukan record rekonsiliasi.
              </div>
            </div>
          </div>

          <div class="li">
            <Icon name="mdi:code-tags" class="li-icon" />
            <div>
              <div class="li-title">Frontend: dashboard status transaksi</div>
              <div class="li-desc">
                Komponen tabel interaktif (filter status, sort, dan highlight) agar tim dapat menelusuri kasus.
              </div>
            </div>
          </div>

          <div class="li">
            <Icon name="mdi:chart-timeline" class="li-icon" />
            <div>
              <div class="li-title">Database: konsistensi & idempotency</div>
              <div class="li-desc">
                Struktur data transaksi + constraint logis untuk menghindari penjurnalan ganda saat re-delivery.
              </div>
            </div>
          </div>

          <div class="li">
            <Icon name="mdi:shield-check-outline" class="li-icon" />
            <div>
              <div class="li-title">Ops: audit trail & traceability</div>
              <div class="li-desc">
                Menyediakan jejak perubahan status sebagai dasar validasi rekonsiliasi oleh internal audit.
              </div>
            </div>
          </div>
        </div>

        <div class="flow-card">
          <div class="flow-title">
            <span class="accent-dot" :style="{ background: accent }" />
            Alur Data (Sederhana)
          </div>

          <svg class="flow" viewBox="0 0 520 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" :stop-color="accent" stop-opacity="0.2" />
                <stop offset="1" :stop-color="accent" stop-opacity="0.7" />
              </linearGradient>
            </defs>

            <rect x="22" y="30" width="140" height="50" rx="12" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.10)" />
            <text x="92" y="60" text-anchor="middle" fill="rgba(255,255,255,.70)" font-size="12" font-family="ui-monospace, monospace">Gateway</text>

            <rect x="190" y="30" width="140" height="50" rx="12" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.10)" />
            <text x="260" y="60" text-anchor="middle" fill="rgba(255,255,255,.70)" font-size="12" font-family="ui-monospace, monospace">Callback</text>

            <rect x="358" y="30" width="140" height="50" rx="12" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.10)" />
            <text x="428" y="60" text-anchor="middle" fill="rgba(255,255,255,.70)" font-size="12" font-family="ui-monospace, monospace">Queue</text>

            <rect x="22" y="110" width="476" height="50" rx="14" fill="rgba(255,255,255,.02)" stroke="rgba(255,255,255,.08)" />
            <text x="260" y="142" text-anchor="middle" fill="rgba(255,255,255,.75)" font-size="12" font-family="ui-monospace, monospace">
              Rekonsiliasi + Penjurnalan Otomatis
            </text>

            <path d="M162 55 C175 55, 180 55, 190 55" fill="none" stroke="url(#g)" stroke-width="2" />
            <path d="M330 55 C343 55, 348 55, 358 55" fill="none" stroke="url(#g)" stroke-width="2" />

            <path d="M120 80 C120 90, 120 100, 120 110" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="2" stroke-dasharray="6 6" />
            <path d="M260 80 C260 90, 260 100, 260 110" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="2" stroke-dasharray="6 6" />
            <path d="M400 80 C400 90, 400 100, 400 110" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="2" stroke-dasharray="6 6" />

            <circle cx="162" cy="55" r="4" fill="rgba(255,255,255,.25)" />
            <circle cx="330" cy="55" r="4" fill="rgba(255,255,255,.25)" />
          </svg>

          <div class="flow-hints">
            <div class="hint">
              <span class="mono">idempotency key</span>
              <span class="hint-dot" :style="{ background: accent }" />
              Mencegah duplikasi penjurnalan
            </div>
            <div class="hint">
              <span class="mono">reconciliation events</span>
              <span class="hint-dot" :style="{ background: accent }" />
              Selaraskan status & audit trail
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE FEATURES -->
    <section class="section">
      <h2 class="h2">Core Features</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon" :style="{ background: accent + '1a', color: accent }">
            <Icon name="mdi:credit-card-multiple-outline" />
          </div>
          <div class="feature-title">Multi Payment Channel</div>
          <div class="feature-desc">
            Mendukung transfer bank, virtual account, e-wallet, dan QRIS dari berbagai mitra.
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon" :style="{ background: accent + '1a', color: accent }">
            <Icon name="mdi:link-variant" />
          </div>
          <div class="feature-title">Partner Integration</div>
          <div class="feature-desc">
            API terpusat untuk integrasi mitra merchant dan partner strategis.
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon" :style="{ background: accent + '1a', color: accent }">
            <Icon name="mdi:shield-lock-outline" />
          </div>
          <div class="feature-title">Secure Transaction</div>
          <div class="feature-desc">
            Sistem keamanan berlapis untuk memastikan transaksi aman dan terpercaya.
          </div>
        </div>
      </div>
    </section>

    <!-- OPERATIONAL CONSOLE — PRODUCT FRAME MOCKUP -->
    <section class="section">
      <div class="section-head">
        <h2 class="h2">Operational Console</h2>
        <div class="accent-chip" :style="{ borderColor: accent }">
          <span class="accent-chip-bar" :style="{ background: accent }" />
          Tampilan produk asli (mockup)
        </div>
      </div>

      <div class="device-frame">
        <!-- chrome bar -->
        <div class="device-topbar">
          <div class="device-dots"><span></span><span></span><span></span></div>
          <div class="device-url mono">santech.dalwa.id</div>
        </div>

        <!-- tab nav -->
        <div class="device-tabs">
          <button
            v-for="tab in consoleTabs"
            :key="tab.id"
            class="device-tab"
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            <Icon :name="tab.icon" />
            {{ tab.label }}
          </button>
        </div>

        <!-- content -->
        <div class="device-body">

          <!-- DASHBOARD -->
          <div v-if="activeTab === 'dashboard'" class="fl-panel">
            <div class="fl-kpi-grid">
              <div class="fl-kpi-card" v-for="kpi in dashboardKpis" :key="kpi.label" :class="{ gold: kpi.highlight }">
                <div class="fl-kpi-label">{{ kpi.label }}</div>
                <div class="fl-kpi-value">{{ kpi.value }}</div>
                <div class="fl-kpi-trend" :class="kpi.trendUp ? 'up' : 'down'">{{ kpi.trend }}</div>
              </div>
            </div>

            <div class="fl-section-title">
              <span class="fl-emoji">🏆</span> Top Channel Volume
            </div>
            <div class="fl-mini-list">
              <div class="fl-mini-row" v-for="(ch, i) in channelStatus.slice(0, 3)" :key="ch.name">
                <span class="fl-rank" :class="'r' + (i + 1)">{{ i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉' }}</span>
                <span class="fl-mini-name">{{ ch.name }}</span>
                <span class="fl-mini-value mono">{{ ch.volume }} tx</span>
              </div>
            </div>
          </div>

          <!-- CHANNEL STATUS -->
          <div v-else-if="activeTab === 'channel'" class="fl-panel">
            <div class="fl-section-title">
              <span class="fl-emoji">🏦</span> Status per Bank Channel
            </div>
            <div class="fl-channel-list">
              <div class="fl-channel-card" v-for="ch in channelStatus" :key="ch.name" :class="ch.status">
                <div class="fl-channel-avatar" :class="ch.status">
                  <Icon name="mdi:bank-outline" />
                </div>
                <div class="fl-channel-info">
                  <div class="fl-channel-name">{{ ch.name }}</div>
                  <div class="fl-channel-meta">{{ ch.volume }} transaksi hari ini</div>
                </div>
                <span class="fl-badge" :class="ch.status">{{ ch.statusLabel }}</span>
              </div>
            </div>
          </div>

          <!-- TRANSACTION MONITOR -->
          <div v-else-if="activeTab === 'transaksi'" class="fl-panel">
            <div class="fl-section-title">
              <span class="fl-emoji">💳</span> Monitor Transaksi
            </div>
            <div class="fl-table">
              <div class="fl-thead">
                <span>ID</span><span>Channel</span><span>Invoice</span><span>Nominal</span><span>Status</span>
              </div>
              <div class="fl-trow" v-for="row in paymentRows" :key="row.id">
                <span class="mono">{{ row.id }}</span>
                <span>{{ row.channel }}</span>
                <span class="mono">{{ row.invoice }}</span>
                <span class="mono">{{ formatIDR(row.amount) }}</span>
                <span class="fl-status" :class="row.status.toLowerCase()">{{ row.status }}</span>
              </div>
            </div>
          </div>

          <!-- LOG MONITOR -->
          <div v-else class="fl-panel">
            <div class="fl-section-title">
              <span class="fl-emoji">📋</span> Monitor Log (Realtime)
            </div>
            <div class="fl-log-list">
              <div class="fl-log-card" v-for="log in monitorLogs" :key="log.id" :class="log.level">
                <span class="fl-log-time mono">{{ log.time }}</span>
                <span class="fl-log-tag" :class="log.level">{{ log.level.toUpperCase() }}</span>
                <span class="fl-log-msg">{{ log.message }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">Impact</h2>
      <div class="impact-grid">
        <ImpactStat :accent="accent" value="-" label="Placeholder: waktu proses rekonsiliasi berkurang" />
        <ImpactStat :accent="accent" value="-" label="Placeholder: akurasi status pembayaran meningkat" />
        <ImpactStat :accent="accent" value="-" label="Placeholder: audit trail lebih mudah ditelusuri" />
      </div>
    </section>

    <section class="section">
      <h2 class="h2">Tech Stack</h2>
      <div class="tags-tech">
        <TechBadge accent="accent">Laravel 11</TechBadge>
        <TechBadge accent="accent">Vue 3</TechBadge>
        <TechBadge accent="accent">Inertia.js</TechBadge>
        <TechBadge accent="accent">Midtrans</TechBadge>
        <TechBadge accent="accent">Espay</TechBadge>
        <TechBadge accent="accent">MySQL</TechBadge>
      </div>
    </section>

    <section class="footer">
      <NuxtLink to="/projects" class="nav-btn">← Kembali ke Projects</NuxtLink>
      <NuxtLink to="/projects/desa-air-cargo" class="nav-btn">
        Project lainnya →
      </NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CaseStudyHeader from '~/components/CaseStudyHeader.vue'
import TechBadge from '~/components/TechBadge.vue'
import ImpactStat from '~/components/ImpactStat.vue'

const accent = '#f59e0b'
const year = '2025 – 2026'
const role = 'Backend • Frontend • Database'

type PaymentStatus = 'SUCCESS' | 'PENDING' | 'FAILED'

type PaymentRow = {
  id: string
  channel: string
  invoice: string
  date: string
  amount: number
  status: PaymentStatus
}

const paymentRows = ref<PaymentRow[]>([
  { id: 'TX-1001', channel: 'VA Bank A', invoice: 'INV-24001', date: '2025-03-02', amount: 1250000, status: 'SUCCESS' },
  { id: 'TX-1002', channel: 'QRIS', invoice: 'INV-24002', date: '2025-03-02', amount: 850000, status: 'SUCCESS' },
  { id: 'TX-1003', channel: 'VA Bank B', invoice: 'INV-24003', date: '2025-03-03', amount: 2750000, status: 'PENDING' },
  { id: 'TX-1004', channel: 'Transfer', invoice: 'INV-24004', date: '2025-03-03', amount: 3200000, status: 'FAILED' },
  { id: 'TX-1005', channel: 'VA Bank A', invoice: 'INV-24005', date: '2025-03-04', amount: 600000, status: 'PENDING' },
  { id: 'TX-1006', channel: 'APP Gateway', invoice: 'INV-24006', date: '2025-03-04', amount: 1950000, status: 'SUCCESS' },
  { id: 'TX-1007', channel: 'QRIS', invoice: 'INV-24007', date: '2025-03-05', amount: 410000, status: 'SUCCESS' },
  { id: 'TX-1008', channel: 'VA Bank B', invoice: 'INV-24008', date: '2025-03-05', amount: 980000, status: 'FAILED' },
])

// Dummy KPI dashboard
const dashboardKpis = [
  { label: 'Total Transaksi Hari Ini', value: '1.284', trend: '+12% dari kemarin', trendUp: true },
  { label: 'Success Rate', value: '98.4%', trend: '+0.6% dari kemarin', trendUp: true, highlight: true },
  { label: 'Channel Aktif', value: '6 / 7', trend: '1 channel degraded', trendUp: false },
  { label: 'Pending Amount', value: 'Rp 4,1jt', trend: 'menunggu callback', trendUp: false },
]

// Dummy status per channel
const channelStatus = [
  { name: 'Bank A – VA', status: 'online', statusLabel: 'Online', volume: 412 },
  { name: 'Bank B – VA', status: 'online', statusLabel: 'Online', volume: 305 },
  { name: 'QRIS', status: 'online', statusLabel: 'Online', volume: 289 },
  { name: 'E-Wallet Gateway', status: 'degraded', statusLabel: 'Degraded', volume: 96 },
  { name: 'Transfer Manual', status: 'online', statusLabel: 'Online', volume: 182 },
]

// Dummy log realtime
const monitorLogs = [
  { id: 1, time: '09:41:02', level: 'info', message: 'Callback diterima dari Bank A VA — INV-24001' },
  { id: 2, time: '09:41:03', level: 'success', message: 'Rekonsiliasi berhasil, status SUCCESS — INV-24001' },
  { id: 3, time: '09:42:10', level: 'warn', message: 'Callback QRIS terlambat > 30s — INV-24002' },
  { id: 4, time: '09:43:55', level: 'error', message: 'Signature tidak valid dari E-Wallet Gateway — retry 1/3' },
  { id: 5, time: '09:44:02', level: 'info', message: 'Retry berhasil, callback diproses ulang' },
]

// Device frame tab state
const activeTab = ref<'dashboard' | 'channel' | 'transaksi' | 'log'>('dashboard')

const consoleTabs = [
  { id: 'dashboard', label: 'Dashboard', icon: 'mdi:view-dashboard-outline' },
  { id: 'channel', label: 'Channel', icon: 'mdi:bank-outline' },
  { id: 'transaksi', label: 'Transaksi', icon: 'mdi:table-eye' },
  { id: 'log', label: 'Log', icon: 'mdi:console-line' },
] as const

const formatIDR = (n: number) =>
  n.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })
</script>

<style scoped>
.page {
  padding-bottom: 40px;
}

.section {
  margin-top: 22px;
}

.h2 {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
}

.body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 1.7;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.li {
  display: flex;
  gap: 12px;
  padding: 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
}

.li-icon {
  color: v-bind(accent);
  width: 22px;
  height: 22px;
  margin-top: 2px;
  flex: 0 0 auto;
}

.li-title {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 650;
}

.li-desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 2px;
  line-height: 1.55;
}

.flow-card {
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  padding: 14px;
}

.flow-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
}

.accent-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
}

.flow {
  width: 100%;
  height: auto;
  margin-top: 4px;
}

.flow-hints {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hint {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
}

.hint-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
}

.mono {
  font-family: ui-monospace, monospace;
  letter-spacing: 0.04em;
}

.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
}

.accent-chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 999px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
}

.accent-chip-bar {
  width: 2px;
  height: 14px;
  border-radius: 999px;
}

/* ===== FEATURE CARDS ===== */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.feature-card {
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.feature-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.feature-title {
  font-size: 13px;
  font-weight: 650;
  color: rgba(255, 255, 255, 0.92);
}

.feature-desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.55;
}

/* ===== DEVICE / PRODUCT FRAME ===== */
.device-frame {
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  background: #EFF8F7;
}

.device-topbar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: #1E8C86;
}

.device-dots {
  display: flex;
  gap: 6px;
}

.device-dots span {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.3);
}

.device-url {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  padding: 3px 10px;
  border-radius: 999px;
}

.device-tabs {
  display: flex;
  gap: 6px;
  padding: 10px 14px;
  background: #2BA8A2;
  overflow-x: auto;
}

.device-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 999px;
  border: none;
  background: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.85);
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.device-tab:hover {
  background: rgba(255, 255, 255, 0.22);
}

.device-tab.active {
  background: #FFD23F;
  color: #1E8C86;
  box-shadow: 0 4px 16px rgba(255, 210, 63, 0.4);
}

.device-body {
  padding: 18px;
  background: #EFF8F7;
  min-height: 340px;
}

.fl-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Section title — dashed divider, emoji chip */
.fl-section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 800;
  color: #1E8C86;
  padding-bottom: 8px;
  border-bottom: 3px dashed rgba(43, 168, 162, 0.25);
}

.fl-emoji {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  font-size: 13px;
}

/* KPI cards */
.fl-kpi-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.fl-kpi-card {
  background: #fff;
  border-radius: 16px;
  padding: 12px 14px;
  border-left: 6px solid #3CC4BD;
  box-shadow: 0 4px 20px rgba(43, 168, 162, 0.1);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.fl-kpi-card.gold {
  border-left-color: #FFD23F;
  background: linear-gradient(135deg, #FFF8E7, #ffffff);
  box-shadow: 0 4px 20px rgba(255, 210, 63, 0.35);
}

.fl-kpi-label {
  font-size: 10px;
  color: #5a7a78;
  font-weight: 600;
}

.fl-kpi-value {
  font-size: 20px;
  font-weight: 800;
  color: #1E8C86;
}

.fl-kpi-trend {
  font-size: 10px;
  font-weight: 700;
}

.fl-kpi-trend.up {
  color: #27AE60;
}

.fl-kpi-trend.down {
  color: #D45233;
}

/* Top channel mini ranking */
.fl-mini-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.fl-mini-row {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-radius: 14px;
  padding: 10px 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.fl-rank {
  font-size: 16px;
}

.fl-mini-name {
  flex: 1;
  font-size: 12px;
  font-weight: 700;
  color: #1E8C86;
}

.fl-mini-value {
  font-size: 12px;
  color: #6b6b6b;
}

/* Channel status cards */
.fl-channel-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fl-channel-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  border-radius: 16px;
  padding: 12px 14px;
  border-left: 6px solid #3CC4BD;
  box-shadow: 0 4px 16px rgba(43, 168, 162, 0.08);
}

.fl-channel-card.degraded {
  border-left-color: #FFD23F;
  background: linear-gradient(135deg, #FFF8E7, #ffffff);
}

.fl-channel-avatar {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background: rgba(43, 168, 162, 0.12);
  color: #1E8C86;
  flex: 0 0 auto;
}

.fl-channel-avatar.degraded {
  background: rgba(255, 210, 63, 0.25);
  color: #E6B800;
}

.fl-channel-info {
  flex: 1;
  min-width: 0;
}

.fl-channel-name {
  font-size: 12.5px;
  font-weight: 700;
  color: #1a3d3b;
}

.fl-channel-meta {
  font-size: 10.5px;
  color: #7a9997;
}

.fl-badge {
  font-size: 10px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 999px;
  white-space: nowrap;
}

.fl-badge.online {
  background: rgba(39, 174, 96, 0.12);
  color: #27AE60;
}

.fl-badge.degraded {
  background: rgba(255, 210, 63, 0.25);
  color: #E6B800;
}

/* Transaction table */
.fl-table {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(43, 168, 162, 0.08);
}

.fl-thead,
.fl-trow {
  display: grid;
  grid-template-columns: 90px 1fr 100px 110px 80px;
  gap: 8px;
  padding: 10px 12px;
  align-items: center;
}

.fl-thead {
  background: #E8F6F5;
  font-size: 10px;
  font-weight: 800;
  color: #1E8C86;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.fl-trow {
  font-size: 11.5px;
  color: #3a3a3a;
  border-top: 1px solid #f0f0f0;
}

.fl-status {
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 999px;
  text-align: center;
  width: fit-content;
}

.fl-status.success {
  background: rgba(39, 174, 96, 0.12);
  color: #27AE60;
}

.fl-status.pending {
  background: rgba(255, 210, 63, 0.25);
  color: #E6B800;
}

.fl-status.failed {
  background: rgba(231, 76, 60, 0.12);
  color: #E74C3C;
}

/* Log monitor */
.fl-log-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 220px;
  overflow-y: auto;
}

.fl-log-card {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-radius: 10px;
  padding: 8px 12px;
  border-left: 5px solid #5DADE2;
  font-size: 11px;
}

.fl-log-card.success { border-left-color: #27AE60; }
.fl-log-card.warn { border-left-color: #FFD23F; }
.fl-log-card.error { border-left-color: #E74C3C; }

.fl-log-time {
  color: #9fb6b4;
  flex: 0 0 auto;
}

.fl-log-tag {
  font-weight: 800;
  width: 55px;
  flex: 0 0 auto;
}

.fl-log-tag.info { color: #5DADE2; }
.fl-log-tag.success { color: #27AE60; }
.fl-log-tag.warn { color: #E6B800; }
.fl-log-tag.error { color: #E74C3C; }

.fl-log-msg {
  color: #4a4a4a;
}

.impact-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.footer {
  margin-top: 22px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.nav-btn {
  flex: 1 1 250px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 12px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.82);
  font-size: 12px;
}

@media (max-width: 900px) {
  .impact-grid {
    grid-template-columns: 1fr;
  }
  .feature-grid {
    grid-template-columns: 1fr;
  }
  .fl-thead,
  .fl-trow {
    grid-template-columns: 70px 1fr 80px;
  }
  .fl-thead span:nth-child(3),
  .fl-trow span:nth-child(3) {
    display: none;
  }
}
</style>