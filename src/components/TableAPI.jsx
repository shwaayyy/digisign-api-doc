'use client'

import {Table} from 'antd';

const TableAPI = ({columns, dataTable, visibleHeader, border, scroll= {}}) => {
    return (
        <Table
            columns={columns}
            dataSource={dataTable}
            pagination={false}
            showHeader={visibleHeader}
            bordered={border}
            scroll={scroll}
        />
    );
}
export default TableAPI;
