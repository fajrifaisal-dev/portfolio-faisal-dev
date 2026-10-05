<template>
  <div class="page">
    <CaseStudyHeader
      :accent="accent"
      project-title="Sistem Ekspedisi & ERP"
      subtitle="Platform ERP lengkap untuk optimalisasi operasional logistik: manajemen STT & resi, penjurnalan otomatis, modul HRD, dan pelaporan terintegrasi."
      :year="year"
      :role="role"
    />

    <section class="section">
      <h2 class="h2">Overview</h2>
      <div class="body">
        <p>
          Sistem ERP untuk membantu operasional logistik dari sisi administrasi hingga pelaporan.
          Data transaksi dijaga konsistensinya agar proses keuangan dapat mengikuti alur operasional.
        </p>
        <p>
          Penekanan implementasi ada pada integrasi modul, standardisasi alur, dan
          pengurangan duplikasi proses.
        </p>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">My Role</h2>
      <div class="body">
        <p>
          Backend development dan integrasi antar modul.
          Membangun logika penjurnalan dan pelaporan berbasis kebutuhan operasional.
        </p>
        <p>
          Menyediakan basis database yang terstruktur untuk multi proses bisnis.
        </p>
      </div>
    </section>

    <!-- OPERATIONAL CONSOLE — MOCKUP -->
    <section class="section">
      <div class="section-head">
        <h2 class="h2">Operational Console</h2>
        <div class="accent-chip" :style="{ borderColor: accent }">
          <span class="accent-chip-bar" :style="{ background: accent }" />
          Tampilan produk asli (mockup interaktif)
        </div>
      </div>

      <div class="device-frame">
        <!-- browser chrome -->
        <div class="device-topbar">
          <div class="device-dots"><span></span><span></span><span></span></div>
          <div class="device-url mono">erp.lintassamudera.id</div>
        </div>

        <!-- app header -->
        <div class="app-topbar">
          <div class="app-topbar-left">
            <span class="status-dot" aria-hidden="true"></span>
            <span class="app-topbar-status">Sistem Online</span>
            <span class="app-topbar-sep">•</span>
            <span class="app-topbar-date mono">{{ todayLabel }} — {{ timeLabel }}</span>
          </div>
          <div class="app-topbar-right">
            <div class="app-search">
              <Icon name="mdi:magnify" class="app-search-icon" />
              <input type="text" placeholder="Cari manifest, STT, karyawan..." />
            </div>
            <button class="app-icon-btn" @click="showToast('Belum ada notifikasi baru')">
              <Icon name="mdi:bell-outline" />
              <span class="app-icon-dot"></span>
            </button>
            <div class="app-avatar" title="Admin Gudang">AF</div>
          </div>
        </div>

        <div class="device-shell">
          <!-- sidebar -->
          <aside class="sg-sidebar">
            <div class="sg-sidebar-header">
              <Icon name="mdi:ferry" class="sg-sidebar-logo" />
              <span>LSJ ERP</span>
            </div>

            <nav class="sg-nav">
              <div v-for="cat in navCategories" :key="cat.id" class="sg-nav-group">
                <button class="sg-nav-cat" @click="toggleCategory(cat.id)">
                  <Icon :name="cat.icon" class="sg-nav-cat-icon" />
                  <span class="sg-nav-cat-label">{{ cat.label }}</span>
                  <Icon
                    name="mdi:chevron-down"
                    class="sg-nav-chevron"
                    :class="{ open: expandedCategories.includes(cat.id) }"
                  />
                </button>

                <div class="sg-nav-items" :class="{ open: expandedCategories.includes(cat.id) }">
                  <button
                    v-for="item in cat.items"
                    :key="item.id"
                    class="sg-nav-item"
                    :class="{ active: activeView === item.id }"
                    @click="selectView(cat.id, item.id)"
                  >
                    <Icon :name="item.icon" class="sg-nav-item-icon" />
                    {{ item.label }}
                  </button>
                </div>
              </div>
            </nav>

            <div class="sg-sidebar-footer">
              <Icon name="mdi:shield-check-outline" />
              <span>Manifest tersinkron</span>
            </div>
          </aside>

          <!-- main content -->
          <main class="sg-main">
            <Transition name="view-fade" mode="out-in">
              <div :key="activeView" class="sg-view-wrap">

                <!-- DAFTAR STT -->
                <div v-if="activeView === 'stt'" class="sg-view">
                  <div class="sg-view-head">
                    <h3 class="sg-h3">Daftar STT</h3>
                    <div class="sg-filters">
                      <div class="sg-search-mini">
                        <Icon name="mdi:magnify" />
                        <input v-model="sttSearch" type="text" placeholder="Cari pengirim, tujuan..." />
                      </div>
                      <select v-model="sttStatusFilter" class="sg-select">
                        <option v-for="s in sttStatusOptions" :key="s" :value="s">{{ s === 'Semua' ? 'Status: Semua' : s }}</option>
                      </select>
                      <button class="sg-btn sg-btn-primary" @click="showToast('Form STT baru dibuka')">+ STT Baru</button>
                    </div>
                  </div>
                  <div class="sg-table-wrap">
                    <table class="sg-table">
                      <thead>
                        <tr>
                          <th>No. STT</th>
                          <th>Pengirim</th>
                          <th>Penerima</th>
                          <th>Rute &amp; progres</th>
                          <th>Berat</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <template v-if="filteredSttRows.length">
                          <template v-for="row in filteredSttRows" :key="row.no">
                            <tr class="sg-row-clickable" @click="toggleSttRow(row.no)">
                              <td class="mono">{{ row.no }}</td>
                              <td>{{ row.pengirim }}</td>
                              <td>{{ row.penerima }}</td>
                              <td>
                                <div class="sg-route">
                                  <span class="sg-route-label">{{ row.tujuan }}</span>
                                  <div class="sg-route-track">
                                    <span class="sg-route-fill" :style="{ width: statusProgress(row.status) + '%' }"></span>
                                    <span class="sg-route-dot" :style="{ left: statusProgress(row.status) + '%' }"></span>
                                  </div>
                                </div>
                              </td>
                              <td class="mono">{{ row.berat }}</td>
                              <td><span class="sg-status" :class="statusClass(row.status)">{{ row.status }}</span></td>
                            </tr>
                            <tr v-if="expandedSttRow === row.no" class="sg-row-detail">
                              <td colspan="6">
                                <div class="sg-timeline">
                                  <div
                                    v-for="(step, i) in sttTimeline(row.status)"
                                    :key="i"
                                    class="sg-timeline-step"
                                    :class="{ done: step.done }"
                                  >
                                    <span class="sg-timeline-dot"></span>
                                    <span>{{ step.label }}</span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </template>
                        </template>
                        <tr v-else class="sg-empty-row">
                          <td colspan="6">Tidak ada STT yang cocok dengan pencarian.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- QUOTATION -->
                <div v-else-if="activeView === 'quotation'" class="sg-view">
                  <div class="sg-view-head">
                    <h3 class="sg-h3">Quotation (Daftar Muat)</h3>
                    <div class="sg-filters">
                      <span class="sg-chip-filter">Status: Semua</span>
                      <button class="sg-btn sg-btn-primary" @click="showToast('Form quotation baru dibuka')">+ Quotation</button>
                    </div>
                  </div>
                  <div class="sg-table-wrap">
                    <table class="sg-table">
                      <thead>
                        <tr>
                          <th>No. Quotation</th>
                          <th>Ref. STT</th>
                          <th>Rute</th>
                          <th>Muatan</th>
                          <th>Estimasi Cost</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="row in quotationRows" :key="row.no">
                          <td class="mono">{{ row.no }}</td>
                          <td class="mono">{{ row.ref }}</td>
                          <td>{{ row.rute }}</td>
                          <td>{{ row.muatan }}</td>
                          <td class="mono">{{ formatIDR(row.cost) }}</td>
                          <td><span class="sg-status" :class="statusClass(row.status)">{{ row.status }}</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- KEHADIRAN (HEATMAP) -->
                <div v-else-if="activeView === 'kehadiran'" class="sg-view">
                  <div class="sg-view-head">
                    <h3 class="sg-h3">Kehadiran — Heatmap Jam Kerja</h3>
                    <div class="sg-filters">
                      <span class="sg-chip-filter">Karyawan: Semua</span>
                      <span class="sg-chip-filter">Periode: 10 minggu terakhir</span>
                    </div>
                  </div>

                  <div class="sg-card">
                    <div class="sg-heatmap">
                      <div class="sg-heatmap-days">
                        <span v-for="d in dayLabels" :key="d">{{ d }}</span>
                      </div>
                      <div class="sg-heatmap-grid">
                        <div class="sg-heatmap-week" v-for="(week, wi) in attendanceHeatmap" :key="wi">
                          <div
                            v-for="(val, di) in week"
                            :key="di"
                            class="sg-heatmap-cell"
                            :class="[intensityClass(val), { selected: selectedHeatCell && selectedHeatCell.week === wi && selectedHeatCell.day === di }]"
                            :title="`${val} jam kerja`"
                            @click="selectHeatCell(wi, di, val)"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="sg-heatmap-legend">
                      <span>Sedikit</span>
                      <span class="sg-heatmap-cell lvl-0"></span>
                      <span class="sg-heatmap-cell lvl-1"></span>
                      <span class="sg-heatmap-cell lvl-2"></span>
                      <span class="sg-heatmap-cell lvl-3"></span>
                      <span class="sg-heatmap-cell lvl-4"></span>
                      <span>Banyak</span>
                    </div>
                    <Transition name="fade-up">
                      <div v-if="selectedHeatCell" class="sg-heat-detail">
                        <Icon name="mdi:calendar-clock-outline" />
                        <span>{{ dayLabels[selectedHeatCell.day] }}, minggu ke-{{ selectedHeatCell.week + 1 }}</span>
                        <strong class="mono">{{ selectedHeatCell.val }} jam kerja</strong>
                      </div>
                    </Transition>
                  </div>
                </div>

                <!-- JAM KEHADIRAN -->
                <div v-else-if="activeView === 'jam-kehadiran'" class="sg-view">
                  <div class="sg-view-head">
                    <h3 class="sg-h3">Jam Kehadiran</h3>
                    <div class="sg-filters">
                      <span class="sg-chip-filter">Tanggal: Hari ini</span>
                    </div>
                  </div>
                  <div class="sg-table-wrap">
                    <table class="sg-table">
                      <thead>
                        <tr>
                          <th>Nama</th>
                          <th>Tanggal</th>
                          <th>Jam Masuk</th>
                          <th>Jam Keluar</th>
                          <th>Total Jam</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="row in jamKehadiranRows" :key="row.nama + row.tanggal">
                          <td>{{ row.nama }}</td>
                          <td class="mono">{{ row.tanggal }}</td>
                          <td class="mono">{{ row.masuk }}</td>
                          <td class="mono">{{ row.keluar }}</td>
                          <td class="mono">{{ row.totalJam }}</td>
                          <td><span class="sg-status" :class="statusClass(row.status)">{{ row.status }}</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- DAFTAR KARYAWAN -->
                <div v-else-if="activeView === 'daftar-karyawan'" class="sg-view">
                  <div class="sg-view-head">
                    <h3 class="sg-h3">Daftar Karyawan</h3>
                    <div class="sg-filters">
                      <span class="sg-chip-filter">Departemen: Semua</span>
                      <button class="sg-btn sg-btn-primary" @click="showToast('Form karyawan baru dibuka')">+ Karyawan</button>
                    </div>
                  </div>
                  <div class="sg-table-wrap">
                    <table class="sg-table">
                      <thead>
                        <tr>
                          <th>Nama</th>
                          <th>Posisi</th>
                          <th>Departemen</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="row in karyawanRows" :key="row.nama">
                          <td>{{ row.nama }}</td>
                          <td>{{ row.posisi }}</td>
                          <td>{{ row.departemen }}</td>
                          <td><span class="sg-status" :class="statusClass(row.status)">{{ row.status }}</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- RUGI LABA -->
                <div v-else-if="activeView === 'laba-rugi'" class="sg-view">
                  <div class="sg-view-head">
                    <h3 class="sg-h3">Laporan Rugi Laba</h3>
                    <div class="sg-filters">
                      <span class="sg-chip-filter">Periode: Maret 2025</span>
                    </div>
                  </div>

                  <div class="sg-card sg-compare-chart">
                    <div class="sg-compare-row">
                      <span class="sg-compare-label">Pendapatan</span>
                      <div class="sg-compare-track">
                        <div class="sg-compare-fill income" :style="{ width: (chartReady ? (totalPendapatan / barMax * 100) : 0) + '%' }"></div>
                      </div>
                      <span class="sg-compare-value mono">{{ formatIDR(totalPendapatan) }}</span>
                    </div>
                    <div class="sg-compare-row">
                      <span class="sg-compare-label">Beban</span>
                      <div class="sg-compare-track">
                        <div class="sg-compare-fill expense" :style="{ width: (chartReady ? (totalBeban / barMax * 100) : 0) + '%' }"></div>
                      </div>
                      <span class="sg-compare-value mono">{{ formatIDR(totalBeban) }}</span>
                    </div>
                  </div>

                  <div class="sg-card sg-financial">
                    <div class="sg-fin-row sg-fin-head"><span>Akun</span><span>Nominal</span></div>
                    <div class="sg-fin-row" v-for="row in labaRugiRows" :key="row.label" :class="{ total: row.total }">
                      <span>{{ row.label }}</span>
                      <span class="mono" :class="{ negative: row.value < 0 }">
                        {{ row.total ? formatIDR(labaBersihDisplay) : formatIDR(row.value) }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- GENERAL LEDGER -->
                <div v-else-if="activeView === 'general-ledger'" class="sg-view">
                  <div class="sg-view-head">
                    <h3 class="sg-h3">General Ledger</h3>
                    <div class="sg-filters">
                      <span class="sg-chip-filter">Akun: Semua</span>
                      <span class="sg-chip-filter">Periode: Maret 2025</span>
                    </div>
                  </div>
                  <div class="sg-table-wrap">
                    <table class="sg-table">
                      <thead>
                        <tr>
                          <th class="sg-th-sort" @click="toggleLedgerSort('tanggal')">Tanggal <span class="sg-sort-icon">{{ sortIcon('tanggal') }}</span></th>
                          <th class="sg-th-sort" @click="toggleLedgerSort('noJurnal')">No. Jurnal <span class="sg-sort-icon">{{ sortIcon('noJurnal') }}</span></th>
                          <th class="sg-th-sort" @click="toggleLedgerSort('akun')">Akun <span class="sg-sort-icon">{{ sortIcon('akun') }}</span></th>
                          <th>Keterangan</th>
                          <th class="sg-th-sort" @click="toggleLedgerSort('debit')">Debit <span class="sg-sort-icon">{{ sortIcon('debit') }}</span></th>
                          <th class="sg-th-sort" @click="toggleLedgerSort('kredit')">Kredit <span class="sg-sort-icon">{{ sortIcon('kredit') }}</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="row in sortedLedgerRows" :key="row.noJurnal + row.akun">
                          <td class="mono">{{ row.tanggal }}</td>
                          <td class="mono">{{ row.noJurnal }}</td>
                          <td>{{ row.akun }}</td>
                          <td>{{ row.keterangan }}</td>
                          <td class="mono">{{ row.debit ? formatIDR(row.debit) : '—' }}</td>
                          <td class="mono">{{ row.kredit ? formatIDR(row.kredit) : '—' }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- NERACA -->
                <div v-else-if="activeView === 'neraca'" class="sg-view">
                  <div class="sg-view-head">
                    <h3 class="sg-h3">Neraca (Balance Sheet)</h3>
                    <div class="sg-filters">
                      <span class="sg-chip-filter">Per: 31 Maret 2025</span>
                    </div>
                  </div>
                  <div class="sg-balance-grid">
                    <div class="sg-card">
                      <div class="sg-card-title">Aset</div>
                      <div class="sg-fin-row" v-for="row in neracaAset" :key="row.label" :class="{ total: row.total }">
                        <span>{{ row.label }}</span>
                        <span class="mono">{{ formatIDR(row.value) }}</span>
                      </div>
                    </div>
                    <div class="sg-card">
                      <div class="sg-card-title">Liabilitas &amp; Ekuitas</div>
                      <div class="sg-fin-row" v-for="row in neracaLiabilitas" :key="row.label" :class="{ total: row.total }">
                        <span>{{ row.label }}</span>
                        <span class="mono">{{ formatIDR(row.value) }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- MASTER ACCOUNT -->
                <div v-else-if="activeView === 'master-account'" class="sg-view">
                  <div class="sg-view-head">
                    <h3 class="sg-h3">Master Account (COA)</h3>
                    <div class="sg-filters">
                      <span class="sg-chip-filter">Kategori: Semua</span>
                      <button class="sg-btn sg-btn-primary" @click="showToast('Form akun baru dibuka')">+ Akun Baru</button>
                    </div>
                  </div>
                  <div class="sg-table-wrap">
                    <table class="sg-table">
                      <thead>
                        <tr>
                          <th>Kode Akun</th>
                          <th>Nama Akun</th>
                          <th>Kategori</th>
                          <th>Saldo Normal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="row in coaRows" :key="row.kode">
                          <td class="mono">{{ row.kode }}</td>
                          <td>{{ row.nama }}</td>
                          <td>{{ row.kategori }}</td>
                          <td>{{ row.saldoNormal }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- CASHFLOW -->
                <div v-else class="sg-view">
                  <div class="sg-view-head">
                    <h3 class="sg-h3">Cashflow</h3>
                    <div class="sg-filters">
                      <span class="sg-chip-filter">Periode: Maret 2025</span>
                    </div>
                  </div>
                  <div class="sg-table-wrap">
                    <table class="sg-table">
                      <thead>
                        <tr>
                          <th>Kategori Aktivitas</th>
                          <th>Arus Masuk</th>
                          <th>Arus Keluar</th>
                          <th>Net</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="row in cashflowRows" :key="row.kategori">
                          <td>{{ row.kategori }}</td>
                          <td class="mono">{{ formatIDR(row.masuk) }}</td>
                          <td class="mono">{{ formatIDR(row.keluar) }}</td>
                          <td class="mono" :class="{ negative: row.masuk - row.keluar < 0 }">
                            {{ formatIDR(row.masuk - row.keluar) }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </Transition>
          </main>
        </div>

        <Transition name="fade-up">
          <div v-if="toastMsg" class="sg-toast">
            <Icon name="mdi:check-circle-outline" />
            {{ toastMsg }}
          </div>
        </Transition>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">Tech Stack</h2>
      <div class="tags-tech">
        <TechBadge :accent="accent">Laravel</TechBadge>
        <TechBadge :accent="accent">MySQL</TechBadge>
        <TechBadge :accent="accent">Blade</TechBadge>
      </div>
    </section>

    <section class="footer">
      <NuxtLink to="/projects" class="nav-btn">← Kembali ke Projects</NuxtLink>
      <NuxtLink to="/projects/dalwa-payment" class="nav-btn">Project lainnya →</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import CaseStudyHeader from '~/components/CaseStudyHeader.vue'
import TechBadge from '~/components/TechBadge.vue'

const accent = '#C97A1E'
const year = '2022'
const role = 'Backend • Integration • Database'

/* ===== APP TOPBAR: live clock ===== */
const now = ref(new Date())
let clockTimer: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  clockTimer = setInterval(() => { now.value = new Date() }, 1000)
})
onUnmounted(() => { if (clockTimer) clearInterval(clockTimer) })

const todayLabel = computed(() =>
  now.value.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' })
)
const timeLabel = computed(() =>
  now.value.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
)

/* ===== TOAST ===== */
const toastMsg = ref('')
let toastTimer: ReturnType<typeof setTimeout> | undefined
function showToast(msg: string) {
  toastMsg.value = msg
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toastMsg.value = '' }, 2200)
}

/* ===== SIDEBAR NAV ===== */
const navCategories = [
  {
    id: 'operasional',
    label: 'Operasional',
    icon: 'mdi:truck-outline',
    items: [
      { id: 'stt', label: 'Daftar STT', icon: 'mdi:file-document-outline' },
      { id: 'quotation', label: 'Quotation (Daftar Muat)', icon: 'mdi:clipboard-list-outline' },
    ],
  },
  {
    id: 'karyawan',
    label: 'Karyawan',
    icon: 'mdi:account-group-outline',
    items: [
      { id: 'kehadiran', label: 'Kehadiran', icon: 'mdi:calendar-check-outline' },
      { id: 'jam-kehadiran', label: 'Jam Kehadiran', icon: 'mdi:clock-outline' },
      { id: 'daftar-karyawan', label: 'Daftar Karyawan', icon: 'mdi:card-account-details-outline' },
    ],
  },
  {
    id: 'keuangan',
    label: 'Keuangan',
    icon: 'mdi:finance',
    items: [
      { id: 'laba-rugi', label: 'Rugi Laba', icon: 'mdi:chart-line' },
      { id: 'general-ledger', label: 'General Ledger', icon: 'mdi:book-open-outline' },
      { id: 'neraca', label: 'Neraca', icon: 'mdi:scale-balance' },
      { id: 'master-account', label: 'Master Account', icon: 'mdi:format-list-bulleted' },
      { id: 'cashflow', label: 'Cashflow', icon: 'mdi:cash-multiple' },
    ],
  },
]

const expandedCategories = ref<string[]>(['operasional'])
const activeView = ref('stt')

function toggleCategory(catId: string) {
  const idx = expandedCategories.value.indexOf(catId)
  if (idx === -1) expandedCategories.value.push(catId)
  else expandedCategories.value.splice(idx, 1)
}

function selectView(catId: string, viewId: string) {
  activeView.value = viewId
  if (!expandedCategories.value.includes(catId)) {
    expandedCategories.value.push(catId)
  }
}

const formatIDR = (n: number) =>
  n.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })

