import './App.css';
import React, { useState, useEffect } from 'react';
import SalarioBruto from './components/salarioBruto/SalarioBruto';
import BaseInss from './components/baseInss/BaseInss';
import DescInss from './components/descInss/DescInss';
import BaseIrpf from './components/baseIrpf/BaseIrpf';
import DescIrpf from './components/descIrpf/DescIrpf';
import SalarioLiq from './components/salarioLiq/SalarioLiq';

function App() {

  const [salBruto, setSalBruto] = useState(0.0);
  const [inssSal, setInssSal] = useState(0.0);
  const [salLiquid, setSalLiquid] = useState(0.0);

  const returnSal = (salario) => setSalBruto(salario);

  const handleSalDescInss = (salDesc) => setInssSal(salBruto - salDesc);

  const handleSalLiquid = (salDesc) => setSalLiquid(inssSal - salDesc);

  return (
    <div className='container row'>
      <h1 className='center'>REACT SALÁRIO</h1>
      <div className='col s12'>
        <SalarioBruto returnSal={returnSal} />
      </div>
      <div className='col s12 m6 l3'>
        <BaseInss salBruto={salBruto} />
      </div>
      <div className='col s12 m6 l3'>
        <DescInss salBruto={salBruto} salDescInss={handleSalDescInss} />
      </div>
      <div className='col s12 m6 l3'>
        <BaseIrpf inssSal={inssSal} />
      </div>
      <div className='col s12 m6 l3'>
        <DescIrpf inssSal={inssSal} salDescIrpf={handleSalLiquid} />
      </div>
      <div className='col s12 m6 l3'>
        <SalarioLiq salLiquid={salLiquid} />
      </div>
    </div>
  );
}

export default App;
