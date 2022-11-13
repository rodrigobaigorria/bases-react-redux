import React from 'react';
import './styles.css';

export const AppCounter = () => {
  
  return (
    <>
    <h1> App Counter</h1>
    <hr />
    <div>
      <h3>Amount: 0</h3>
      <br />
      <button 
      className='btn btn-primary'
          onClick={() => console.log('+ 10')}
      > + 10</button>
    &nbsp;&nbsp;
        <button
          className='btn btn-primary'
          onClick={() => console.log('- 10')}
        > - 10</button>
    </div>
    </>
  )
}
