import { useEffect, useState } from "react";
import api from "../../utils/api";
import { moneyFormat } from "../../utils/moneyFormat";
import * as S from "./styles";

interface DataApi {
  equity: number;
  valueApplied: number;
  equityProfit: number;
  percentageProfit: number;
  indexerValue: number;
  percentageOverIndexer: number;
}

export function Cells({
  equity,
  valueApplied,
  equityProfit,
  percentageProfit,
  indexerValue,
  percentageOverIndexer,
}: DataApi) {
  return (
    <S.Container>
      <S.Cell>
        <span>Saldo Bruto</span>
        <span>{moneyFormat(equity)}</span>
      </S.Cell>
      <S.Cell>
        <span>Valor aplicado</span>
        <span>{moneyFormat(valueApplied)}</span>
      </S.Cell>
      <S.Cell>
        <span>Resultado</span>
        <span>{moneyFormat(equityProfit)}</span>
      </S.Cell>
      <S.Cell>
        <span>Rentabilidade</span>
        <span>{percentageProfit}%</span>
      </S.Cell>
      <S.Cell>
        <span>cdi</span>
        <span>{indexerValue}%</span>
      </S.Cell>
      <S.Cell>
        <span>% sobre cdi</span>
        <span>{percentageOverIndexer}%</span>
      </S.Cell>
    </S.Container>
  );
}
