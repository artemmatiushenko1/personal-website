import * as S from './RoundedButton.style';

const RoundedButton = ({ icon, children, onClick, className }) => {
  return (
    <S.Button onClick={onClick} className={className}>
      {icon}
      {children}
    </S.Button>
  );
};

export default RoundedButton;
