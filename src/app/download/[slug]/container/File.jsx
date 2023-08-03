import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {APIColumns, columnsHeader} from "@/app/auth/helper";
import {
    ExampleMessageDownload,
    FileHeader,
    JsonFieldDownload,
    MultipartsDownloadFile,
    resDownloadfFile
} from "@/app/download/helper";
import ResponseImage from "public/respon-download-file.png"
import {Card} from "antd";
import Image from "next/image";

const FileDownload = () => {
    return (
        <>
            <div className="w-full">
                <SidebarLayout>
                    <Point title={'API Unduh file'} customClassTitle={'text-sky-600'}
                           customClassContent={"flex flex-col gap-y-[50px]"}>
                        <TableAPI visibleHeader={false} border={true} columns={columnsHeader} dataTable={FileHeader}/>
                        <Point title={"Multipart Field:"} titleSize={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={MultipartsDownloadFile}/>
                        </Point>
                        <Point title={"Json Field:"} titleSize={"text-xl"}>
                            <TableAPI columns={APIColumns} dataTable={JsonFieldDownload}/>
                            <small>*) harus di isi</small>
                        </Point>
                        <div className={'leading-8'}>
                            <h2 className={'font-bold text-'}>Respon:</h2>
                            <h2>Dokumen PDF</h2>
                        </div>
                        <Point title={'Contoh Pesan:'} customClassTitle={'font-normal'} titleSize={'text-lg'}>
                            <TableAPI columns={columnsHeader} dataTable={ExampleMessageDownload}/>
                        </Point>
                        <div className={'flex flex-col gap-y-5 items-center'}>
                            <Card title={"Contoh request JSON yang diterima Digisign"} type={"inner"} bordered={false}
                                  className={'w-full'}>
                                <pre>
                                    {resDownloadfFile}
                                </pre>
                            </Card>
                            <Image src={ResponseImage} alt={'download file'} width={600}/>
                        </div>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default FileDownload
