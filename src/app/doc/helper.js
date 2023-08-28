export const headerSignDoc = [
    {
        key: 1,
        keyHeader: 'Fungsi',
        valueHeader: 'Api ini digunakan untuk mendapatkan link halaman tandatangan'
    },
    {
        key: 2,
        keyHeader: 'Link',
        valueHeader: 'https://api.tandatanganku.com/gen/genSignPage.html'
    },
    {
        key: 3,
        keyHeader: 'Redirect',
        valueHeader: `Anda harus memberikan link redirect dan kami akan mengarahkan ke link ini ketika pengguna telah menandatangani dokumen. \n\n *Pilihan Redirect dalam dokumen kirim API.`
    }
]

export const dataSignDoc = [
    {
        field: 'jsonfield*',
        dataType: 'Json String',
        length: '',
        information: 'cek bagian jsonfield di bawah ini'
    }
]

export const sendDocHeader = [
    {
        key: 1,
        keyHeader: "Fungsi",
        valueHeader: "API ini digunakan untuk mengirimkan dokumen yang ingin di tandatangani oleh pengguna"
    },
    {
        key: 2,
        keyHeader: "Link",
        valueHeader: "https://api.tandatanganku.com/SendDocMitraAT.html"
    }
]

export const multipartSendDoc = [
    {
        key: 1,
        field: "jsonfield*",
        dataType: "Json String",
        length: "",
        information: "Periksa bagian jsonfield di bawah ini"
    },
    {
        key: 2,
        field: "file*",
        dataType: "File",
        length: "",
        information: "Format PDF"
    },
]

export const jsonFieldSendDoc = [
    {
        key: 1,
        field: "jsonfield*",
        dataType: "Json String",
        length: "",
        information: ""
    },
    {
        key: 2,
        field: "userid*",
        dataType: "String",
        length: "80",
        information: "email admin mitra (yang terdaftar di digisign)"
    },
    {
        key: 3,
        field: "document_id*",
        dataType: "String",
        length: "20",
        information: "mitra document id (unique)"
    },
    {
        key: 4,
        field: "payment",
        dataType: "String",
        length: "1",
        information: "tipe pembayaran tandatangan digital. 2 = pembayaran setiap tandatangan (pembayaran per tandatangan), 3 = pembayaran dari pemilik dokumen (pay per dokumen). Default = 3. contoh = 'payment': '3'"
    },
    {
        key: 5,
        field: "redirect*",
        dataType: "Boolean",
        length: "",
        information: "Harus di buat true. saat selesai, halaman akan mengalihkan ke halaman anda"
    },
    {
        key: 6,
        field: "branch (opsional)",
        dataType: "String",
        length: "",
        information: "nama branch"
    },
    {
        key: 7,
        field: "sequence_option*",
        dataType: "boolean",
        length: "",
        information: `Default false. true: proses tandatangan akan berjalan secara berurutan, false: proses tandatangan akan berjalan tidak dengan berurutan`
    },
    {
        key: 8,
        field: "send-to",
        dataType: "Array[json string]",
        length: "",
        information: "daftar pengguna yang bisa melihat dokumen"
    },
    {
        key: 9,
        field: "req-sign*",
        dataType: "Array[json string]",
        length: "",
        information: "daftar pengguna yang bisa melihat dokumen dan tandatangan dokumen"
    },
    {
        key: 10,
        field: "nama*",
        dataType: "String",
        length: "80",
        information: ""
    },
    {
        key: 11,
        field: "email*",
        dataType: "String",
        length: "80",
        information: ""
    },
    {
        key: 12,
        field: "user*",
        dataType: "String",
        length: "30",
        information: "tipe tandatangan: ttd1, ttd, ...; prf1, prf2, ...; ttd = tanda tangan, prf = paraf. Default = 'ttd'"
    },
    {
        key: 13,
        field: "llx*",
        dataType: "String",
        length: "30",
        information: ""
    },
    {
        key: 14,
        field: "lly*",
        dataType: "String",
        length: "30",
        information: ""
    },
    {
        key: 15,
        field: "urx*",
        dataType: "String",
        length: "30",
        information: ""
    },
    {
        key: 16,
        field: "ury*",
        dataType: "String",
        length: "30",
        information: ""
    },
    {
        key: 17,
        field: "page*",
        dataType: "String",
        length: "3",
        information: "halaman ttd"
    },
    {
        key: 18,
        field: "visible*",
        dataType: "String",
        length: "1",
        information: "Digunakan untuk menunjukkan bahwa lokasi lokasi terlihat atau tersembunyi. default visible = true. 0 = false (sembunyi). 1 = true (terlihat)"
    },
    {
        key: 19,
        field: "signing_req (kondisional)",
        dataType: "int",
        length: "",
        information: "Default 0, urutan dari proses tandatangan"
    },
    {
        key: 20,
        field: "meterai_positions (opsional)",
        dataType: "Array[json string]",
        length: "",
        information: "list dari e-meterai lokasi (termasuk: llx, lly, urx, ury, page)"
    },
    {
        key: 21,
        field: "document_type (kondisional)",
        dataType: "String",
        length: "1",
        information: "Jenis pengunggah dokumen untuk menempatkan meterai pada dokumen. 2 = Dokumen Transaksi, Surat Berharga, Akta Pejabat, Akta Notaris, Dokumen yang lain-lain, Dokumen Lelang.\n 3 = Surat Keterangan, Surat Perjanjian, Surat Lainnya.\n 4a = Dokumen pernyataan jumlah uang lebih Dari 5jt, Dokumen penerimaan uang (lebih Dari 5 juta).\n 4b = Dokumen pelunasan utang (Lebih Dari 5 juta).\n"
    },
]

