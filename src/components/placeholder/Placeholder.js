import * as S from './Placeholder.style';
import { Spinner } from 'components/spinner';
import { forwardRef } from 'react';

const Placeholder = forwardRef((props, ref) => {
  return (
    <S.PlaceholderContainer ref={ref}>
      <Spinner />
    </S.PlaceholderContainer>
  );
});

export default Placeholder;
