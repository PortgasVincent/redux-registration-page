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
      isValidName: action.name !== "",
      submitted: false,
    });
  case "isValidPsw":
    const regUpper = /[A-Z]/;
    const reglower = /[a-z]/;
    return Object.assign({}, state, {
      isValidPsw: regUpper.test(action.psw) && reglower.test(action.psw) && action.psw.length >= 8,
      confirmedPsw: action.psw === action.confirmPsw,
      submitted: false,
    });
  case "confirmedPsw":
    return Object.assign({}, state, {
      confirmedPsw: action.confirmPsw === action.psw,
      submitted: false,
    });
  case "isValidPhone":
    return Object.assign({}, state, {
      isValidPhone:(/^1(3|4|5|7|8)\d{9}$/).test(action.phone) || (/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/).test(action.phone),
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