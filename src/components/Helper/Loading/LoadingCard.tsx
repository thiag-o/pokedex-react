import React from 'react';
import styles from './LoadingCard.module.css';

interface Props {
  otherClass?: string;
}

const Loading = ({ otherClass }: Props) => {
  return (
    <div className={`${styles.loading} ${otherClass ? otherClass : ''}`}>
      <span></span>
    </div>
  );
};

export default Loading;
