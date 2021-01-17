import axios from 'axios';
import { ImgIcon, PageWrapper, Subtitle, Mark } from './_styles';

export default function Home({ cdi }) {
  return (
    <PageWrapper>
      <ImgIcon src="/assets/img/tax.png" />
      <div>
        <Subtitle>
          A taxa CDI hoje é de <Mark>%{cdi}</Mark>
        </Subtitle>
      </div>
    </PageWrapper>
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
