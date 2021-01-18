import axios from 'axios';
import dynamic from 'next/dynamic';
import { Col, Container, Row } from 'react-grid-system';
import {
  ImgIcon,
  PageWrapper,
  Subtitle,
  Mark,
  TransitionScene,
  Paper,
  PaperTitle,
  PaperParagraph,
} from './_styles';

export default function Home({ cdi }) {
  const WavesAnimation = dynamic(
    () => import('../components/Animations/Waves'),
    {
      ssr: false,
    }
  );

  return (
    <>
      <PageWrapper>
        <ImgIcon src="/assets/img/tax.png" />
        <div>
          <Subtitle>
            A taxa CDI hoje é de <Mark>%{cdi}</Mark>
          </Subtitle>
        </div>
      </PageWrapper>
      <TransitionScene>
        <WavesAnimation />
        <Container>
          <Row>
            <Col md={12} lg={10} offset={{ lg: 1 }}>
              <PaperTitle>O que é o CDI</PaperTitle>
              <Paper>
                <Row>
                  <Col sm={12}>
                    <PaperParagraph>
                      O CDI é uma sigla para Certificado de Depósito
                      Interbancário, que nada mais é do que o nome dos
                      empréstimos que os bancos fazem entre si para poder
                      corresponder a um decreto do Banco Central.
                    </PaperParagraph>
                    <PaperParagraph>
                      O decreto em questão determina que os bancos devem
                      encerrar todos os dias com mais dinheiro entrando do que
                      saindo. É uma medida de segurança para que o sistema
                      financeiro seja estável e saudável.
                    </PaperParagraph>
                  </Col>
                </Row>
              </Paper>
            </Col>
            <Col md={12} lg={10} offset={{ lg: 1 }}>
              <PaperTitle>Por que é importante entender sobre o CDI</PaperTitle>
              <Paper>
                <Row>
                  <Col sm={12}>
                    <PaperParagraph>
                      Por conta que o CDI é a principal taxa que os bancos usam
                      afim de regular quanto rendem algumas aplicações, como os
                      famosos CDB`s.
                    </PaperParagraph>
                    <PaperParagraph>
                      Por tanto é seguro dizer que essa taxa representa um dos
                      principais índices de referência para alguns investimentos
                      de renda fixa.
                    </PaperParagraph>
                  </Col>
                </Row>
              </Paper>
            </Col>
          </Row>
        </Container>
      </TransitionScene>
    </>
  );
}

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
