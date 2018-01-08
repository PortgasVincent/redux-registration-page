import React from "react";
import {connect} from "react-redux";
import {CheckInput} from "./CheckInput";
import {UserInfo} from "./UserInfo";
import * as dataActions from "../actions/dataActions.js";
import * as isValidActions from "../actions/isValidActions.js";

class RegistrationForm extends React.Component{
  constructor(props){
    super(props);
    this.timer = null;
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkName = this.checkName.bind(this);
    this.checkPsw = this.checkPsw.bind(this);
    this.confirmPsw = this.confirmPsw.bind(this);
    this.checkPhone = this.checkPhone.bind(this);
  }
  checkName(e){
    const namestr = e.target.value;
    clearTimeout(this.timer);
    this.timer = setTimeout((namestr) => {
      const name = this.delHtmlTag( namestr );
      this.props.dispatch(dataActions.setName( name ));
      this.props.dispatch(isValidActions.isValidName( name ));
    } ,1000 ,namestr);
    
  }
  checkPsw(e){
    const pswstr = e.target.value;
    clearTimeout(this.timer);
    this.timer = setTimeout((pswstr)=>{
      const psw = this.delHtmlTag( pswstr );
      this.props.dispatch(dataActions.setPsw( psw ));
      this.props.dispatch(isValidActions.isValidPsw( psw, this.props.data.confirmPsw ));
    } ,1000 ,pswstr);
  }
  confirmPsw(e){
    const pswstr = e.target.value;
    clearTimeout(this.timer);
    this.timer = setTimeout((pswstr)=>{
      const psw = this.delHtmlTag( pswstr);
      this.props.dispatch(dataActions.setConfirmPsw( psw ));
      this.props.dispatch(isValidActions.confirmedPsw( psw, this.props.data.psw ));
    } ,1000 ,pswstr);
  }
  checkPhone(e){
    const phonestr = e.target.value;
    clearTimeout(this.timer);
    this.timer = setTimeout((phonestr)=>{
      const phone = this.delHtmlTag( phonestr );
      this.props.dispatch(dataActions.setPhone(phone));
      this.props.dispatch(isValidActions.isValidPhone( phone ));
    } ,1000 ,phonestr);
  }

  handleSubmit(e){
    this.props.dispatch(isValidActions.submitted());
    e.preventDefault();
  }

  delHtmlTag(str)
  {
    let result=str.replace(/<\/?[^>]*>/gim,"");//delete html tag
    result=str.replace(/(^\s+)|(\s+$)/g,"");//delete space in begin or end
    return  result.replace(/\s/g,"");//delete space in center
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit} className="regForm">
        <CheckInput type="text"     title="User name:"        checkformat={this.checkName}  isValid={this.props.isValid.isValidName}  format="Must not be null"  />
        <CheckInput type="password" title="Password:"          checkformat={this.checkPsw}   isValid={this.props.isValid.isValidPsw} format="must be at least 8 characters, contain upper and lower case letters"  />
        <CheckInput type="password" title="Confirm Password:" checkformat={this.confirmPsw} isValid={this.props.isValid.confirmedPsw} format="must match above" />
        <CheckInput type="text"     title="Phone Number:"     checkformat={this.checkPhone} isValid={this.props.isValid.isValidPhone} format="ensure the number is valid for a Chinese mobile or fixed line phone number"   />
        <input type="submit" value="Submit" disabled={!(this.props.isValid.isValidName && this.props.isValid.isValidPsw && this.props.isValid.confirmedPsw && this.props.isValid.isValidPhone)} className="submitBtn" />
        {this.props.isValid.submitted && <UserInfo name={this.props.data.name} psw={this.props.data.psw} phone={this.props.data.phone} />}
      </form>
    );
  }
}

const Registration_Form = connect(state=>state)(RegistrationForm);
export {Registration_Form};
