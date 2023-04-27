import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/Calculate';

function Calculator() {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function callActions(e) {
    const newValueInput = calculate(calcData, e.target.value);
    setCalcData(newValueInput);
  }
  function CalBtn(props) {
    const {
      incrementNumber, characterStr, bgColor,
    } = props;

    return (<input type="button" onClick={callActions} className={bgColor} value={incrementNumber || characterStr} />);
  }

  const initialValue = calcData.next || calcData.total || 0;
  CalBtn.propTypes = {
    incrementNumber: PropTypes.number,
    characterStr: PropTypes.string,
    bgColor: PropTypes.string.isRequired,
  };

  CalBtn.defaultProps = {
    incrementNumber: 0,
    characterStr: '',
  };

  return (
    <section className="container">
      <input type="text" className="show-input" value={initialValue} readOnly />
      <aside>
        <div>
          <CalBtn characterStr="AC" bgColor="bg-white btn p-normal" />
          <CalBtn characterStr="+/-" bgColor="bg-white btn p-normal" />
          <CalBtn characterStr="%" bgColor="bg-white btn p-normal" />
          <CalBtn characterStr="+" bgColor="bg-orange btn p-normal" />
        </div>
        <div>
          <CalBtn incrementNumber={7} bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber={8} bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber={9} bgColor="bg-white btn p-normal" />
          <CalBtn characterStr="x" bgColor="bg-orange btn p-normal" />
        </div>
        <div>
          <CalBtn incrementNumber={4} bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber={5} bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber={6} bgColor="bg-white btn p-normal" />
          <CalBtn characterStr="-" bgColor="bg-orange btn p-normal" />
        </div>
        <div>
          <CalBtn incrementNumber={1} bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber={2} bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber={3} bgColor="bg-white btn p-normal" />
          <CalBtn characterStr="+" bgColor="bg-orange btn p-normal" />
        </div>
        <div>
          <CalBtn incrementNumber={0} bgColor="bg-white btn p-abnormal" />
          <CalBtn characterStr="." bgColor="bg-white btn p-normal" />
          <CalBtn characterStr="=" bgColor="bg-orange btn p-normal" />
        </div>
      </aside>
    </section>
  );
}

export default Calculator;
