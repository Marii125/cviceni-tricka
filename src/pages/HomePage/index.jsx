import { useState } from 'react';
import { TShirt } from '../components/TShirt';
import { TShirtSetup } from '../components/TShirtSetup';
import './style.css';

export const HomePage = () => {
  const [typTricka, setTypTricka] = useState('normalShortSleeve');
  const [typBarva, setTypBarva] = useState('yellow');
  const [printTricka, setPrintTricka] = useState('Cus');

  const handleChangeTyp = (type) => {
    setTypTricka(type);
  };

  const handleChangeColor = (barva) => {
    setTypBarva(barva);
  };

  const handleChangePrint = (print) => {
    setPrintTricka(print);
  };
  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type={typTricka} color={typBarva} print={printTricka} />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup
            onTypeChange={handleChangeTyp}
            onColorChange={handleChangeColor}
            onPrintChange={handleChangePrint}
          />
        </div>
      </div>
    </div>
  );
};
