import React from 'react';
import './presentation.css';

function presentation(props) {
   const {
      labelTop,
      labelMid,
      labelBottom,
      children
   } = props;

   return (
      <div className="presentMe">
         <div className="commonText">{labelTop}</div>
         <div className="name">{labelMid}</div>
         <span className="bigPipe" />
         <div className="commonText">{labelBottom}</div>
         {children}
      </div>
   );
}

export default presentation;


