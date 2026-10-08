// ==========================================
// LEMBAR B: Data Halaman sebagai Variabel
// ==========================================

// B.1 & B.4: Variabel Identitas & Data Olahraga
const namaPengguna = "Awan";
const peranPengguna = "Penggiat Kebugaran & Mahasiswa";
const targetSesiMingguan = 4; // Angka, bukan teks "4"
let sesiBerjalan = 2;         // Pakai let karena nilainya bisa bertambah

const profilOlahraga = {
  nama: namaPengguna,
  peran: peranPengguna,
  targetMingguan: targetSesiMingguan,
  olahragaFavorit: ["Lari", "Bulu Tangkis", "Workout Rumah"],
  preferensi: {
    waktu: "Pagi",
    tempatUtama: "Stadion Kampus"
  }
};

// B.2: Template Literal
const ringkasanProfil = `Halo, saya ${profilOlahraga.nama} (${profilOlahraga.peran}). Memiliki ${profilOlahraga.olahragaFavorit.length} jenis olahraga favorit.`;
console.log(ringkasanProfil);

// Demonstrasi B.3: Akses aman (?.) dan nilai bawaan (??)
const lokasiLatihan = profilOlahraga.preferensi?.tempatUtama ?? "Lokasi fleksibel";
console.log(`Lokasi latihan utama: ${lokasiLatihan}`);
// ==========================================
// LEMBAR C: Dua Fungsi Murni (Pure Functions)
// ==========================================

// 1. Fungsi murni menyusun kalimat profil/perkenalan (Object Destructuring)
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Fungsi murni merapikan daftar olahraga favorit jadi satu baris teks
const formatOlahraga = (daftar) => daftar.join(" · ");

// Uji coba dan tampilkan di Console
console.log("Perkenalan:", buatPerkenalan(profilOlahraga));
console.log("Olahraga Favorit:", formatOlahraga(profilOlahraga.olahragaFavorit));


// ==========================================
// LEMBAR D: Struktur Data & Array Methods
// ==========================================

// D.1: Array of Objects untuk data jadwal/target latihan
const daftarLatihan = [
  { id: 1, jenis: "Lari Pagi", durasiMenit: 30, selesai: true },
  { id: 2, jenis: "Bulu Tangkis", durasiMenit: 60, selesai: true },
  { id: 3, jenis: "Workout Inti", durasiMenit: 45, selesai: false },
  { id: 4, jenis: "Berenang", durasiMenit: 45, selesai: false }
];

// D.3: Menampilkan seluruh data dengan console.table
console.log("--- Seluruh Daftar Latihan ---");
console.table(daftarLatihan);

// 1. filter: Menyaring latihan yang sudah selesai
const latihanSelesai = daftarLatihan.filter((latihan) => latihan.selesai);
console.log("--- Latihan Selesai (filter) ---");
console.table(latihanSelesai);

// 2. find: Mencari 1 data latihan spesifik berdasarkan jenisnya
const cariLatihan = daftarLatihan.find((latihan) => latihan.jenis === "Bulu Tangkis");
console.log("Hasil find (Bulu Tangkis):", cariLatihan);

// 3. map: Membuat array baru berisi ringkasan jenis dan durasi
const ringkasanLatihan = daftarLatihan.map((latihan) => `${latihan.jenis} (${latihan.durasiMenit} menit)`);
console.log("Hasil map ringkasan:", ringkasanLatihan);

// D.2: Salinan aman agar data asli tidak termutasi (Immutability)
const salinanUrutDurasi = [...daftarLatihan].sort((a, b) => b.durasiMenit - a.durasiMenit);
console.log("Hasil sort dari salinan (durasi terlama):", salinanUrutDurasi);