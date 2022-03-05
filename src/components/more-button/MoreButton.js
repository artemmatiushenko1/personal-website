import React from 'react';
import { ReactComponent as MouseIcon } from 'assets/icons/icon-mouse.svg';
import * as S from './MoreButton.style';

const MoreButton = () => {
  return (
    <S.Button>
      <MouseIcon />
      scroll down for more
    </S.Button>
  );
};

export default MoreButton;
