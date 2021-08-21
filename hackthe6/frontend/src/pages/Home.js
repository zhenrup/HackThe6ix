import { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid, Link } from '@material-ui/core';
import firstExPic from './storeMapEx1.png';
import secExPic from './storeMapEx2.png';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//       background: '#f2f2f2',
//     },
//   },
//   input: {
//     background: '#f2f2f2 !important',
//   },
// }));

const Home = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');
  const [hideDir, setHideDir] = useState(false);
  const [storeDir, setStoreDir] = useState([]);

  const [firstEx, setFirstEx] = useState(false);
  const [secEx, setSecEx] = useState(false);
  const firstUpdate = useRef(true);
  const valueRef = useRef('');

  // const classes = useStyles();

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fetch('/api/data', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        search: search,
      }),
      cache: 'no-cache',
      headers: new Headers({
        'content-type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        setResult(responseData.result);
        setStoreDir(responseData.dir);

        console.log(responseData.result);
        console.log('fetch call worked');
      });
  }, [search]);

  const sendValue = () => {
    if (valueRef.current.value === 'Lights') {
      setFirstEx(true);
    }
    if (valueRef.current.value === 'Garbage Bag') {
      setSecEx(true);
      setFirstEx(false);
    } else {
      setSecEx(false);
      setFirstEx(false);
    }

    setSearch(valueRef.current.value); //on clicking button accesing current value of TextField and outputing it to console
  };

  return (
    <>
      <Grid container>
        <Grid item xs={3} align="right">
          <h3>Welcome to</h3>
        </Grid>

        <Grid item xs={6} align="center">
          <h2>WESTERN WIRE</h2>
        </Grid>

        <Grid item xs={3} align="left">
          <h3>hardware store</h3>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          align="center"
          style={{ marginTop: 20, marginBottom: 10 }}
        >
          <p>
            Need help finding something? Input what you're looking for and
            follow map directions to the correct aisle.
          </p>
        </Grid>
      </Grid>
      <form
        // className={classes.root}
        noValidate
        autoComplete="off"
        style={{ marginTop: 20 }}
      >
        <Grid container>
          <Grid item xs={11} align="center" className="searchBar">
            <TextField
              id="search"
              label="Need Help?"
              variant="filled"
              placeholder="Search for your ware..."
              style={{ width: 500 }}
              inputRef={valueRef}
              InputProps={{
                // className: classes.input,
              }}
            />
          </Grid>
          <Grid item xs={1} align="center" style={{ marginTop: 15 }}>
            <Button
              variant="contained"
              size="small"
              // endIcon={<SendIcon />}

              onClick={sendValue}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
      <h1 align="center">{result}</h1>

      {firstEx && (
        <img
          src={firstExPic}
          alt="Logo"
          style={{ height: '400px', width: '600px' }}
        />
      )}

      {secEx && (
        <img
          src={secExPic}
          alt="Logo"
          style={{ height: '400px', width: '600px' }}
        />
      )}

      {/* {storeDir.map((item, i) => (
        <li key={i}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))} */}
    </>
  );
};

export default Home;
