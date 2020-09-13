import React from 'react';
import './button.css';

function Button(props) {
   const {
      label,
      pageUrl,
      buttonLayout,
      cssClass = "",
   } = props;

   let layout = "";

   switch (buttonLayout) {
      case "socialMedia":
         layout = "socialMediaSquareButton";
         break;
      default:
         layout = "primaryButton";
         break;
   }

   return (
      <button
         type="button"
         className={`${layout} ${cssClass}`}
         onClick={ () => { pageUrl ? window.open(pageUrl) : window.open('https://www.linkedin.com/in/gustavotenorio/') }}
      >{label}</button>
   );
}

export default Button;