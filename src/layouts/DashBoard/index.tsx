import { Aside } from "../../components/Aside";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import * as S from "./styles";

interface DataApi {
  equity: number;
  valueApplied: number;
  equityProfit: number;
  percentageProfit: number;
  indexerValue: number;
  percentageOverIndexer: number;
}

export function Dashboard({
  equity,
  equityProfit,
  valueApplied,
  percentageProfit,
  indexerValue,
  percentageOverIndexer,
}: DataApi) {
  return (
    <S.GridContainer>
      <Header />
      <Aside />
      <Content
        equity={equity}
        valueApplied={valueApplied}
        equityProfit={equityProfit}
        percentageProfit={percentageProfit}
        indexerValue={indexerValue}
        percentageOverIndexer={percentageOverIndexer}
      />
    </S.GridContainer>
  );
}
