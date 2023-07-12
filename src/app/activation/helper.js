export const columnsHeader = [
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
                <h2 className={'text-sky-600'}>{record}</h2>
            )
        }
    }
];

export const dataHeader = [
    {
        keyHeader: "Fungsi",
        valueHeader: "API ini digunakan untuk generate link aktivasi user ke Digisign"
    },
    {
        keyHeader: "Link",
        valueHeader: "https://api.tandatanganku.com/gen/genACTPage.html"
    },
    {
        keyHeader: "Redirect",
        valueHeader: "Anda harus memberikan link redirect dan kami akan mengarahkan ke link ini ketika pengguna telah mengaktifkan akun digisign mereka."
    },
]

export const multiPartField = [
    {
        field: "jsonfield*",
        dataType: "Json String",
        length: "",
        information: "Periksa bagian jsonfield di bawah ini"
    }
]

export const jsonFieldData = [
    {
        field: "JSONFile*",
        dataType: "Json String",
        length: "",
        information: ""
    },
    {
        field: "userid*",
        dataType: "String",
        length: "80",
        information: "email admin mitra (yang terdaftar di Digisign)"
    },
    {
        field: "email_user*",
        dataType: "String",
        length: "80",
        information: "email user yang ingin melakukan aktivasi"
    },
]

export const resActivation = [
    {
        field: "JSONFile*",
        dataType: "Json String",
        length: "",
        information: ""
    },
    {
        field: "result*",
        dataType: "String",
        length: "2",
        information: "Kode respon (00 = success)"
    },
    {
        field: "link*",
        dataType: "String",
        length: "",
        information: "link webview untuk aktivasi"
    },
]

export const resDataACT = [
    {
        field: "JSONFile*",
        dataType: "Json String",
        length: "",
        information: ""
    },
    {
        field: "email_user",
        dataType: "String",
        length: "80",
        information: "email pengguna yang baru saja menyelesaikan proses aktivasi"
    },
    {
        field: "result",
        dataType: "String",
        length: "",
        information: "Response code"
    },
    {
        field: "notif",
        dataType: "String",
        length: "",
        information: "informasi response code"
    },
    {
        field: "verifikasi",
        dataType: "boolean",
        length: "",
        information: "Hasil verifikasi data dari DUKCAPIL"
    },
]
