export const headerSignDoc = [
    {
        keyHeader: 'Fungsi',
        valueHeader: 'Api ini digunakan untuk mendapatkan link halaman tandatangan'
    },
    {
        keyHeader: 'Link',
        valueHeader: 'https://api.tandatanganku.com/gen/genSignPage.html'
    },
    {
        keyHeader: 'redirect',
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

