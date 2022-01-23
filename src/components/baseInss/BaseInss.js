import React from 'react';
import '../../App.css'


export default function BaseInss({ salBruto }) {

  return (
    <div>
      <p>Base INSS</p>
      <input className='fbold fblack' placeholder={`R$ ${salBruto}`} disabled />
    </div>
  );
}
