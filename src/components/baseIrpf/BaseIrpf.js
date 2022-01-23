import React from 'react';
import '../../App.css'


export default function BaseIrpf({ inssSal }) {

  return (
    <div>
      <p>Base IRPF</p>
      <input className='fbold fblack' placeholder={`R$ ${inssSal.toFixed(2)}`} disabled />
    </div>
  );
}
