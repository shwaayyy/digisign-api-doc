export const responseApiHeader = [
    {
        title: 'No',
        dataIndex: 'key',
        key: 'number',
        width: 75,
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
        fixed: 'right',
        width: 300,
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
    },
    {
        key: 18,
        response: JSON.stringify({
            "JSONFile": {
                "refTrx": "REGD20211028112731000509",
                "result": "20",
                "notif": "User tersebut sudah mencoba didaftarkan lebih dari 3x dengan data tidak valid. Silahkan lakukan pengecekan data-data terlebih dahulu."
            }
        }, null, 2),
        info: "Pengguna telah mencoba mendaftar lebih dari 3 kali dengan data yang tidak valid. Silahkan cek datanya terlebih dahulu."
    },
    {
        key: 19,
        response: JSON.stringify({
            "JSONFile": {
                "result": "15",
                "notif": "No Handphone sudah digunakan. Gunakan No Handphone lain."
            }
        }, null, 2),
        info: "No Handphone sudah digunakan."
    },
    {
        key: 20,
        response: JSON.stringify({
            "JSONFile": {
                "result": "91",
                "notif": "system timeout, silahkan coba kembali 10 menit kemudian"
            }
        }, null, 2),
        info: "system timeout, silahkan coba kembali 10 menit kemudian."
    },
    {
        key: 21,
        response: JSON.stringify({
            "JSONFile": {
                "result": "00",
                "notif": "Email sudah terdaftar, namun belum melakukan aktivasi. Silahkan untuk melakukan aktivasi sebelum data dihapus dari daftar aktivasi.",
                "kode_user": "211000000000543"
            }
        }, null, 2),
        info: "Email telah didaftarkan, tetapi belum diaktifkan. Silakan lakukan aktivasi sebelum data dihapus dari daftar aktivasi."
    },
    {
        key: 22,
        response: JSON.stringify({
            "JSONFile": {
                "kode_user": "211000000000384",
                "result": "00",
                "notif": "Anda sudah terdaftar sebelumnya, silahkan gunakan layanan Digisign"
            }
        }, null, 2),
        info: "anda sudah terdaftar sebelumnya, tolong gunakan layanan Digisign."
    },
    {
        key: 23,
        response: JSON.stringify({
            "JSONFile": {
                "data": {"nik": true, "name": true, "birthdate": true},
                "kode_user": "211000000000539",
                "expired_aktifasi": "27-11-2021 11:28:51 WIB",
                "result": "00",
                "notif": "Berhasil, silahkan check email untuk aktivasi akun anda.",
                "info": "https://app.tandatanganku.com/preregistration.html?preregister=yiZYZ9%2FOFA8uXBKRjP2FBg%3D%3D"
            }
        }, null, 2),
        info: "Sukses, tolong cek email anda untuk melakukan aktivasi akun."
    },
    {
        key: 24,
        response: JSON.stringify({
            "JSONFile": {
                "data": "Saldo verifikasi text habis",
                "result": "12",
                "notif": "verifikasi user gagal.",
                "info": "Registrasi gagal"
            }
        }, null, 2),
        info: "saldo verifikasi teks tidak mencakupi."
    },
    {
        key: 25,
        response: JSON.stringify({
            "JSONFile": {
                "data": "Saldo verifikasi selfie habis",
                "result": "12",
                "notif": "verifikasi user gagal.",
                "info": "Registrasi gagal"
            }
        }, null, 2),
        info: "saldo verifikasi selfie tidak mencakupi."
    },
    {
        key: 26,
        response: JSON.stringify({
            "JSONFile": {
                "kode_user": "220400000000184",
                "data": {"nik": true, "name": true, "birthdate": true},
                "result": "00",
                "notif": "Registrasi berhasil. Anda sudah terdaftar sebelumnya, silahkan gunakan layanan Digisign"
            }
        }, null, 2),
        info: "Registrasi berhasil. Anda telah mendaftar sebelumnya, silakan gunakan layanan Digisign. Syaratnya: pengguna sudah terdaftar tetapi sertifikat elektroniknya sudah kadaluarsa. Mitra perlu mendaftarkan ulang pengguna (dan proses akan memotong saldo verifikasi karena data akan diverifikasi dengan Dukcapil) sehingga pengguna dapat menerbitkan sertifikat elektronik baru."
    },
    {
        key: 27,
        response: JSON.stringify({
            "JSONFile": {
                "data": {"nik": true, "name": true, "birthdate": true},
                "result": "12",
                "notif": "verifikasi user gagal.",
                "info": "Verifikasi wajah gagal. Size foto selfie maksimal 500KB"
            }
        }, null, 2),
        info: "Verifikasi Pengguna gagal. Verifikasi wajah gagal. Ukuran foto selfie maksimum adalah 500KB."
    },
    {
        key: 28,
        response: JSON.stringify({
            "JSONFile":
                {
                    "data": {"nik": true, "name": true, "birthdate": true},
                    "result": "12",
                    "notif": "verifikasi user gagal.",
                    "info": "Verifikasi wajah gagal. Format foto selfie harus JPEG"
                }
        }, null, 2),
        info: "Verifikasi pengguna gagal. Verifikasi wajah gagal. Format foto selfie harus JPEG."
    },
    {
        key: 29,
        response: JSON.stringify({
            "JSONFile": {
                "result": "14",
                "notif": "Email sudah terdaftar dengan NIK lain, silahkan gunakan email lain.",
                "data": {
                    "name": true,
                    "birthdate": true,
                    "selfie": true
                }
            }
        }, null, 2),
        info: "Email sudah terdaftar dengan NIK lain, silahkan gunakan email lain."
    },
    {
        key: 30,
        response: JSON.stringify({
            "JSONFile": {
                "result": "14",
                "notif": "Email sudah terdaftar dengan NIK lain, silahkan gunakan email lain.",
                "data": {
                    "name": true,
                    "birthdate": false,
                    "selfie": false
                }
            }
        }, null, 2),
        info: "Email sudah terdaftar dengan NIK lain, silahkan gunakan email lain. Tanggal Lahir dan foto Selfie tidak cocok."
    },
    {
        key: 31,
        response: JSON.stringify({
            "JSONFile": {
                "result": "14",
                "notif": "NIK sudah terdaftar dengan email lain, silahkan login dengan email yang sesuai NIK atau gunakan NIK lain.",
                "email_registered": "testdemo3@tandatanganku.com",
                "data": {
                    "name": true,
                    "birthdate": true,
                    "selfie": true
                }
            }
        }, null, 2),
        info: "NIK sudah terdaftar dengan email lain, silahkan login dengan email yang sesuai NIK atau gunakan NIK lain."
    },
    {
        key: 32,
        response: JSON.stringify({
            "JSONFile": {
                "result": "14",
                "notif": "NIK sudah terdaftar dengan email lain, silahkan login dengan email yang sesuai NIK atau gunakan NIK lain.",
                "email_registered": "testdemo3@tandatanganku.com",
                "data": {
                    "name": false,
                    "birthdate": true,
                    "selfie": true
                },
                "info": "verifikasi text gagal."
            }
        }, null, 2),
        info: "NIK sudah terdaftar dengan email lain, silahkan login dengan email yang sesuai NIK atau gunakan NIK lain. Nama tidak cocok. Verifikasi teks gagal."
    },
    {
        key: 33,
        response: JSON.stringify({
            "JSONFile": {
                "kode_user": "210300001042350",
                "data": {
                    "name": false,
                    "birthdate": true,
                    "selfie": false
                },
                "result": "12",
                "notif": "verifikasi usergagal. Nama/Foto Selfie/Tanggal lahir tidaksesuai"
            }
        }, null, 2),
        info: "Verifikasi pengguna gagal. Nama/foto Selfie/Tanggal Lahir tidak sesuai. Nama dan foto Selfie tidak cocok."
    },
    {
        key: 34,
        response: JSON.stringify({
            "JSONFile": {
                "kode_user": "210600000000603",
                "data": {
                    "name": true,
                    "birthdate": false,
                    "selfie": true
                },
                "result": "12",
                "notif": "verifikasi user gagal. Nama/Foto Selfie/Tanggal lahir tidak sesuai",
                "info": "verifikasi text gagal."
            }
        }, null, 2),
        info: "Verifikasi pengguna gagal. Nama/foto Selfie/Tanggal Lahir tidak sesuai. Tanggal Lahir tidak sesuai. Verifikasi teks gagal."
    }
]

