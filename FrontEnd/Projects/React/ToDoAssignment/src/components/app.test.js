import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import renderer from 'react-test-renderer';

test(" snapshot test", ()=> {
  const tree = renderer.create(<App />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
})

