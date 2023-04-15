import styled from "styled-components";
// importの後ろは変数名なので、どんな名前でもおｋ

export const StyledComponents = () => {
  return (
    <SContainer>
      <Stitle>- styled Components -</Stitle>
      <Sbutton>FIGHT!!</Sbutton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px pink;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Stitle = styled.p`
  margin: 0;
  color: blue;
`;
const Sbutton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: white;
    cursor: pointer;
  }
`;

//　StyledCOmponentsは人気のライブラリ。
// 変数名＝　の後に、変数名.CSSをあてたいタグ名　その後に``で囲ってＣＳＳを書いていく。
// CSSをあてたいタグを、↑で定義した変数名の名前に変えればおｋ。
// 注意点として、後から見て、ComponentがスタイルをあてただけのComponentなのか、別のcomponentからimoprtしてきたものなのか分からない。
//　なので、同じファイルで定義したＣＳＳをあてていることが分かるように、変数名の最初に大文字のＳを付けてあげる。（Udemyの人のローカルルール）
