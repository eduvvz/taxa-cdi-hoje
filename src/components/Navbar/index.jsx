import Link from 'next/link';
import React from 'react';
import { Navbar as SNavbar, Title } from './_styles';

export default function Navbar() {
  return (
    <SNavbar>
      <Link href="/">
        <a>
          <Title>CDI Hoje</Title>
        </a>
      </Link>
    </SNavbar>
  );
}
