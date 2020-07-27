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
          <Typography variant="h5" component="h1">Reset Password</Typography>
        </Box>
      </Grid>
      <Grid item>
        <TextField
          id="password"
          name="password"
          label="New Password"
          variant="outlined"
          type="password"
          margin="dense"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="password"
          name="password"
          label="Confirm Password"
          variant="outlined"
          type="password"
          margin="dense"
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