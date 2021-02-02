import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Hidden } from 'react-grid-system';
import ClickAwayListener from 'react-click-away-listener';
import {
  Navbar as SNavbar,
  Title,
  WrapperLinks,
  Link as SLink,
  MobileMenu,
  MbMenuLink,
} from './_styles';

export default function Navbar() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const handleClickAwayMbMenu = () => {
    if (showMenu) setShowMenu(false);
  };

  return (
    <>
      <SNavbar>
        <WrapperLinks>
          <Link href="/">
            <SLink>
              <Title>CDI Hoje</Title>
            </SLink>
          </Link>
          <div>
            <Hidden xs sm md>
              <Link href="/calculadora-de-investimentos">
                <SLink>Calculadora de Investimentos</SLink>
              </Link>
            </Hidden>
            <Hidden lg xl xxl>
              <div onClick={() => setShowMenu(!showMenu)}>
                <img
                  width="25"
                  src="/assets/img/menu.svg"
                  alt="ícone de menu"
                />
              </div>
            </Hidden>
          </div>
        </WrapperLinks>
      </SNavbar>
      <ClickAwayListener onClickAway={handleClickAwayMbMenu}>
        <MobileMenu show={showMenu}>
          <MbMenuLink
            onClick={() => {
              router.push('/calculadora-de-investimentos');
              setShowMenu(false);
            }}
          >
            <SLink>Calculadora de Investimentos</SLink>
          </MbMenuLink>
        </MobileMenu>
      </ClickAwayListener>
    </>
  );
}
