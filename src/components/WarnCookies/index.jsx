import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import Link from 'next/link';
import { Button, ModalWarnCookies, TextWarn, Mark } from './_styles';

export default function WarnCookies() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accept = localStorage.getItem('@CDI-HOJE/acceptCookies');

    if (!accept) setShow(true);
  }, []);

  function onClickAcceptCookies() {
    localStorage.setItem('@CDI-HOJE/acceptCookies', true);
    setShow(false);
  }

  return (
    <ModalWarnCookies show={show}>
      <Row>
        <Col md={12} lg={8}>
          <TextWarn>
            Utilizamos cookies para melhorar e personalizar sua experiência com
            a gente
          </TextWarn>
          <p>
            Consulte a nossa{' '}
            <Link href="/policity">
              <Mark>Política de Privacidade</Mark>
            </Link>{' '}
            caso tenha alguma dúvida.
          </p>
        </Col>
        <Col
          md={12}
          lg={3}
          offset={{ lg: 1 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Button onClick={onClickAcceptCookies}>Aceitar</Button>
        </Col>
      </Row>
    </ModalWarnCookies>
  );
}
