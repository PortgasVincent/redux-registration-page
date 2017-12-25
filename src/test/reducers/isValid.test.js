import {isValid} from "../../reducers/isValid.js";

it("isValid reducer", ()=>{
  const state = {
    isValidName:false,
    isValidPsw:false,
    confirmedPsw:false,
    isValidPhone:false,
    submitted:false,
  };
  expect(isValid(undefined, {})).toEqual(state);
  expect(isValid(state, {
    type:"isValidName",
    isValidName:true,
  })).toEqual({
    isValidName:true,
    isValidPsw:false,
    confirmedPsw:false,
    isValidPhone:false,
    submitted:false,
  });
  expect(isValid(state, {
    type:"isValidPsw",
    isValidPsw:true,
    confirmedPsw:true,
  })).toEqual({
    isValidName:false,
    isValidPsw:true,
    confirmedPsw:true,
    isValidPhone:false,
    submitted:false,
  });
  expect(isValid({
    isValidName:false,
    isValidPsw:true,
    confirmedPsw:true,
    isValidPhone:false,
    submitted:true,
  }, {
    type:"isValidPhone",
    isValidPhone:true,
  })).toEqual({
    isValidName:false,
    isValidPsw:true,
    confirmedPsw:true,
    isValidPhone:true,
    submitted:false,
  });
  expect(isValid({
    isValidName:false,
    isValidPsw:true,
    confirmedPsw:true,
    isValidPhone:false,
    submitted:false,
  }, {
    type:"submitted",
  })).toEqual({
    isValidName:false,
    isValidPsw:true,
    confirmedPsw:true,
    isValidPhone:false,
    submitted:true,
  });
});








