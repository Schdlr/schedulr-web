import React from 'react';
import {
  Grid,
  TextField,
  Box,
  Link,
} from '@material-ui/core';
import Button from '../../../common/Button';

export default function Login({loading = false}) {
  return (
    <Box boxShadow={1} padding={3} bgcolor="white">
      <Grid
        container
        direction="column"
        justify="center"
      >
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
              loading={loading}
              text="Sign In"
            />
          </Box>
        </Grid>
        <Grid item>
          <Box my={1}>
            <Link component="button">Forgot Password?</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}