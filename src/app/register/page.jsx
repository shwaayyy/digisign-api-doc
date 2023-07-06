'use client'

import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {columnsHeader as columns, dataHeader as data} from "@/app/register/helper";

const Register = () => {

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
                                <li>
                                    Silakan tambahkan dalam istilah & kondisi di sisi aplikasi Anda bahwa: Pengguna
                                    telah membaca dan setuju bahwa data pribadi mereka akan terdaftar ke Digisign.
                                    [<a href="#" className={'underline'}>template</a>]
                                </li>
                                <li>
                                    Digisign mengharuskan Selfiephoto diambil oleh pengguna langsung melalui aplikasi
                                    Anda, baik mobile dan berbasis web, hanya menggunakan kamera hidup (mengaktifkan
                                    webcam / perangkat kamera default) dan tidak diperbolehkan bagi pengguna untuk
                                    mengunggah file foto selfie.
                                </li>
                                <li>
                                    Dari sisi aplikasi Anda, silakan mengatur TIMEOUT, setidaknya untuk Pendaftaran dan
                                    Kirim Dokumen proses. Selain dari dua proses ini, silakan mengatur waktu ke 30-an.
                                    Tujuan dari pengaturan ini di sisi aplikasi Anda adalah untuk mengantisipasi jika
                                    ada waktu untuk Digisign.
                                </li>
                                <li>
                                    Jika Anda telah menyelesaikan penyesuaian dan tes integrasi aplikasi Anda dengan API
                                    Digisign, sebelum tahap produksi, aplikasi Anda diperlukan untuk memasuki tahap UAT
                                    di Digisign terlebih dahulu.
                                </li>
                            </ul>
                        </div>
                    </Point>
                    <Point title={"Header"} customClassTitle={"text-sky-700"}
                           customClassContent={"flex flex-col gap-y-[25px]"}>
                        <h4>Header untuk Request</h4>
                        <TableAPI columns={columns} dataTable={data}/>
                    </Point>
                </div>
            </SidebarLayout>
        </>
    )
}

export default Register