export const resSendDoc = [
    {
        key: 1,
        field: "JSONFile*",
        dataType: "Json String",
    },
    {
        key: 2,
        field: "result*",
        dataType: "String",
        length: 2,
        information: 'kode response'
    },
    {
        key: 3,
        field: "notif*",
        dataType: "String",
        information: 'informasi kode response'
    },
    {
        key: 4,
        field: "refTrx*",
        dataType: "String",
        information: 'ID Referensi'
    },
]

export const exMessageHeader = [
    {
        title: 'Key',
        dataIndex: 'keyHeader',
        key: 'keyHeader',
        render: (record) => {
            return (
                <h2 className={'font-bold'}>{record}</h2>
            )
        }
    },
    {
        title: 'Value',
        dataIndex: 'valueHeader',
        key: 'valueHeader',
        render: (record) => {
            return (
                <pre className={'whitespace-pre-line break-all'}>{record}</pre>
            )
        }
    }
]

export const exMessage = [
    {
        key: 1,
        keyHeader: "jsonfield",
        valueHeader: JSON.stringify(
            {
                "JSONFile": {
                    "userid": "admin@gmail.com",
                    "document_id": "20180920_AB",
                    "payment": "3",
                    "send-to": [
                        {"name": "eka", "email": "eka@hotmail.com"},
                        {"name": "eko", "email": "eko@hotmail.com"}
                    ],
                    "req-sign": [
                        {
                            "name": "test1",
                            "email": "test@hotmail.com",
                            "user": "ttd1",
                            "aksi_ttd": "at",
                            "kuser": "Se79Vj8PRTMAE6Vi",
                            "page": "1",
                            "llx": "57",
                            "lly": "349",
                            "urx": "187",
                            "ury": "414",
                            "visible": "1"
                        },
                        {
                            "name": "test2",
                            "email": "test2@hotmail.com",
                            "user": "ttd2",
                            "aksi_ttd": "mt",
                            "page": "1",
                            "llx": "357",
                            "lly": "348",
                            "urx": "487",
                            "ury": "413",
                            "visible": "1"
                        }
                    ],
                    "redirect": "true"
                }
            },
            null,
            2
        )
    },
    {
        key: 2,
        keyHeader: "File",
        valueHeader: "perjanjian.pdf"
    }
]

