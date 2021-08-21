import { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid, Link } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      background: '#f2f2f2',
    },
  },
}));
const Business = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const nameRef = useRef('');
  const emailRef = useRef('');
  const classes = useStyles();

  const sendValue = () => {
    setName(nameRef.current.value);
    setEmail(emailRef.current.value);
  };

  return (
    <div className="business">
      <h2>Sign Up as a Business</h2>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ marginTop: 20 }}
      >
        <Grid container>
          <Grid item xs={12} align="center">
            <TextField
              id="name"
              label="Company Name"
              variant="outlined"
              placeholder="Name"
              style={{ width: 500 }}
              inputRef={nameRef}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <TextField
              id="email"
              label="Company Email"
              variant="outlined"
              placeholder="Email"
              style={{ width: 500 }}
              inputRef={emailRef}
            />
          </Grid>
          <Grid item xs={12} align="center" style={{ marginTop: 15 }}>
            <Button
              variant="contained"
              size="small"
              // endIcon={<SendIcon />}

              onClick={sendValue}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Business;
