import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import * as S from "./styles";

interface SnapshoTProduct {
  fixedIncome: {
    name: string;
    bondType: string;
  };
  position: {
    appliedValue: number;
    equit: number;
    profitability: number;
    portfolioPercentage: number;
    valueIndexer: number;
    percentageOverIndex: number;
  };
  due: {
    date: string;
    daysUntilExpiration: number;
  };
}

interface RowContent {
  snapshotByProduct: SnapshoTProduct;
}

export function Row() {
  const [apiData, setApidata] = useState<RowContent>({} as RowContent);

  console.log(apiData);

  useEffect(() => {
    api.get("/").then((response) => {
      const dados = response.data.data.snapshotByProduct;

      setApidata(dados);
    });
  }, []);

  return (
    <S.Row>
      {/* <S.CellTitle>
        <span>
          Titulo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.29"
            height="13.291"
            viewBox="0 0 13.29 13.291"
          >
            <path
              id="Caminho_3844"
              data-name="Caminho 3844"
              d="M772.757,55.128a.47.47,0,0,0-.47.47V59.02a.47.47,0,1,0,.939,0V55.6A.47.47,0,0,0,772.757,55.128Zm0-2.519a.469.469,0,0,0-.47.47v.642a.47.47,0,1,0,.939,0v-.642A.469.469,0,0,0,772.757,52.609Zm4.645-1.256A6.645,6.645,0,1,0,772.7,62.7h0a6.646,6.646,0,0,0,4.7-11.343Zm-4.7,10.4h0a5.707,5.707,0,1,1,5.705-5.708A5.713,5.713,0,0,1,772.7,61.756Z"
              transform="translate(-766.056 -49.405)"
              fill="#4e5b61"
            />
          </svg>
        </span>

        <div>
          <p>{apiData.snapshotByPortfolio.fixedIncome.name}</p>

          <div>
            <span>classe</span>
            <span>{apiData.snapshotByPortfolio.fixedIncome.bondType}</span>
          </div>
        </div>
      </S.CellTitle>

      <S.CellMyPosition>
        <span>
          Minha Posição
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.29"
            height="13.291"
            viewBox="0 0 13.29 13.291"
          >
            <path
              id="Caminho_3844"
              data-name="Caminho 3844"
              d="M772.757,55.128a.47.47,0,0,0-.47.47V59.02a.47.47,0,1,0,.939,0V55.6A.47.47,0,0,0,772.757,55.128Zm0-2.519a.469.469,0,0,0-.47.47v.642a.47.47,0,1,0,.939,0v-.642A.469.469,0,0,0,772.757,52.609Zm4.645-1.256A6.645,6.645,0,1,0,772.7,62.7h0a6.646,6.646,0,0,0,4.7-11.343Zm-4.7,10.4h0a5.707,5.707,0,1,1,5.705-5.708A5.713,5.713,0,0,1,772.7,61.756Z"
              transform="translate(-766.056 -49.405)"
              fill="#4e5b61"
            />
          </svg>
        </span>

        <div>
          <div>
            <span>Valor inves.</span>
            <span>{apiData.snapshotByPortfolio.position.appliedValue}</span>
          </div>
          <div>
            <span>Saldo bruto</span>
            <span>{apiData.snapshotByPortfolio.position.equit}</span>
          </div>
          <div>
            <span>rent.</span>
            <span>{apiData.snapshotByPortfolio.position.profitability}</span>
          </div>
          <div>
            <span>% da cart.</span>
            <span>
              {apiData.snapshotByPortfolio.position.portfolioPercentage}
            </span>
          </div>
          <div>
            <span>cdi</span>
            <span>{apiData.snapshotByPortfolio.position.valueIndexer}</span>
          </div>
          <div>
            <span>Sobre cdi</span>
            <span>
              {apiData.snapshotByPortfolio.position.percentageOverIndex}
            </span>
          </div>
        </div>
      </S.CellMyPosition>

      <S.DueDate>
        <span>
          Vencimento
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.29"
            height="13.291"
            viewBox="0 0 13.29 13.291"
          >
            <path
              id="Caminho_3844"
              data-name="Caminho 3844"
              d="M772.757,55.128a.47.47,0,0,0-.47.47V59.02a.47.47,0,1,0,.939,0V55.6A.47.47,0,0,0,772.757,55.128Zm0-2.519a.469.469,0,0,0-.47.47v.642a.47.47,0,1,0,.939,0v-.642A.469.469,0,0,0,772.757,52.609Zm4.645-1.256A6.645,6.645,0,1,0,772.7,62.7h0a6.646,6.646,0,0,0,4.7-11.343Zm-4.7,10.4h0a5.707,5.707,0,1,1,5.705-5.708A5.713,5.713,0,0,1,772.7,61.756Z"
              transform="translate(-766.056 -49.405)"
              fill="#4e5b61"
            />
          </svg>
        </span>

        <div>
          <div>
            <span>Data venc.</span>
            <span>{apiData.snapshotByPortfolio.due.date}</span>
          </div>
          <div>
            <span>Dias até venc.</span>
            <span>{apiData.snapshotByPortfolio.due.daysUntilExpiration}</span>
          </div>
        </div>
      </S.DueDate> */}
    </S.Row>
  );
}
