import SimpleText from "../components/element/SimpleText";

export default function Home() {
    return (
        <>
            <div className="bg-secondary dark:bg-primary rounded-md p-5 text-primary dark:text-secondary">
                <p className="font-content text-base my-2"><span className="font-semibold">Summarizer Machine</span> adalah aplikasi berbasis web untuk meringkas artikel/jurnal berbahasa Indonesia.</p>
                <p className="font-content text-base my-2"><span className="font-semibold">Peringkasan disini bertujuan</span> untuk keperluan peneliti didalam memahami konten utama jurnal secara cepat.</p>

                <p className="font-content text-base my-2 mt-10">Konten utama jurnal yang dimaksud terbagi ke dalam beberapa aspek utama:</p>
                <p className="font-content text-base my-2 ml-3"><span className="font-semibold">Kasus:</span> menjelaskan masalah komputasi yang diselesaikan dalam penelitian, contoh: klasifikasi, identifikasi, diagnosis, prediksi, dll.</p>
                <p className="font-content text-base my-2 ml-3"><span className="font-semibold">Metode pengumpulan data dan spesifikasi data penelitian:</span> menjelaskan sumber data (jika data sekunder) atau teknik pengumpulan data secara cukup detail jika data nya primer (misal dengan pengambilan gambar/foto citra kain batik, lokasinya dimana, kapan), tipe data (data teks, citra, atau audio), jumlah data, kelas/label data.</p>
                <p className="font-content text-base my-2 ml-3"><span className="font-semibold">Metode penelitian:</span> preprocessing (jika ada), ekstraksi fitur (jika ada), seleksi fitur (jika ada), metode klasifikasi (machine learning), dan evaluasi.</p>
                <p className="font-content text-base my-2 ml-3"><span className="font-semibold">Hasil evaluasi:</span> (nilai akurasi atau precision atau recall, atau error, dll) dan interpretasi hasil.</p>

                <p className="font-content text-base my-2 mt-10"><span className="font-semibold">Cara kerja mesin</span> bisa dengan memasukkan langsung isi jurnal dengan meng-copy and paste ke kotakteks pada mesin penerjemah atau dengan memilih file pdf dari artikel/jurnal yang akan diringkas.</p>
            </div>
        </>
    )
}