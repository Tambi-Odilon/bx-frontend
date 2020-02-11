import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
  CustomInput,
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
  Row,
  Container
} from 'reactstrap';
import {Formik} from 'formik';
import * as Yup from 'yup'
import UserApi from '../../api/user/UserApi';
import RoleApi from '../../api/role/RoleApi';

// Debut*********** ######### Traitement du formulaire ######### **************

// Fin*********** ######### Traitement du formulaire ######### **************


class EditUser extends React.Component {
userVide = {
      role1: '',
      userName1: '',
      password1: '',
      confirmPassword1: ''
    };
constructor(props){
    
    super(props);
    this.state = {
        roles: [],
        role: '',
          userName: '',
          password: '',
          confirmPassword: '',
      userNew: this.userVide
    };

    // this.onSubmit = this.onSubmit.bind(this)
    // this.touchAll = this.touchAll.bind(this)
  }
 async componentDidMount() {
    console.log("**** CDidMont id : " + this.props.match.params.idUser)
      
    UserApi.getUser(this.props.match.params.idUser)
      .then(Response => {
    console.log(Response.data)
        this.setState({
        userNew: Response.data
      }) 
      } );
      RoleApi.getAllRoles()
      .then(Response => {
        //console.log(Response.data)
        this.setState({
        roles: Response.data
      })
      } );
  }

  
// Debut*********** ######### Traitement du formulaire ######### **************


// Fin*********** ######### Traitement du formulaire ######### **************

  render() {
    const userNew = this.state.userNew;

    console.log(userNew.username)
    return (
      <div className="animated fadeIn">
      <Container>
        <Card className="mx-4">
          <CardHeader>
            <i className="icon-note"></i><strong>Editer Utilisateur : <i><strong>{userNew.username}</strong></i></strong>
          </CardHeader>
          <CardBody className="p-4">
            <Formik
              render={
                ({
                  values
                }) => (
                  <Row className="justify-content-center">
                    <Col md="8">
                      <Form  noValidate name='simpleForm'>
                        
                        <FormGroup>
                          <Label for="userName">Nom d'utilisateur</Label>
                          <Input type="text"
                                 name="userName"
                                 id="userName"
                                 autoComplete="username"
                                 placeholder= {userNew.username}
                                 />
                        </FormGroup>
                        <FormGroup>
                          <Label for="role">Role</Label>
                          <Input type="select"
                                name="role"
                                 id="role"
                                 // placeholder="Role"
                                 // autoComplete="role"
                                 >
                              
                          </Input>
                        </FormGroup>
                        <Row>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="password">Mot de Passe</Label>
                              <Input type="password"
                                     name="password"
                                     id="password"
                                     placeholder="Nouveau Password"
                                     autoComplete="new-password"/>
                              {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                             
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="confirmPassword">Confirmation Mot de Passe</Label>
                              <Input type="password"
                                     name="confirmPassword"
                                     id="confirmPassword"
                                     placeholder="Confirm Nouveau password"
                                     autoComplete="new-password" />
                            </FormGroup>
                          </Col>
                        </Row>
                        
                        <FormGroup>
                          <Button type="submit" color="success" block className="mr-1" >Enregistrer</Button>
                          
                        </FormGroup>
                      </Form>
                    </Col>
                    
                  </Row>
                )} />
          </CardBody>
        </Card>
        </Container>
      </div>
    )
  }
}
export default EditUser;