export const reqJSON = `<SEND> [jsonfield] : ${JSON.stringify({
    "JSONFile": {
        "userid": "admin@gmail.com",
        "document_id": "20180920_AB",
        "payment": "3",
        "redirect": true,
        "send-to": [
            {
                "name": "eka",
                "email": "eka@hotmail.com"
            },
            {
                "name": "eko",
                "email": "eko@hotmail.com"
            }
        ],
        "req-sign": [
            {
                "name": "test1",
                "email": "test@hotmail.com",
                "user": "ttd1",
                "page": "3",
                "llx": "12",
                "lly": "15",
                "urx": "12",
                "ury": "15",
                "visible": "1"
            },
            {
                "name": "test2",
                "email": "test2@hotmail.com",
                "user": "ttd2",
                "page": "4",
                "llx": "12",
                "lly": "15",
                "urx": "12",
                "ury": "15",
                "visible": "1"
            }
        ]
    }
}, null, 2)}; [file] :{perjanjian.pdf,305603};`

export const exJSONres = `<RECEIVE> ${JSON.stringify({
    "JSONFile": {
        "notif": "Kirim dokumen berhasil.",
        "result": "00"
    }
}, null, 2)};`

export const columnsMeterai = [
    {
        title: 'Key',
        dataIndex: 'keyMeterai',
        key: 'keyMeterai',
        render: (record) => {
            return (
                <h2 className={'font-bold'}>{record}</h2>
            )
        }
    },
    {
        title: 'Value',
        dataIndex: 'valueMeterai',
        key: 'valueMeterai',
        render: (record) => {
            return (
                <pre className={'font-mono text-sm'}>{record}</pre>
            )
        }
    }
]

export const meteraiTable = [
    {
        key: 1,
        keyMeterai: "jsonfield",
        valueMeterai: JSON.stringify(
            {
                "JSONFile": {
                    "userid": "admin@mitra.com",
                    "document_id": "20180920_AB",
                    "payment": "3",
                    "redirect": true,
                    "send-to": [
                        {
                            "name": "eka",
                            "email": "eka@hotmail.com"
                        },
                        {
                            "name": "eko",
                            "email": "eko@hotmail.com"
                        }
                    ],
                    "req-sign": [
                        {
                            "name": "test1",
                            "email": "test@hotmail.com",
                            "user": "ttd1",
                            "page": "3",
                            "llx": "12",
                            "lly": "15",
                            "urx": "12",
                            "ury": "15",
                            "visible": "1"
                        },
                        {
                            "name": "test2",
                            "email": "test2@hotmail.com",
                            "user": "ttd2",
                            "page": "4",
                            "llx": "12",
                            "lly": "15",
                            "urx": "12",
                            "ury": "15",
                            "visible": "1"
                        }
                    ],
                    "meterai-positions": [
                        {
                            "llx": "110",
                            "lly": "110",
                            "urx": "200",
                            "ury": "200",
                            "page": "1"
                        }
                    ],
                    "document_type": "2"
                }
            },
            null,
            1
        )
    },
    {
        key: 2,
        keyMeterai: "File",
        valueMeterai: "perjanjian.pdf"
    }
]

