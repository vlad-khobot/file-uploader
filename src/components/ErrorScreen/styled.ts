import styled from "styled-components"

export const ErrorScreenContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 484px;
  height: 300px;
  background: #ffffff;
  border: 8px solid #f6f6f6;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const Text = styled.span`
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`
export const Error = styled.span`
  padding-top: 61px;
  font-family: 'Open Sans';
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: left;
`
export const OkButton = styled.button`
  border: none;
  background: #009ee2;
  border-radius: 6px;
  width: 175px;
  height: 45px;
  color: white;
  font-family: 'Open Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
`