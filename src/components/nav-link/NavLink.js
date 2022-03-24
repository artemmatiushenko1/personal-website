import * as S from './NavLink.style';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({
  href,
  exact = true,
  onClick,
  children,
  title,
  className,
}) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} className={className}>
      <S.Button
        onClick={onClick}
        className={isActive ? 'active' : null}
        href={href}
        title={title}
      >
        {children}
      </S.Button>
    </Link>
  );
};

export default NavLink;
