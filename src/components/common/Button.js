import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CustomButton({loading = true, text, ...rest}) {
  return (
    <Button
      disableElevation
      variant="contained"
      color="primary"
      fullWidth
      {...rest}
    >
      {
        loading ? <CircularProgress size={26} color="white" /> : text 
      }
    </Button>
  )
}