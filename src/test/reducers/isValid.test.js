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
    name:"aaa",
  })).toEqual({
    isValidName:true,
    isValidPsw:false,
    confirmedPsw:false,
    isValidPhone:false,
    submitted:false,
  });
  expect(isValid(state, {
    type:"isValidPsw",
    psw:"Aaaaaaaa",
    confirmPsw:"Aaaaaaaa",
  })).toEqual({
    isValidName:false,
    isValidPsw:true,
    confirmedPsw:true,
    isValidPhone:false,
    submitted:false,
  });
  expect(isValid(state, {
    type:"confirmedPsw",
    confirmPsw:"Aaaaaaaa",
    psw:"Aaaaaaaa",
  })).toEqual({
    isValidName:false,
    isValidPsw:false,
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
    phone:"82408888",
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