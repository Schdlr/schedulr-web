import React from 'react';
import {
  Container,
  Paper,
  Grid,
  Button,
  TextField,
} from '@material-ui/core';
import Logo from '../../common/Logo';

export default function Login() {
  return (
    <Container maxWidth="xs" fixed>
      <Paper>
        <Grid
          container
          direction="column"
          justify="center"
        >
          <Grid
            item
            container
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Logo />
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              id="email"
              name="email"
              label="Email Address"
              variant="outlined"
              type="email"
              autoComplete="email"
              margin="normal"
              autoFocus
              required
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              autoComplete="password"
              margin="normal"
              required
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              fullWidth
            >Sign in</Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}