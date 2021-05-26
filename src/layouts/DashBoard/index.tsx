import { Aside } from "../../components/Aside";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import * as S from "./styles";
export function Dashboard() {
  return (
    <S.GridContainer>
      <Header />
      <Aside />
      <Content />
    </S.GridContainer>
  );
}
