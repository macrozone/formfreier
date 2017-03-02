import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';

const DetailBase = styled.div`
  padding: 20px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-flow: row wrap;
`;
DetailBase.displayName = 'DetailBase';

/* eslint max-len: 0 */
const DetailDescription = styled.div`
  flex: 4;
  padding: 20px;
`;

const DetailImage = styled.div`
  flex: 1;
  min-width: 240px;
`;

const Detail = ({ style, className, projectId }) => (
  <DetailBase className={className} style={style}>
    <h1>{projectId}</h1>
    <DetailImage>
      <img style={{ width: '100%' }} alt="arrow" src="http://sandrowettstein.ch/images/Arrow.gif" />
    </DetailImage>
    <DetailDescription>

      <p>Lorem ipsum dolor sit amet, duo omnes omittam volutpat et, mei corrumpit evertitur an, commodo insolens pertinax et vis. Ignota nemore suscipit ei has. Nostro dignissim ei mei, vidit invidunt mea te. Mel te officiis urbanitas quaerendum, dictas constituam ad pri.
      </p>
      <p>
      Ea vis suas eirmod molestiae, ne quem harum eam. Nam imperdiet sententiae eu. Tacimates convenire delicatissimi sea an, melius discere ea est. Id nam aliquam theophrastus.
      </p>
      <p>
      Eu eum eius velit salutandi, nec reque oratio option id, ut populo blandit nec. Adhuc labore mel ad, nonumes nusquam conceptam ea sit. Id dicant labores suavitate his, an mea petentium efficiendi. Has ea labore numquam mentitum, et est graece denique. An ferri doming pro, ea mutat quaeque per. Rebum neglegentur has ea, sea an verterem nominati. Debitis erroribus ex eos, eos alia enim expetendis ut, ad accusata voluptaria vituperata pri.
      </p>
      <p>
      His alia deleniti phaedrum in, ad latine voluptaria usu. Quod modus eu sit, in natum errem option sea, tritani democritum ad qui. Mel in alii suavitate, no tibique consequuntur eum, et nam detraxit sensibus. Choro lobortis torquatos eu eum.
      </p>
      <p>
      Ei sea vitae homero sanctus, vix ut everti partiendo. Vim et oportere dignissim. In qui purto inani graece, his ei ferri scaevola. Movet perpetua posidonium ea sit, ei nusquam vituperatoribus vel, malis partiendo mea eu.
      </p>
      <p>
      Vim ignota petentium no. Sed ad persius laboramus, odio maiestatis definitionem ad quo, eos in insolens iracundia disputando. Consul efficiendi in pro. Postea vocibus nam ad, vim ea nullam probatus hendrerit. At affert commune explicari sit, in mundi oblique mea.
      </p>
      <p>
      Ocurreret patrioque sit id, ad eum omittam detraxit. Meis verterem lobortis in eos, no sensibus neglegentur ius, admodum platonem argumentum id nam. Ludus habemus ullamcorper est at, ei stet illud officiis his. Et fugit vocent sadipscing nec, ad sea voluptua conceptam eloquentiam, eu adhuc accusam pri. Vel oratio facilis ei, id eam illud ipsum necessitatibus, at quo vitae latine.
      </p>
      <p>
      Sed et audiam interpretaris, putent aeterno intellegam per te. Eum justo ludus persecuti cu. At mel solet placerat. Primis viderer sea eu, cu mei laudem vocibus lucilius. Purto omnis regione ea eos, summo discere sit ea. Id cum recusabo dissentias, id nostrum deleniti pri, id eum brute fabellas perpetua.
      </p>
      <p>
      Has et dictas deleniti intellegat, quem eloquentiam comprehensam ad usu. Debet iusto deleniti usu in, at eum stet urbanitas. Reque nihil moderatius te vel. Eam posse appareat principes te, mea nulla antiopam comprehensam ex.
      </p>
      <p>
      Et vel dolorem euripidis, vis ad omnium fuisset splendide, nostro accusamus conceptam ius eu. Ex pri appetere abhorreant. Sea te soleat incorrupte, an inani accusam inimicus nec. Persius accusamus pri at, postulant expetenda intellegebat has et, eos nemore propriae insolens in. Cum omittam phaedrum imperdiet et.
      </p>
    </DetailDescription>

  </DetailBase>
);

Detail.propTypes = {
};

Detail.defaultProps = {
};

Detail.displayName = 'Detail';

export default Detail;
