import * as S from './IconButton.style';

const IconButton = ({ icon, href, title }) => {
  return (
    <S.Button href={href} target="_blank" title={title}>
      {icon}
    </S.Button>
  );
};

export default IconButton;
