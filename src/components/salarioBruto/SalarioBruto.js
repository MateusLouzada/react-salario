import React, { useEffect, useState } from 'react';
import '../../App.css'


export default function SalarioBruto({ returnSal }) {

  const [salBruto, setSalBruto] = useState(0.0);

  const gerandoSal = (event) => event.target.value > 0 ? setSalBruto(event.target.value) : setSalBruto(0);

  useEffect(() => returnSal(salBruto), [salBruto]);

  return (
    <div>
      <p>Salário Bruto</p>
      <input type="number" className='fbold' onChange={gerandoSal} />
    </div>
  );
}
