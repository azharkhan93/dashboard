import styled from "styled-components";
import { Col } from "../styled/Col.styled";

const Container = styled(Col)`
  /* display: flex;
  align-items: start;
  flex-direction: column; */
  border: 2px solid red;
  /* width: 30vw; */
  /* height : 60vh; */
  gap: 30px;
  margin-left: 50px;
  /* margin : auto; */
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* gap: 20%; */
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 17vw;
  border: 2px solid #48484847;
  gap: 10px;
`;

const Button = styled.button`
  height: 5vh;
  width: 7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  background-color: #484848;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SvgIcon = styled.svg`
  fill: black;
  margin-right: 7px;
  height: 20px;
  width: 22px;
`;

const Label = styled.div`
  margin-bottom: 5px;
  /* gap; 10%; */
`;

const inputFields = [
  { label: "Username", placeholder: "Type something..." },
  { label: "Password", placeholder: "Type something..." },
  { label: "Email", placeholder: "Type something..." },
  { label: "Phone Number", placeholder: "Type something..." },
  { label: "Your Bio", placeholder: "Type something..." },
];

export const SettingsSection = () => {
  return (
    <Container
    display = "flex"
  alignItems = "start"
  flex-direction = "column"
  width = "30vw"
  background = "white"
    >
      {inputFields.map((field, index) => (
        <div key={index}>
          <Label>{field.label}:</Label>
          <InputContainer>
            <Input type="text" placeholder={field.placeholder} />
            <Button>
              <SvgIcon>
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.385 0.53691L20.975 1.12691C21.788 1.94091 21.665 3.38391 20.698 4.34991L8.531 16.5169L4.589 17.9589C4.094 18.1409 3.612 17.9049 3.514 17.4339C3.48088 17.2631 3.49647 17.0863 3.559 16.9239L5.029 12.9479L17.162 0.81391C18.129 -0.15209 19.572 -0.27709 20.385 0.53691ZM8 1.74691C8.13132 1.74691 8.26136 1.77278 8.38268 1.82303C8.50401 1.87329 8.61425 1.94694 8.70711 2.0398C8.79996 2.13266 8.87362 2.2429 8.92388 2.36423C8.97413 2.48555 9 2.61559 9 2.74691C9 2.87823 8.97413 3.00827 8.92388 3.12959C8.87362 3.25092 8.79996 3.36116 8.70711 3.45402C8.61425 3.54688 8.50401 3.62053 8.38268 3.67079C8.26136 3.72104 8.13132 3.74691 8 3.74691H4C3.46957 3.74691 2.96086 3.95762 2.58579 4.3327C2.21071 4.70777 2 5.21648 2 5.74691V17.7469C2 18.2773 2.21071 18.7861 2.58579 19.1611C2.96086 19.5362 3.46957 19.7469 4 19.7469H16C16.5304 19.7469 17.0391 19.5362 17.4142 19.1611C17.7893 18.7861 18 18.2773 18 17.7469V13.7469C18 13.4817 18.1054 13.2273 18.2929 13.0398C18.4804 12.8523 18.7348 12.7469 19 12.7469C19.2652 12.7469 19.5196 12.8523 19.7071 13.0398C19.8946 13.2273 20 13.4817 20 13.7469V17.7469C20 18.8078 19.5786 19.8252 18.8284 20.5753C18.0783 21.3255 17.0609 21.7469 16 21.7469H4C2.93913 21.7469 1.92172 21.3255 1.17157 20.5753C0.421427 19.8252 0 18.8078 0 17.7469V5.74691C0 4.68604 0.421427 3.66863 1.17157 2.91848C1.92172 2.16834 2.93913 1.74691 4 1.74691H8Z" fill="white"/>
</svg>

              </SvgIcon>
              Edit
            </Button>
          </InputContainer>
        </div>
      ))}
    </Container>
  );
};
