import React from 'react';
import './codeSample.css';

function CodeSample(props) {
   const {
      sample
   } = props;

   return (
      <pre className="preClass"> {sample} </pre>
   );
}

export default CodeSample;




