import React from 'react';
import {
  Container,
  Box,
} from '@material-ui/core';
import Logo from '../../common/Logo';
import Login from './forms/Login';
import Signup from './forms/Signup';
// import ResetPassword from './forms/ResetPassword';
// import ForgotPassword from './forms/ForgotPassword';

export default function Authentication({loading = false}) {
  return (
    <Box display="flex" flex={1} justifyContent="center" alignItems="center">
      <Container maxWidth="xs" fixed>
        <Box boxShadow={1} padding={3} bgcolor="white">
          <Box justifyContent="center" alignItems="center" margin={2} flex={1} display="flex">
            <Logo />
          </Box>
          <Signup />
        </Box>
      </Container>
    </Box>
  );
}