function statusClass(status: string) {
  const map: Record<string, string> = {
    'Diterima': 'info',
    'Dalam Perjalanan': 'info',
    'Terkirim': 'success',
    'Draft': 'warning',
    'Approved': 'success',
    'Rejected': 'error',
    'Sent': 'info',
    'Aktif': 'success',
    'Nonaktif': 'error',
    'Tepat Waktu': 'success',
    'Terlambat': 'warning',
  }
  return map[status] ?? 'info'
}

function intensityClass(val: number) {
  if (val === 0) return 'lvl-0'
  if (val <= 2) return 'lvl-1'
  if (val <= 4) return 'lvl-2'
  if (val <= 6) return 'lvl-3'
  return 'lvl-4'
}

/* ===== DUMMY DATA ===== */

const sttRows = [
  { no: 'STT-24001', pengirim: 'PT Sinar Abadi', penerima: 'Toko Makmur Jaya', tujuan: 'Surabaya → Jakarta', berat: '120 kg', status: 'Terkirim' },
  { no: 'STT-24002', pengirim: 'CV Rejeki Mandiri', penerima: 'PT Karya Utama', tujuan: 'Surabaya → Medan', berat: '480 kg', status: 'Dalam Perjalanan' },
  { no: 'STT-24003', pengirim: 'PT Sumber Jaya', penerima: 'UD Bahagia', tujuan: 'Surabaya → Makassar', berat: '95 kg', status: 'Diterima' },
  { no: 'STT-24004', pengirim: 'PT Nusantara Ekspor', penerima: 'Toko Sentosa', tujuan: 'Surabaya → Denpasar', berat: '210 kg', status: 'Dalam Perjalanan' },
  { no: 'STT-24005', pengirim: 'CV Maju Bersama', penerima: 'PT Anugerah', tujuan: 'Surabaya → Balikpapan', berat: '65 kg', status: 'Terkirim' },
  { no: 'STT-24006', pengirim: 'PT Cipta Logistik', penerima: 'Toko Rahmat', tujuan: 'Surabaya → Palembang', berat: '340 kg', status: 'Diterima' },
]