export const actResponse = [
    {
        key: 1,
        response: JSON.stringify({"JSONFile": {"result": "06", "notif": "General Error"}}, null, 2),
        info: "Kesalahan Umum - email tidak terdaftar / tidak ditemukan"
    },
    {
        key: 2,
        response: JSON.stringify({
            "JSONFile": {
                "result": "14",
                "notif": "Email sudah melakukan aktivasi"
            }
        }, null, 2),
        info: "Email telah diaktifkan."
    },
    {
        key: 3,
        response: JSON.stringify({
            "JSONFile": {
                "result": "00",
                "link": "https://wv.tandatanganku.com/activationpage.html?act=4rhq%2BNvIYsg38tsmz4m%2Bo41CZcc%2BEzVkQn69Ifm5tTBiJngiwM8%2BerQw6HhPDczoE3%2Bb7s0aROOOGkByDOmgxn6gyLYcp4kDy%2BTAK1bCCqruJCYa8CUgQitorXzJxgt93i2C4Hdn8dKBzEDo9cZY9w%3D%3D"
            }
        }, null, 2),
        info: "sukses generate link aktivasi."
    }
]

export const ApiSendDocCode = [
    {
        key: 1,
        response: JSON.stringify({
            "JSONFile": {
                "result": "FE",
                "notif": "Format dokumen harus pdf"
            }
        }, null, 2),
        info: "Format dokumen harus pdf."
    },
    {
        key: 2,
        response: JSON.stringify({
            "JSONFile": {
                "notif": "Request API tidak lengkap.",
                "result": "28"
            }
        }, null, 2),
        info: "Request API tidak lengkap."
    },
    {
        key: 3,
        response: JSON.stringify({"JSONFile": {"result": "17", "notif": "Document_id sudah digunakan"}}, null, 2),
        info: "Document_id sudah digunakan."
    },
    {
        key: 4,
        response: JSON.stringify({"JSONFile": {"result": "05", "notif": "Data request tidak ditemukan"}}, null, 2),
        info: "Data request tidak ditemukan."
    },
    {
        key: 5,
        response: JSON.stringify({"JSONFile": {"result": "05", "notif": "document id kosong"}}, null, 2),
        info: "document id kosong."
    },
    {
        key: 6,
        response: JSON.stringify({
            "JSONFile": {
                "result": "61",
                "notif": "Saldo Tandatangan mitra tidak cukup."
            }
        }, null, 2),
        info: "Saldo Tandatangan mitra tidak cukup."
    },
    {
        key: 7,
        response: JSON.stringify({"JSONFile": {"result": "61", "notif": "Saldo Dokumen mitra tidak cukup."}}, null, 2),
        info: "Saldo Dokumen mitra tidak cukup."
    },
    {
        key: 8,
        response: JSON.stringify({
            "JSONFile": {
                "result": "91",
                "notif": "Sistem timeout, mohon ulangi proses upload document."
            }
        }, null, 2),
        info: "Sistem timeout, mohon ulangi proses upload document."
    },
    {
        key: 9,
        response: JSON.stringify({"JSONFile": {"notif": "Kirim dokumen berhasil.", "result": "00"}}, null, 2),
        info: "Kirim dokumen berhasil."
    },
    {
        key: 10,
        response: JSON.stringify({"JSONFile": {"result": "05", "notif": "field req-sign tidak ditemukan"}}, null, 2),
        info: "field req-sign tidak ditemukan."
    },
    {
        key: 11,
        response: JSON.stringify({
            "JSONFile": {
                "result": "08",
                "notif": "Anda belum memasukkan link redirect anda."
            }
        }, null, 2),
        info: "Anda belum memasukkan link redirect anda."
    },
    {
        key: 12,
        response: JSON.stringify({
            "JSONFile": {
                "result": "03",
                "notif": "Kirim dokumen gagal",
                "info": "Lokasi tanda tangan sebaiknya diposisikan tidak tumpang tindih"
            }
        }, null, 2),
        info: "Pengiriman dokumen gagal. Lokasi tanda tangan tidak boleh tumpang tindih."
    },
    {
        key: 13,
        response: JSON.stringify({
            "JSONFile": {
                "result": "03",
                "notif": "Kirim dokumen gagal",
                "info": "Lokasi tanda tangan dan e-materai sebaiknya diposisikan secara berdampingan dan tidak tumpang tindih"
            }
        }, null, 2),
        info: "Pengiriman dokumen gagal. Lokasi tanda tangan dan e-materai tidak boleh tumpang tindih."
    }
]

