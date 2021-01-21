import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Button } from '@material-ui/core';

// Generate Order Data
function createData(id, name) {
  return { id, name };
}

const rows = [
  createData(0, '台大盃'),
  createData(1, '新生盃')
  
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Cups() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>項目</Title>
      <Table size="large">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              
              <TableCell size="large"><Button>{row.name}</Button></TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}> */}
        {/* <Link color="primary" href="#" onClick={preventDefault}> */}
          {/* See more orders */}
        {/* </Link> */}
      {/* </div> */}
    </React.Fragment>
  );
}