/* STT search & filter */
const sttSearch = ref('')
const sttStatusFilter = ref('Semua')
const sttStatusOptions = ['Semua', 'Diterima', 'Dalam Perjalanan', 'Terkirim']

const filteredSttRows = computed(() => {
  return sttRows.filter((r) => {
    const q = sttSearch.value.trim().toLowerCase()
    const matchesSearch = !q || [r.no, r.pengirim, r.penerima, r.tujuan].join(' ').toLowerCase().includes(q)
    const matchesStatus = sttStatusFilter.value === 'Semua' || r.status === sttStatusFilter.value
    return matchesSearch && matchesStatus
  })
})

/* STT expandable timeline */
const expandedSttRow = ref<string | null>(null)
function toggleSttRow(no: string) {
  expandedSttRow.value = expandedSttRow.value === no ? null : no
}

function statusProgress(status: string) {
  const map: Record<string, number> = { 'Diterima': 8, 'Dalam Perjalanan': 54, 'Terkirim': 100 }
  return map[status] ?? 0
}

function sttTimeline(status: string) {
  const order = ['Diterima', 'Dalam Perjalanan', 'Terkirim']
  const labels = ['Diterima di gudang asal', 'Dalam perjalanan menuju tujuan', 'Diterima di tujuan']
  const current = order.indexOf(status)
  return labels.map((label, i) => ({ label, done: i <= current }))
}

