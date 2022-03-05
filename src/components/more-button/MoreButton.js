import React from 'react';
import { ReactComponent as MouseIcon } from 'assets/icons/icon-mouse.svg';
import * as S from './MoreButton.style';

const MoreButton = () => {
  const onClickHandler = () => {
    window.location.href = '#about';
  };

  return (
    <S.Button onClick={onClickHandler}>
      <MouseIcon />
      scroll down for more
    </S.Button>
  );
};

export default MoreButton;