export const ApiSignDocCode = [
    {
        key: 1,
        response: "$trxjson",
        info: "Parameter tidak komplit."
    },
    {
        key: 2,
        response: JSON.stringify({"JSONFile": {"result": "05", "notif": "dokumen tidak ditemukan"}}, null, 2),
        info: "dokumen tidak ditemukan."
    },
    {
        key: 3,
        response: JSON.stringify({"JSONFile": {"result": "05", "notif": "user tidak ditemukan"}}, null, 2),
        info: "user tidak ditemukan."
    },
    {
        key: 4,
        response: JSON.stringify({
            "JSONFile": {
                "result": "05",
                "notif": "user tidak masuk penandatangan dokumen ini"
            }
        }, null, 2),
        info: "user tidak masuk penandatangan dokumen ini."
    },
    {
        key: 5,
        response: JSON.stringify({
            "JSONFile": {
                "result": "05",
                "notif": "user telah menandatangani dokumen ini"
            }
        }, null, 2),
        info: "user telah menandatangani dokumen ini."
    },
    {
        key: 6,
        response: JSON.stringify({
            "JSONFile": {
                "result": "00",
                "link": "https://wv.tandatanganku.com/signingpage.html?sgn=%2B6MM%2Fw%2F8t42jikiWlA2jz2IhHR1xyS2fXxgCeykjGnwMfuseUbuv%2FuPxf0qB5Ganidga8zCGwAqaOe%2BD%2F51bKznGnkjON2%2BX%2BOP2GO7ignXTBDdte4wM%2BmlYzhostKRcE5KOJERZ0w%3D%3D"
            }
        }, null, 2),
        info: "sukses generate link tandatangan."
    }
]

