import React from 'react';
import Colors from 'constants/colors';
import { useTable } from 'react-table';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    width: 100%;
    text-align: center;
    box-sizing: border-box;
`;

const Table = (props) => {
    const {
        title,
        titleColor,
        titleBackgroundColor,
        columnColor,
        columnBackgroundColor,
        cellColor,
        cellBackgroundColor,
        width,
        height,
        data,
        columns,
    } = props;

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
        <Container>
            {title && (
                <Title
                    style={{
                        backgroundColor: titleBackgroundColor ?? Colors.offBlack,
                        color: titleColor ?? Colors.white,
                        border: `solid 1px ${titleColor ?? Colors.white}`,
                        padding: '5px 0',
                    }}
                >
                    {title}
                </Title>
            )}
            <table {...getTableProps()} style={{ width, height }}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                    style={{
                                        backgroundColor: columnBackgroundColor ?? Colors.offBlack,
                                        color: columnColor ?? Colors.white,
                                        border: `solid 1px ${columnColor ?? Colors.white}`,
                                        padding: `10px 0`,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            backgroundColor: cellBackgroundColor ?? Colors.offWhite,
                                            color: cellColor ?? Colors.offBlack,
                                            border: `solid 1px ${cellColor ?? Colors.offBlack}`,
                                            padding: 10,
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Container>
    );
};

export default Table;
