export const columnsHeader = [
    {
        title: 'Key',
        dataIndex: 'keyHeader',
        key: 'keyHeader',
    },
    {
        title: 'Value',
        dataIndex: 'valueHeader',
        key: 'valueHeader',
    }
];

export const dataHeader = [
    {
        keyHeader: 'Content-Type',
        valueHeader: 'multipart/form-data'
    },
    {
        keyHeader: 'Authorization',
        valueHeader: 'Bearer <token>'
    },
];

export const registerColumns = [
    {
        title: 'Name',
        dataIndex: 'keyHeader',
        key: 'keyHeader',
    },
    {
        title: 'Value',
        dataIndex: 'valueHeader',
        key: 'valueHeader',
    }
]

export const dataReg = [
    {
        keyHeader: 'Function',
        valueHeader: 'API ini digunakan untuk mendaftarkan pengguna yang akan menggunakan tanda tangan digital ke DigiSign'
    },
    {
        keyHeader: 'Link',
        valueHeader: 'https://api.tandatanganku.com/REG-MITRA.html',
    },
]

export const termsContent = [
    {
        key: 1,
        content: "Silakan tambahkan dalam istilah & kondisi di sisi aplikasi Anda bahwa: Pengguna\n" +
            " telah membaca dan setuju bahwa data pribadi mereka akan terdaftar ke Digisign. \n"
    },
    {
        key: 2,
        content: "Digisign mengharuskan foto Selfie diambil oleh pengguna langsung melalui aplikasi Anda, baik\n" +
            " mobile maupun berbasis web, hanya menggunakan kamera langsung (mengaktifkan webcam /\n" +
            " perangkat kamera default) dan tidak diperbolehkan bagi pengguna untuk mengunggah file foto\n" +
            " selfie"
    },
    {
        key: 3,
        content: "Dari sisi aplikasi Anda, silakan mengatur TIMEOUT, setidaknya untuk Pendaftaran dan\n" +
            " Kirim Dokumen proses. Selain dari dua proses ini, silakan mengatur waktu ke 30-an.\n" +
            " Tujuan dari pengaturan ini di sisi aplikasi Anda adalah untuk mengantisipasi jika\n" +
            " ada waktu untuk Digisign."
    },
    {
        key: 4,
        content: "Jika Anda telah menyelesaikan penyesuaian dan tes integrasi aplikasi Anda dengan API\n" +
            " Digisign, sebelum tahap produksi, aplikasi Anda diperlukan untuk memasuki tahap UAT\n" +
            " di Digisign terlebih dahulu."
    }
]

export const APIColumns = [
    {
        title: 'Field',
        dataIndex: 'field',
        key: 'field',
    },
    {
        title: 'Type data',
        dataIndex: 'dataType',
        key: 'dataType',
    },
    {
        title: 'Length',
        dataIndex: 'length',
        key: 'length',
    },
    {
        title: 'Information',
        dataIndex: 'information',
        key: 'information',
    },
]

export const multipartData = [
    {
        field: "jsonfield*",
        dataType: "Json string",
        length: "",
        information: "Periksa bagian jsonfield di bawah ini"
    },
    {
        field: "fotoktp*",
        dataType: "File",
        length: "Maks 4MB",
        information: "foto KTP"
    },
    {
        field: "fotodiri*",
        dataType: "File",
        length: "Maks 500KB",
        information: "(foto Selfie) Format JPEG/JPG"
    },
    {
        field: "ttd*",
        dataType: "File",
        length: "Maks 4MB",
        information: "Format PNG, latar belakang putih/transparan"
    },
]

export const dataJsonField = [
    {
        field: "JSONFile*",
        dataType: "Json string",
        length: "",
        information: ""
    },
    {
        field: "userid*",
        dataType: "String",
        length: "80",
        information: "Email admin mitra"
    },
    {
        field: "jenis_kelamin*",
        dataType: "String",
        length: "10",
        information: "Laki-laki / Perempuan"
    },
    {
        field: "provinci*",
        dataType: "String",
        length: "",
        information: "Nama Provinsi"
    },
    {
        field: "nama*",
        dataType: "String",
        length: "80",
        information: "Nama. Untuk karakter spesial, hanya bisa menggunakan titik (.) dan koma (,) diizinkan"
    },
    {
        field: "tlp*",
        dataType: "String",
        length: "15",
        information: "Nomor Handphone, contoh: 0812..., +62812..., 62812..."
    },
    {
        field: "tgl_lahir*",
        dataType: "String",
        length: "10",
        information: "dd-MM-yyyy (tanggal lahir). contoh: 28-05-1998"
    },
    {
        field: "idktp*",
        dataType: "String",
        length: "16",
        information: "NIK KTP (ID KTP)"
    },
    {
        field: "tmp_lahir*",
        dataType: "String",
        length: "30",
        information: "Tempat lahir"
    },
    {
        field: "email*",
        dataType: "String",
        length: "80",
        information: "E-Mail pengguna"
    },
    {
        field: "redirect*",
        dataType: "Boolean",
        length: "",
        information: "default: False. True: Setelah Proses Aktivasi, itu akan mengalihkan ke tautan Anda. False: Hanya pemberitahuan Sukses setelah Proses Aktivasi selesai."
    },
]

