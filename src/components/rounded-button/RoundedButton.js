import * as S from './RoundedButton.style';

const RoundedButton = ({
  icon,
  children,
  onClick,
  className,
  type,
  disabled = false,
}) => {
  return (
    <S.Button
      disabled={disabled}
      onClick={onClick}
      className={className}
      type={type}
    >
      {icon}
      {children}
    </S.Button>
  );
};

export default RoundedButton;
