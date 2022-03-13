import * as S from './RoundedButton.style';

const RoundedButton = ({ icon, children, onClick, className, type }) => {
  return (
    <S.Button onClick={onClick} className={className} type={type}>
      {icon}
      {children}
    </S.Button>
  );
};

export default RoundedButton;
