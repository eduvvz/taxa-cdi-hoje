import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-grid-system';
import { Button } from '../components/WarnCookies/_styles';
import {
  ImgIcon,
  PageWrapper,
  Subtitle,
  Mark,
  TransitionScene,
  Paper,
  PaperTitle,
  PaperParagraph,
  Table,
} from './_styles';

export default function Home({ cdi }) {
  const router = useRouter();
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
                      CDI é uma sigla para Certificado de Depósito
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
            <Col md={12} lg={10} offset={{ lg: 1 }}>
              <PaperTitle>O que significa render 100% do CDI?</PaperTitle>
              <Paper>
                <Row>
                  <Col sm={12}>
                    <PaperParagraph>
                      Muitos investimentos são atrelados a taxa CDI.
                      Normalmente, quando se diz que um CDB ou LCI oferece 100%
                      do CDI, é o mesmo que dizer que o investimento vai
                      garantir um retorno correspondente a taxa de empréstimo
                      bancário.
                    </PaperParagraph>
                    <PaperParagraph>
                      E também, caso o rendimento for maior que o CDI, como
                      120%, significa que o investimento vai superar a taxa. Da
                      mesma forma que se o CDB oferesse 80% do CDI, seu dinheiro
                      só irá rendar uma parte da taxa.
                    </PaperParagraph>
                  </Col>
                </Row>
              </Paper>
            </Col>
            <Col md={12} lg={10} offset={{ lg: 1 }}>
              <PaperTitle>
                Você quer ter uma estimativa do seu investimento?
              </PaperTitle>
              <Paper>
                <Row>
                  <Col sm={12}>
                    <PaperParagraph>
                      Pensando em você, fizemos uma calculadora que faz uma
                      estimativa do quanto teu dinheiro irá render, com base na
                      taxa CDI atual.
                    </PaperParagraph>
                    <Row>
                      <Col md={12} lg={6} offset={{ lg: 3 }}>
                        <Button
                          onClick={() =>
                            router.push('calculadora-de-investimentos')
                          }
                        >
                          Simular
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Paper>
            </Col>
            <Col md={12} lg={10} offset={{ lg: 1 }}>
              <PaperTitle>Imposto de Renda</PaperTitle>
              <Paper>
                <Row>
                  <Col sm={12}>
                    <PaperParagraph>
                      Hoje todo CDB ou LCI sofre tributação de imposto de renda.
                      Ou seja, quando você resgasta cerca dos seus ganhos são
                      enviados a Receita Federal.
                    </PaperParagraph>
                    <PaperParagraph>
                      Atualmente o imposto de renda sobre os ativos de renda
                      fixa. Seguem a tabela regressiva de tributação, que quanto
                      mais tempo o seu dinheiro fica, menor o imposto a ser
                      pago. A tabela é o seguinte:
                    </PaperParagraph>
                    <Table>
                      <tr>
                        <th>Alíquota de IR</th>
                        <th>Tempo de Investimento</th>
                      </tr>
                      <tr>
                        <td>22,5%</td>
                        <td>Até 180 dias</td>
                      </tr>
                      <tr>
                        <td>20,0%</td>
                        <td>De 181 a 360 dias</td>
                      </tr>
                      <tr>
                        <td>17,5%</td>
                        <td>De 361 a 720 dias</td>
                      </tr>
                      <tr>
                        <td>15,0%</td>
                        <td>Acima de 720 dias</td>
                      </tr>
                    </Table>
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
