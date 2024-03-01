// import React from 'react';
// import { useTable } from 'react-table';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
// import Header from '../Header/Header';

// const Hackathons = () => {
//   const columns = React.useMemo(
//     () => [
//       { Header: 'S.No', accessor: 'id' },
//       { Header: 'Event Name', accessor: 'name' },
//       { Header: 'Start Date', accessor: 'startDate' },
//       { Header: 'End Date', accessor: 'endDate' },
//       { Header: 'Status', accessor: 'status' },
//     ],
//     []
//   );

//   // Dummy data for now
//   const data = React.useMemo(
//     () => [
//       { id: 1, name: 'Hackathon 1', startDate: '2024-03-01', endDate: '2024-03-03', status: 'Active' },
//       { id: 2, name: 'Hackathon 2', startDate: '2024-03-05', endDate: '2024-03-07', status: 'Inactive' },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

//   return (
//     <>
//     <Header/>
//     <div className="min-h-screen w-screen flex items-start justify-center bg-[#14082c] py-12 px-4 sm:px-6 lg:px-8">
//     <div className=" w-full space-y-8 p-8 rounded-xl ">
// <div className='flex items-center justify-center'>
//       <h1 className="text-2xl font-bold mb-4 text-white">Event Summary</h1>
// </div>
//       <TableContainer>
//         <Table {...getTableProps()} className="min-w-full">
//           <TableHead>
//             {headerGroups.map(headerGroup => (
//               <TableRow {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map(column => (
//                   <TableCell {...column.getHeaderProps()} className='!text-white'>{column.render('Header')}</TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableHead>
//           <TableBody {...getTableBodyProps()}>
//             {rows.map(row => {
//               prepareRow(row);
//               return (
//                 <TableRow {...row.getRowProps()}>
//                   {row.cells.map(cell => {
//                     return <TableCell {...cell.getCellProps()} className='!text-white'>{cell.render('Cell')}</TableCell>;
//                   })}
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Hackathons;


import React from 'react';

const Hackathons = () => {
  const columns = React.useMemo(
    () => [
      { Header: 'S.No', accessor: 'id' },
      { Header: 'Event Name', accessor: 'name' },
      { Header: 'Start Date', accessor: 'startDate' },
      { Header: 'End Date', accessor: 'endDate' },
      { Header: 'Status', accessor: 'status' },
    ],
    []
  );

  // Dummy data for now
  const data = React.useMemo(
    () => [
      { id: 1, name: 'Hackathon 1', startDate: '2024-03-01', endDate: '2024-03-03', status: 'Active' },
      { id: 2, name: 'Hackathon 2', startDate: '2024-03-05', endDate: '2024-03-07', status: 'Inactive' },
      { id: 3, name: 'Hackathon 1', startDate: '2024-03-01', endDate: '2024-03-03', status: 'Active' },
      { id: 4, name: 'Hackathon 2', startDate: '2024-03-05', endDate: '2024-03-07', status: 'Inactive' },
      { id: 5, name: 'Hackathon 1', startDate: '2024-03-01', endDate: '2024-03-03', status: 'Active' },
      { id: 6, name: 'Hackathon 2', startDate: '2024-03-05', endDate: '2024-03-07', status: 'Inactive' },
      { id: 7, name: 'Hackathon 1', startDate: '2024-03-01', endDate: '2024-03-03', status: 'Active' },
      { id: 8, name: 'Hackathon 2', startDate: '2024-03-05', endDate: '2024-03-07', status: 'Inactive' },
      { id: 9, name: 'Hackathon 1', startDate: '2024-03-01', endDate: '2024-03-03', status: 'Active' },
      { id: 10, name: 'Hackathon 2', startDate: '2024-03-05', endDate: '2024-03-07', status: 'Inactive' },
    ],
    []
  );

  return (
    <>
      <div className="min-h-screen min-w-screen flex items-start justify-center bg-[#14082c] py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-screen space-y-8 p-8  dark:bg-gray-800">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold mb-4 text-white dark:text-white">Event Summary</h1>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-black">
              <thead className=" dark:bg-gray-900">
                <tr>
                  {columns.map(column => (
                    <th
                      key={column.Header}
                      className="px-6 py-3 text-left text-xs font-medium text-white dark:text-gray-300 uppercase tracking-wider"
                    >
                      {column.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className=" divide-y divide-black dark:bg-gray-800 dark:divide-gray-700">
                {data.map(row => (
                  <tr key={row.id} className="dark:hover:bg-gray-700">
                    {columns.map(column => (
                      <td
                        key={column.accessor}
                        className="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-gray-200"
                      >
                        {row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hackathons;

