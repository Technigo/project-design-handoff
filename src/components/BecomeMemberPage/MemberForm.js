import React from 'react';
import { MemberFormWrapper, Btndiv, SendBtn, InputField, InputDiv, FormText, InputLabel, MemberFormSection } from './BecomeMemberPageCSS';

export const MemberForm = () => {
  return (
    <MemberFormWrapper>
      <MemberFormSection>
        <FormText>Leave us your information and we’ll
            contact you to finish the registration.
        </FormText>
        <InputDiv>
          <InputLabel htmlFor="name">Name:</InputLabel><br />
          <InputField type="text" id="NameInput" name="fname" value="" /><br />
        </InputDiv>
        <InputDiv>
          <InputLabel htmlFor="mail">E-mail:</InputLabel><br />
          <InputField type="email" id="EmailInput" name="lname" value="" /><br />
        </InputDiv>
        <InputDiv>
          <InputLabel htmlFor="lname">Phone: </InputLabel><br />
          <InputField type="number" id="PhoneInput" name="lname" value="" /><br /><br />
        </InputDiv>
        <Btndiv><SendBtn type="submit" value="Submit" /></Btndiv>
      </MemberFormSection>
    </MemberFormWrapper>
  )
}