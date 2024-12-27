# Tutorial Membuat Achievement Counter dengan React dan TypeScript

Dalam tutorial ini, kita akan membuat aplikasi Achievement Counter yang interaktif menggunakan React dan TypeScript. Aplikasi ini akan menampilkan counter yang bisa ditambah hingga 10, dan akan menampilkan animasi confetti ketika mencapai target.

## Komponen Counter

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

## Komponen App

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

## Tips Pengembangan

1. **Type Safety**:
   - Manfaatkan TypeScript untuk menghindari bug
   - Definisikan tipe untuk props dan state

2. **Styling**:
   - Gunakan Tailwind CSS untuk styling yang konsisten
   - Perhatikan responsive design
   - Tambahkan animasi untuk UX yang lebih baik

3. **Performance**:
   - Gunakan useCallback untuk fungsi yang di-pass sebagai props
   - Hindari re-render yang tidak perlu
   - Optimalkan animasi untuk performa yang baik