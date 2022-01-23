import React, { useEffect } from 'react';
import '../../App.css'


export default function DescInss({ salBruto, salDescInss }) {

  let descInss = calcDesc(salBruto);


  useEffect(() => {
    salDescInss(descInss);
  }, [salBruto]);

  return (
    <div>
      <p>Desconto INSS</p>
      <input className='inputlinss fbold' placeholder={`R$ ${descInss.toFixed(2)}`} disabled />
    </div>
  );
}

function calcDesc(valor) {
  if (valor < 1045.01) return valor * 0.075;
  if (valor < 2089.61) return valor * 0.09;
  if (valor < 3134.41) return valor * 0.12;
  if (valor < 6101.07) {
    if (valor * 0.14) {
      return 713.10;
    }
    return valor * 0.14;
  }
  return 713.10;
}
