import axios from 'axios';
import dynamic from 'next/dynamic';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Paper } from '../_styles';
import { TransitionScene, WrapperCalc } from './_styles';

function CalculadoraDeCdbPage() {
  const WavesAnimation = dynamic(
    () => import('../../components/Animations/Waves'),
    {
      ssr: false,
    }
  );

  return (
    <TransitionScene>
      <WavesAnimation />
      <WrapperCalc>
        <Container>
          <Row>
            <Col md={12} lg={8} offset={{ lg: 2 }}>
              <Paper />
            </Col>
          </Row>
        </Container>
      </WrapperCalc>
    </TransitionScene>
  );
}

export default CalculadoraDeCdbPage;

export async function getStaticProps() {
  let cdi;

  try {
    const res = await axios.get(
      'https://www2.cetip.com.br/ConsultarTaxaDi/ConsultarTaxaDICetip.aspx'
    );
    cdi = res.data.taxa;
  } catch (error) {
    throw error.response;
  }

  return {
    props: {
      cdi,
    },
    revalidate: 86400,
  };
}
