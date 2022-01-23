import React, { useEffect } from 'react';
import '../../App.css'


export default function DescIrpf({ inssSal, salDescIrpf }) {

  let descIrpf = calcDescIrpf(inssSal);

  useEffect(() => salDescIrpf(descIrpf), [inssSal])

  return (
    <div>
      <p>Desconto IRPF</p>
      <input className='inputirpf fbold' placeholder={`R$ ${descIrpf.toFixed(2)}`} disabled />
    </div>
  );
}

function calcDescIrpf(valor) {
  if (valor < 1903.99) return 0
  if (valor < 2826.66) return valor * 0.075 - 142.8;
  if (valor < 3751.06) return valor * 0.15 - 354.80;
  if (valor < 4664.69) return valor * 0.225 - 636.13;
  return valor * 0.275 - 869.36;
}
