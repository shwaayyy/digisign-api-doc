'use client'

import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {APIColumns, columnsHeader} from "@/app/auth/helper";
import {
    dataJsonFieldSign,
    dataSignDoc, exJSONReqSign,
    exJSONResSign, exResRedirect, exResRedirectDec,
    headerSignDoc, RedirectRes,
    resJsonSign
} from "@/app/doc/helper";
import WVImage from "/public/webview.png"
import {Card} from "antd";
import Image from "next/image";


const SignDoc = () => {
    return (
        <>
            <div>
                <SidebarLayout>
                    <Point title={"API Tandatangan Dokumen"} customClassTitle={"text-sky-800"}
                           customClassContent={"flex flex-col gap-y-[50px]"}>
                        <TableAPI columns={columnsHeader} dataTable={headerSignDoc} border={true}
                                  visibleHeader={false}/>
                        <Point title={"Multipart Field:"} titleSize={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={dataSignDoc}/>
                        </Point>
                        <Point title={"Json Field:"} titleSize={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={dataJsonFieldSign}/>
                            <div className={"inline-grid gap-y-1 mt-5"}>
                                <h3 className={"font-semibold"}>Catatan:</h3>
                                <small>*) harus diisi</small>
                                <small>Bidang tanpa (*) bisa: kosong, Bidang dengan (opsional) bisa: tidak
                                    termasuk</small>
                            </div>
                        </Point>
                        <Point title={"Respon (Json String)"} titleSize={"text-xl"}>
                            <TableAPI dataTable={resJsonSign} columns={APIColumns} border={true}/>
                        </Point>
                        <div className={"flex flex-col gap-y-3"}>
                            <Card title={"Contoh request JSON yang diterima Digisign"} type={"inner"} bordered={false}>
                                <pre>
                                    {exJSONReqSign}
                                </pre>
                            </Card>
                            <Card title={"contoh respon JSON yang dikirimkan ke anda"} bordered={false} type={'inner'}>
                                <pre className={'py-5'}>
                                    {exJSONResSign}
                                </pre>
                            </Card>
                        </div>
                        <Point title={"Contoh WebView:"} titleSize={"text-xl"}
                               customClassContent={"flex items-center justify-center"}>
                            <Image src={WVImage} alt={"example webview"}/>
                        </Point>
                        <Point title={"Redirect:"} titleSize={"text-xl"} customClassContent={"flex flex-col gap-y-5"}>
                            <p>{"Kami akan mengarahkan ke https://{link_html_anda}?msg={respon} respons akan dienkripsi oleh AES. Anda bisa menggunakan AES/ECB/PKCS5Padding library. Respons:"}</p>
                            <TableAPI columns={APIColumns} dataTable={RedirectRes}/>
                        </Point>
                        <div className={"flex flex-col gap-y-3"}>
                            <Card title={"Contoh Respon redirect:"} type={"inner"} bordered={false}>
                                <pre className={"py-4"}>
                                    {exResRedirect}
                                </pre>
                            </Card>
                            <Card
                                title={"Respon setelah Decrypt:"}
                                extra={<p>(Anda dapat menguji Decrypt dengan kunci AES - contoh- : <span
                                    className={"text-blue-700"}>RBazsYSDTuShYbUG</span>)</p>} bordered={false}
                                type={'inner'}>
                                <pre className={'py-5'}>
                                    {exResRedirectDec}
                                </pre>
                            </Card>
                        </div>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default SignDoc
