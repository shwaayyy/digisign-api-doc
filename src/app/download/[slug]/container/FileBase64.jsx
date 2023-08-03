import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {APIColumns, columnsHeader} from "@/app/auth/helper";
import {
    ExampleMessageDownload, exReqDownload, exResDownload,
    headerValueBase64,
    JsonFieldDownloadBase64,
    multipartDownloadFileBase64,
    resDownloadFileBase64
} from "@/app/download/helper";
import {Card} from "antd";

const FileBase64 = () => {
    return (
        <>
            <div className="w-full">
                <SidebarLayout>
                    <Point title={'API Unduh file Dengan base64'} customClassTitle={'text-sky-600'}
                           customClassContent={'flex flex-col gap-y-[50px]'}>
                        <TableAPI columns={columnsHeader} visibleHeader={false} border={true}
                                  dataTable={headerValueBase64}/>
                        <Point title={'multipart field:'} titleSize={'text-xl'}>
                            <TableAPI columns={APIColumns} dataTable={multipartDownloadFileBase64} />
                        </Point>
                        <Point title={'Json Field:'} titleSize={'text-xl'}>
                            <TableAPI columns={APIColumns} dataTable={JsonFieldDownloadBase64}/>
                            <small>*) harus di isi</small>
                        </Point>
                        <Point title={'Respon (Json String):'} titleSize={'text-xl'}>
                            <TableAPI columns={APIColumns} dataTable={resDownloadFileBase64} />
                        </Point>
                        <Point title={'Contoh Pesan:'} titleSize={'text-lg'}>
                            <TableAPI columns={columnsHeader} dataTable={ExampleMessageDownload}/>
                        </Point>
                        <div className={"flex flex-col gap-y-3"}>
                            <Card title={"Contoh request JSON yang diterima Digisign"} type={"inner"} bordered={false}>
                                <pre>
                                    {exReqDownload}
                                </pre>
                            </Card>
                            <Card title={"contoh respon JSON yang dikirimkan ke anda"} bordered={false} type={'inner'}>
                                <pre className={'py-5'}>
                                    {exResDownload}
                                </pre>
                            </Card>
                        </div>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default FileBase64
