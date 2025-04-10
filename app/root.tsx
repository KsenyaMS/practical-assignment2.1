import React, { useContext, useEffect } from 'react';
import { withEmotionCache } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react'
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import { MyTabs } from './Tabs';
import { MyButton } from './Button';
import { MyRating } from './Rating';
import { ThemeProvider } from '@mui/material';
import { MainTheme } from './MainTheme';
import { MantineProvider } from '@mantine/core';
import { MyDatePicker } from './DatePicker';

interface DocumentProps {
  children: any;
}

const Document = ({ children }: DocumentProps) => {

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

const tabsList = [
  'One',
  'Two',
  'Three',
]

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <MyTabs tabsList={tabsList} style={{ margin: '10px' }} />
      </ChakraProvider>
      <ThemeProvider theme={MainTheme}>
        <div style={{ margin: '10px' }}>
          <MyRating defaultValue={2} />
        </div>
      </ThemeProvider>
      <MantineProvider
        theme={{
          fontFamily: 'Open Sans, sans-serif',
          lineHeight: 1.2,
          primaryColor: 'indigo',
        }}
      >
        <div style={{ width: '400px', height: '300px', margin: '10px' }}>
          <MyDatePicker />
        </div>
      </MantineProvider>
      <MyButton buttonText={'MyButton'} style={{ margin: '10px' }} />
    </Document >
  )
}