import React from 'react';
import {
  Grid,
  TextField,
  Box,
  Link,
  Typography,
} from '@material-ui/core';
import Button from '../../../common/Button';

export default function Login({loading = false}) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
    >
      <Grid item>
        <Box mb={1}>
          <Typography variant="h5" component="h1">Forgot Password</Typography>
        </Box>
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
        <Box marginTop={2}>
          <Button
            loading={loading}
            text="Continue"
          />
        </Box>
      </Grid>
      <Grid item>
        <Box my={1}>
          <Link component="button">Sign In</Link>
        </Box>
      </Grid>
    </Grid>
  );
}