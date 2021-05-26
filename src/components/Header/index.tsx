import Image from "next/image";

import * as S from "./styles";

export function Header() {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.Logo>
          <Image
            src="/assets/Kinvologo.png"
            alt="Kinvo Logo"
            width={190}
            height={29}
          />
        </S.Logo>
        <S.HeaderInfos>
          <S.InfoContent>
            <Image
              src="/assets/saldo-bruto-img.svg"
              alt="Saldo Bruto"
              width={30}
              height={30}
            />
            <div>
              <span>SALDO BRUTO</span>
              <span>130.521.230,02</span>
            </div>
          </S.InfoContent>
          <S.InfoContent>
            <Image
              src="/assets/arrow-up.svg"
              alt="Saldo Bruto"
              width={30}
              height={30}
            />
            <div>
              <span>VALOR APLICADO</span>
              <span>521.230,02</span>
            </div>
          </S.InfoContent>
          <S.InfoContent>
            <Image
              src="/assets/rentability-icon.svg"
              alt="Saldo Bruto"
              width={30}
              height={30}
            />
            <div>
              <span>RENTABILIDADE</span>
              <span>2,34%</span>
            </div>
          </S.InfoContent>
          <S.InfoContent>
            <Image
              src="/assets/my-wallet-icon.svg"
              alt="Saldo Bruto"
              width={30}
              height={30}
            />
            <div>
              <span>CARTEIRA</span>
              <span>Minha Carteira</span>
            </div>
          </S.InfoContent>

          <S.MenuIcon>
            <Image
              src="/assets/menu-icon.svg"
              alt="Menu Icon"
              width={30}
              height={30}
            />
          </S.MenuIcon>
        </S.HeaderInfos>
      </S.HeaderContainer>
    </S.Header>
  );
}
