import classes from "./CssModules.module.scss";
//　classesは変数名。呼び出したファイルにcalssesっていう名前を付けている。
export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};

//　classes（importしたファイルの中にある.containerを指定して、スタイルを当てている。）