const quotationRows = [
  { no: 'QT-1001', ref: 'STT-24001', rute: 'Surabaya → Jakarta', muatan: 'Elektronik (10 dus)', cost: 2450000, status: 'Approved' },
  { no: 'QT-1002', ref: 'STT-24002', rute: 'Surabaya → Medan', muatan: 'Tekstil (25 dus)', cost: 6800000, status: 'Sent' },
  { no: 'QT-1003', ref: 'STT-24003', rute: 'Surabaya → Makassar', muatan: 'Sparepart (8 dus)', cost: 1950000, status: 'Draft' },
  { no: 'QT-1004', ref: 'STT-24004', rute: 'Surabaya → Denpasar', muatan: 'Furniture (5 unit)', cost: 3200000, status: 'Approved' },
  { no: 'QT-1005', ref: 'STT-24006', rute: 'Surabaya → Palembang', muatan: 'Bahan Baku (15 dus)', cost: 4100000, status: 'Rejected' },
]

const dayLabels = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']

// 10 minggu x 7 hari, nilai = jam kerja (0-8)
const attendanceHeatmap = [
  [8, 8, 7, 8, 8, 0, 0],
  [7, 8, 8, 6, 8, 2, 0],
  [8, 8, 8, 8, 7, 0, 0],
  [6, 7, 8, 8, 8, 0, 0],
  [8, 8, 0, 8, 8, 3, 0],
  [8, 8, 8, 8, 8, 0, 0],
  [7, 6, 8, 8, 7, 0, 0],
  [8, 8, 8, 5, 8, 0, 0],
  [8, 7, 8, 8, 8, 4, 0],
  [8, 8, 8, 8, 6, 0, 0],
]

