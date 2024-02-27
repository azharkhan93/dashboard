import React from 'react'
import styled from "styled-components"

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
 gap: 20px;

 @media (max-width: 767px) {
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
`;
const CommonButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 300px;
`;
const GoogleButton = styled(CommonButton)`
// background-color: #4285F4;
`;

const FacebookButton = styled(CommonButton)`
// background-color: #039BE5;
`;
const SocialIcon = styled.svg`
  width: 40px;
  height: 40px;
  fill: #ffffff;

  @media (max-width: 767px){
    width: 32px;
    height: 31px;
  }
`;

const Heading = styled.h2`
  font-size: 17px;
 color: black;
`;


export const SocialButtons = () => {
  return (
    <StyledDiv>
    <GoogleButton>
        <SocialIcon xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 55 56">
          <path d="M54.4502 28.4127C54.4502 26.5248 54.2971 24.6267 53.9705 22.7694H27.7743V33.4642H42.7756C42.1531 36.9135 40.153 39.9648 37.2241 41.9037V48.8431H46.1739C51.4295 44.0059 54.4502 36.8625 54.4502 28.4127Z" fill="#4285F4"/>
          <path d="M27.7714 55.5475C35.2618 55.5475 41.5787 53.0881 46.1811 48.8428L37.2314 41.9034C34.7414 43.5974 31.5268 44.5567 27.7816 44.5567C20.5361 44.5567 14.3927 39.6685 12.1884 33.0965H2.95288V40.2502C7.66758 49.6286 17.2705 55.5475 27.7714 55.5475Z" fill="#34A853"/>
          <path d="M12.1796 33.0968C11.0163 29.6475 11.0163 25.9125 12.1796 22.4632V15.3095H2.95434C-0.98478 23.1571 -0.98478 32.4028 2.95434 40.2504L12.1796 33.0968Z" fill="#FBBC04"/>
          <path d="M27.7714 10.9926C31.7309 10.9314 35.5578 12.4213 38.4254 15.1563L46.3546 7.22699C41.3338 2.5123 34.6699 -0.0797682 27.7714 0.00187158C17.2705 0.00187158 7.66758 5.92076 2.95288 15.3093L12.1782 22.463C14.3722 15.8808 20.5258 10.9926 27.7714 10.9926Z" fill="#EA4335"/>
        </SocialIcon>
        <Heading>Login with Google</Heading>
      </GoogleButton>
      <FacebookButton>
        <SocialIcon xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 55 55">
          <path d="M27.085 0C19.9016 0 13.0124 2.85359 7.93301 7.93301C2.85359 13.0124 0 19.9016 0 27.085C0 34.2684 2.85359 41.1576 7.93301 46.237C13.0124 51.3164 19.9016 54.17 27.085 54.17C34.2684 54.17 41.1576 51.3164 46.237 46.237C51.3164 41.1576 54.17 34.2684 54.17 27.085C54.17 19.9016 51.3164 13.0124 46.237 7.93301C41.1576 2.85359 34.2684 0 27.085 0Z" fill="#039BE5"/>
          <path d="M30.751 34.2639H37.7603L38.8608 27.1434H30.7496V23.2518C30.7496 20.2938 31.7161 17.6708 34.483 17.6708H38.9292V11.457C38.148 11.3515 36.4959 11.1205 33.3739 11.1205C26.855 11.1205 23.0332 14.5632 23.0332 22.4064V27.1434H16.3318V34.2639H23.0332V53.835C24.3603 54.0346 25.7046 54.17 27.0845 54.17C28.3319 54.17 29.5493 54.056 30.751 53.8934V34.2639Z" fill="white"/>
        </SocialIcon>
        <Heading>Login with Facebook</Heading>
      </FacebookButton>
      
      </StyledDiv>
    
  )
}

