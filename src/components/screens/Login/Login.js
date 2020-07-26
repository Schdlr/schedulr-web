import React from 'react';
import {
  Container,
  Grid,
  Button,
  TextField,
  Box,
  CircularProgress,
  Link,
} from '@material-ui/core';
import Logo from '../../common/Logo';

export default function Login({loading = false}) {
  return (
    <Box display="flex" flex={1} justifyContent="center" alignItems="center">
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
                margin="dense"
                autoFocus
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
                margin="dense"
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
                  {
                    loading ? <CircularProgress size={26} color="white" /> : "Sign In"
                  }
                </Button>
              </Box>
            </Grid>
            <Grid item>
              <Box my={1}>
                <Link component="button">Forgot Password?</Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}