// import Image from "next/image";

import { useEffect } from "react";
import { Cells } from "../Cells";
import * as S from "./styles";

export function Content() {
  useEffect(() => {}, []);

  return (
    <S.Container>
      <S.TopContent>
        <h2>Renda Fixa</h2>
        <Cells />
      </S.TopContent>
    </S.Container>
  );
}

//  <h2>Minhas rendas fixas</h2>

//     <div>
//       <select name="ordenar" id="ordenar">
//         <option value="">Ordenar por</option>
//         <option value="">Ordenar por</option>
//         <option value="">Ordenar por</option>
//         <option value="">Ordenar por</option>
//         <option value="">Ordenar por</option>
//         <option value="">Ordenar por</option>
//         <option value="">Ordenar por</option>
//       </select>

//       <div className="input">
//         <Image src="/assets/lupa.png" alt="Search" width={15} height={15} />
//         <input type="text" />
//       </div>
//     </div>
