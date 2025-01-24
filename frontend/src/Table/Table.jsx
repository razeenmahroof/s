import * as React from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { compose, filter, map, sum } from 'ramda';

// import './style.css';

export default function Table(props) {
  const {
    columns,
    rows,
    checkBoxes,
    getId,
    onRowsSelectionHandler,
    page,
    recordCount,
    setPageState,
    loading,
    rowHeight = 40,
    emptyMsg = 'No Rows',
    totalCost,
    filters,
    // overAllCost,
    autoHeight = false,
  } = props;

  const extraProps = filters ? { headerHeight: filters } : {};
  const stickyColumnWidth = compose(
    sum,
    map(column => column.width),
    filter(column => column.sticky),
  )(columns);
  // function CustomPagination() {
  //   const pageCount = Math.ceil(recordCount / 10);
  //   if (totalCost >= 0) {
  //     return (
  //       <>
  //         {!loading && (
  //           <div className="d-flex flex-column w-100">
  //             <div
  //               style={{
  //                 // height: 'fit-content',
  //                 backgroundColor: '#E7ECEE',
  //               }}
  //               className="d-flex justify-content-end align-items-center fw-bold px-5 py-2 rounded-bottom m-0 w-100"
  //             >
  //               Total Cost: ${totalCost}
  //             </div>
  //             {/* {overAllCost >= 0 && (
  //             <div
  //               className={`d-flex 
  //               ${
  //                 pageCount > 1
  //                   ? 'justify-content-center'
  //                   : 'justify-content-start'
  //               }
  //               position-relative align-items-center`}
  //             >
  //               <div
  //                 style={{ left: 0 }}
  //                 className={` ${
  //                   pageCount > 1 ? 'position-absolute' : ''
  //                 } px-2 py-2`}
  //               >
  //                 Over All Cost: {overAllCost}
  //               </div>
  //               {pageCount > 1 && (
  //                 <div className="d-flex flex-column align-items-center justify-content-center my-3">
  //                   <Pagination
  //                     count={pageCount}
  //                     defaultPage={page}
  //                     shape="rounded"
  //                     onChange={(event, value) => {
  //                       setPageState(value);
  //                     }}
  //                   />
  //                   <div className="w-100 text-center my-2">
  //                     ({recordCount} items)
  //                   </div>
  //                 </div>
  //               )}
  //             </div>
  //           )} */}
  //           </div>
  //         )}
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         {pageCount > 1 && (
  //           <div className="d-flex flex-column align-items-center justify-content-center my-3">
  //             <Pagination
  //               count={pageCount}
  //               defaultPage={page}
  //               shape="rounded"
  //               onChange={(event, value) => {
  //                 setPageState(value);
  //               }}
  //             />
  //             <div className="w-100 text-center my-2">
  //               ({recordCount} items)
  //             </div>
  //           </div>
  //         )}
  //       </>
  //     );
  //   }
  // }

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
      }}
      className="position-relative"
    >
      {/* {stickyColumnWidth > 0 && (
        <div
          className="mx-3 p-2"
          style={{
            width: stickyColumnWidth,
            height: 39,
            position: 'absolute',
            right: 0,
            background: '#d7e0e3',
            zIndex: 1,
            borderRadius: 5,
            fontWeight: 600,
            fontSize: '.5rem',
          }}
        >
          {columns.find(column => column.sticky)?.headerName || ''}
        </div>
      )} */}
      <DataGrid
        {...extraProps}
        rows={rows}
        autoHeight={autoHeight}
        loading={loading}
        columns={columns.map(col => {
          return { ...col, sortable: false };
        })}
        // pageSize={rows.length}
        // rowsPerPageOptions={[25]}
        density={'compact'}
        disableSelectionOnClick
        className="mx-3 overflow-auto position-relative bg-white"
        disableColumnMenu
        disableColumnFilter
        checkboxSelection={checkBoxes}
        components={{
          // Pagination: CustomPagination,
          NoRowsOverlay: () => (
            <Stack height="100%" alignItems="center" justifyContent="center">
              {emptyMsg}
            </Stack>
          ),
        }}
        getRowId={getId}
        onSelectionModelChange={ids => onRowsSelectionHandler(ids)}
        getRowHeight={() => rowHeight}
      />
    </Box>
  );
}