export const exJSONMeterai = `<SEND> [jsonfield]: ${JSON.stringify({
    "JSONFile": {
        "userid": "admin@mitra.com",
        "document_id": "20180920_AB",
        "payment": "3",
        "redirect": true,
        "send-to": [
            {
                "name": "eka",
                "email": "eka@hotmail.com"
            },
            {
                "name": "eko",
                "email": "eko@hotmail.com"
            }
        ],
        "req-sign": [
            {
                "name": "test1",
                "email": "test@hotmail.com",
                "user": "ttd1",
                "page": "3",
                "llx": "12",
                "lly": "15",
                "urx": "12",
                "ury": "15",
                "visible": "1"
            },
            {
                "name": "test2",
                "email": "test2@hotmail.com",
                "user": "ttd2",
                "page": "4",
                "llx": "12",
                "lly": "15",
                "urx": "12",
                "ury": "15",
                "visible": "1"
            }
        ],
        "meterai-positions": [
            {
                "llx": "110",
                "lly": "110",
                "urx": "200",
                "ury": "200",
                "page": "1"
            }
        ],
        "document_type": "2"
    }
}, null, 2)}; [file] :{perjanjian.pdf, 305603};`

export const exResJSONMeterai = `<RECEIVE> ${JSON.stringify({
    "JSONFile": {
        "notif": "Kirim dokumen berhasil.",
        "result": "00"
    }
}, null, 2)}`

export const dataJsonFieldSign = [
    {
        key: 1,
        field: "JSONField*",
        dataType: "JSON String",
        length: "",
        information: ""
    },
    {
        key: 2,
        field: "userid*",
        dataType: "String",
        length: "80",
        information: "Email admin mitra"
    },
    {
        key: 3,
        field: "document_id*",
        dataType: "String",
        length: "20",
        information: "dokumen id mitra(unik)"
    },
    {
        key: 4,
        field: "email_user*",
        dataType: "String",
        length: "80",
        information: "email pengguna yang ingin tandatangan"
    },
    {
        key: 5,
        field: "view_only (optional)",
        dataType: "boolean",
        length: "",
        information: "jika 'true' maka pengguna hanya dapat melihat dokumen jika 'false' atau bidang ini tidak ada maka pengguna dapat melihat dan menandatangani dokumen"
    }
]

export const resJsonSign = [
    {
        key: 1,
        field: "JSONField*",
        dataType: "JSON String",
        length: "",
        information: ""
    },
    {
        key: 2,
        field: "result*",
        dataType: "String",
        length: "2",
        information: "kode respon"
    },
    {
        key: 3,
        field: "link*",
        dataType: "String",
        information: "Tautan html untuk tampilan web proses tandatangan"
    }
]

export const exJSONReqSign = `<SEND> [jsonfield] : "JSONFile": ${JSON.stringify({
    "userid": "admin@gmail.com",
    "email_user": "test@hotmail.com",
    "document_id": "testdoc123",
    "view_only": false
}, null, 2)}`

export const exJSONResSign = `<RECEIVE> { "JSONFile" : ${JSON.stringify({
    "result": "00",
    "link": "https://wv.tandatanganku.com/viewpage.html?view=aO7%2B4ui1zFz%2BsbMl4nb%2BLPAC17uvhMHPZ%2FexPaVRXas8ZAbL%2FElzcV9JxlH5YI%2FuMHtrI3qre6N4AVnkDbQiL%2BTNp3sPsr76xPAsq3cFgbvIH6xcgxJVruMaykkMMqC4bC3WMj%2FiAIM80B4yuuw6KQ%3D%3D"
}, null, 2)} }`

export const RedirectRes = [
    {
        key: 1,
        field: "JSONField",
        dataType: "JSON String",
        length: "",
        information: ""
    },
    {
        key: 2,
        field: "document_id",
        dataType: "String",
        length: "20",
        information: "Dokumen yang baru saja ditandatangani"
    },
    {
        key: 3,
        field: "email_user",
        dataType: "String",
        length: "80",
        information: "Email penandatangan yang baru saja menandatangani dokumen"
    },
    {
        key: 4,
        field: "status_document",
        dataType: "String",
        length: "",
        information: "Status Dokumen completed: semua pengguna telah menandatangani dokumen waiting: ada pengguna yang belum menandatangani dokumen"
    },
]

