import Image from "next/image";

import { Cells } from "../Cells";
import { Row } from "../Row";
import * as S from "./styles";

interface DataApi {
  equity: number;
  valueApplied: number;
  equityProfit: number;
  percentageProfit: number;
  indexerValue: number;
  percentageOverIndexer: number;
}

export function Content({
  equity,
  equityProfit,
  valueApplied,
  percentageProfit,
  indexerValue,
  percentageOverIndexer,
}: DataApi) {
  return (
    <S.Container>
      <S.TopContent>
        <h2>Renda Fixa</h2>
        <Cells
          equity={equity}
          valueApplied={valueApplied}
          equityProfit={equityProfit}
          percentageProfit={percentageProfit}
          indexerValue={indexerValue}
          percentageOverIndexer={percentageOverIndexer}
        />
      </S.TopContent>

      <S.TableCell>
        <S.Header>
          <h2>Minhas rendas fixas</h2>
          <div>
            <select name="ordenar" id="ordenar">
              <option value="">Ordenar por</option>
              <option value="">Ordenar por</option>
              <option value="">Ordenar por</option>
              <option value="">Ordenar por</option>
              <option value="">Ordenar por</option>
              <option value="">Ordenar por</option>
              <option value="">Ordenar por</option>
            </select>
            <div className="input">
              <Image
                objectFit="contain"
                className="lupa"
                src="/assets/lupa.png"
                alt="Search"
                width={15}
                height={15}
              />
              <input type="text" />
            </div>
          </div>
        </S.Header>

        <Row />
      </S.TableCell>
    </S.Container>
  );
}