const selectedHeatCell = ref<{ week: number; day: number; val: number } | null>(null)
function selectHeatCell(wi: number, di: number, val: number) {
  if (selectedHeatCell.value && selectedHeatCell.value.week === wi && selectedHeatCell.value.day === di) {
    selectedHeatCell.value = null
  } else {
    selectedHeatCell.value = { week: wi, day: di, val }
  }
}

const jamKehadiranRows = [
  { nama: 'Budi Santoso', tanggal: '2025-03-05', masuk: '07:58', keluar: '17:02', totalJam: '9j 4m', status: 'Tepat Waktu' },
  { nama: 'Siti Rahayu', tanggal: '2025-03-05', masuk: '08:15', keluar: '17:00', totalJam: '8j 45m', status: 'Terlambat' },
  { nama: 'Ahmad Fauzi', tanggal: '2025-03-05', masuk: '07:55', keluar: '16:58', totalJam: '9j 3m', status: 'Tepat Waktu' },
  { nama: 'Dewi Lestari', tanggal: '2025-03-05', masuk: '08:02', keluar: '17:10', totalJam: '9j 8m', status: 'Tepat Waktu' },
  { nama: 'Rudi Hartono', tanggal: '2025-03-05', masuk: '08:22', keluar: '17:05', totalJam: '8j 43m', status: 'Terlambat' },
]

const karyawanRows = [
  { nama: 'Budi Santoso', posisi: 'Kepala Gudang', departemen: 'Operasional', status: 'Aktif' },
  { nama: 'Siti Rahayu', posisi: 'Staff Admin STT', departemen: 'Operasional', status: 'Aktif' },
  { nama: 'Ahmad Fauzi', posisi: 'Driver', departemen: 'Logistik', status: 'Aktif' },
  { nama: 'Dewi Lestari', posisi: 'Staff Keuangan', departemen: 'Finance', status: 'Aktif' },
  { nama: 'Rudi Hartono', posisi: 'Staff Gudang', departemen: 'Operasional', status: 'Nonaktif' },
]

