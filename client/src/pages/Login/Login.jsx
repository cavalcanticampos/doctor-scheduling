import React, { useState } from "react";
import { Input, Button } from "../../atoms";
import heroIllustration from "../../assets/images/hero-illustration.png";
import logo from "../../assets/images/logotype.png";
import {
  Container,
  HeroSection,
  Logo,
  RegisterButton,
  Wrapper,
} from "./styles";
import { BASE_URL } from "../../assets/baseUrl";
import { TOKENNAME } from "../../assets/constants";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = { email: email, password: password };
    if (data.email && data.password) {
      fetch(BASE_URL + "login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem(TOKENNAME, data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          props.history.push("/appointments");
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
        <img src={heroIllustration} alt={"hero illustration for login"} />
      </HeroSection>
      <Container>
        <Logo>
          <img src={logo} alt={"logotype illustration"} />
        </Logo>
        <Wrapper>
          <h1>Login to your account</h1>
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
          <Button onClick={login}>Login</Button>
          <p>
            Don't have an account? Join{" "}
            <RegisterButton
              onClick={() => props.history.push("/user/register")}
            >
              here
            </RegisterButton>
          </p>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
