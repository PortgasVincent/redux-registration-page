const isValidName = (isValidName)=>({
  type: "isValidName",
  isValidName: isValidName,
});
const isValidPsw = (isValidPsw, confirmedPsw)=>({
  type: "isValidPsw",
  isValidPsw: isValidPsw,
  confirmedPsw: confirmedPsw,
});
const confirmedPsw = (confirmedPsw)=>({
  type: "confirmedPsw",
  confirmedPsw: confirmedPsw,
});
const isValidPhone = (isValidPhone)=>({
  type: "isValidPhone",
  isValidPhone: isValidPhone,
});
const submitted = ()=>({
  type: "submitted",
});

export {isValidName, isValidPsw, confirmedPsw, isValidPhone, submitted};
