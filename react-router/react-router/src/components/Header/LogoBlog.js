import React from 'react';
import logoblog from '../../assets/images/logo.png';

export default function LogoBlog() {
  return (
    <div className="header-logo">
      <a href="/">
        <img src={logoblog} alt="logo-blog" />
      </a>
    </div>
  )
}
