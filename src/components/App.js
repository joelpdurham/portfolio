import React from 'react';
import { Body } from '../containers/Body';
import { Header } from './Header.js';

const Footer = () => (<h5>2020 - jpd - built in React</h5>);

export default function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
