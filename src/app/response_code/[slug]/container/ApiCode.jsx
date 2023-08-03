import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {generalResponse, regResponse, responseApiHeader} from "@/app/response_code/helper";

const APIResCodePage = () => {
    return (
        <>
            <div className="w-full">
                <SidebarLayout>
                    <Point title={'Kode Respon API'} customClassTitle={'text-sky-500'}
                           customClassContent={'flex flex-col gap-y-[50px]'}>
                        <Point title={'Respon umum'} titleSize={'text-xl'}>
                            <TableAPI columns={responseApiHeader} dataTable={generalResponse} />
                        </Point>
                        <Point title={'Respon Registrasi'} titleSize={'text-xl'}>
                            <TableAPI columns={responseApiHeader} dataTable={regResponse} />
                        </Point>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default APIResCodePage
