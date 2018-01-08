import * as isValidActions from "../../actions/isValidActions.js";

it("isValidActions", ()=>{
  expect(isValidActions.isValidName("aaa")).toEqual({
    type:"isValidName",
    name:"aaa",
  });
  expect(isValidActions.isValidPsw("aaa", "bbb")).toEqual({
    type:"isValidPsw",
    psw:"aaa",
    confirmPsw:"bbb",
  });
  expect(isValidActions.confirmedPsw("aaa", "bbb")).toEqual({
    type:"confirmedPsw",
    confirmPsw:"aaa",
    psw:"bbb",
  });
  expect(isValidActions.isValidPhone("111")).toEqual({
    type:"isValidPhone",
    phone:"111",
  });
  expect(isValidActions.submitted()).toEqual({
    type:"submitted",
  });
});