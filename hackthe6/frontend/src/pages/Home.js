import { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Home = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');
  const firstUpdate = useRef(true);
  const valueRef = useRef('');

  const classes = useStyles();

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
        console.log(responseData.result);
        console.log('fetch call worked');
      });
  }, [search]);

  const sendValue = () => {
    console.log(valueRef.current.value);
    setSearch(valueRef.current.value); //on clicking button accesing current value of TextField and outputing it to console
  };

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container>
          <Grid item xs={11} align="center">
            <TextField
              id="search"
              label="Need Help?"
              variant="outlined"
              placeholder="Search for your ware..."
              style={{ width: 500 }}
              inputRef={valueRef}
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
    </>
  );
};

export default Home;
