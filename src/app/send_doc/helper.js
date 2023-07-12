export const sendDocHeader = [
    {
        keyHeader: "Fungsi",
        valueHeader: "API ini digunakan untuk mengirimkan dokumen yang ingin di tandatangani oleh pengguna"
    },
    {
        keyHeader: "Link",
        valueHeader: "https://api.tandatanganku.com/SendDocMitraAT.html"
    }
]

export const multipartSendDoc = [
    {
        field: "jsonfield*",
        dataType: "Json String",
        length: "",
        information: "Periksa bagian jsonfield di bawah ini"
    },
    {
        field: "file*",
        dataType: "File",
        length: "",
        information: "Format PDF"
    },
]

export const jsonFieldSendDoc = [
    {
        field: "jsonfield*",
        dataType: "Json String",
        length: "",
        information: ""
    },
    {
        field: "userid*",
        dataType: "String",
        length: "80",
        information: "email admin mitra (yang terdaftar di digisign)"
    },
    {
        field: "document_id*",
        dataType: "String",
        length: "20",
        information: "mitra document id (unique)"
    },
    {
        field: "payment",
        dataType: "String",
        length: "1",
        information: "tipe pembayaran tandatangan digital. 2 = pembayaran setiap tandatangan (pembayaran per tandatangan), 3 = pembayaran dari pemilik dokumen (pay per dokumen). Default = 3. contoh = 'payment': '3'"
    },
    {
        field: "redirect*",
        dataType: "Boolean",
        length: "",
        information: "Harus di buat true. saat selesai, halaman akan mengalihkan ke halaman anda"
    },
    {
        field: "branch (opsional)",
        dataType: "String",
        length: "",
        information: "nama branch"
    },
    {
        field: "sequence_option*",
        dataType: "boolean",
        length: "",
        information: `Default false. true: proses tandatangan akan berjalan secara berurutan, false: proses tandatangan akan berjalan tidak dengan berurutan`
    },
//     lanjut besok
]
