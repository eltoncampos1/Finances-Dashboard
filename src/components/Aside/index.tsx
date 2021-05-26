import Image from "next/image";

import * as S from "./styles";

let navBarList = [
  {
    id: 1,
    img: "/assets/resumo-wallet.svg",
    description: "Resumo Da Carteira",
  },
  {
    id: 2,
    img: "/assets/my-prod.svg",
    description: "Meus Produtos",
  },
  {
    id: 3,
    img: "/assets/my-proventos.svg",
    description: "Meus Proventos",
  },
  {
    id: 4,
    img: "/assets/active-class.svg",
    description: "Classe de Ativos",
  },
  {
    id: 5,
    img: "/assets/renta-real.svg",
    description: "Rentabilidade Real",
  },
  {
    id: 6,
    img: "/assets/projecao-carreira.svg",
    description: "Projeção da Carteira",
  },
  {
    id: 7,
    img: "/assets/risk-return.svg",
    description: "Risco x Retorno",
  },
  {
    id: 8,
    img: "/assets/cobertura-fgc.svg",
    description: "Cobertura do FGC",
  },
];

export function Aside() {
  return (
    <S.Container>
      <nav>
        <ul>
          {navBarList.map((list) => {
            return (
              <li key={list.id}>
                <a href="#">
                  <div>
                    <Image
                      src={list.img}
                      alt={list.description}
                      width={34}
                      height={34}
                    />
                    <span>{list.description}</span>
                  </div>

                  <Image
                    src="/assets/seta-menu.svg"
                    alt="seta para direita"
                    width={10}
                    height={10}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </S.Container>
  );
}
