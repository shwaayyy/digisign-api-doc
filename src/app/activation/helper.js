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
