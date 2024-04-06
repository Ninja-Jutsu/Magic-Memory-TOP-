import React from 'react';

function Form({ children, className }) {
  return <form className={`${className} form-wrapper`}>{children}</form>;
}

export default Form;
