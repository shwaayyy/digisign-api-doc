export const responseApiHeader = [
    {
        title: 'No',
        dataIndex: 'key',
        key: 'number',
        render: (record) => {
            return (
                <h2 className={'text-center'}>{record}</h2>
            )
        }
    },
    {
        title: 'Respon',
        dataIndex: 'response',
        key: 'response',
        render: (record) => {
            return (
                <pre className={'font-bold'}>{record}</pre>
            )
        }
    },
    {
        title: 'Informasi',
        dataIndex: 'info',
        key: 'info',
    }
];

export const generalResponse = [
    {
        key: 1,
        response: JSON.stringify({
            "JSONFile": {
                "refTrx": "REGD20211028105609000650",
                "result": "55",
                "notif": "token salah"
            }
        }, null, 2),
        info: "Token salah."
    },
    {
        key: 2,
        response: JSON.stringify({
            "JSONFile": {
                "refTrx": "REGD20211028105744000574",
                "result": "55", "notif": "userid tidak ditemukan"
            }
        }, null, 2),
        info: "UserId tidak ditemukan."
    },
    {
        key: 3,
        response: JSON.stringify({
            "JSONFile": {
                "refTrx": "REGD20211028105812000201",
                "result": "55",
                "notif": "Token dan Mitra tidak sesuai"
            }
        }, null, 2),
        info: "Token dan Userid tidak sesuai."
    },
    {
        key: 4,
        response: JSON.stringify({
            "JSONFile": {
                "refTrx": "REGD20211028110034000035",
                "result": "05",
                "notif": "Request Data tidak ditemukan"
            }
        }, null, 2),
        info: "Request Data tidak ditemukan."
    },
    {
        key: 5,
        response: JSON.stringify({
            "JSONFile": {
                "refTrx": "REGD20211028110753000110",
                "result": "05",
                "notif": "Parameter userid tidak ditemukan"
            }
        }, null, 2),
        info: "Parameter userid tidak ditemukan."
    }
]

