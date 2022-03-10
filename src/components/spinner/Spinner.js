import { Oval } from 'react-loader-spinner';
import * as S from './Spinner.style';

const Spinner = () => {
  return (
    <S.Overlay>
      <S.Box>
        <Oval
          ariaLabel="loading-indicator"
          height={40}
          width={40}
          strokeWidth={3}
          color="#000"
          secondaryColor="transparent"
        />
      </S.Box>
    </S.Overlay>
  );
};

export default Spinner;
