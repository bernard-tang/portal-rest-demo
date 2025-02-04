import { useEffect, useState } from "react";
import { styled } from '@mui/system';
import {
  TablePagination,
  tablePaginationClasses as classes,
} from '@mui/base/TablePagination';

const TableUnstyled = ({data, page, rowsPerPage, total, onOffsetChange, onLimitChange}) => {
//   const [page, onOffsetChange] = React.useState(0);
//   const [rowsPerPage, onLimitChange] = React.useState(5);
const [tableHeaders, setTableHeaders] = useState([]);

useEffect(() => {
  if(data != null && data.length > 0) {
    const columnNames = Object.keys(data[0]).filter(key => key !== "id");
    setTableHeaders(columnNames);
  }

}, [ data ]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    onOffsetChange(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    // onLimitChange(parseInt(event.target.value, 10));
    onLimitChange(event.target.value);
    onOffsetChange(0);
  };

  const capitalizeWords = (str) => {
    if (!str) return '';
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <Root sx={{ maxWidth: '100%', width: 1000 }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            {/* <th>Dessert</th>
            <th>Calories</th>
            <th>Fat</th> */}
            {tableHeaders.map(columnName => (
              <th>{capitalizeWords(columnName)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td style={{ width: 160 }} align="right">
                {row.calories}
              </td>
              <td style={{ width: 160 }} align="right">
                {row.fat}
              </td>
            </tr>
          ))} */}

        {data != null ? data.map(row => (
            <tr key={row.id}>
              {tableHeaders.map(column => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          )) : <tr style={{ height: 41 * emptyRows }}>
          <td colSpan={3} aria-hidden />
        </tr> }

          {/* {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={3} aria-hidden />
            </tr>
          )} */}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={total}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  'aria-label': 'rows per page',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
    </Root>
  );
}

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  createData('Frozen yoghurt', 159, 6.0),
  createData('Gingerbread', 356, 16.0),
  createData('Honeycomb', 408, 3.2),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Jelly Bean', 375, 0.0),
  createData('KitKat', 518, 26.0),
  createData('Lollipop', 392, 0.2),
  createData('Marshmallow', 318, 0),
  createData('Nougat', 360, 19.0),
  createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Root = styled('div')(
  ({ theme }) => `
  table {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  }
  `,
);

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`;

export default TableUnstyled;
