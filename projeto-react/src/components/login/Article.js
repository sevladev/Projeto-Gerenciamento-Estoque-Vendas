import React from 'react';
import { CardBody, Button, Jumbotron, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { useState } from 'react';

import '../../App.css';


const Article = (props) => {
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");

  async function validar() { 
    await axios.post(`http://localhost:3001/login`, {
      login: login,
      password: password
    }).then((body) => {
      if (body.data.authent === true) {
        alert("Redirecionando...");
      } else if (body.data.authent === "void") {
        alert("Todos os campos devem ser preenchidos!");
      } else {
        alert("Credenciais incorretas!");
      }
      setLogin(body.data.login);
      setPassword(body.data.password);
    }).catch((err) => {
      console.log("Erro: " + err);
    });
  }
  return (
    <>
      <Jumbotron fluid className="jum bg-dark ">
        <Container fluid className="cont">
          <div>
            <CardBody className="card-body bg-info">
              <Form className="form" type="card">
                <FormGroup>
                  <Label>Usuário:</Label>
                  <Input className="input" type="text" name="login" value={login} onChange={(e) => { setLogin(e.target.value) }} placeholder="Insira o usuário" />
                </FormGroup>
                <FormGroup>
                  <Label>Senha:</Label>
                  <Input className="input" type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="insira a senha" />
                </FormGroup>
                <Button className="button" onClick={validar}>Entrar</Button>
              </Form>
            </CardBody>
          </div>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Article;