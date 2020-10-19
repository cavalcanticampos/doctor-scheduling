import React, { useState } from "react";
import { Button, Input } from "../../atoms";
import registerIllustration from "../../assets/images/register-illustration.png";
import { Container, HeroSection, Logo, Wrapper } from "./styles";
import logo from "../../assets/images/logotype.png";
import { BASE_URL } from "../../assets/baseUrl";

const Registration = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    const data = { name: name, email: email, password: password, role: "user" };
    if (data.name && data.email && data.password && data.role) {
      fetch(BASE_URL + "user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(() => {
          props.history.push("/");
        })
        .catch(() => {
          alert(
            "Error: Please check your connection! If error persists, create a ticket."
          );
        });
    } else {
      alert("Error: Please verify error in text fields below!");
    }
  };

  return (
    <>
      <HeroSection>
        <img
          src={registerIllustration}
          alt={"hero illustration for registration"}
        />
      </HeroSection>
      <Container>
        <Logo>
          <img src={logo} alt={"logotype illustration"} />
        </Logo>
        <Wrapper>
          <h1>Register your account</h1>
          <Input
            placeholder="Name"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            placeholder="E-mail"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button onClick={register}>Sing up</Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Registration;
