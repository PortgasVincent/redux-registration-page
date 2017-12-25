const isValid = (state = {
  isValidName:false,
  isValidPsw:false,
  confirmedPsw:false,
  isValidPhone:false,
  submitted:false,
}, action) => {
  switch(action.type){
  case "isValidName":
    return Object.assign({}, state, {
      isValidName: action.isValidName,
      submitted: false,
    });
  case "isValidPsw":
    return Object.assign({}, state, {
      isValidPsw: action.isValidPsw,
      confirmedPsw: action.confirmedPsw,
      submitted: false,
    });
  case "confirmedPsw":
    return Object.assign({}, state, {
      confirmedPsw:action.confirmedPsw,
      submitted: false,
    });
  case "isValidPhone":
    return Object.assign({}, state, {
      isValidPhone:action.isValidPhone,
      submitted: false,
    });
  case "submitted":
    return Object.assign({}, state, {
      submitted: true,
    });
  default:
    return state;
  }
};

export {isValid};