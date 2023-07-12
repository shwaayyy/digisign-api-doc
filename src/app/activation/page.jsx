'use client'
import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {
    columnsHeader,
    dataHeader,
    jsonFieldData,
    multiPartField,
    resActivation,
    resDataACT
} from "@/app/activation/helper";
import {APIColumns} from "@/app/register/helper";
import {Card} from "antd";

const Activation = () => {
    return (
        <>
            <div>
                <SidebarLayout>
                    <Point title={"API Aktivasi"} customClassTitle={"text-sky-800"}
                           customClassContent={"flex flex-col gap-y-[50px]"}>
                        <TableAPI columns={columnsHeader} dataTable={dataHeader} visibleHeader={false} border={true}/>
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
                                {"<SEND>\n" +
                                    "[jsonfield] : {\n" +
                                    "    \"JSONFile\": {\n" +
                                    "        \"userid\": \"admin@gmail.com\",\n" +
                                    "        \"email_user\": \"test@hotmail.com\"\n" +
                                    "    }\n" +
                                    "}\n"}
                            </p>
                        </Card>
                        <Card title={"Contoh Respon JSON Digisign yang dikirimkan ke anda"} type={"inner"}
                              bordered={false}>
                            <p className={"font-mono whitespace-pre-wrap"}>
                                {"<RECEIVE>\n" +
                                    "{\"JSONFile\":{\"result\":\"00\",\"link\":\"https:\\/\\/wv.tandatanganku.com\\/activationpage.html?act=YYSQ\n" +
                                    "N6ewqCxlo8sTb2BOmDaeHdYyHvb5jYnQWeoBgvuMX6gKyNWLmd4zrrCyjJuavzJtVTV6yrGtRZqIrqlEz2fgap4%2FNGdTs\n" +
                                    "4ro8eDF0zYrUNZ4%2F4MpGQeprV6SKxflXqf9tOOeoPOYhpH5ClG1aQ%3D%3D\"}}"}
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
                                {"https://app.tandatanganku.com/resultact.html?msg=B9zrGI4dF0PAPWDsaTBgrbxWNX%2Fi6qnJhfi%2BrVl9DX\n" +
                                    "uPtMkchM6WIS3b4HRIdWWiFtZAhJqdntS0%0AOAp4L8s7lcH5ER2gVls%2BdYmLnyRDIC3acfsW8ka2MBeBcXb0JpvvC6o8\n" +
                                    "Z%2Fs2%2BCkicCG%2BTPpYBdp%2B%0A6ON36F0b7CE4EfTDXsw%3D"}
                            </p>
                        </Card>
                        <Card title={"Respon setelah Decrypt:"} bordered={false}
                              extra={<p>(Anda dapat menguji Decrypt dengan kunci AES - contoh- : <span
                                  className={"text-blue-700"}>RBazsYSDTuShYbUG</span>)</p>}>
                            <p className={"font-mono whitespace-pre-wrap"}>
                                {"<RECEIVED>\n" +
                                    "{\"result\":\"00\",\"notif\":\"Proses Aktivasi Berhasil\",\n" +
                                    "\"email_user\":\"digisigntest@tandatanganku.com\",\"nik\":\"3275094801950033\",\"verifikasi\":{\"nama\":tru\n" +
                                    "e,\"tanggal_lahir\":true,\"selfie\":true}}"}
                            </p>
                        </Card>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default Activation
