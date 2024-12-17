export const isBtnChecked = ({
  checkBtnsArr,
  buttonID,
}: {
  checkBtnsArr: string[];
  buttonID: string;
}) => {
  return checkBtnsArr.includes(buttonID) ? true : false;
};
