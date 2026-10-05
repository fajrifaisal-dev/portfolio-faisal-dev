<template>
  <div class="mock">
    <div class="toolbar">
      <div class="filters">
        <label class="label">Filter Status</label>
        <select v-model="status" class="select">
          <option value="ALL">All</option>
          <option v-for="s in statuses" :key="s" :value="s">{{ s }}</option>
        </select>
      </div>

      <div class="filters">
        <label class="label">Sort</label>
        <select v-model="sortKey" class="select">
          <option value="date_desc">Tanggal (desc)</option>
          <option value="date_asc">Tanggal (asc)</option>
          <option value="amount_desc">Nominal (desc)</option>
        </select>
      </div>
    </div>

    <div class="table-wrap">
      <table class="tbl">
        <thead>
          <tr>
            <th class="th">Channel</th>
            <th class="th">Invoice</th>
            <th class="th">Tanggal</th>
            <th class="th">Nominal</th>
            <th class="th">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in visibleRows" :key="row.id">
            <td class="td">
              <span class="pill" :style="{ background: `color-mix(in oklab, ${accent} 12%, rgba(255,255,255,.04))` }">
                {{ row.channel }}
              </span>
            </td>
            <td class="td mono">{{ row.invoice }}</td>
            <td class="td mono">{{ row.date }}</td>
            <td class="td mono">{{ formatIDR(row.amount) }}</td>
            <td class="td">
              <span class="status" :class="statusClass(row.status)" :style="statusAccentStyle(row.status)">
                {{ row.status }}
              </span>
            </td>
          </tr>

          <tr v-if="visibleRows.length === 0">
            <td class="td" colspan="5">
              <div class="empty">Tidak ada data untuk filter ini.</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="footer-note">
      Menampilkan {{ visibleRows.length }} dari {{ rows.length }} transaksi dummy.
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

export type PaymentStatus = 'SUCCESS' | 'PENDING' | 'FAILED'

type Row = {
  id: string
  channel: string
  invoice: string
  date: string
  amount: number
  status: PaymentStatus
}

const props = defineProps<{
  accent: string
  rows: Row[]
}>()

const statuses = ['SUCCESS', 'PENDING', 'FAILED'] as PaymentStatus[]
const status = ref<'ALL' | PaymentStatus>('ALL')
const sortKey = ref<'date_desc' | 'date_asc' | 'amount_desc'>('date_desc')

const visibleRows = computed(() => {
  let list = [...props.rows]

  if (status.value !== 'ALL') {
    list = list.filter((r) => r.status === status.value)
  }

  const toTime = (d: string) => {
    // d: YYYY-MM-DD
    const parts = d.split('-')
    const y = Number(parts[0])
    const m = Number(parts[1])
    const day = Number(parts[2])

    return new Date(y, m - 1, day).getTime()
  }


  list.sort((a, b) => {
    if (sortKey.value === 'date_desc') return toTime(b.date) - toTime(a.date)
    if (sortKey.value === 'date_asc') return toTime(a.date) - toTime(b.date)
    if (sortKey.value === 'amount_desc') return b.amount - a.amount
    return 0
  })

  return list
})

function formatIDR(n: number) {
  return n.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })
}

function statusClass(s: PaymentStatus) {
  if (s === 'SUCCESS') return 'is-success'
  if (s === 'PENDING') return 'is-pending'
  return 'is-failed'
}

function statusAccentStyle(s: PaymentStatus) {
  if (s === 'SUCCESS') return { borderColor: 'rgba(255,255,255,.14)', background: 'rgba(16,185,129,.12)' }
  if (s === 'PENDING') return { borderColor: 'rgba(255,255,255,.14)', background: 'rgba(245,158,11,.12)' }
  return { borderColor: 'rgba(255,255,255,.14)', background: 'rgba(239,68,68,.12)' }
}
</script>

<style scoped>
.mock {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  overflow: hidden;
}

.toolbar {
  padding: 14px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: flex-end;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.filters {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
}

.select {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  padding: 7px 10px;
  border-radius: 10px;
  font-size: 12px;
  outline: none;
}

.table-wrap {
  overflow: auto;
}

.tbl {
  width: 100%;
  border-collapse: collapse;
  min-width: 760px;
}

.th {
  text-align: left;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 600;
  padding: 12px 14px;
}

.td {
  padding: 12px 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
}

.mono {
  font-family: ui-monospace, monospace;
  letter-spacing: 0.04em;
}

.pill {
  border-radius: 999px;
  padding: 4px 9px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 11px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.75);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  font-family: ui-monospace, monospace;
  letter-spacing: 0.05em;
  font-size: 11px;
}

.footer-note {
  padding: 12px 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 11px;
  color: rgba(255, 255, 255, 0.55);
}

.empty {
  padding: 18px 0;
  color: rgba(255, 255, 255, 0.6);
}
</style>

