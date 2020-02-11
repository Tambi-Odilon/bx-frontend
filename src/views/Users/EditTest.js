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

const validationSchema = function (values) {
  return Yup.object().shape({
  
    userName: Yup.string()
      .min(3, `Nom Utilisateur doit être ${3} characters minimum`)
      .required('Nom d\'utilisateur Obligatoire'),
   
    password: Yup.string()
      .min(5, `Mot de Passe doit être ${5} characters minimum!`)
      .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 'Mot de Passe doit contenir: nombre, Lettres Majuscules et Minuscules\n')
      .required('Mot de Passe Obligatoire'),
    confirmPassword: Yup.string()
      .oneOf([values.password], 'Votre Mot de Passe est different')
      .required('Confirmation Mot de Passe Obligatoire'),
    
  })
}

const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values)
    try {
      validationSchema.validateSync(values, {
        abortEarly: false
      })
      return {}
    } catch (error) {
      return getErrorsFromValidationError(error)
    }
  }
}

const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    }
  }, {})
}

// Fin*********** ######### Traitement du formulaire ######### **************

const initialValues = {
  userName: "",
  password: "",
  confirmPassword: "",
}

class EditTest extends React.Component {
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

    this.onSubmit = this.onSubmit.bind(this)
    this.touchAll = this.touchAll.bind(this)
  }
 async componentDidMount() {
        // console.log("**** CDidMont id : " + this.props.match.params.idUser)
      
    UserApi.getUser(this.props.match.params.idUser)
      .then(Response => {
        // console.log(Response.data)
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

  onSubmit(values, {setSubmitting,setErrors}) {

    console.log(values)
    console.log(this.props.match.params.idUser)
    let user = {
        idUser: this.props.match.params.idUser,
      username: values.userName,
      password: values.password
    }
    let usersRoles = {
      username: values.userName,
      role: values.role
    }

    UserApi.updateUser(user.idUser, user)

    //UserDataServices.addUser(user)
    //UserDataServices.affectRoleToUser(usersRoles)

    setTimeout(() => {
      //alert(JSON.stringify(values, null, 2))
      if (user != null) {
        alert("Mise a jour Utilisateur avec succes!");
        this.props.history.push('/users');
      }
      // console.log('User has been successfully saved!', values)
      setSubmitting(false)
    }, 1200)
      // console.log(values);
  }

// Debut*********** ######### Traitement du formulaire ######### **************

  findFirstError (formName, hasError) {
    const form = document.forms[formName]
    for (let i = 0; i < form.length; i++) {
      if (hasError(form[i].name)) {
        form[i].focus()
        break
      }
    }
  }

  validateForm (errors) {
    this.findFirstError('simpleForm', (fieldName) => {
      return Boolean(errors[fieldName])
    })
  }

  touchAll(setTouched, errors) {
    setTouched({
        userName: true,
        password: true,
        confirmPassword: true
      }
    )
    this.validateForm(errors)
  }

// Fin*********** ######### Traitement du formulaire ######### **************

  render() {
      const userNew = this.state.userNew;
// console.log(userNew)
    const roles = this.state.roles;
// console.log(roles)

    /* const test = roles.map(r => {
      console.log(r.role)
    }) */

    return (
      <div className="animated fadeIn">
      <Container>
        <Card className="mx-4">
          <CardHeader>
            <i className="icon-note"></i><strong>Editer Utilisateur : <i><strong>{userNew.username}</strong></i></strong>
          </CardHeader>
          <CardBody className="p-4">
            <Formik
              validate={validate(validationSchema)}
              onSubmit={this.onSubmit}
              render={
                ({
                  values,
                  errors,
                  touched,
                  status,
                  dirty,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  isValid,
                  handleReset,
                  setTouched
                }) => (
                  <Row className="justify-content-center">
                    <Col md="8">
                      <Form onSubmit={handleSubmit} noValidate name='simpleForm'>
                        
                        <FormGroup>
                          <Label for="userName">Nom d'utilisateur</Label>
                          <Input type="text"
                                 name="userName"
                                 id="userName"
                                 placeholder= {userNew.username}//"Nouveau Nom Utilisateur"
                                 autoComplete="username"
                                 valid={!errors.userName}
                                 invalid={touched.userName && !!errors.userName}
                                 required //initialValues={initialValues}
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={ values.userName }
                                 />
                          <FormFeedback>{errors.userName}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="role">Role</Label>
                          <Input type="select"
                                name="role"
                                 id="role"
                                 // placeholder="Role"
                                 // autoComplete="role"
                                 valid={!errors.role}
                                 invalid={touched.role && !!errors.role}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.role}
                                 >
                              {
                                roles.map(r => (
                                    <option key={r.idRole}>{r.role}</option>
                                ))}
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
                                     autoComplete="new-password"
                                     valid={!errors.password}
                                     invalid={touched.password && !!errors.password}
                                     required
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     value={values.password} />
                              {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                              <FormFeedback>{errors.password}</FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="confirmPassword">Confirmation Mot de Passe</Label>
                              <Input type="password"
                                     name="confirmPassword"
                                     id="confirmPassword"
                                     placeholder="Confirm Nouveau password"
                                     autoComplete="new-password"
                                     valid={!errors.confirmPassword}
                                     invalid={touched.confirmPassword && !!errors.confirmPassword}
                                     required
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     value={values.confirmPassword} />
                              <FormFeedback>{errors.confirmPassword}</FormFeedback>
                            </FormGroup>
                          </Col>
                        </Row>
                        
                        <FormGroup>
                          <Button type="submit" color="success" block className="mr-1" disabled={isSubmitting || !isValid}>{isSubmitting ? 'Patientez...' : 'Enregistrer'}</Button>
                          
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
export default EditTest;
