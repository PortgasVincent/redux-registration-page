import React from "react";
import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {mount,shallow} from "enzyme";
import {Registration_Form} from "../../component/RegistrationForm";
import {reducer} from "../../reducers/index.js";
Enzyme.configure({ adapter: new Adapter() });

jest.useFakeTimers();
const store = createStore(reducer);

it("form", ()=>{
  const provider = mount(
    <Provider store = {store} >
      <Registration_Form />
    </Provider>
  );
  const form = provider.find(".regForm");  //ReactWrapper
  //check init props
  expect(store.getState().isValid.isValidName).toBe(false);
  expect(store.getState().isValid.isValidPsw).toBe(false);
  expect(store.getState().isValid.confirmedPsw).toBe(false);
  expect(store.getState().isValid.isValidPhone).toBe(false);
  expect(store.getState().isValid.submitted).toBe(false);
  //get input
  const nameinput = form.find({title : "User name:"}).find("input");
  const pswinput = form.find({title : "Password:"}).find("input");
  const cpswinput = form.find({title : "Confirm Password:"}).find("input");
  const phoneinput = form.find({title : "Phone Number:"}).find("input");
  const submitbtn = form.find(".submitBtn");
  //simulate onchange  simulate can run multiple events at the same time    
  //but the setTimeout is load in this.timer    so if you set new, it will replace 

  ////unavailable input
  //check name
  nameinput.simulate("change", {target:{value:" "}});
  //run inner of timer   simulate can run multiple events at the same time    
  jest.runAllTimers();
  //check value of input 
  expect(store.getState().data.name).toBe("");

  //check value of input whether is permitted
  expect(store.getState().isValid.isValidName).toBe(false);
  // check psw
  pswinput.simulate("change", {target:{value:"Aaaaaa"}});
  jest.runAllTimers();
  expect(store.getState().data.psw).toBe("Aaaaaa");
  expect(store.getState().isValid.isValidPsw).not.toBe(true);
  pswinput.simulate("change", {target:{value:"aaaaaaaa"}});
  jest.runAllTimers();
  expect(store.getState().data.psw).toBe("aaaaaaaa");
  expect(store.getState().isValid.isValidPsw).not.toBe(true);
  expect(store.getState().isValid.confirmedPsw).not.toBe(true);
  //check confirm psw
  cpswinput.simulate("change", {target:{value:"Bbbbbb"}});
  jest.runAllTimers();
  expect(store.getState().data.confirmPsw).toBe("Bbbbbb");
  expect(store.getState().isValid.confirmedPsw).not.toBe(true);
  pswinput.simulate("change", {target:{value:"Bbbbbb"}});
  jest.runAllTimers();
  expect(store.getState().isValid.confirmedPsw).toBe(true);
  //check phone
  phoneinput.simulate("change", {target:{value:"123456"}});
  jest.runAllTimers();
  expect(store.getState().data.phone).toBe("123456");
  expect(store.getState().isValid.isValidPhone).not.toBe(true);
  expect(form.html()).toMatchSnapshot();

  //available input
  //check name
  nameinput.simulate("change", {target:{value:"aaa"}});
  //run inner of timer
  jest.runAllTimers();
  //check value of input 
  expect(store.getState().data.name).toBe("aaa");
  //check value of input whether is permitted
  expect(store.getState().isValid.isValidName).toBe(true);
  // check psw
  pswinput.simulate("change", {target:{value:"Aaaaaaaa"}});
  jest.runAllTimers();
  expect(store.getState().data.psw).toBe("Aaaaaaaa");
  expect(store.getState().isValid.isValidPsw).toBe(true);
  //check confirm psw
  cpswinput.simulate("change", {target:{value:"Aaaaaaaa"}});
  jest.runAllTimers();
  expect(store.getState().data.confirmPsw).toBe("Aaaaaaaa");
  expect(store.getState().isValid.confirmedPsw).toBe(true);
  //check phone
  phoneinput.simulate("change", {target:{value:"82408888"}});
  jest.runAllTimers();
  expect(store.getState().data.phone).toBe("82408888");
  expect(store.getState().isValid.isValidPhone).toBe(true);
  //submit
  submitbtn.simulate("submit");
  expect(store.getState().isValid.submitted).toBe(true);
  expect(form.html()).toMatchSnapshot();
});