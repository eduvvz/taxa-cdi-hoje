import axios from 'axios';
import moment from 'moment';
import dynamic from 'next/dynamic';
import React, { useEffect, useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import CurrencyField from '../../components/Inputs/CurrencyField';
import TextField from '../../components/Inputs/TextField';
import { Button } from '../../components/WarnCookies/_styles';
import { Mark, Paper, PaperParagraph } from '../_styles';
import {
  TransitionScene,
  PageTitle,
  WrapperCalcButton,
  CountResult,
  ResultParagraph,
} from './_styles';

const IRTable = {
  0: {
    test: (n) => n <= 180,
    tax: 22.5,
  },
  1: {
    test: (n) => n >= 181 && n <= 360,
    tax: 20,
  },
  2: {
    test: (n) => n >= 361 && n <= 720,
    tax: 17.5,
  },
  3: {
    test: (n) => n > 720,
    tax: 15,
  },
};

function CalculadoraDeCdbPage({ cdi }) {
  const [taxIR, setTaxIR] = useState();
  const [finalAmount, setFinalAmount] = useState();
  const [liquidAmount, setLiquidAmount] = useState();
  const [diffDays, setDiffDays] = useState();
  const formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  });

  const [form, setForm] = useState({
    amountInvested: {
      value: '',
      error: '',
    },
    yieldCdi: {
      value: '',
      error: '',
    },
    initialDate: {
      value: '',
      error: '',
    },
    finalDate: {
      value: '',
      error: '',
    },
  });

  const WavesAnimation = dynamic(
    () => import('../../components/Animations/Waves'),
    {
      ssr: false,
    }
  );

  const memoWavesAnimation = useMemo(() => <WavesAnimation />, []);

  const validateForm = () => {
    const amountInvested = form.amountInvested.value
      ?.replace('.', '')
      .replace(',', '.');
    const yieldCdi = form.yieldCdi.value;
    const initialDate = moment(form.initialDate.value, 'DD/MM/YYYY');
    const finalDate = moment(form.finalDate.value, 'DD/MM/YYYY');

    if (!amountInvested) {
      setForm({
        ...form,
        amountInvested: {
          value: form.amountInvested.value,
          error: 'Campo inválido.',
        },
      });
      return false;
    }

    if (!yieldCdi) {
      setForm({
        ...form,
        yieldCdi: {
          value: form.yieldCdi.value,
          error: 'Campo inválido.',
        },
      });
      return false;
    }

    if (!initialDate.isValid()) {
      setForm({
        ...form,
        initialDate: {
          value: form.initialDate.value,
          error: 'Campo inválido.',
        },
      });
      return false;
    }

    if (!finalDate.isValid() || finalDate.isBefore(initialDate)) {
      setForm({
        ...form,
        finalDate: {
          value: form.initialDate.value,
          error: 'Campo inválido.',
        },
      });
      return false;
    }

    return true;
  };

  const getAnualYield = () => {
    const yieldCdi = parseFloat(form.yieldCdi.value);
    const taxCdi = parseFloat(cdi.replace(',', '.')).toFixed(2);

    return parseFloat((((yieldCdi / 100) * taxCdi) / 100).toFixed(3));
  };

  const getPeriod = () => {
    const initialDate = moment(form.initialDate.value, 'DD/MM/YYYY');
    const finalDate = moment(form.finalDate.value, 'DD/MM/YYYY');

    const newDiffDays = finalDate.diff(initialDate, 'days', true);
    setDiffDays(newDiffDays);

    const tax = Object.values(IRTable).find((value) => value.test(newDiffDays));
    setTaxIR(tax.tax);

    return finalDate.diff(initialDate, 'months', true) / 12;
  };

  const calc = () => {
    const anualYield = parseFloat(getAnualYield().toFixed(3));
    const period = getPeriod();
    const amountInvested = parseFloat(
      form.amountInvested.value.replace(',', '.').replace('.', '')
    );

    const finalAmountVal = parseFloat(
      (amountInvested * (1 + anualYield) ** period).toFixed(2)
    );

    const income = (((finalAmountVal - amountInvested) * taxIR) / 100).toFixed(
      2
    );
    setLiquidAmount(finalAmountVal - parseFloat(income));

    return finalAmountVal.toFixed(2);
  };

  const onClickCalcButton = () => {
    if (!validateForm()) return;
    setFinalAmount(calc());
  };

  useEffect(() => {
    setFinalAmount(null);
  }, [form]);

  return (
    <TransitionScene>
      {memoWavesAnimation}
      <div>
        <Container>
          <Row>
            <Col md={12} lg={8} offset={{ lg: 2 }}>
              <PageTitle>
                Calculadora de Investimentos (com base na taxa CDI).
              </PageTitle>
              <Paper>
                <Row>
                  <Col sm={12}>
                    <PaperParagraph>
                      Nossa calculadora irá te ajudar a você ter uma noção do
                      quanto seu investimento, com base na taxa CDI, irá render.
                    </PaperParagraph>
                    <PaperParagraph>
                      Hoje o CDI está avaliado em: <Mark>{cdi}</Mark>
                    </PaperParagraph>
                  </Col>
                </Row>
                {!finalAmount && (
                  <>
                    <Row>
                      <Col md={12} lg={8} offset={{ lg: 2 }}>
                        <CurrencyField
                          label="Valor investido"
                          placeholder="Digite valor investido. Ex: 10.000"
                          prefix="R$ "
                          decimalsLimit={0}
                          error={form.amountInvested.error}
                          onChange={(value) =>
                            setForm({
                              ...form,
                              amountInvested: {
                                value,
                                error: '',
                              },
                            })
                          }
                        />
                        <CurrencyField
                          label="Rendimento do CDI"
                          placeholder="Rendimento negociado do CDI. Ex:110%"
                          suffix="%"
                          decimalsLimit={0}
                          error={form.yieldCdi.error}
                          onChange={(value) =>
                            setForm({
                              ...form,
                              yieldCdi: {
                                value,
                                error: '',
                              },
                            })
                          }
                        />
                        <TextField
                          label="Data inicial"
                          placeholder="Digite a data inicial. Ex: 01/01/2021"
                          mask="99/99/9999"
                          error={form.initialDate.error}
                          onChange={(ev) =>
                            setForm({
                              ...form,
                              initialDate: {
                                value: ev.target.value,
                                error: '',
                              },
                            })
                          }
                        />
                        <TextField
                          label="Data final"
                          placeholder="Digite a data final. Ex: 01/01/2022"
                          mask="99/99/9999"
                          error={form.finalDate.error}
                          onChange={(ev) =>
                            setForm({
                              ...form,
                              finalDate: {
                                value: ev.target.value,
                                error: '',
                              },
                            })
                          }
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12} lg={8} offset={{ lg: 2 }}>
                        <WrapperCalcButton>
                          <Button onClick={onClickCalcButton}>Calcular</Button>
                        </WrapperCalcButton>
                      </Col>
                    </Row>
                  </>
                )}
                {finalAmount && (
                  <Row>
                    <Col md={12} lg={4} offset={{ lg: 2 }}>
                      <CountResult>
                        <ResultParagraph>Data inicial:</ResultParagraph>
                        <ResultParagraph>
                          <b>{form.initialDate.value}</b>
                        </ResultParagraph>
                      </CountResult>
                    </Col>
                    <Col md={12} lg={4} offset={{ lg: 0 }}>
                      <CountResult>
                        <ResultParagraph>Data final:</ResultParagraph>
                        <ResultParagraph>
                          <b>{form.finalDate.value}</b>
                        </ResultParagraph>
                      </CountResult>
                    </Col>
                    <Col md={12} lg={8} offset={{ lg: 2 }}>
                      <CountResult>
                        <ResultParagraph>Total de Dias:</ResultParagraph>
                        <ResultParagraph>
                          <b>{diffDays}</b>
                        </ResultParagraph>
                      </CountResult>
                    </Col>
                    <Col md={12} lg={8} offset={{ lg: 2 }}>
                      <CountResult>
                        <ResultParagraph>Valor Investido:</ResultParagraph>
                        <ResultParagraph>
                          <b>{formatter.format(form.amountInvested.value)}</b>
                        </ResultParagraph>
                      </CountResult>
                    </Col>
                    <Col md={12} lg={8} offset={{ lg: 2 }}>
                      <CountResult>
                        <ResultParagraph>Juros Ganhos:</ResultParagraph>
                        <ResultParagraph>
                          <b>
                            {formatter.format(
                              parseFloat(finalAmount) -
                                parseFloat(form.amountInvested.value)
                            )}
                          </b>
                        </ResultParagraph>
                      </CountResult>
                    </Col>
                    <Col md={12} lg={8} offset={{ lg: 2 }}>
                      <CountResult>
                        <ResultParagraph>Total Bruto:</ResultParagraph>
                        <ResultParagraph>
                          <b>{formatter.format(finalAmount)}</b>
                        </ResultParagraph>
                      </CountResult>
                    </Col>
                    <Col md={12} lg={8} offset={{ lg: 2 }}>
                      <CountResult>
                        <ResultParagraph>
                          Imposto de Renda Sobre o Investimento:
                        </ResultParagraph>
                        <ResultParagraph>
                          <b>
                            {parseFloat(taxIR).toFixed(2).replace('.', ',')}%
                          </b>
                        </ResultParagraph>
                      </CountResult>
                    </Col>
                    <Col md={12} lg={8} offset={{ lg: 2 }}>
                      <CountResult>
                        <ResultParagraph>
                          Valor Líquido da Aplicação
                        </ResultParagraph>
                        <ResultParagraph>
                          <b>{formatter.format(liquidAmount)}</b>
                        </ResultParagraph>
                      </CountResult>
                    </Col>
                    <Col md={12} lg={8} offset={{ lg: 2 }}>
                      <WrapperCalcButton>
                        <Button onClick={() => setFinalAmount(undefined)}>
                          Recalcular
                        </Button>
                      </WrapperCalcButton>
                    </Col>
                  </Row>
                )}
              </Paper>
            </Col>
          </Row>
        </Container>
      </div>
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
