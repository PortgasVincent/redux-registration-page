import {data} from "../../reducers/data.js";

it("data reducer", ()=>{
  const state = {
    name:"",
    psw:"",
    confirmPsw:"",
    phone:"",
  };
  expect(data(undefined, {})).toEqual(state);
  expect(data(state, {
    type:"name",
    name:"aaa",
  } )).toEqual({
    name:"aaa",
    psw:"",
    confirmPsw:"",
    phone:"",
  });
  expect(data(state, {
    type:"psw",
    psw:"Aaaaaaaa",
  })).toEqual({
    name:"",
    psw:"Aaaaaaaa",
    confirmPsw:"",
    phone:"",
  });
  expect(data({
    name:"aaa",
    psw:"",
    confirmPsw:"",
    phone:"",
  }, {
    type:"confirmPsw",
    confirmPsw:"Aaaaaaaa",
  })).toEqual({
    name:"aaa",
    psw:"",
    confirmPsw:"Aaaaaaaa",
    phone:"",
  });
  expect(data({
    name:"",
    psw:"Aaaaaaaa",
    confirmPsw:"",
    phone:"",
  }, {
    type:"phone",
    phone:"1111111",
  })).toEqual({
    name:"",
    psw:"Aaaaaaaa",
    confirmPsw:"",
    phone:"1111111",
  });
});