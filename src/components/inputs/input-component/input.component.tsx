import React from 'react';
import {ChangeEvent} from 'react';
import styles from './input.module.scss';

interface Props {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  label?: string
  type: 'text' | 'number';
}

const InputComponent = (props: Props) => {
  const handleOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
    props.onChange(ev.target.value);
  };

  return (
    <div className={styles['input-container']}>
      {
        props?.label ?
          <label className={styles['label']}>{props.label}</label> :
          null
      }
      <input
        placeholder={props.placeholder}
        className={styles.input}
        value={props.value}
        onChange={handleOnChange}
        type={props.type}
      />
    </div>

  );
};

export default InputComponent;
