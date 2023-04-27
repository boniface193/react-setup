import React from 'react';
import PropTypes from 'prop-types';

function CalBtn(props) {
  const { incrementNumber, bgColor } = props;
  return (<button type="button" className={bgColor}>{incrementNumber}</button>);
}

CalBtn.propTypes = {
  incrementNumber: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

function Calculator() {
  return (
    <section className="container">
      <input disabled value={0} className="show-input" />
      <aside>
        <div>
          <CalBtn incrementNumber="AC" bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber="+/-" bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber="%" bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber="+" bgColor="bg-orange btn p-normal" />
        </div>
        <div>
          <CalBtn incrementNumber="7" bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber="8" bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber="9" bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber="x" bgColor="bg-orange btn p-normal" />
        </div>
        <div>
          <CalBtn incrementNumber="4" bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber="5" bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber="6" bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber="-" bgColor="bg-orange btn p-normal" />
        </div>
        <div>
          <CalBtn incrementNumber="1" bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber="2" bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber="3" bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber="+" bgColor="bg-orange btn p-normal" />
        </div>
        <div>
          <CalBtn incrementNumber="0" bgColor="bg-white btn p-abnormal" />
          <CalBtn incrementNumber="." bgColor="bg-white btn p-normal" />
          <CalBtn incrementNumber="=" bgColor="bg-orange btn p-normal" />
        </div>
      </aside>
    </section>
  );
}

export default Calculator;