export const Base64DownloadCode = [
    {
        key: 1,
        response: JSON.stringify({"JSONFile": {"result": "05", "notif": "file tidak ditemukan"}}, null, 2),
        info: "file tidak ditemukan."
    },
    {
        key: 2,
        response: JSON.stringify({
            "JSONFile": {
                "result": "12",
                "notif": "Mitra tidak diijinkan untuk akses dokumen."
            }
        }, null, 2),
        info: "Mitra tidak diijinkan untuk akses dokumen."
    },
    {
        key: 3,
        response: JSON.stringify({
            "JSONFile": {
                "result": "00",
                "file": "JVBERi0xLjcNCiW1tbW1DQoxIDAgb2JqDQo8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFIvTGFuZkgL1N0cn…"
            }
        }, null, 2),
        info: "sukses download base64."
    }
]

export const ChangePhoneNumAndEmailCode = [
    {
        key: 1,
        response: JSON.stringify({"JSONFile": {"result": "00", "notif": "Sukses update data"}}, null, 2),
        info: "sukses update data."
    },
    {
        key: 2,
        response: JSON.stringify({
            "JSONFile": {
                "result": "14",
                "notif": "Email pengganti sudah terdaftar, silahkan gunakan email lain."
            }
        }, null, 2),
        info: "Email pengganti sudah terdaftar, silahkan gunakan email lain."
    },
    {
        key: 3,
        response: JSON.stringify({
            "JSONFile": {
                "result": "14",
                "notif": "User sudah aktif, silahkan mengubah data pada halaman dashboard"
            }
        }, null, 2),
        info: "User sudah aktif, silahkan mengubah data pada halaman dashboard."
    },
    {
        key: 4,
        response: JSON.stringify({
            "JSONFile": {
                "result": "14",
                "notif": "Nomor handphone pengganti sudah terdaftar, silahkan gunakan nomor handpone lain."
            }
        }, null, 2),
        info: "Nomor handphone pengganti sudah terdaftar, silahkan gunakan nomor handpone lain."
    },
    {
        key: 5,
        response: JSON.stringify({"JSONFile": {"result": "05", "notif": "Email belum terdaftar"}}, null, 2),
        info: "Email belum terdaftar."
    },
    {
        key: 6,
        response: JSON.stringify({
            "JSONFile": {
                "res": "06",
                "notif": "Update email atau no hp gagal"
            }
        }, null, 2),
        info: "Update email atau no hp gagal."
    },
    {
        key: 7,
        response: JSON.stringify({"JSONFile": {"result": "08", "notif": "Nomor hp lama tidak cocok"}}, null, 2),
        info: "Nomor hp lama tidak cocok."
    }
]

