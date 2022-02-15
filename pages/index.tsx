import Section01 from "components/Section01";
import Section02 from "components/Section02";
import Section03 from "components/Section03";
import Section04 from "components/Section04";
import Section05 from "components/Section05";
import Section06 from "components/Section06";
import Section07 from "components/Section07";
import Section08 from "components/Section08";
import Section09 from "components/Section09";
import Section10 from "components/Section10";
import * as S from "styles/styled";

const Index: React.FC = () => {
  return (
    <S.MainWrapper>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Section09 />
      <Section10 />
    </S.MainWrapper>
  );
};

export default Index;