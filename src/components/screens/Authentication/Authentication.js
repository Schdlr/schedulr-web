import React from 'react';
import {
  Container,
  Box,
} from '@material-ui/core';
import Logo from '../../common/Logo';
import Login from './forms/Login';

export default function Authentication({loading = false}) {
  return (
    <Box display="flex" flex={1} justifyContent="center" alignItems="center">
      <Container maxWidth="xs" fixed>
        <Box justifyContent="center" alignItems="center" margin={2} flex={1} display="flex">
          <Logo />
        </Box>
        <Login loading={loading} />
      </Container>
    </Box>
  );
}