import { useEffect, useState } from "react";
import "./style.css";
import Pagination from '@mui/material/Pagination';

const PaginationComponent = ({ page, handlePage, count }) => {

    const style = {
        color: "var(--white)",
        "& .Mui-selected ": {
            backgroundColor: "var(--yellow) !important",
            color: "var(--black) !important",
            borderColor: "var(--yellow) !important",
        },
        "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid rgb(51, 51, 51)",
        },
    }

    return (
        <div className="pagination-container">
            <Pagination sx={style} count={count} page={page} onChange={(e, v) => handlePage(e, v)} />
        </div>
    )
}

export default PaginationComponent;