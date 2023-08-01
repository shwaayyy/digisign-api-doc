export const FileHeader = [
    {
        key: 1,
        keyHeader: 'Fungsi',
        valueHeader: 'API ini digunakan untuk mengunduh dokumen dengan id dokumen'
    },
    {
        key: 2,
        keyHeader: 'Link',
        valueHeader: 'https://api.tandatanganku.com/DWMITRA.html'
    },
]

export const MultipartsDownloadFile = [
    {
        key: 1,
        field: 'jsonfield*',
        dataType: 'Json String',
        information: 'cek jsonfield di bawah ini'
    }
]

export const JsonFieldDownload = [
    {
        key: 1,
        field: 'JSONFile*',
        dataType: 'Json String',
    },
    {
        key: 2,
        field: 'userid*',
        dataType: 'String',
        information: 'email admin mitra (yang terdaftar di digisign)'
    },
    {
        key: 3,
        field: 'document_id*',
        dataType: 'String',
        length: '20',
        information: 'mitra document id (unique)'
    }
]

export const ExampleMessageDownload = [
    {
        key: 1,
        keyHeader: 'jsonfield',
        valueHeader: JSON.stringify({
            "JSONFile": {
                "userid": "admin@gmail.com",
                "document_id": "20180920_AB"
            }
        })
    }
]

export const resDownloadfFile = `<SEND> [jsonfield] : "{${JSON.stringify({
    "JSONFile": {
        "userid": "admin@gmail.com",
        "document_id": "20180920_AB"
    }
})}}"`

export const headerValueBase64 = [
    {
        key: 1,
        keyHeader: 'fungsi',
        valueHeader: 'API ini digunakan untuk mengunduh dokumen dengan id dokumen'
    },
    {
        key: 2,
        keyHeader: 'link',
        valueHeader: 'https://api.tandatanganku.com/DWMITRA64.html'
    }
]

export const multipartDownloadFileBase64 = [
    {
        key: 1,
        field: 'jsonfield*',
        dataType: 'Json String',
        information: 'cek jsonfield di bawah ini'
    }
]

export const JsonFieldDownloadBase64 = [
    {
        key: 1,
        field: 'JSONFile*',
        dataType: 'Json String',
    },
    {
        key: 2,
        field: 'userid*',
        dataType: 'String',
        length: '80',
        information: 'email admin mitra (yang terdaftar di digisign)'
    },
    {
        key: 3,
        field: 'document_id*',
        dataType: 'String',
        length: '20',
        information: 'mitra document id (unique)'
    }
]

export const resDownloadFileBase64 = [
    {
        key: 1,
        field: 'JSONFile*',
        dataType: 'Json String',
    },
    {
        key: 2,
        field: 'result*',
        dataType: 'String',
        length: '2',
        information: 'kode respon'
    },
    {
        key: 3,
        field: 'notif',
        dataType: 'String',
        information: 'informasi kode error'
    },
    {
        key: 4,
        field: 'file',
        dataType: 'base64',
        information: 'file dokumen (jika hasil nya: 00)'
    }
]

export const exReqDownload = `<SEND> [jsonfield] : "${JSON.stringify({
    "JSONFile": {
        "userid": "admin@gmail.com",
        "document_id": "20180920_AB"
    }
})}";'`

export const exResDownload = `<RECEIVE> ${JSON.stringify({"JSONFile": {"result": "00", "file": "base64"}})}`
