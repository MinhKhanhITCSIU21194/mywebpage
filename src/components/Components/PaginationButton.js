import { Box, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import service from './Service/service';

const pageSize = 6;

export default function AppPagination({ setProducts, currentCategory }) {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  // Add a new state for tracking the current page
  const [page, setPage] = useState(1);

  // Reset pagination and page when the category changes
  useEffect(() => {
    setPagination({ count: 0, from: 0, to: pageSize });
    setPage(1); // Reset to the first page
  }, [currentCategory]);

  useEffect(() => {
    // Fetch data based on the current category and pagination
    service.getData({ from: pagination.from, to: pagination.to, category: currentCategory }).then((response) => {
      setPagination((prev) => ({ ...prev, count: response.count }));
      setProducts(response.data);
    });
  }, [pagination.from, pagination.to, currentCategory]);

  const handlePageChange = (event, newPage) => {
    const from = (newPage - 1) * pageSize;
    const to = from + pageSize;

    setPage(newPage); // Update the current page
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <div>
      <Box justifyContent={"center"} alignContent={"center"} display={'flex'} sx={{ margin: '20px 0px' }}>
        {/* Control the page prop with the page state */}
        <Pagination count={Math.ceil(pagination.count / pageSize)} page={page} onChange={handlePageChange} color="primary" />
      </Box>
    </div>
  );
}