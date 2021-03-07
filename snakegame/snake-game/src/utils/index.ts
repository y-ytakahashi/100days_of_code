// 35 x 35  の二次元配列を生成する
export const initFields = (fieldSize:number) => {
  const fields = [];
  for (let i = 0; i < fieldSize; i++) {
    const cols = new Array(fieldSize).fill("");
    fields.push(cols);
    console.log({cols},{fields})
  }
  //fieldSize の二次元配列を生成（ fieldSize x 列 fieldSize x 行）
  return fields
};
