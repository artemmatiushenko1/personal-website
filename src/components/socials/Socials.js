import { IconButton } from 'components/icon-button';
import { ReactComponent as TwitterIcon } from 'assets/icons/icon-twitter.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/icon-instagram.svg';
import { ReactComponent as TikTokIcon } from 'assets/icons/icon-tiktok.svg';
import { ReactComponent as YouTubeIcon } from 'assets/icons/icon-youtube.svg';
import * as S from './Socials.style';

const LINKS = [
  {
    name: 'twitter',
    link: 'https://twitter.com/_artemko',
    icon: <TwitterIcon />,
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/_artemko/',
    icon: <InstagramIcon />,
  },
  {
    name: 'tiktok',
    link: 'https://www.tiktok.com/@_artemko',
    icon: <TikTokIcon />,
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/channel/UC0m6XuM0ZWwCA_mFeD2zSKA',
    icon: <YouTubeIcon />,
  },
];

const Socials = () => {
  return (
    <S.Wrapper>
      {LINKS.map(({ icon, link, name }) => (
        <IconButton href={link} icon={icon} key={name} />
      ))}
    </S.Wrapper>
  );
};

export default Socials;
