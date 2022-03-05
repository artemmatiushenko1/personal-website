import * as S from './IconButton.style';

const IconButton = ({ icon, href }) => {
  return (
    <S.Button href={href} target="_blank">
      {icon}
    </S.Button>
  );
};

export default IconButton;
