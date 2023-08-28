import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {HtmlResCodeCol, HtmlResCodeDownload, HtmlResCodeWV} from "@/app/response_code/helper";

const HTMLResCodePage = () => {
    return (
        <>
            <div className="w-full">
                <SidebarLayout>
                    <Point title={'Kode Respon HTML'} customClassContent={'flex flex-col gap-y-[50px]'}>
                        <Point title={'Respon WebView'} titleSize={'text-lg'}>
                            <TableAPI columns={HtmlResCodeCol} dataTable={HtmlResCodeWV} border={true}/>
                        </Point>
                        <Point title={'Respon unduh file'} titleSize={'text-lg'}>
                            <TableAPI columns={HtmlResCodeCol} dataTable={HtmlResCodeDownload} border={true}/>
                        </Point>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default HTMLResCodePage
