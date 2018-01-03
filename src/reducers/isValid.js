const isValid = (state = {
  isValidName:false,
  isValidPsw:false,
  confirmedPsw:false,
  isValidPhone:false,
  submitted:false,
}, action) => {
  let isValidName, isValidPsw, confirmedPsw, isValidPhone;
  switch(action.type){
  case "isValidName":
    isValidName = action.name !== "";
    return Object.assign({}, state, {
      isValidName: isValidName,
      submitted: false,
    });
  case "isValidPsw":
    const regUpper = /[A-Z]/;
    const reglower = /[a-z]/;
    isValidPsw = regUpper.test(action.psw) && reglower.test(action.psw) && action.psw.length >= 8;
    confirmedPsw = action.psw === action.confirmPsw;
    return Object.assign({}, state, {
      isValidPsw: isValidPsw,
      confirmedPsw: confirmedPsw,
      submitted: false,
    });
  case "confirmedPsw":
    confirmedPsw = action.confirmPsw === action.psw;
    return Object.assign({}, state, {
      confirmedPsw: confirmedPsw,
      submitted: false,
    });
  case "isValidPhone":
    isValidPhone = (/^1(3|4|5|7|8)\d{9}$/).test(action.phone) || (/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/).test(action.phone);
    return Object.assign({}, state, {
      isValidPhone:isValidPhone,
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