export const regResponse = [
    {
        key: 1,
        response: JSON.stringify({
                "JSONFile": {"result": "FE", "notif": "Format email salah"}
            }, null, 2
        ),
        info: "Format email salah."
    },
    {
        key: 2,
        response: JSON.stringify({
                "JSONFile": {"result": "FE", "notif": "Format NIK salah"}
            }, null, 2
        ),
        info: "Format NIK salah."
    },
    {
        key: 3,
        response: JSON.stringify({
                "JSONFile": {
                    "result": "28",
                    "notif": "data upload tidak lengkap",
                    "info": "harap upload foto e-ktp dan wajah selfie anda"
                }
            }, null, 2
        ),
        info: "Upload data tidak lengkap, silahkan upload foto ektp dan selfie face."
    },
    {
        key: 4,
        response: JSON.stringify({"JSONFile": {"result": "28", "notif": "format hp harus 62, 08 atau +62"}}, null, 2),
        info: "format hp harus 62, 08 atau +62."
    },
    {
        key: 5,
        response: JSON.stringify({"JSONFile": {"result": "28", "notif": "teks tlp kurang dari 8 karakter"}}, null, 2),
        info: "Teks telepon kurang dari 8 karakter."
    },
    {
        key: 6,
        response: JSON.stringify({"JSONFile": {"result": "28", "notif": "teks nama maksimum 128 karakter"}}, null, 2),
        info: "teks nama maksimum 128 karakter."
    },
    {
        key: 7,
        response: JSON.stringify({
            "JSONFile": {
                "result": "28",
                "notif": "teks kode pos maksimum 10 karakter"
            }
        }, null, 2),
        info: "teks kode pos maksimum 10 karakter."
    },
    {
        key: 8,
        response: JSON.stringify({"JSONFile": {"result": "28", "notif": "teks email maksimum 80 karakter"}}, null, 2),
        info: "teks email maksimum 80 karakter."
    },
    {
        key: 9,
        response: JSON.stringify({
            "JSONFile": {
                "result": "28",
                "notif": "teks jenis kelamin maksimum 10 karakter"
            }
        }, null, 2),
        info: "teks alamat maksimum 10 karakter."
    },
    {
        key: 10,
        response: JSON.stringify({
            "JSONFile": {
                "result": "12",
                "notif": "verifikasi  user gagal. NIK/Nama/tanggal lahir tidak sesuai",
                "data": {
                    "nik": false,
                    "name": false,
                    "birthdate": false
                }
            }
        }, null, 2),
        info: "verifikasi user gagal. NIK/Nama/tanggal lahir tidak cocok. NIK/ID tidak ditemukan pada Lembaga Verifikasi."
    },
    {
        key: 11,
        response: JSON.stringify({
            "JSONFile": {
                "data": {"nik": true, "name": false, "birthdate": false},
                "result": "12",
                "notif": "verifikasi user gagal. NIK/Nama/tanggal lahir tidak sesuai",
                "info": "verifikasi text gagal."
            }
        }, null, 2),
        info: "Verifikasi pengguna gagal. NIKNamatanggal lahir tidak cocok. Verifikasi teks gagal. Nama dan Tanggal lahir tidak sesuai dengan Lembaga Verifikasi.."
    },
    {
        key: 12,
        response: JSON.stringify({
            "JSONFile": {
                "data": {
                    "nik": true,
                    "name": true,
                    "birthdate": false
                },
                "result": "12",
                "notif": "verifikasi user gagal. NIK\/Nama\/tanggal lahir tidak sesuai",
                "info": "verifikasi text gagal."
            }
        }, null, 2),
        info: "Verifikasi pengguna gagal. NIKNamatanggal lahir tidak cocok. Verifikasi teks gagal. Tanggal lahir tidak sesuai dengan Lembaga Verifikasi."
    },
    {
        key: 13,
        response: JSON.stringify({
            "JSONFile": {
                "data": {
                    "nik": true,
                    "name": false,
                    "birthdate": true
                },
                "result": "12",
                "notif": "verifikasi usergagal. NIK\/Nama\/tanggal lahir tidak sesuai",
                "info": "verifikasi text gagal."
            }
        }, null, 2),
        info: "Verifikasi pengguna gagal. NIKNamatanggal lahir tidak cocok. Verifikasi teks gagal. Tanggal lahir tidak sesuai dengan Lembaga Verifikasi.."
    },
    {
        key: 14,
        response: JSON.stringify({
            "JSONFile": {
                "data": {
                    "nik": true,
                    "name": true,
                    "birthdate": true
                },
                "result": "12",
                "notif": "verifikasi user gagal.",
                "info": "No face found on Selfie"
            }
        }, null, 2),
        info: "Verifikasi pengguna gagal. Tidak ada wajah yang ditemukan di Selfie. Verifikasi gagal pada liveness check Digisign."
    },
    {
        key: 15,
        response: JSON.stringify({
            "JSONFile": {
                "data": {"nik": true, "name": true, "birthdate": true},
                "result": "12",
                "notif": "verifikasi usergagal.",
                "info": "No Face Found on KTP"
            }
        }, null, 2),
        info: "Verifikasi pengguna gagal. Tidak ada wajah yang ditemukan di KTP. Verifikasi gagal pada liveness check Digisign."
    },
    {
        key: 16,
        response: JSON.stringify({
            "JSONFile": {
                "data": {
                    "nik": true,
                    "name": true,
                    "birthdate": true
                },
                "result": "12",
                "notif": "verifikasi user gagal.",
                "info": "Verifikasi gagal. Pastikan cahaya cukup dan foto ktp sesuai dengan foto wajah."
            }
        }, null, 2),
        info: "verifikasi gagal. Verifikasi gagal. Pastikan cahaya cukup dan foto KTPID sesuai dengan foto selfie. Verifikasi gagal pada FR Digisign."
    },
    {
        key: 17,
        response: JSON.stringify({
            "JSONFile": {
                "data": {
                    "nik": true,
                    "name": true,
                    "birthdate": true
                },
                "result": "12",
                "notif": "verifikasi user gagal.",
                "info": "Verifikasi wajah gagal"
            }
        }, null, 2),
        info: "Verifikasi wajah gagal. Verifikasi gagal pada Lembaga Verifikasi."
    }
//     lanjut lagi nanti
]