export const exResRedirect = "https://app.mitra.com/resultsign.html?msg=Cij6Jz9ui76E5Ky%2FqJRqt5jMp1gx%2Bz1onr2%2FO%2Fb%2FQQOlCOI%2FsNbocobyzf4XkeXTCZRJ%2B7r7J3%2FI%0AjMKCjBpOTpZuuhUUeQTD%2BmU43vsKbSKj0oQxhKUvUG%2BNcdYcTSRiM3ikRaMiBB4rrxQXdEwUu18r%0A1naOnZwvJw0ZnEx94Z4%3D"


export const exResRedirectDec = `<RECEIVE> ${JSON.stringify({
    "document_id": "sni040302",
    "status_document": "complete",
    "result": "00",
    "notif": "Proses tanda tangan berhasil!",
    "email_user": "digisigntest@tandatanganku.com"
}, null, 2)};`


export const Paragraph = [
    "Ketika pengguna menandatangani dokumen melalui Digisign WebView, Digisign akan mengecek status sertifikat elektronik tersebut dan notifikasi yang akan muncul di WebView akan menyesuaikan status sertifikat elektronik milik pengguna yang akan menandatangani. Masa aktif Sertifikat Elektronik Digisign berlaku selama satu tahun. Setelah itu, pengguna wajib melakukan verifikasi ulang data untuk menerbitkan sertifikat elektronik baru.",
    "Ketentuan: Pengguna mencoba menandatangani dokumen tetapi sertifikat elektronik milik akun pengguna telah kedaluwarsa. Pengguna diarahkan untuk mendaftar ulang. Informasi terkait proses Registrasi ulang telah terkirim secara otomatis ke email pengguna.",
    "Ketentuan : Untuk proses Daftar Ulang akan dilakukan verifikasi ulang ke Instansi Pemerintah (Dukcapil) dan akan dipotong saldo verifikasi.",
    "Setelah proses Registrasi ulang berhasil, pengguna diharapkan kembali ke Sign Document WebView untuk melanjutkan proses tandatangan",
    "Digisign.id akan melakukan pencabutan sertifikat elektronik secara menyeluruh. Digisign.id akan mencabut sertifikat elektronik Anda terhitung sejak tanggal 27 Juni 2022. Sertifikat elektronik Anda yang baru akan diterbitkan kembali setelah adanya konfirmasi penerbitan sertifikat elektronik oleh Anda melalui aplikasi Digisign atau Digisign Sign Document WebView.",
    "Ketentuan: Pengguna tetap dapat memilih konfirmasi penerbitan sertifikat elektronik baru diikuti dengan menandatangani dokumen atau hanya menandatangani dokumen. Jika pengguna memilih untuk menandatangani dokumen saja, dokumen akan ditandatangani menggunakan sertifikat elektronik lama. Dokumen tersebut akan tetap berlaku meskipun ditandatangani dengan sertifikat lama.",
    "Ketentuan: Pengguna harus mengonfirmasi penerbitan sertifikat elektronik sebelum proses penandatanganan dokumen melalui WebView.",
    "Kondisi: Pengguna menandatangani dokumen yang di dalamnya juga terdapat emeterai melalui WebView."
]

export const bulksignHeaderTable = [
    {
        key: 1,
        keyHeader: 'fungsi',
        valueHeader: 'API ini digunakan untuk melakukan tandatangan bulk dokumen'
    },
    {
        key: 2,
        keyHeader: 'Link',
        valueHeader: 'send multipart/form with POST to https://api.tandatanganku.com/gen/genBulkSign.html'
    },
    {
        key: 3,
        keyHeader: 'Redirect/callback',
        valueHeader: 'You must provide link redirect/callback and we will redirect/callback to this link when the user has signed document. *Opsi pengalihan dalam API Kirim Dokumen.'
    }
]

export const bulksignHeader = [
    {
        key: 1,
        keyHeader: 'Content-type',
        valueHeader: 'multipart/form-data'
    },
    {
        key: 2,
        keyHeader: 'Authorization',
        valueHeader: 'Bearer (token)'
    }
]

