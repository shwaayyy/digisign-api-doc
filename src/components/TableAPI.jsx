'use client'

import {Table} from 'antd';

const TableAPI = ({columns, dataTable, visibleHeader, border}) => {
    return (
        <Table
            columns={columns}
            dataSource={dataTable}
            pagination={false}
            showHeader={visibleHeader}
            bordered={border}
        />
    );
}
export default TableAPI;
