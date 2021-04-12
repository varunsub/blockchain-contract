import styled from 'styled-components';
import Navbar from '../Components/NavBar';
import { Button, Modal, Paper, TextField } from '@material-ui/core';
import { useState } from 'react';
export default function ContactUs() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NoOutline open={open} onClose={() => setOpen(!open)}>
        <ModalStyle>
          <h2>Contact Us</h2>
          <TextFieldCont>
            <STextField
              variant="outlined"
              required
              fullWidth
              id="Full Name"
              label="Full Name"
              name="fullname"
              autoComplete="fullname"
            />
          </TextFieldCont>
          <TextFieldCont>
            <STextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </TextFieldCont>
          <TextFieldCont>
            <STextField
              variant="outlined"
              fullWidth
              id="subject"
              label="Subect"
              name="subject"
              autoComplete="subject"
            />
          </TextFieldCont>
          <TextFieldCont>
            <STextField
              variant="outlined"
              fullWidth
              id="message"
              label="Message"
              name="message"
              autoComplete="message"
              multiline
              rows={4}
            />
          </TextFieldCont>
          <Button variant="outlined">Submit</Button>
        </ModalStyle>
      </NoOutline>

      <Navbar />
      <Container>
        <Spacing>
          <Row>
            <TextCont>
              <h2>Contact Us</h2>
              Contact us for any of you lending needs or to submit a proposal
              for community vote. General inquires use this page. <br />
              The community is the only entity that should decide on the
              projects located within their own ecosystem.
            </TextCont>
            <ImageCont>
              <Button
                variant="outlined"
                size="large"
                onClick={() => setOpen(!open)}>
                Reach out to us today!
              </Button>
            </ImageCont>
          </Row>
        </Spacing>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
`;
const Spacing = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url('image.jpeg');
  height: 60vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const TextCont = styled.div`
  width: 30%;
`;
const ImageCont = styled.div`
  padding-top: 5%;
  width: 70%;
  justify-content: center;
  align-items: flex-start;
  display: flex;
`;

const NoOutline = styled(Modal)`
  outline: 'none';
`;
const ModalStyle = styled(Paper)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 3%;
  outline: 0;
  width: 30%;
`;

const STextField = styled(TextField)``;

const TextFieldCont = styled.div`
  padding: 3% 10% 3% 10%;
`;
