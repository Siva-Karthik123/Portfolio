import React, { useEffect } from 'react';
import './styles/Cursor.css';

function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });
  }, []);

  return <div className="cursor"></div>;
}

export default Cursor;
