import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import AuthenticationService from '../../../services/AuthenticationService';


class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
      }

      handleChange(event) {
        /* console.log("********HandleC => " + event.target.value); */
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      loginClicked() {
        AuthenticationService
          .executeJwtAuthenticationService(this.state.username, this.state.password)
          .then(response => {
            const jwtToken = response.headers["authorization"];
            console.log("------ Token =>  " + jwtToken);
            if (jwtToken) {
                AuthenticationService.saveToken(jwtToken);
                AuthenticationService.saveUsernameLoggedIn(this.state.username);
                this.props.history.push(`/dashboard`)
            }else {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            }
          });
        }

render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Authentification</h1> 
                        {this.state.hasLoginFailed && <div className="alert alert-warning">Nom d'utilisateur ou mot de passe invalide</div>}
                        {this.state.showSuccessMessage && <div>Login Sucessfuly</div>}
                      <br />
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Nom d'utilisateur" autoComplete="username" name="username"  onChange={this.handleChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Mot de Passe" autoComplete="password" name="password" onChange={this.handleChange} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.loginClicked}>Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default  Login;