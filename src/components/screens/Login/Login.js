import React from 'react';
import {
  Container,
  Grid,
  Button,
  TextField,
  Box,
} from '@material-ui/core';
import Logo from '../../common/Logo';

export default function Login() {
  return (
    <Container maxWidth="xs" fixed>
      <Box boxShadow={1} padding={3} bgcolor="white">
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
            />
          </Grid>
          <Grid item>
            <TextField
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              autoComplete="current-password"
              margin="normal"
              required
              fullWidth
            />
          </Grid>
          <Grid item>
            <Box marginTop={2}>
              <Button
                disableElevation
                variant="contained"
                color="primary"
                fullWidth
              >
                Sign In
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}