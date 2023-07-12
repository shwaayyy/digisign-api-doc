'use client'

import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {
    columnsHeader as columns,
    dataHeader as data,
    registerColumns,
    dataReg,
    termsContent,
    APIColumns,
    multipartData,
    dataJsonField,
    responseAPI,
    sampleResCol,
    sampleResData, resVerData
} from "@/app/register/helper";
import {Card} from "antd";
import {useEffect, useState} from "react";

const Register = () => {
    const [dataVerRes, setDataVerRes] = useState([])
    const [lastIndexVerRes, setLastIndexVerRes] = useState({})
    const verResLength = dataVerRes.length

    useEffect(() => {
        setDataVerRes(resVerData)

        const lastIndex = resVerData.length - 1
        setLastIndexVerRes(resVerData[lastIndex])
    }, [])

    return (
        <>
            <SidebarLayout>
                <div className={"flex flex-col gap-y-[50px]"}>
                    <Point title={"Dokumentasi"}>
                        <p>
                            Digisign API adalah Application Programming Interface (API) yang dikembangkan oleh PT SNI
                            (Solusi
                            Net Internusa) untuk memungkinkan integrasi antara aplikasi dan layanan Digisign. API
                            Digisign
                            memungkinkan perusahaan Anda untuk menyederhanakan pengalaman dalam tanda tangan elektronik
                            untuk pelanggan Anda.
                        </p>
                    </Point>
                    <Point title={"Syarat dan Ketentuan Integrasi API Digisign"}
                           customClassContent={"flex flex-col gap-y-4"}>
                        <p>
                            Kami ingin menginformasikan beberapa poin yang perlu dipertimbangkan dan ditambahkan pada
                            sisi aplikasi Anda terkait dengan integrasi antara aplikasi Anda dengan Digisign. Berikut
                            adalah beberapa syarat dan ketentuan untuk aplikasi Anda untuk berintegrasi dengan API
                            Digisign.
                        </p>
                        <div className={'ml-5'}>
                            <ul type={1} className={"list-decimal"}>
                                {termsContent.map((v, i) => {
                                    return (
                                        <>
                                            <li key={i}>
                                                {v.content}
                                                {v.key === 1 ? (
                                                    <a href="#" className={"underline text-sky-500"}>Template</a>) : ""}
                                            </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                    </Point>
                    <Point title={"Header"} customClassTitle={"text-sky-700"}
                           customClassContent={"flex flex-col gap-y-[25px]"}>
                        <h4>Header untuk Request</h4>
                        <TableAPI columns={columns} dataTable={data}/>
                    </Point>
                    <Point
                        title={"API Register"}
                        customClassTitle={"text-sky-700"}
                        customClassContent={"flex flex-col gap-y-7"}
                    >
                        <TableAPI visibleHeader={false} dataTable={dataReg} columns={registerColumns} border={true}/>
                        <Point title={"Multipart Field:"} titleSize={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={multipartData}/>
                        </Point>
                        <Point title={"Json Field:"} titleSize={'text-xl'} customClassContent={"flex flex-col gap-y-3"}>
                            <TableAPI columns={APIColumns} dataTable={dataJsonField}/>
                            <h3 className={"font-bold"}>Note:</h3>
                            <div className={'inline-grid'}>
                                <small>
                                    *) harus diisi {"\n"}
                                </small>
                                <small>
                                    Fields tanpa (*) bisa: kosong atau tidak termasuk
                                </small>
                            </div>
                        </Point>
                        <Point title={"Response (JSON String)"} titleSize={'text-2xl'}>
                            <TableAPI columns={APIColumns} dataTable={responseAPI}/>
                        </Point>
                        <Point title={'Contoh pesan response:'} titleSize={'text-xl'}>
                            <TableAPI columns={sampleResCol} dataTable={sampleResData} border={true}/>
                        </Point>
                        <div className={"w-full flex flex-row gap-x-8 gap-y-7 flex-wrap"}>
                            <Card title={"Contoh permintaan JSON diterima di Digisign"} bordered={false}
                                  className={"min-w-fit overflow-x-auto"} type={'inner'}>
                                <pre className={"overflow-ellipsis"}>
                                    {"<SEND> [jsonfield] \n{\n" +
                                        "    \"JSONFile\": {\n" +
                                        "        \"userid\": \"admin@ptmitra.com\",\n" +
                                        "        \"jenis_kelamin\":\"<lak></lak>i-laki\",\n" +
                                        "        \"kota\":\"pekalongan\",\n" +
                                        "        \"nama\": \"testregistrasi\",\n" +
                                        "        \"tlp\":\"6281290700111\",\n" +
                                        "        \"tgl_lahir\":\"10-03-1978\",\n" +
                                        "        \"idktp\":\"3199091003880012\",\n" +
                                        "        \"tmp_lahir\":\"pekalongan\",\n" +
                                        "        \"email\":\"test@hotmail.com\",\n" +
                                        "        \"redirect\": true\n" +
                                        "    }\n" +
                                        "};\n" +
                                        "[fotoktp] :{ktp.JPG,28114};\n" +
                                        "[fotodiri] :{foto.JPG,28114};\n" +
                                        "[ttd] :{ttd.PNG, 28114}"};
                                </pre>
                            </Card>
                            <Card title={"Contoh respon JSON Digisign dikirimkan ke mitra"} bordered={false}
                                  className={"min-w-fit overflow-x-auto"} type={'inner'}>
                                <pre className={"whitespace-pre-wrap"}>
                                    {"<RECEIVE> {\n" +
                                        "    \"JSONFile\": {\n" +
                                        "        \"kode_user\": \"230500000000273\",\n" +
                                        "        \"expired_aktifasi\": \"17-12-2022 09: 00: 21 WIB\",\n" +
                                        "        \"result\": \"00\",\n" +
                                        "        \"notif\": \"Berhasil, silahkan check email untuk aktivasi akun anda.\",\n" +
                                        "        \"info\": \"https://app.tandatanganku.com/preregistration.html?preregister=%2BDFJr3zH4oon2qCuOfHU4Q3D%3D\"\n" +
                                        "    }\n" +
                                        "}"}
                                </pre>
                            </Card>
                        </div>
                        <Point title={"Respon Verifikasi"} titleSize={'text-xl'}>
                            <div className={"flex flex-wrap gap-7"}>
                                {dataVerRes.map((v, i) => {
                                    const seq = i + 1

                                    return (
                                        <Card title={`${seq}. ${v.title}`} type={"inner"} className={"w-full"} key={i}
                                              bordered={false}>
                                            <div className={"whitespace-pre-wrap font-mono "}>{v.val}</div>
                                        </Card>
                                    )
                                })}
                            </div>
                        </Point>
                        <Point title={"Sertifikat berakhir dan pengguna perlu pendaftaran ulang akun"}
                               customClassTitle={'text-sky-700 text-xl'}
                               customClassContent={'flex flex-col gap-y-5 flex-wrap'}>
                            <p className={"overflow-ellipsis"}>Kondisi: Jika Anda mendaftarkan pengguna yang sebelumnya
                                terdaftar di Digisign, Digisign akan memeriksa status sertifikat elektronik yang melekat
                                pada akun. Jika ditemukan bahwa sertifikat elektronik dari akun pengguna telah berakhir,
                                API Digisign Register akan secara otomatis memverifikasi data pengguna menuju Lembaga
                                Verifikasi (Dukcapil) dan mengurangi teks verifikasi dan verifikasi selfie keseimbangan.
                                Di bawah ini adalah tanggapan dari Digisign terkait dengan hasil pendaftaran ulang.</p>
                            <Point title={`${verResLength}. ${lastIndexVerRes["title"]}`} titleSize={'text-lg'}
                                   customClassTitle={""}>
                                <Card bordered={false}>
                                    <pre className={"text-sm overflow-ellipsis"}>
                                    {lastIndexVerRes["val"]}
                                </pre>
                                </Card>
                            </Point>
                        </Point>
                    </Point>
                </div>
            </SidebarLayout>
        </>
    )
}

export default Register
