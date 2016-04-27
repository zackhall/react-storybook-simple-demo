import React from 'react';
import Radium from 'radium';

const DateIcon = (props) => {
  let {month, date} = props;

  return (
    <div style={styles.base}>
      <div style={[styles.hanger, styles.hangerLeft]}></div>
      <div style={[styles.hanger, styles.hangerRight]}></div>
      <div className="month" style={[styles.block, styles.blockMonth]}>{month}</div>
      <div className="date" style={[styles.block, styles.blockDate]}>{date}</div>
      <div style={styles.shadow}></div>
    </div>
  );
};

let length = 150;
let styles = {
  base: {
    width: length,
    height: length,
    background: '#FCFCFC',
    position: 'relative',
    margin: 25,
    fontFamily: 'sans-serif',
  },
  hanger: {
    height: length * 0.2,
    width: length * 0.075,
    background: '#000',
    position: 'absolute',
    top: length * -0.1,
    borderRadius: 2
  },
  hangerLeft: {
    left: length * 0.2,
  },
  hangerRight: {
    right: length * 0.2,
  },
  block: {
    display: 'block',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: length,
  },
  blockMonth: {
    background: '#B86561',
    height: length * 0.25,
    color: '#FFF',
  },
  blockDate: {
    height: length * 0.70,
    fontSize: '4rem',
  },
  shadow: {
    height: length * 0.05,
    width: length,
    background: '#DCDCDC',
    positon: 'absolute',
    left: 0,
    bottom: 0,
  },
}

export default Radium(DateIcon);
