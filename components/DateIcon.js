import React from 'react';
import Radium from 'radium';

const DateIcon = (props) => {
  const {month, date} = props;
  const length = props.length ? props.length : 150;

  let styles = {
    base: {
      width: length,
      height: length,
      background: '#FCFCFC',
      position: 'relative',
      margin: length * 0.15,
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
      position: 'relative',
    },
    shadow: {
      height: length * 0.05,
      width: length,
      background: '#DCDCDC',
      positon: 'absolute',
      left: 0,
      bottom: 0,
    },
    vertical: {
      position: 'absolute',
      height: length * 0.60,
      top: length * 0.05,
      background: '#DCDCDC',
      width: 2,
    },
    vertical1: {
      left: length * 0.25,
    },
    vertical2: {
      left: length * 0.5,
    },
    vertical3: {
      left: length * 0.75,
    },
    horizontal: {
      position: 'absolute',
      width: length * 0.9,
      height: 2,
      left: length * 0.05,
      background: '#DCDCDC',
    },
    horizontal1: {
      top: (length * 0.70) * 0.25,
    },
    horizontal2: {
      top: (length * 0.70) * 0.5,
    },
    horizontal3: {
      top: (length * 0.70) * 0.75,
    },
    monthScribble: {
      background: '#DEDEDE',
      background: 'url("data:image/svg+xml;base64,DQo8c3ZnIHdpZHRoPSIzNHB4IiBoZWlnaHQ9IjEzcHgiIHZpZXdCb3g9IjE3IDEgMzQgMTMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPjwvZGVmcz4NCiAgICA8cGF0aCBkPSJNMTksNi43MDA3MTQyNiBDMTksNi43MDA3MTQyNiAyOC45NzIxMDQ5LC0xLjQ1NTYzMjAzIDI0Ljk1NDEyMzcsNi40NDkyNTMxNyBDMjAuOTM2MTQyNCwxNC4zNTQxMzg0IDI2LjM3NDkzMjgsMTIuODA1OTMwNCAzMC41MzEwNTU3LDYuODY5MDc0NDcgQzM0LjY4NzE3ODYsMC45MzIyMTg1NTIgMzcuNDc2OTkzNiw1LjI2OTExMjgzIDM2LjY4NDgzNzMsNy4zMDI5MjU3OSBDMzUuODkyNjgxMSw5LjMzNjczODc1IDQwLjQ0NzU3ODcsMTEuODc5NDA5NiA0OC43NzAwNzg4LDcuMDc2Mjg3MDQiIGlkPSJQYXRoLTMiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIj48L3BhdGg+DQo8L3N2Zz4=")',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '30%',
      width: '45%',
    },
  };

  const dateElem =
    date
    ? <div className="date" style={[styles.block, styles.blockDate]}>{date}</div>
    : (
      <div className="date" style={[styles.blockDate]}>
        <div style={[styles.vertical, styles.vertical1]}></div>
        <div style={[styles.vertical, styles.vertical2]}></div>
        <div style={[styles.vertical, styles.vertical3]}></div>
        <div style={[styles.horizontal, styles.horizontal1]}></div>
        <div style={[styles.horizontal, styles.horizontal2]}></div>
        <div style={[styles.horizontal, styles.horizontal3]}></div>
      </div>
    );

  const monthElem =
    month
    ? <div className="month" style={[styles.block, styles.blockMonth]}>{month}</div>
    : (
      <div className="month" style={[styles.block, styles.blockMonth]}>
        <div style={styles.monthScribble}></div>
      </div>
    );

  return (
    <div style={styles.base}>
      <div style={[styles.hanger, styles.hangerLeft]}></div>
      <div style={[styles.hanger, styles.hangerRight]}></div>
      {monthElem}
      {dateElem}
      <div style={styles.shadow}></div>
    </div>
  );
};

export default Radium(DateIcon);
