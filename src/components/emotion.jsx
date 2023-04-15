/**@jsxRuntime classic */
/** @jsx jsx */
//↑はreactでemotionを使うときのルールみたいなもの。１行目は2行目を書いた時にエラーが出れば、書けばいい。

import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px pink;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  // emotion/reactからcssをインポートして、scssと同じ書き方をする方法

  const titleStyle = css({
    margin: 0,
    color: "blue"
  });
  // inlineSytleと同じような書き方。例えば、c値を文字列で囲ったり、キャメルケースで書いたりする。

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <Sbutton>FIGHT!!</Sbutton>
    </div>
  );
};

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
// StyledComponent と同じような書き方ができる。

//　emotionはいろいろな書き方ができるよ。
