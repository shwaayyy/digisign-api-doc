import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {columnsHeader} from "@/app/auth/helper";
import {FileHeader} from "@/app/download/helper";

const FileDownload = () => {
    return (
        <>
            <div className="w-full">
                <SidebarLayout>
                    <Point title={'API Unduh file'} customClassTitle={'text-sky-600'}>
                        <TableAPI visibleHeader={false} border={true } columns={columnsHeader} dataTable={FileHeader} />
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default FileDownload
