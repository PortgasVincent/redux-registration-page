import * as dataActions from "../../actions/dataActions.js";

it("dataActions", ()=>{
  expect(dataActions.setName("aaa")).toEqual({
    type:"name",
    name:"aaa",
  });
  expect(dataActions.setPsw("Qqqqqqqq")).toEqual({
    type:"psw",
    psw:"Qqqqqqqq",
  });
  expect(dataActions.setConfirmPsw("Qqqqqqqq")).toEqual({
    type:"confirmPsw",
    confirmPsw:"Qqqqqqqq",
  });
  expect(dataActions.setPhone("1111111")).toEqual({
    type:"phone",
    phone:"1111111",
  });
});
