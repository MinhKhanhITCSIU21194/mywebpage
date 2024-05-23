import { Box, Pagination } from '@mui/material'
import React, { useEffect } from 'react'
import service from './Service/service';

const pageSize = 6;

export default function AppPagination({setProducts}) {


  const [pagination, setPagination] = React.useState({
      count: 0,
      from: 0,
      to: pageSize

  });

  useEffect(() => {
    service.getData({from: pagination.from, to: pagination.to}).then((response) => {
          setPagination({...pagination, count: response.count})

          setProducts(response.data);
    });
  },[pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
      const from = (page - 1) * pageSize;
      const to = (page -1) * pageSize + pageSize;

      setPagination({...pagination, from: from, to: to});
  }
  return (
    <div>
      <Box justifyContent={"center"} alignContent={"center"} display={'flex'} sx={{margin:'20px 0px'}}>
        <Pagination count={Math.ceil(pagination.count / pageSize)} onChange={handlePageChange} color="primary" />
      </Box>
    </div>
  )
}
