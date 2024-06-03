import React, { useEffect, useState } from 'react'
import TableContainer from '@mui/material/TableContainer';
import { IconButton, Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material';
import axios from 'axios';


//debounce api concept
function useDebounce(name,delay){
    let [debounceValue,setDebounceValue] = useState(name)

    useEffect(()=>{
        let data = setTimeout(()=>{
            setDebounceValue(name);
        },delay)

        return()=>clearTimeout(data)
    },[name,delay])

    return debounceValue;
}

const MuiStudent = () => {
    let [data, setData] = useState([])
    let [noData, setNoData] = useState("")
    let [name, setName] = useState("")
    let searchValue = useDebounce(name,3000)
    useEffect(() => {
        if (searchValue) {
            axios.get(`http://localhost:4040/getByName?name=${searchValue}`)
                .then((res) => {console.log(res.data); setData(res.data) })
                .catch((err) => console.log(err))
        } else {
            axios.get('http://localhost:4040/getStudent')
                .then((res) => {
                    setNoData("");
                    setData(res.data)
                })
                .catch((err) => { console.log(err); })
        }
    }, [searchValue])

    let [orderBy, setOrderBy] = useState('');
    let [order, setOrder] = useState('asc');
    let [page, setPage] = useState(0);
    let [rowsPerPage, setRowsPerPage] = useState(10);

    let handleSort = (property) => {
        console.log(property, order, orderBy);
        // console.log(orderBy === property);
        let isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        setData((prevData) => [...prevData].sort((a, b) => {
            if (isAsc) {
                return b[property] < a[property] ? -1 : 1;
            } else {
                return a[property] < b[property] ? -1 : 1;
            }
        })); //prevData is shallow copy of the pervious state array
    };

     let handleChangePage = (event, newPage) => {
       console.log(newPage, page, rowsPerPage);
    setPage(newPage);
    };

    // let handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h1 style={{ fontSize: "50px" }}>STUDENT DETAILS</h1>
                <div>
                    <input type="text" placeholder='Enter name...' value={name} onChange={(e) => setName(e.target.value)} style={{ width: "400px", height: "25px", borderRadius: "24px", padding: "4px", border:"1px solid black" }} />
                </div>
            </div>
            <TableContainer component={Paper} sx={{ display: 'flex', justifyContent: "center", alignItems: "center", marginTop:"20px" }}>
                <Table sx={{ width: 700 }} aria-label="simple table">
                    <TableHead sx={{ background: "#E5FD86" }}>
                        <TableRow>
                            <TableCell align='center'>
                                <TableSortLabel
                                    active={orderBy === 'id'}
                                    direction={orderBy === 'id' ? order : 'asc'}
                                    onClick={() => handleSort('id')}
                                >
                                    Id
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align='center'>
                                <TableSortLabel
                                    active={orderBy === 'name'}
                                    direction={orderBy === 'name' ? order : 'asc'}
                                    onClick={() => handleSort('name')}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align='center'>
                                <TableSortLabel
                                    active={orderBy === 'grade'}
                                    direction={orderBy === 'grade' ? order : 'asc'}
                                    onClick={() => handleSort('grade')}
                                >
                                    Grade
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align='center'>
                                <TableSortLabel
                                    active={orderBy === 'medium'}
                                    direction={orderBy === 'medium' ? order : 'asc'}
                                    onClick={() => handleSort('medium')}
                                >
                                    Medium
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align='center'>
                                <TableSortLabel
                                    active={orderBy === 'section'}
                                    direction={orderBy === 'section' ? order : 'asc'}
                                    onClick={() => handleSort('section')}
                                >
                                    Section
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {noData}
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((x) => {
                            
                            return (
                                <TableRow key={x.id}>
                                    <TableCell align='center'>{x.id}</TableCell>
                                    <TableCell align='center'>{x.name}</TableCell>
                                    <TableCell align='center'>{x.grade}</TableCell>
                                    <TableCell align='center'>{x.medium}</TableCell>
                                    <TableCell align='center'>{x.section}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
            // onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    )
}

export default MuiStudent