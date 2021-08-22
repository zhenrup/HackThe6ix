import { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid, Link } from '@material-ui/core';
import firstExPic from './storeMapEx1.png';
import secExPic from './storeMapEx2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      background: '#f2f2f2',
    },
  },
  input: {
    background: '#f2f2f2 !important',
  },
  // overrides: {
  //   MuiButton: {
  //     raisedPrimary: {
  //       color: 'white',
  //     },
  //   },
  // }
}));

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
    if (valueRef.current.value.toUpperCase() === 'LIGHTS') {
      setFirstEx(true);
      setSecEx(false);
    } else if (valueRef.current.value.toUpperCase() === 'GARBAGE BAGS') {
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
      <div className="frontPage">
        <div id='row'>
          <div id='colunm'>
            <h3>Welcome to</h3>
          </div>
          <div id='colunm'>
            <h2 id='storeName'>Western Wire</h2>
            <h4>578 Richmond Rd E, London, ON</h4>
          </div>
        </div>
          
        <Grid container>
          <Grid
            item
            xs={12}
            align="center"
            style={{ marginTop: 20, marginBottom: 10 }}
          >
            <p>
              Need help finding something? Enter what you're looking for and
              follow map direct1ions to the correct aisle.
            </p>
          </Grid>
        </Grid>
        <form
          // className={classes.root}
          noValidate
          autoComplete="off"
          style={{ marginTop: 20 }}
        >

              <TextField
                id="search"
                label="Looking for items?"
                variant="filled"
                placeholder="Enter your ware..."
                // style={{ width: 500 }}
                inputRef={valueRef}
                InputProps={
                  {
                    // className: classes.input,
                  }
                }
              />

              <Button
                id="searchButton"
                variant="contained"
                size="small"
                align="center"
                style={{
                  textAlign:'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}

                onClick={sendValue}
              >
                Search
              </Button>

        </form>
        <br></br>

        <h1 align="center">{result}</h1>

        {firstEx && (
          <img
            src={firstExPic}
            alt="Logo"
            id="map"
          />
        )}

        {secEx && (
          <img
            src={secExPic}
            alt="Logo"
            id="map"
          />
        )}
      </div>
    </>
  );
};

export default Home;
