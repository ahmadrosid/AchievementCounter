# Tutorial Membuat Achievement Counter dengan React dan TypeScript

Dalam tutorial ini, kita akan membuat aplikasi Achievement Counter yang interaktif menggunakan React dan TypeScript. Aplikasi ini akan menampilkan counter yang bisa ditambah hingga 10, dan akan menampilkan animasi confetti ketika mencapai target.

## Komponen `Counter.tsx`

Mari kita mulai dengan membuat komponen Counter. Pertama, kita perlu mengimpor beberapa dependency yang akan kita gunakan:

```typescript
import { useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Plus } from 'lucide-react';
```

Kita menggunakan:
- `useState` untuk mengelola state counter
- `useCallback` untuk optimasi performa
- `canvas-confetti` untuk efek confetti
- `lucide-react` untuk ikon Plus

### State Management

Selanjutnya, kita buat komponen Counter dan state-nya:

```typescript
export function Counter() {
  const [count, setCount] = useState(0);
```

Di sini kita membuat state `count` dengan nilai awal 0. State ini akan menyimpan nilai counter kita.

### Logic Increment

Berikutnya, kita buat fungsi untuk menangani klik tombol increment:

```typescript
const handleClick = useCallback(() => {
  setCount((prev) => {
    if (prev >= 10) return prev;
    
    const newCount = prev + 1;
    if (newCount === 10) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
    return newCount;
  });
}, []);
```

Fungsi ini:
1. Mengecek apakah counter sudah mencapai 10
2. Jika belum, tambahkan nilai counter
3. Jika mencapai 10, tampilkan animasi confetti
4. Menggunakan `useCallback` untuk mencegah re-render yang tidak perlu

### Tampilan Counter

Sekarang mari kita buat tampilan untuk nilai counter:

```typescript
<div className="flex flex-col items-center gap-6">
  <div className="text-7xl font-bold text-green-500">{count}</div>
```

Kode ini menampilkan angka counter dengan ukuran besar dan warna hijau.

### Tombol Increment

Berikutnya, kita tambahkan tombol untuk menambah nilai counter:

```typescript
<button
  onClick={handleClick}
  disabled={count >= 10}
  className="flex items-center gap-2 px-8 py-4 bg-green-500 text-black font-semibold rounded-full
           hover:bg-green-400 transform hover:scale-105 transition-all duration-200
           active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
           disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-green-500"
>
  <Plus size={24} />
  <span>Increment</span>
</button>
```

Tombol ini memiliki:
- Event handler untuk klik
- State disabled ketika counter mencapai 10
- Animasi hover dan transisi
- Ikon Plus dari lucide-react

Penjelasan setiap class Tailwind CSS yang digunakan pada button diatas:

**Layout & Positioning:**
- `flex` - Mengatur display flex
- `items-center` - Align items center (vertical alignment)
- `gap-2` - Memberikan gap/jarak 0.5rem antara child elements

**Spacing:**
- `px-8` - Padding horizontal 2rem
- `py-4` - Padding vertical 1rem

**Colors & Background:**
- `bg-green-500` - Background color green (500 intensity)
- `text-black` - Text color hitam

**Typography:**
- `font-semibold` - Font weight semibold

**Border & Shape:**
- `rounded-full` - Border radius maksimal (pill shape)

**Hover Effects:**
- `hover:bg-green-400` - Background berubah ke green-400 saat hover
- `hover:scale-105` - Scale up 105% saat hover
- `transform` - Enable transformations
- `transition-all` - Transisi untuk semua properties
- `duration-200` - Durasi transisi 200ms

**Active & Focus States:**
- `active:bg-green-600` - Background berubah ke green-600 saat active/click
- `focus:outline-none` - Hapus outline default saat focus
- `focus:ring-2` - Tambah ring dengan width 2px saat focus
- `focus:ring-green-500` - Ring color green-500
- `focus:ring-offset-2` - Ring offset 2px

**Disabled State:**
- `disabled:opacity-50` - Opacity 50% saat disabled
- `disabled:cursor-not-allowed` - Cursor not-allowed saat disabled
- `disabled:hover:scale-100` - Tidak ada scale effect saat hover dalam keadaan disabled
- `disabled:hover:bg-green-500` - Tidak ada perubahan background saat hover dalam keadaan disabled

### Pesan Selamat

Terakhir, kita tambahkan pesan selamat yang muncul ketika mencapai target:

```typescript
{count === 10 && (
  <div className="text-xl font-medium text-green-500 animate-bounce">
    🎉 Selamat! 🎉
  </div>
)}
```

Pesan ini akan muncul dengan animasi bounce ketika counter mencapai 10.

## Komponen `App.tsx`

Sekarang mari kita integrasikan Counter ke dalam aplikasi utama. Pertama, kita siapkan struktur dasarnya:

```typescript
import React from 'react';
import { Counter } from './components/Counter';
import { Trophy } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
```

### Header Aplikasi

Mari tambahkan header dengan ikon trophy:

```typescript
<header className="py-6 flex items-center gap-2">
  <Trophy className="w-8 h-8 text-green-500" />
  <span className="text-xl font-bold">Achievement Counter</span>
</header>
```

Header ini menampilkan:
- Ikon trophy berwarna hijau
- Judul aplikasi dengan font tebal

### Konten Utama

Terakhir, kita tambahkan area konten utama yang memuat komponen Counter:

```typescript
<main className="flex items-center justify-center min-h-[80vh]">
  <div className="bg-zinc-900 p-12 rounded-xl shadow-lg max-w-md w-full">
    <Counter />
  </div>
</main>
```

Konten utama ini:
- Mengatur posisi Counter di tengah layar
- Memberikan background gelap dengan bayangan
- Membuat tampilan responsif
