import { IconButton } from 'components/icon-button';
import TwitterIcon from 'public/icons/icon-twitter.svg';
import InstagramIcon from 'public/icons/icon-instagram.svg';
import TikTokIcon from 'public/icons/icon-tiktok.svg';
import YouTubeIcon from 'public/icons/icon-youtube.svg';
import * as S from './Socials.style';

const LINKS = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/_artemko',
    icon: <TwitterIcon alt="twitter" />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/_artemko/',
    icon: <InstagramIcon />,
  },
  {
    name: 'TikTok',
    link: 'https://www.tiktok.com/@_artemko',
    icon: <TikTokIcon />,
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/channel/UC0m6XuM0ZWwCA_mFeD2zSKA',
    icon: <YouTubeIcon />,
  },
];

const Socials = () => {
  return (
    <S.Wrapper>
      {LINKS.map(({ icon, link, name }) => (
        <IconButton href={link} icon={icon} key={name} title={name} />
      ))}
    </S.Wrapper>
  );
};

export default Socials;
