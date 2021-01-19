import Link from 'next/link';
import React from 'react';
import {
  Navbar as SNavbar,
  Title,
  WrapperLinks,
  Link as SLink,
} from './_styles';

export default function Navbar() {
  return (
    <SNavbar>
      <WrapperLinks>
        <Link href="/">
          <a>
            <Title>CDI Hoje</Title>
          </a>
        </Link>
        <div />
      </WrapperLinks>
    </SNavbar>
  );
}
