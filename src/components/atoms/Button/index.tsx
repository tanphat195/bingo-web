import React, { useState, ButtonHTMLAttributes } from 'react';
import { Main, Content, Press } from './styled';

type IProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IProps> = props => {
  const [pressIn, setPressIn] = useState(false);
  const onMouseDown = () => {
    setPressIn(true);
  };

  const onMouseUp = () => {
    setPressIn(false);
  };

  const onMouseLeave = () => {
    setPressIn(false);
  };

  return (
    <Main style={{ ...props.style, backgroundColor: 'unset' }}>
      <Content
        {...props}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
        onMouseLeave={onMouseLeave}
        style={{
          backgroundColor: props.style?.backgroundColor,
          marginTop: pressIn ? '4px' : 0,
          borderBottomLeftRadius: pressIn ? '12px' : '8px',
          borderBottomRightRadius: pressIn ? '12px' : '8px',
        }}
      >
        {props.children}
      </Content>
      <Press />
    </Main>
  );
};

export default Button;
