const setName = (name)=>({
  type:"name",
  name,
});
const setPsw = (psw)=>({
  type:"psw",
  psw,
});
const setConfirmPsw = (psw)=>({
  type:"confirmPsw",
  confirmPsw: psw,
});
const setPhone = (phone)=>({
  type:"phone",
  phone,
});

export {setName, setPsw, setConfirmPsw, setPhone};