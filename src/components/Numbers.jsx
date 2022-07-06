import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

// Don't Repeat Yourself
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const renderNumbers = (onClickNumber) => {
  const renderNumber = (number) => (
    <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
  );

  return numbers.map(renderNumber);
};

const Numbers = ({ onClickNumber }) => (
  <section className="numbers">{renderNumbers(onClickNumber)}</section>
);

Numbers.propTypes = {
  onClickNumber: PropTypes.func.isRequired
};

export default Numbers;