const labaRugiRows = [
  { label: 'Pendapatan Jasa Ekspedisi', value: 184500000 },
  { label: 'Pendapatan Lain-lain', value: 6200000 },
  { label: 'Beban Operasional', value: -92300000 },
  { label: 'Beban Gaji & HRD', value: -48750000 },
  { label: 'Beban Administrasi', value: -8100000 },
  { label: 'Laba Bersih', value: 41550000, total: true },
]

const totalPendapatan = computed(() =>
  labaRugiRows.filter((r) => !r.total && r.value > 0).reduce((s, r) => s + r.value, 0)
)
const totalBeban = computed(() =>
  Math.abs(labaRugiRows.filter((r) => !r.total && r.value < 0).reduce((s, r) => s + r.value, 0))
)
const barMax = computed(() => Math.max(totalPendapatan.value, totalBeban.value, 1))

/* animated laba bersih + chart bars, triggered on view enter */
const labaBersihDisplay = ref(0)
const chartReady = ref(false)
function animateLabaBersih() {
  const target = 41550000
  const duration = 900
  const start = performance.now()
  function step(t: number) {
    const p = Math.min((t - start) / duration, 1)
    labaBersihDisplay.value = Math.floor(target * p)
    if (p < 1) requestAnimationFrame(step)
    else labaBersihDisplay.value = target
  }
  requestAnimationFrame(step)
}
watch(activeView, (v) => {
  if (v === 'laba-rugi') {
    labaBersihDisplay.value = 0
    chartReady.value = false
    nextTick(() => {
      requestAnimationFrame(() => { chartReady.value = true })
      animateLabaBersih()
    })
  }
})

const ledgerRows = [
  { tanggal: '2025-03-01', noJurnal: 'JR-0301', akun: 'Kas Operasional', keterangan: 'Penerimaan jasa STT-24001', debit: 2450000, kredit: 0 },
  { tanggal: '2025-03-01', noJurnal: 'JR-0301', akun: 'Pendapatan Jasa', keterangan: 'Penerimaan jasa STT-24001', debit: 0, kredit: 2450000 },
  { tanggal: '2025-03-02', noJurnal: 'JR-0302', akun: 'Beban BBM', keterangan: 'Pengisian BBM armada', debit: 850000, kredit: 0 },
  { tanggal: '2025-03-02', noJurnal: 'JR-0302', akun: 'Kas Operasional', keterangan: 'Pengisian BBM armada', debit: 0, kredit: 850000 },
  { tanggal: '2025-03-03', noJurnal: 'JR-0303', akun: 'Beban Gaji', keterangan: 'Pembayaran gaji driver', debit: 4200000, kredit: 0 },
  { tanggal: '2025-03-03', noJurnal: 'JR-0303', akun: 'Kas Operasional', keterangan: 'Pembayaran gaji driver', debit: 0, kredit: 4200000 },
]

/* Ledger sorting */
const ledgerSortKey = ref<'tanggal' | 'noJurnal' | 'akun' | 'debit' | 'kredit'>('tanggal')
const ledgerSortDir = ref<'asc' | 'desc'>('asc')
function toggleLedgerSort(key: typeof ledgerSortKey.value) {
  if (ledgerSortKey.value === key) {
    ledgerSortDir.value = ledgerSortDir.value === 'asc' ? 'desc' : 'asc'
  } else {
    ledgerSortKey.value = key
    ledgerSortDir.value = 'asc'
  }
}
function sortIcon(key: string) {
  if (ledgerSortKey.value !== key) return ''
  return ledgerSortDir.value === 'asc' ? '↑' : '↓'
}
const sortedLedgerRows = computed(() => {
  const rows = [...ledgerRows]
  const key = ledgerSortKey.value
  const dir = ledgerSortDir.value === 'asc' ? 1 : -1
  rows.sort((a: any, b: any) => {
    if (a[key] < b[key]) return -1 * dir
    if (a[key] > b[key]) return 1 * dir
    return 0
  })
  return rows
})

const neracaAset = [
  { label: 'Kas & Setara Kas', value: 128500000 },
  { label: 'Piutang Usaha', value: 64200000 },
  { label: 'Inventaris Kendaraan', value: 310000000 },
  { label: 'Total Aset', value: 502700000, total: true },
]

const neracaLiabilitas = [
  { label: 'Utang Usaha', value: 42100000 },
  { label: 'Utang Bank', value: 150000000 },
  { label: 'Modal & Laba Ditahan', value: 310600000 },
  { label: 'Total Liabilitas & Ekuitas', value: 502700000, total: true },
]

const coaRows = [
  { kode: '1-1000', nama: 'Kas Operasional', kategori: 'Aset', saldoNormal: 'Debit' },
  { kode: '1-1200', nama: 'Piutang Usaha', kategori: 'Aset', saldoNormal: 'Debit' },
  { kode: '2-1000', nama: 'Utang Usaha', kategori: 'Liabilitas', saldoNormal: 'Kredit' },
  { kode: '3-1000', nama: 'Modal Disetor', kategori: 'Ekuitas', saldoNormal: 'Kredit' },
  { kode: '4-1000', nama: 'Pendapatan Jasa Ekspedisi', kategori: 'Pendapatan', saldoNormal: 'Kredit' },
  { kode: '5-1000', nama: 'Beban Gaji', kategori: 'Beban', saldoNormal: 'Debit' },
  { kode: '5-1100', nama: 'Beban BBM', kategori: 'Beban', saldoNormal: 'Debit' },
]

const cashflowRows = [
  { kategori: 'Aktivitas Operasional', masuk: 190700000, keluar: 148300000 },
  { kategori: 'Aktivitas Investasi', masuk: 0, keluar: 25000000 },
  { kategori: 'Aktivitas Pendanaan', masuk: 40000000, keluar: 18000000 },
]
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

.tags-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
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

