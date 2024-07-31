import { useEffect, useState } from "react";
import TableUnstyled from "../ui-component/tables/PaginationTable";
import { getAllProducts } from "../services/ProductService";

const Products = () => {
    const [productData, setProductData] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [total, setTotal] = useState(1);

    useEffect(() => {
        const getProducts = async () => {
            const offset = page == 0 ? 0 : page * rowsPerPage;
            const response = await getAllProducts(offset,rowsPerPage);
            // const result = await response.entry.json();
            setProductData(response.entry);
            setTotal(response.total);
        }

        getProducts();
    }, [ page, rowsPerPage ]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
      };
    
    const handleRowsChange = (newLimit) => {
        setRowsPerPage(newLimit);
    };

    return (
        <>
            <h1>Products Page</h1>
            <TableUnstyled 
            data={productData} 
            page={page} 
            rowsPerPage={rowsPerPage}
            total={total}
            onOffsetChange={handlePageChange} 
            onLimitChange={handleRowsChange}
            ></TableUnstyled>
        </>
    )
}

export default Products;