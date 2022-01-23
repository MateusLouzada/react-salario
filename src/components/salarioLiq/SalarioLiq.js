import React from 'react';
import '../../App.css'

export default function SalarioLiq({ salLiquid }) {
  return (
    <div>
      <p>Salário Líquido</p>
      <input className='inputliquid fbold' placeholder={`R$ ${salLiquid.toFixed(2)}`} disabled />
    </div>
  );
}
