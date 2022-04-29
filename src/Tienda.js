import { render } from '@testing-library/react'
import Header from './components/Header'
import React from 'react';

export default class App extends React.Component {
  
    render() {
      return (
        <div className="component-app">
            <header>
          <Header></Header>
          </header>
        </div>
      );
    }
  }