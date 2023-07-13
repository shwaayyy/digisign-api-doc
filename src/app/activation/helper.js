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
        key: '1',
        keyHeader: "Fungsi",
        valueHeader: "API ini digunakan untuk generate link aktivasi user ke Digisign"
    },
    {
        key: '2',
        keyHeader: "Link",
        valueHeader: "https://api.tandatanganku.com/gen/genACTPage.html"
    },
    {
        key: '3',
        keyHeader: "Redirect",
        valueHeader: "Anda harus memberikan link redirect dan kami akan mengarahkan ke link ini ketika pengguna telah mengaktifkan akun digisign mereka."
    },
]

export const multiPartField = [
    {
        key: '1',
        field: "jsonfield*",
        dataType: "Json String",
        length: "",
        information: "Periksa bagian jsonfield di bawah ini"
    }
]

export const jsonFieldData = [
    {
        key: '1',
        field: "JSONFile*",
        dataType: "Json String",
        length: "",
        information: ""
    },
    {
        key: '2',
        field: "userid*",
        dataType: "String",
        length: "80",
        information: "email admin mitra (yang terdaftar di Digisign)"
    },
    {
        key: '3',
        field: "email_user*",
        dataType: "String",
        length: "80",
        information: "email user yang ingin melakukan aktivasi"
    },
]

export const resActivation = [
    {
        key: '1',
        field: "JSONFile*",
        dataType: "Json String",
        length: "",
        information: ""
    },
    {
        key: '2',
        field: "result*",
        dataType: "String",
        length: "2",
        information: "Kode respon (00 = success)"
    },
    {
        key: '3',
        field: "link*",
        dataType: "String",
        length: "",
        information: "link webview untuk aktivasi"
    },
]

export const resDataACT = [
    {
        key: '1',
        field: "JSONFile*",
        dataType: "Json String",
        length: "",
        information: ""
    },
    {
        key: '2',
        field: "email_user",
        dataType: "String",
        length: "80",
        information: "email pengguna yang baru saja menyelesaikan proses aktivasi"
    },
    {
        key: '3',
        field: "result",
        dataType: "String",
        length: "",
        information: "Response code"
    },
    {
        key: '4',
        field: "notif",
        dataType: "String",
        length: "",
        information: "informasi response code"
    },
    {
        key: '5',
        field: "verifikasi",
        dataType: "boolean",
        length: "",
        information: "Hasil verifikasi data dari DUKCAPIL"
    },
]
