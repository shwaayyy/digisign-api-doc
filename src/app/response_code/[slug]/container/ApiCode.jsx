import SidebarLayout from "@/components/Template";
import Point from "@/components/Point";
import TableAPI from "@/components/TableAPI";
import {
    actResponse, ApiResCodeBulk,
    ApiSendDocCode,
    ApiSignDocCode, Base64DownloadCode, ChangePhoneNumAndEmailCode,
    generalResponse,
    regResponse,
    responseApiHeader
} from "@/app/response_code/helper";

const APIResCodePage = () => {
    return (
        <>
            <div className="w-full">
                <SidebarLayout>
                    <Point title={'Kode Respon API'} customClassTitle={'text-sky-500'}
                           customClassContent={'flex flex-col gap-y-[50px]'}>
                        <Point title={'Response umum'} titleSize={'text-xl'}>
                            <TableAPI columns={responseApiHeader} dataTable={generalResponse} border={true} />
                        </Point>
                        <Point title={'Response Registrasi'} titleSize={'text-xl'}>
                            <TableAPI columns={responseApiHeader} dataTable={regResponse} border={true} />
                        </Point>
                        <Point title={'Response Aktivasi'} titleSize={'text-xl'}>
                            <TableAPI columns={responseApiHeader} dataTable={actResponse} border={true} scroll={{x: 100}} />
                        </Point>
                        <Point title={'Response Kirim dokumen'} titleSize={'text-xl'}>
                            <TableAPI columns={responseApiHeader} dataTable={ApiSendDocCode} border={true} scroll={{x: 100}} />
                        </Point>
                        <Point title={'Response Tandatangan dokumen'} titleSize={'text-xl'}>
                            <TableAPI columns={responseApiHeader} dataTable={ApiSignDocCode} border={true} scroll={{x: 100}} />
                        </Point>
                        <Point title={'Response download dokumen base64'} titleSize={'text-xl'}>
                            <TableAPI columns={responseApiHeader} dataTable={Base64DownloadCode} border={true} scroll={{x: 100}} />
                        </Point>
                        <Point title={'Response ganti email dan nomor hp'} titleSize={'text-xl'}>
                            <TableAPI columns={responseApiHeader} dataTable={ChangePhoneNumAndEmailCode} border={true} scroll={{x: 100}} />
                        </Point>
                        <Point title={'Response Bulksign'} titleSize={'text-xl'}>
                            <TableAPI columns={responseApiHeader} dataTable={ApiResCodeBulk} border={true} scroll={{x: 100}} />
                        </Point>
                    </Point>
                </SidebarLayout>
            </div>
        </>
    )
}

export default APIResCodePage