export const ApiResCodeBulk = [
    {
        key: 1,
        response: '$trxjson',
        info: 'parameter tidak komplit'
    },
    {
        key: 2,
        response: JSON.stringify({"JSONFile": {"result": "05", "notif": "dokumen tidak ditemukan"}}, null, 2),
        info: 'dokumen tidak ditemukan'
    },
    {
        key: 3,
        response: JSON.stringify({"JSONFile":{"result":"05","notif":"user tidak ditemukan"}}, null, 2),
        info: 'user tidak ditemukan'
    },
    {
        key: 4,
        response: JSON.stringify({"JSONFile":{"result":"05","notif":"user telah menandatangani dokumen ini"}}, null, 2),
        info: 'user tidak masuk penandatangan dokumen ini'
    },
    {
        key: 5,
        response: JSON.stringify({"JSONFile":{"result":"00","link":"https:\/\/wv.tandatanganku.com\/bulksigningpage.html?sgn=3%2FuywTp5TNUDqey3614sTG1fa3UGBy7IJAKY93i4oDbjKXWUbZnOUGQii5BhHYk7tE5QAc3nDSJG2TMP2XDUKN%2BpyCTVoZQB2t8sV9yENmDZ885QAsPZ6OD2VtLAwq9GmlvmGkl5%2F18Pb6LFS3GFBg%3D%3D"}}, null, 2),
        info: 'sukses generate link tandatangan'
    }
]

export const HtmlResCodeCol = [
    {
        key: 'code',
        title: 'Kode',
        dataIndex: 'code'
    },
    {
        key: 'info',
        title: 'informasi',
        dataIndex: 'info'
    }
]

export const HtmlResCodeWV = [
    {
        key: 1,
        code: 200,
        info: 'sukses'
    },
    {
        key: 2,
        code: 403,
        info: 'token user/admin tidak valid'
    },
    {
        key: 3,
        code: 401,
        info: 'user tidak ditemukan'
    },
    {
        key: 4,
        code: 404,
        info: 'dokumen tidak ditemukan'
    },
    {
        key: 5,
        code: 408,
        info: 'sesi habis'
    }
]

export const HtmlResCodeDownload = [
    {
        key: 1,
        code: 200,
        info: 'sukses'
    },
    {
        key: 2,
        code: 403,
        info: 'mitra tidak diizinkan untuk akses dokumen'
    },
    {
        key: 3,
        code: 404,
        info: 'dokumen tidak ditemukan'
    }
]
