import React from 'react';

export default function Logo({size = 64}) {
  return (
    <img
      alt="Logo"
      src={require('../../assets/images/logo.png')}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}