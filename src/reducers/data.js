const data = (state = {
  name:"",
  psw:"",
  confirmPsw:"",
  phone:"",
}, action) =>{
  switch(action.type){
  case "name":
    return Object.assign({}, state, {
      name:action.name,
    });
  case "psw":
    return Object.assign({}, state, {
      psw:action.psw,
    });
  case "confirmPsw":
    return Object.assign({}, state, {
      confirmPsw:action.confirmPsw,
    });
  case "phone":
    return Object.assign({}, state, {
      phone:action.phone,
    });
  default:
    return state;
  }
};

export {data};