.mono {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
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

/* ===== DEVICE FRAME — palette tokens ===== */
.device-frame {
  --ink: #182B2A;
  --teal-950: #0A2827;
  --teal-900: #0D3433;
  --teal-800: #124745;
  --teal-700: #1C5B57;
  --amber-500: #E0A03D;
  --amber-600: #C97A1E;
  --amber-100: #FBEAD0;
  --paper: #F6F1E7;
  --paper-card: #FFFFFF;
  --steel: #66787A;
  --line: #E6DDC9;
  --success-bg: #DDF2E4;
  --success-fg: #1C7C54;
  --info-bg: #DDEAF4;
  --info-fg: #2B5F86;
  --warn-bg: #FBEAC9;
  --warn-fg: #B5730E;
  --error-bg: #FBDCD8;
  --error-fg: #B3261E;

  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  background: var(--paper);
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
}

.device-topbar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: var(--teal-950);
}

.device-dots {
  display: flex;
  gap: 6px;
}

.device-dots span {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.28);
}

.device-url {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.75);
  background: rgba(255, 255, 255, 0.08);
  padding: 3px 10px;
  border-radius: 4px;
}

/* ===== APP TOPBAR ===== */
.app-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 18px;
  background: var(--teal-900);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.app-topbar-left {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 11.5px;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: #4ADE80;
  box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.6);
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.55); }
  70% { box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
  100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
}

.app-topbar-status {
  font-weight: 600;
  color: #fff;
}

.app-topbar-sep {
  opacity: 0.4;
}

.app-topbar-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.app-search {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 6px 10px;
  color: rgba(255, 255, 255, 0.55);
}

.app-search-icon {
  font-size: 14px;
}

.app-search input {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 11.5px;
  width: 170px;
}

.app-search input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.app-icon-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  font-size: 15px;
}

.app-icon-btn:hover {
  background: rgba(255, 255, 255, 0.14);
}

.app-icon-dot {
  position: absolute;
  top: 5px;
  right: 6px;
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: var(--amber-500);
}

.app-avatar {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: var(--amber-600);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
}

.device-shell {
  display: flex;
  min-height: 460px;
}

/* ===== SIDEBAR ===== */
.sg-sidebar {
  width: 220px;
  flex: 0 0 auto;
  background: var(--teal-900);
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
}

.sg-sidebar-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-family: 'Roboto Slab', Georgia, serif;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0.02em;
}

.sg-sidebar-logo {
  font-size: 18px;
  color: var(--amber-500);
}

.sg-nav {
  flex: 1;
  overflow-y: auto;
  padding: 10px 0;
}

.sg-nav-group {
  margin-bottom: 2px;
}

.sg-nav-cat {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 11.5px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.sg-nav-cat:hover {
  background: rgba(255, 255, 255, 0.05);
}

.sg-nav-cat-icon {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.4);
}

.sg-nav-cat-label {
  flex: 1;
  text-align: left;
}

.sg-nav-chevron {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.35);
  transition: transform 0.15s ease;
}

.sg-nav-chevron.open {
  transform: rotate(180deg);
}

.sg-nav-items {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease;
}

.sg-nav-items.open {
  max-height: 400px;
}

.sg-nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 16px 8px 32px;
  background: transparent;
  border: none;
  border-left: 2px solid transparent;
  cursor: pointer;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.72);
  text-align: left;
  transition: background 0.12s ease, color 0.12s ease;
}

.sg-nav-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}

.sg-nav-item.active {
  background: rgba(224, 160, 61, 0.14);
  border-left-color: var(--amber-500);
  color: var(--amber-500);
  font-weight: 600;
}

.sg-nav-item-icon {
  font-size: 14px;
  color: inherit;
  opacity: 0.85;
}

.sg-sidebar-footer {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  font-size: 10.5px;
  color: rgba(255, 255, 255, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

/* ===== MAIN CONTENT ===== */
.sg-main {
  flex: 1;
  background: var(--paper);
  padding: 20px;
  overflow-x: auto;
}

.sg-view {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.view-fade-enter-active,
.view-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.view-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.view-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.sg-view-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.sg-h3 {
  font-family: 'Roboto Slab', Georgia, serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--ink);
}

.sg-filters {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.sg-chip-filter {
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 4px;
  background: var(--paper-card);
  border: 1px solid var(--line);
  color: var(--steel);
}

.sg-select {
  font-size: 11px;
  padding: 6px 10px;
  border-radius: 4px;
  background: var(--paper-card);
  border: 1px solid var(--line);
  color: var(--ink);
  cursor: pointer;
}

.sg-search-mini {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 4px;
  background: var(--paper-card);
  border: 1px solid var(--line);
  color: var(--steel);
  font-size: 12px;
}

.sg-search-mini input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 11.5px;
  width: 150px;
  color: var(--ink);
}

.sg-btn {
  font-size: 12px;
  font-weight: 600;
  padding: 7px 14px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: background 0.12s ease, transform 0.08s ease;
}

.sg-btn:active {
  transform: scale(0.97);
}

.sg-btn-primary {
  background: var(--amber-600);
  color: #FFFFFF;
}

.sg-btn-primary:hover {
  background: #B06B15;
}

/* ===== TABLE ===== */
.sg-table-wrap {
  background: var(--paper-card);
  border: 1px solid var(--line);
  border-radius: 6px;
  overflow-x: auto;
}

.sg-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12.5px;
  color: var(--ink);
  white-space: nowrap;
}

.sg-table thead th {
  text-align: left;
  padding: 10px 12px;
  background: var(--paper);
  border-bottom: 1px solid var(--line);
  font-size: 11px;
  font-weight: 700;
  color: var(--steel);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.sg-th-sort {
  cursor: pointer;
  user-select: none;
}

.sg-th-sort:hover {
  color: var(--amber-600);
}

.sg-sort-icon {
  color: var(--amber-600);
  font-weight: 700;
}

.sg-table tbody td {
  padding: 9px 12px;
  border-bottom: 1px solid var(--line);
}

.sg-table tbody tr:hover {
  background: #FCF8F0;
}

.sg-table tbody tr:last-child td {
  border-bottom: none;
}

.sg-row-clickable {
  cursor: pointer;
}

.sg-row-detail td {
  background: #FCF8F0;
  padding: 12px 16px;
}

.sg-empty-row td {
  text-align: center;
  color: var(--steel);
  font-style: italic;
  padding: 20px;
}

/* Route progress mini-visual */
.sg-route {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 160px;
}

.sg-route-label {
  font-size: 11.5px;
  white-space: nowrap;
}

.sg-route-track {
  position: relative;
  height: 4px;
  border-radius: 999px;
  background: var(--line);
}

.sg-route-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 999px;
  background: var(--amber-500);
  transition: width 0.4s ease;
}

.sg-route-dot {
  position: absolute;
  top: 50%;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--amber-600);
  border: 2px solid #fff;
  transform: translate(-50%, -50%);
  transition: left 0.4s ease;
}

