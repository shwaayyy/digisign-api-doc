'use client'
import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {APIColumns, columnsHeader} from "@/app/register/helper";
import {jsonFieldSendDoc, multipartSendDoc, sendDocHeader} from "@/app/send_doc/helper";
import TutorialTTDPosImage from "/public/tutorial.png"
import Image from "next/image";

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
                                Kiri bawah (X, Y) dan kanan atas (X, Y) adalah koordinat tanda tangan. Jenisnya Float. Yang
                                posisi tanda tangan dibatasi oleh koordinat kiri bawah (X, Y) dan kanan atas (X, Y) dan
                                koordinat
                                posisi (0,0) berada di sudut kiri bawah
                            </small>
                        </div>
                        <Point title={"Multipart Field:"} titleSize={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={multipartSendDoc} />
                        </Point>
                        <Point title={"Json Field:"} titleSize={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={jsonFieldSendDoc} />
                        </Point>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default About
