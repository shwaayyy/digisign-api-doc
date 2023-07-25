'use client'

import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {APIColumns, columnsHeader} from "@/app/auth/helper";
import {
    dataJsonFieldSign,
    dataSignDoc, exJSONReqSign,
    exJSONResSign,
    headerSignDoc,
    resJsonSign
} from "@/app/doc/helper";
import {Card} from "antd";


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
                            <Card title={"contoh respon JSON yang dikirimkan ke anda"} bordered={false} type={'inner'} >
                                <pre className={'py-5'}>
                                    {exJSONResSign}
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