/* STT expandable timeline */
.sg-timeline {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 11.5px;
  color: var(--steel);
}

.sg-timeline-step {
  display: flex;
  align-items: center;
  gap: 6px;
}

.sg-timeline-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--line);
}

.sg-timeline-step.done {
  color: var(--ink);
  font-weight: 600;
}

.sg-timeline-step.done .sg-timeline-dot {
  background: var(--success-fg);
}

/* Status chip */
.sg-status {
  display: inline-block;
  font-size: 10.5px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
}

.sg-status.success {
  background: var(--success-bg);
  color: var(--success-fg);
}

.sg-status.info {
  background: var(--info-bg);
  color: var(--info-fg);
}

.sg-status.warning {
  background: var(--warn-bg);
  color: var(--warn-fg);
}

.sg-status.error {
  background: var(--error-bg);
  color: var(--error-fg);
}

/* ===== CARD / FINANCIAL BLOCKS ===== */
.sg-card {
  background: var(--paper-card);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 16px;
}

.sg-card-title {
  font-family: 'Roboto Slab', Georgia, serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--line);
}

.sg-financial {
  display: flex;
  flex-direction: column;
}

.sg-fin-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 12.5px;
  color: #3A4A47;
  border-bottom: 1px solid #F1EBDD;
}

.sg-fin-row:last-child {
  border-bottom: none;
}

.sg-fin-row.total {
  font-weight: 700;
  color: var(--ink);
  border-top: 1px solid var(--line);
  margin-top: 4px;
  padding-top: 10px;
}

.sg-fin-row.sg-fin-head {
  font-size: 11px;
  font-weight: 700;
  color: var(--steel);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.negative {
  color: var(--error-fg);
}

.sg-balance-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

/* Compare chart (Pendapatan vs Beban) */
.sg-compare-chart {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sg-compare-row {
  display: grid;
  grid-template-columns: 90px 1fr 130px;
  align-items: center;
  gap: 10px;
}

.sg-compare-label {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--steel);
}

.sg-compare-track {
  height: 10px;
  border-radius: 999px;
  background: var(--paper);
  overflow: hidden;
}

.sg-compare-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.sg-compare-fill.income {
  background: linear-gradient(90deg, #2E8B57, #55C68A);
}

.sg-compare-fill.expense {
  background: linear-gradient(90deg, var(--amber-600), var(--amber-500));
}

.sg-compare-value {
  font-size: 12px;
  text-align: right;
  color: var(--ink);
}

/* ===== HEATMAP (attendance) ===== */
.sg-heatmap {
  display: flex;
  gap: 10px;
}

.sg-heatmap-days {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-top: 2px;
}

.sg-heatmap-days span {
  font-size: 9px;
  color: var(--steel);
  height: 14px;
  line-height: 14px;
}

.sg-heatmap-grid {
  display: flex;
  gap: 3px;
  overflow-x: auto;
}

.sg-heatmap-week {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.sg-heatmap-cell {
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: var(--paper);
  border: 1px solid var(--line);
  cursor: pointer;
  transition: transform 0.1s ease;
}

.sg-heatmap-cell:hover {
  transform: scale(1.2);
}

.sg-heatmap-cell.selected {
  outline: 2px solid var(--teal-800);
  outline-offset: 1px;
}

.sg-heatmap-cell.lvl-0 {
  background: var(--paper);
}

.sg-heatmap-cell.lvl-1 {
  background: #F6DBA0;
  border-color: #F6DBA0;
}

.sg-heatmap-cell.lvl-2 {
  background: #EFBB5E;
  border-color: #EFBB5E;
}

.sg-heatmap-cell.lvl-3 {
  background: var(--amber-600);
  border-color: var(--amber-600);
}

.sg-heatmap-cell.lvl-4 {
  background: #7A4A0E;
  border-color: #7A4A0E;
}

.sg-heatmap-legend {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 12px;
  font-size: 10px;
  color: var(--steel);
}

.sg-heatmap-legend .sg-heatmap-cell {
  width: 12px;
  height: 12px;
  cursor: default;
}

.sg-heat-detail {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding: 8px 12px;
  background: var(--amber-100);
  border: 1px solid var(--amber-500);
  border-radius: 6px;
  font-size: 11.5px;
  color: #7A4A0E;
}

/* Toast */
.sg-toast {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--teal-950);
  color: #fff;
  border-radius: 8px;
  font-size: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.sg-toast :deep(svg) {
  color: #4ADE80;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 900px) {
  .device-shell {
    flex-direction: column;
  }
  .sg-sidebar {
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
  }
  .sg-nav {
    display: flex;
    padding: 0;
  }
  .sg-balance-grid {
    grid-template-columns: 1fr;
  }
  .app-search input {
    width: 100px;
  }
  .sg-compare-row {
    grid-template-columns: 70px 1fr 100px;
  }
}
</style>