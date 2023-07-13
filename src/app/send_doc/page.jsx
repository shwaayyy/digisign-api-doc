'use client'
import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {APIColumns, columnsHeader} from "@/app/register/helper";
import {
    exJSONres,
    exMessage,
    exMessageHeader,
    jsonFieldSendDoc,
    multipartSendDoc, reqJSON,
    resSendDoc,
    sendDocHeader
} from "@/app/send_doc/helper";
import TutorialTTDPosImage from "/public/tutorial.png"
import Image from "next/image";
import {Card} from "antd";

const About = () => {

    return (
        <>
            <div className="w-full">
                <SidebarLayout>
                    <Point title={"API Kirim Dokumen"} customClassTitle={"text-sky-800"}
                           customClassContent={"flex flex-col gap-y-[50px]"}>
                        <TableAPI border={true} columns={columnsHeader} dataTable={sendDocHeader}
                                  visibleHeader={false}/>
                        <div className={"flex flex-row gap-x-5"}>
                            <Image
                                src={TutorialTTDPosImage}
                                width={275}
                                className={"mb-5"}
                                alt="Picture of the author"
                            />
                            <small className={"leading-normal"}>
                                Kiri bawah (X, Y) dan kanan atas (X, Y) adalah koordinat tanda tangan. Jenisnya Float.
                                Yang
                                posisi tanda tangan dibatasi oleh koordinat kiri bawah (X, Y) dan kanan atas (X, Y) dan
                                koordinat
                                posisi (0,0) berada di sudut kiri bawah
                            </small>
                        </div>
                        <Point title={"Multipart Field:"} titleSize={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={multipartSendDoc}/>
                        </Point>
                        <Point title={"Json Field:"} titleSize={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={jsonFieldSendDoc}/>
                            <div className={"inline-grid gap-y-1 mt-5"}>
                                <h3 className={"font-semibold"}>Catatan:</h3>
                                <small>*) dan (Kondisional) harus diisi</small>
                                <small>Bidang tanpa (*) bisa: kosong, Bidang dengan (opsional) bisa: tidak
                                    termasuk</small>
                            </div>
                        </Point>
                        <Point title={"Respon (Json String)"} titleSize={"text-xl"}>
                            <TableAPI dataTable={resSendDoc} columns={APIColumns} border={true}/>
                        </Point>
                        <Point title={"Contoh Pesan"} titleSize={"text-xl"}>
                            <TableAPI columns={exMessageHeader} dataTable={exMessage} border={true}/>
                        </Point>
                        <div className={"flex flex-col gap-y-3"}>
                            <Card title={"Contoh request JSON yang diterima Digisign"} type={"inner"} bordered={false}>
                                <pre>
                                    {reqJSON}
                                </pre>
                            </Card>
                            <Card title={"contoh respon JSON yang dikirimkan ke anda"} bordered={false} type={'inner'}>
                                <pre>
                                    {exJSONres}
                                </pre>
                            </Card>
                        </div>
                    </Point>
                    <Point title={"API kirim dokumen dengan e-meterai"} customClassTitle={"text-sky-800"}
                           customClassContent={"flex flex-col gap-y-4"}>
                        <p>
                            Kondisi: Jika Anda ingin menggunakan meterai digital, ada beberapa parameter tambahan yang
                            harus termasuk, yang meterai_positions dan document_type
                        </p>
                        <Point title={"contoh Request untuk kirim dokumen dengan meterai:"} titleSize={"text-xl"}>

                        </Point>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default About