export const responseAPI = [
    {
        field: "JSONFile*",
        dataType: "JSON String",
        length: "",
        information: ""
    },
    {
        field: "result*",
        dataType: "String",
        length: "2",
        information: "Response Code"
    },
    {
        field: "notif*",
        dataType: "String",
        length: "",
        information: "Informasi Response code"
    },
    {
        field: "kode_user*",
        dataType: "String",
        length: "",
        information: "ID Reference"
    },
    {
        field: "info",
        dataType: "String",
        length: "",
        information: "tambahan informasi dari 'notif'"
    },
]

export const sampleResCol = [
    {
        title: 'Key',
        dataIndex: 'keySample',
        key: 'keySample',
    },
    {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
        render: (value) => {
            return (
                <pre>{value}</pre>
            )
        }
    },
]

export const sampleResData = [
    {
        keySample: "jsonfield",
        value: "{\n" +
            "    \"JSONFile\": {\n" +
            "        \"userid\": \"admin@ptmitra.com\",\n" +
            "        \"jenis_kelamin\": \"laki-laki\",\n" +
            "        \"kota\": \"pekalongan\",\n" +
            "        \"nama\": \"test registrasi\",\n" +
            "        \"tlp\": \"6281290700111\",\n" +
            "        \"tgl_lahir\": \"10-03-1978\",\n" +
            "        \"idktp\": \"3199091003880012\",\n" +
            "        \"tmp_lahir\": \"pekalongan\",\n" +
            "        \"email\": \"test@hotmail.com\",\n" +
            "        \"redirect\": true\n" +
            "    }\n" +
            "}"
    },
    {
        keySample: "fotoktp",
        value: "ktp.jpg"
    },
    {
        keySample: "fotodiri",
        value: "Foto.jpg"
    },
    {
        keySample: "ttd",
        value: "ttd.png"
    },
]

export const resVerData = [
    {
        title: "data EKTP Tidak ada",
        val: "{\n" +
            "    \"JSONFile\": {\n" +
            "        \"result\": \"12\",\n" +
            "        \"notif\": \"verifikasi user gagal. NIK\/Nama\/tanggal lahir tidak sesuai\",\n" +
            "        \"data\": {\n" +
            "            \"nik\": false,\n" +
            "            \"name\": false,\n" +
            "            \"birthdate\": false\n" +
            "        }\n" +
            "    }\n" +
            "}"
    },
    {
        title: "EKTP tidak sama",
        val: "{\n" +
            "    \"JSONFile\": {\n" +
            "        \"data\": {\n" +
            "            \"nik\": true,\n" +
            "            \"name\": true,\n" +
            "            \"birthdate\": true\n" +
            "        },\n" +
            "        \"result\": \"12\",\n" +
            "        \"notif\": \"verifikasi user gagal.\",\n" +
            "        \"info\": \"Verifikasi wajah gagal\"\n" +
            "    }\n" +
            "}"
    },
    {
        title: "data EKTP valid",
        val: "{\n" +
            "    \"JSONFile\": {\n" +
            "        \"data\": {\n" +
            "            \"nik\": true,\n" +
            "            \"name\": true,\n" +
            "            \"birthdate\": true\n" +
            "        },\n" +
            "        \"kode_user\": \"210900000000410\",\n" +
            "        \"expired_aktifasi\": \"29-10-2021 10:19:44 WIB\",\n" +
            "        \"result\": \"00\",\n" +
            "        \"notif\": \"Berhasil, silahkan check email untuk aktivasi akun anda.\",\n" +
            "        \"info\": \"https:\\/\\/app.tandatanganku.com\/preregistration.html?preregister=vXk76mhHhMemw7HbPvpUtA%3D%3D\"\n" +
            "    }\n" +
            "}"
    },
    {
        title: "Connection timeout",
        val: "{\n" +
            "    \"result\": \"91\",\n" +
            "    \"notif\": \"system timeout, silahkan coba kembali 10 menit kemudian\"\n" +
            "}"
    },
    {
        title: "Sertifikat berakhir dan pengguna perlu pendaftaran ulang akun",
        val: "{\n" +
            "    \"JSONFile\": {\n" +
            "        \"kode_user\": \"220400000000041\",\n" +
            "        \"data\": {\n" +
            "            \"nik\": true,\n" +
            "            \"name\": true,\n" +
            "            \"birthdate\": true\n" +
            "        },\n" +
            "        \"result\": \"00\",\n" +
            "        \"notif\": \"Registrasi berhasil. Anda sudah terdaftar sebelumnya, silahkan gunakan layanan Digisign\"\n" +
            "    }\n" +
            "}"
    }
]

