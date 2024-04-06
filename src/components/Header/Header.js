import React from "react";
import mainLogo from "../../docs/page-logo.svg";

function Header() {
  return (
    <header className='main-header'>
      <img alt='CV Builder Logo' src={mainLogo} />
      <h1>Simple Resume Builder</h1>
    </header>
  );
}

export default Header;
