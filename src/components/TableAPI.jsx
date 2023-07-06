'use client'

import {Table} from 'antd';

const TableAPI = ({columns, dataTable, visibleHeader}) => {
    return (
        <Table columns={columns} dataSource={dataTable}
           pagination={false} showHeader={visibleHeader}/>
    );
}
export default TableAPI;
