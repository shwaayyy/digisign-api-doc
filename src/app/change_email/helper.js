export const headerChangeEmail = [
    {
        key: 1,
        keyHeader: 'Fungsi',
        valueHeader: 'API ini menggunakan ganti email atau no handphone tetapi user tidak melakukan aktivasi'
    },
    {
        key: 2,
        keyHeader: 'link',
        valueHeader: 'https://api.tandatanganku.com/UPDATE-EP.html'
    },
    {
        key: 3,
        keyHeader: 'Terms and condition',
        valueHeader: 'Data dapat diubah untuk pengguna yang belum diaktifkan. Jika pengguna sudah mengaktifkannya, silahkan kunjungi digisign.id untuk mengubah datanya'
    }
]

export const jsonFieldChangeEmail = [
    {
        key: 1,
        field: 'JSONfile*',
        dataType: 'Json String',
    },
    {
        key: 2,
        field: 'userid*',
        dataType: 'String',
        length: '80',
        information: 'email admin mitra'
    },
    {
        key: 3,
        field: 'email_lama*',
        dataType: 'String',
        length: '80',
        information: 'email lama pengguna'
    },
    {
        key: 4,
        field: 'email_baru*',
        dataType: 'String',
        length: '80',
        information: 'email baru pengguna'
    },
    {
        key: 5,
        field: 'nohp_lama*',
        dataType: 'String',
        length: '15',
        information: 'nomor handphone lama pengguna'
    },
    {
        key: 6,
        field: 'nohp_baru*',
        dataType: 'String',
        length: '15',
        information: 'nomor handphone baru pengguna'
    }
]

export const responseChangeEmail = [
    {
        key: 1,
        field: 'JSONfile*',
        dataType: 'Json String',
    },
    {
        key: 2,
        field: 'result*',
        dataType: 'String',
        length: '2',
        information: 'pesan kode respon'
    },
    {
        key: 3,
        field: 'notif',
        dataType: 'String',
        information: 'informasi kode respon'
    }
]

export const exMessageChangeEmailandHandphone = `<SEND> ${JSON.stringify({
    "JSONFile": {
        "userid": "dummy1@digisign.id",
        "email_lama": "digisign1@tandatangan.com",
        "email_baru": "digisign1@tandatangan.com",
        "nohp_lama": "62895430551133",
        "nohp_baru": "62895430551135"
    }
}, null, 2)}`

export const exResponseChangeEmail = `<RECEIVE> ${JSON.stringify({
    "JSONFile": {
        "result": "00",
        "notif": "Sukses update data"
    }
}, null, 2)}`