export const bulksignBody = [
    {
        key: 1,
        field: "JSONFile**",
        dataType: "Json String",
    },
    {
        key: 2,
        field: "userid*",
        dataType: "String",
        length: "80",
        information: "Email admin mitra"
    },
    {
        key: 3,
        field: 'document_id*',
        dataType: 'String[]',
        information: 'List of documents that want to sign, minimal 2 dokumen, maximal 100 dokumen'
    },
    {
        key: 4,
        field: 'email_user*',
        dataType: 'String',
        length: '80',
        information: 'User Email will sign'
    },
    {
        key: 5,
        field: 'must read',
        dataType: 'boolean',
        information: 'If true then we will send document link for each document. The documents must be read by the user. And the user will only sign the documents that they have read If false then the user will sign the documents that exist in the document id list'
    }
]

export const bulksignRes = [
    {
        key: 1,
        field: "JSONFile*",
        dataType: "Json String",
    },
    {
        key: 2,
        field: "result",
        dataType: "String",
        length: "2",
        information: "kode respon"
    },
    {
        key: 3,
        field: "link*",
        dataType: "String",
        information: "Tautan html untuk tampilan web proses tandatangan"
    }
]

export const exReqBulksign = `<SEND> [jsonfield] : ${JSON.stringify({
    "JSONFile": {
        "userid": "admin@digisignpartner.com",
        "document_id": [
            "DC12333111",
            "DC12333121",
            "DC12333112",
        ],
        "email_user": "userdigisign@gmail.com"
    }
}, null, 2)}`

export const exResBulksign = `<RECEIVE> ${JSON.stringify({
    "JSONFile": {
        "result": "00",
        "link": "https:\/\/wv.tandatanganku.com\/bulksigningpage.html?sgn=32FuywTp5TNUDqey3614sTG1fa3UGBy7IJAKY93i4oDbjKXWUbZnOUGQii5BhHYk7tE5QAc3nDSJG2TMP2XDUKN%2BpyCTVoZQB2t8sV9yENmDZ885QAsPZ6OD2VtLAwq9GmlvmGkl5%2F18Pb6LFS3GFBg%3D%3D"
    }
}, null, 2)};`

export const resCallbackBulk = [
    {
        key: 1,
        field: "JSONField",
        dataType: "JSON String",
    },
    {
        key: 2,
        field: "document_id",
        dataType: "String",
        length: "20",
        information: "dokumen sudah di tandatangani"
    },
    {
        key: 3,
        field: "email_user",
        dataType: "String",
        length: "80",
        information: "email pengguna yang ingin tandatangan"
    },
    {
        key: 4,
        field: "status_document",
        dataType: "String",
        length: "",
        information: "Status Dokumen. completed: semua pengguna telah menandatangani dokumen. waiting: ada pengguna yang belum menandatangani dokumen"
    }
]

export const exResBulksignEncrypt = `https://app.tandatanganku.com/result.php?msg=Cij6Jz9ui76E5Ky%2FqJRqt8Ib2Yof3uEQFYTskZ2i8R6C9C8TJVi9ydinxu3twztB3100V0Lvsgp5%0AY03FrxOcU%2Bwh5cXOdKWbJIDFx%2FdNTpijFSaTeYSpbNORmIxtBHwuR22xONzLIOnenTILYkq8cYhW%0ANSnwraDDXH9jLjg1zkVXgHviM7FQAgn8%2BiJOqjpW5XtRM7HSx7CHeXk%2FLGNNpZiW5MPYE69aNgGW%0AHShhxek%3D`

export const exResBulksignDecrypt = JSON.stringify({
    "document_id": "sni040302",
    "status_document": "complete",
    "result": "00",
    "notif": "Proses tanda tangan berhasil!",
    "email_user": "userdigisign@gmail.com"
}, null, 2)
