export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px pink;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .title{
            margin: 0;
            color: blue;
          }
          .button{
            background-color: #abedd8;
            border: none;
            padding: 8px;
            border-radius: 8px;
          }
      `}</style>
    </>
  );
};

// StyleJsxというライブラリを先に読み込んでいるよ（package.jsonファイル参照）。
//  jsx='true'と書いたのは、JSXであるということを明記する必要があるからこういう書き方をするらしい
//　｛｝内にCSSを書いていく。
//　<style>タグ内にCSSを書いて、セレクタを<div>や<p>タグのクラスネームで指定する。
// returnの中にCSSを一緒に書くから、見やすいのが良いのかかな。
