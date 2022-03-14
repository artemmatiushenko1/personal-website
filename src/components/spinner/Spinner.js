import { Oval } from 'react-loader-spinner';
import * as S from './Spinner.style';

const Spinner = () => {
  return (
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
  );
};

export default Spinner;
