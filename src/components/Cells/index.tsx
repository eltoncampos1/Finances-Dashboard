import { useEffect, useState } from "react";
import api from "../../utils/api";
import * as S from "./styles";

interface DataApi {
  snapshotByPortfolio: {
    equity: number;
    valueApplied: number;
    equityProfit: number;
    percentageProfit: number;
    indexerValue: number;
    percentageOverIndexer: number;
  };
}

export function Cells() {
  const [apiData, setApidata] = useState<DataApi>({} as DataApi);

  useEffect(() => {
    api
      .get("/")
      .then(({ data }) => {
        setApidata(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <S.Container>
      <S.Cell>
        <span>Saldo Bruto</span>
        <span>R$ {apiData.snapshotByPortfolio.equity}</span>
      </S.Cell>
      <S.Cell>
        <span>Valor aplicado</span>
        <span>R$ {apiData.snapshotByPortfolio.valueApplied}</span>
      </S.Cell>
      <S.Cell>
        <span>Resultado</span>
        <span>R$ {apiData.snapshotByPortfolio.equityProfit}</span>
      </S.Cell>
      <S.Cell>
        <span>Rentabilidade</span>
        <span>{apiData.snapshotByPortfolio.percentageProfit}%</span>
      </S.Cell>
      <S.Cell>
        <span>cdi</span>
        <span>{apiData.snapshotByPortfolio.indexerValue}%</span>
      </S.Cell>
      <S.Cell>
        <span>% sobre cdi</span>
        <span>{apiData.snapshotByPortfolio.percentageOverIndexer}%</span>
      </S.Cell>
    </S.Container>
  );
}
