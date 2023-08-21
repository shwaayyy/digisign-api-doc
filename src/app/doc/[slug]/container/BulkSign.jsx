'use client'

import Template from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {APIColumns, columnsHeader} from "@/app/auth/helper";
import {
    bulksignBody,
    bulksignHeader,
    bulksignHeaderTable,
    bulksignRes, exReqBulksign, exResBulksign, exResBulksignDecrypt, exResBulksignEncrypt, resCallbackBulk,
} from "@/app/doc/helper";
import ImageBulksign from "/public/ex_bulksign.png"
import {Card} from "antd";
import Image from "next/image";

const BulkSign = () => {
    return (
        <>
            <div className="w-full">
                <Template>
                    <Point title={"API Bulksign Dokumen"} customClassTitle={'text-sky-600'}
                           customClassContent={"flex flex-col gap-y-[50px]"}>
                        <TableAPI columns={columnsHeader} dataTable={bulksignHeaderTable} border={true}
                                  visibleHeader={false}/>
                        <Point title={'header umtuk request'} titleSize={'text-lg'}>
                            <TableAPI columns={columnsHeader} dataTable={bulksignHeader} border={'true'}/>
                        </Point>
                        <Point title={'JSON Request'} titleSize={'text-lg'}>
                            <TableAPI columns={APIColumns} dataTable={bulksignBody} border={'true'}/>
                        </Point>
                        <Point title={'Respon (JSON Response)'} titleSize={'text-lg'}>
                            <TableAPI columns={APIColumns} dataTable={bulksignRes} border={'true'}/>
                        </Point>
                        <div className={"flex flex-col gap-y-3"}>
                            <Card title={"Contoh permintaan entitas multipart yang diterima di Digisign"} type={"inner"}
                                  bordered={false}>
                                <pre>
                                    {exReqBulksign}
                                </pre>
                            </Card>
                            <Card title={"contoh respon JSON yang dikirimkan ke anda"} bordered={false} type={'inner'}>
                                <pre>
                                    {exResBulksign}
                                </pre>
                            </Card>
                        </div>
                        <Point title={'Contoh WebView:'} titleSize={'text-lg'}
                               customClassContent={'flex justify-center items-center'}>
                            <Image src={ImageBulksign} alt={""} width={700}/>
                        </Point>
                        <div className={'inline-grid gap-y-1'}>
                            <span><b>Panggilan Balik Respons</b>{` (Anda harus memberikan link dan mengatur link tersebut melalui dashboard Corporate Digisign > arahkan ke “Pengaturan API” > lalu “Link Redirect Callback”):`}</span>
                            <span>{'Kami akan mengirimkan panggilan balik ke https://{your_html_link}?msg={response}'}</span>
                            <span>{'respons akan dienkripsi oleh AES.'}</span>
                            <span>{'Kamu bisa menggunakan AES/ECB/PKCS5Padding Library.'}</span>
                        </div>
                        <Point title={'Respon:'} titleSize={'text-lg'}>
                            <TableAPI columns={APIColumns} dataTable={resCallbackBulk}/>
                        </Point>
                        <div className={"flex flex-col gap-y-3"}>
                            <Card title={"Contoh respons panggilan balik dengan mengenkripsi:"} type={"inner"}
                                  bordered={false}>
                                <pre>
                                    {exResBulksignEncrypt}
                                </pre>
                            </Card>
                            <Card title={"Respon setelah Decrypt:"}
                                  extra={<p>(Anda dapat menguji Decrypt dengan kunci AES - contoh- : <span
                                      className={"text-blue-700"}>RBazsYSDTuShYbUG</span>)</p>} bordered={false}
                                  type={'inner'}>
                                <pre>
                                    {exResBulksignDecrypt}
                                </pre>
                            </Card>
                        </div>
                    </Point>
                </Template>
            </div>
        </>
    )
}

export default BulkSign
