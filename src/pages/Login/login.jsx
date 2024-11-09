import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateForm, loginForm } from "../../app/features/simpleFormSlice";
import { LoginContainer, LoginWrapper } from "./loginElements";
import {
  RegisterFormWrapper,
  RegisterForm,
  SignupHeaderWrapper,
  SignupHeader,
  RegisterInputLabelWrapper,
  RegisterLabelWrapper,
  RegisterInputLabel,
  RegisterInputIconWrapper,
  RegisterInputWrapper,
  RegisterInput,
  RegisterIconWrapper,
  RegisterIcon,
  RegisterSubmitBtnWrapper,
  RegisterSubmitButton,
  RegisterQuestionWrapper,
  RegiterLink,
  RegisterErrorWrapper,
  RegisterError,
} from "../Signup/SignupElements";
import phoneIcon from "../../assets/svg/phoneIcon.svg";
import passIcon from "../../assets/svg/passIcon.svg";
import { LogInText } from "../../Helper/Login";

const login = () => {
  const { forms, errors } = useSelector((state) => state.simpleForm);
  const dispatch = useDispatch();

  const handleChange = (formId, e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ formId, field: name, value }));
  };

  const handleSubmit = (formId, e) => {
    e.preventDefault();
    dispatch(loginForm({ formId, formData: forms[formId]}));
  };
  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <RegisterFormWrapper>
            <RegisterForm onSubmit={(e) => handleSubmit("loginForm", e)}>
              <SignupHeaderWrapper>
                <SignupHeader>{LogInText.text1}</SignupHeader>
              </SignupHeaderWrapper>

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel>{LogInText.text2}</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon alt={LogInText.text3} src={phoneIcon} />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <RegisterInput
                      placeholder={LogInText.text4}
                      type="tel"
                      name="phoneNumber"
                      value={forms["loginForm"].phoneNumber}
                      onChange={(e) => handleChange("loginForm", e)}
                    />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
                {errors.loginForm.phoneNumber && (
                  <RegisterErrorWrapper>
                    <RegisterError>
                      {errors.loginForm.phoneNumber}
                    </RegisterError>
                  </RegisterErrorWrapper>
                )}
              </RegisterInputLabelWrapper>

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel>{LogInText.text5}</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon alt={LogInText.text6} src={passIcon} />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <RegisterInput
                      placeholder={LogInText.text7}
                      type="password"
                      name="password"
                      value={forms["loginForm"].password}
                      onChange={(e) => handleChange("loginForm", e)}
                    />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
                {errors.loginForm.password && (
                  <RegisterErrorWrapper>
                    <RegisterError>{errors.loginForm.password}</RegisterError>
                  </RegisterErrorWrapper>
                )}
              </RegisterInputLabelWrapper>

              <RegisterSubmitBtnWrapper>
                <RegisterSubmitButton type="submit">
                  {LogInText.text8}
                </RegisterSubmitButton>
              </RegisterSubmitBtnWrapper>
              <RegisterQuestionWrapper>
                {LogInText.text9}
                <RegiterLink to="/signup">{LogInText.text10}</RegiterLink>
              </RegisterQuestionWrapper>
              <RegisterQuestionWrapper>
                <RegiterLink to="">
                  {LogInText.text11}
                </RegiterLink>
              </RegisterQuestionWrapper>
            </RegisterForm>
          </RegisterFormWrapper>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default login;
