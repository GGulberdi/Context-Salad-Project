import React from 'react';
import { createUseStyles } from 'react-jss';
import {createContext, useReducer} from 'react'
import SaladBuilder from '../SaladBuilder/SaladBuilder';
import SaladSummary from '../SaladSummary/SaladSummary';


const useStyles = createUseStyles({
  wrapper: {
    textAlign: 'center',
  }
});

export const SaladContext = createContext();

export const reducer = (state, item) => {
  return [...state,item]
}


export default function SaladMaker() {
  const [salad, setSalad] = useReducer(reducer, []);
console.log(salad)
  const classes = useStyles();
  return(
    <>
    
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="salad">🥗 </span>
          Build Your Custom Salad!
          <span role="img" aria-label="salad"> 🥗</span>
      </h1>
      <SaladContext.Provider value={{salad, setSalad}}>
      <SaladBuilder/>
      <SaladSummary/>
      </SaladContext.Provider>
    </>
  )
}