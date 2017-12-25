import * as isValidActions from "../../actions/isValidActions.js";

it("isValidActions", ()=>{
  expect(isValidActions.isValidName(true)).toEqual({
    type:"isValidName",
    isValidName:true,
  });
  expect(isValidActions.isValidPsw(true, true)).toEqual({
    type:"isValidPsw",
    isValidPsw:true,
    confirmedPsw:true,
  });
  expect(isValidActions.confirmedPsw(true)).toEqual({
    type:"confirmedPsw",
    confirmedPsw:true,
  });
  expect(isValidActions.isValidPhone(true)).toEqual({
    type:"isValidPhone",
    isValidPhone:true,
  });
  expect(isValidActions.submitted()).toEqual({
    type:"submitted",
  });
});



