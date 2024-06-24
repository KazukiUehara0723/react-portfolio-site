import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import React from 'react';

function App() {
  return (
	<>
		<Header />
		<Skills />
		<Contact />
	</>
);
}

export default App;
