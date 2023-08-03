'use client'
import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {
    columnsHeader,
    jsonFieldData,
    multiPartField,
    resActivation,
    resDataACT,
    APIColumns, dataHeaderAct, resVerData2, resCallback, resAfterDecrypt
} from "@/app/auth/helper";
import {Card} from "antd";

const Activation = () => {
    return (
        <>
            <div>
                <SidebarLayout>
                    <Point title={"API Aktivasi"} customClassTitle={"text-sky-600"}
                           customClassContent={"flex flex-col gap-y-[50px]"}>
                        <TableAPI columns={columnsHeader} dataTable={dataHeaderAct} visibleHeader={false} border={true}/>
                        <Point title={"Multipart Field:"} customClassTitle={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={multiPartField}/>
                        </Point>
                        <Point title={"Json Field:"} customClassTitle={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={jsonFieldData}/>
                            <small>*) harus diisi</small>
                        </Point>
                        <Point title={"respon request link aktivasi (json string) :"} customClassTitle={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={resActivation}/>
                        </Point>
                        <Card title={"Contoh request JSON yang di dapat di Digisign"} type={"inner"} bordered={false}>
                            <p className={"font-mono whitespace-pre-wrap"}>
                                {resVerData2}
                            </p>
                        </Card>
                        <Card title={"Contoh Respon JSON Digisign yang dikirimkan ke anda"} type={"inner"}
                              bordered={false}>
                            <p className={"font-mono whitespace-pre-wrap"}>
                                {`<RECEIVE> ${JSON.stringify({
                                    "JSONFile": {
                                        "result": "00",
                                        "link": "https://wv.tandatanganku.com/activationpage.html?act=YYSQN6ewqCxlo8sTb2BOmDaeHdYyHvb5jYnQWeoBgvuMX6gKyNWLmd4zrrCyjJuavzJtVTV6yrGtRZqIrqlEz2fgap4%2FNGdTs4ro8eDF0zYrUNZ4%2F4MpGQeprV6SKxflXqf9tOOeoPOYhpH5ClG1aQ%3D%3D"
                                    }
                                }, null, 2)}`}
                            </p>
                        </Card>
                        <Point title={"Respon Redirect / Callback setelah berhasil aktivasi (json string):"}
                               titleSize={"text-xl"} customClassContent={"flex flex-col gap-y-6"}>
                            <div className={"w-full"}>
                                <p>
                                    Pengalihan:
                                    Kita akan mengarahkan ke https://{"{link_html_anda}"}? msg={"{respon}"}{"\n "}
                                    responnya akan dienkripsi oleh AES.
                                    Kamu bisa menggunakan AES/ECB/PKCS5Padding Library.
                                </p>
                            </div>
                            <h3>Respon: </h3>
                            <TableAPI columns={APIColumns} dataTable={resDataACT}/>
                        </Point>
                        <Card title={"Contoh respon:"} type={"inner"} bordered={false}>
                            <p className={"font-mono whitespace-pre-wrap"}>
                                {resCallback}
                            </p>
                        </Card>
                        <Card title={"Respon setelah Decrypt:"} bordered={false}
                              extra={<p>(Anda dapat menguji Decrypt dengan kunci AES - contoh- : <span
                                  className={"text-blue-700"}>RBazsYSDTuShYbUG</span>)</p>}>
                            <p className={"font-mono whitespace-pre-wrap"}>
                                {resAfterDecrypt}
                            </p>
                        </Card>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default Activation
