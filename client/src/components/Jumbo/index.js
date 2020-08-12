import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hiking from "../../assets/Adventure.jpg";
import ButtonGroup from "@material-ui/core/ButtonGroup"

const styles = {
  main: {
    color: "#fff",
    fontSize: 32,
    fontWeight: 'bold',
  },
  letter: {
      background: "black",
      margin: 30,
  },
  letter2: {
      background: "black"
  }
};

const Jumbo = () => {
  return (
    <Container align="center" style={Object.assign({}, styles.main)}>
      <Grid sm={6}>
        <div style={Object.assign({}, styles.letter)} align="center">Active@</div>
        <div style={Object.assign({}, styles.letter2)} align="center">
          Active@ is the app that we are currently creating, we'll put something
          dope here.
        </div>
        </Grid>
        <Grid>
          <ButtonGroup size="large" variant="contained" aria-label="small outlined button group">
            <Button href="/login">Login</Button>
            <Button href="/signup">Sign Up</Button>
          </ButtonGroup>
      </Grid>
    </Container>
  );
};

export default Jumbo;
