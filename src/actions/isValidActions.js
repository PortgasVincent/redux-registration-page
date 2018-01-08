const isValidName = (name)=>({
  type: "isValidName",
  name: name,
});
const isValidPsw = (psw, confirmPsw)=>({
  type: "isValidPsw",
  psw: psw,
  confirmPsw: confirmPsw,
});
const confirmedPsw = (confirmPsw, psw)=>({
  type: "confirmedPsw",
  confirmPsw: confirmPsw,
  psw: psw,
});
const isValidPhone = (phone)=>({
  type: "isValidPhone",
  phone: phone,
});
const submitted = ()=>({
  type: "submitted",
});

export {isValidName, isValidPsw, confirmedPsw, isValidPhone, submitted};
