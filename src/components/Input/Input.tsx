import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  erro?: string;
}

const Input = ({ id, name, erro, ...props }: Props) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {name}
      </label>
      <input id={id} className={styles.input} {...props} />
      {erro && <p>{erro}</p>}
    </div>
  );
};

export default Input;
