import React, { Component } from "react";
import { Table, Row, Col, CardBody, CardHeader, Button } from "reactstrap";
import UserApi from "../../api/user/UserApi";
import { Link } from "react-router-dom";

class ListUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listeUsers: [],
            loading: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        // let jwtToken = AuthenticationService.loadToken(TOKEN_NAME)
        // console.log("**** user**********" + jwtToken)
        UserApi.getAllUsers()
        .then(Response => this.setState({ listeUsers: Response.data, isloading: false }));
    }

    refresh(){
        UserApi.getAllUsers()
            .then(
                response => {
                    //console.log(response);
                    this.setState({ listeUsers: response.data })
                }
            )
    }

    deleteClicked(id, username) {
        UserApi.deleteUser(id)
        .then(
          response => {
            this.refresh()
            /* alert('Suppression de ' + username + ' avec success!') */
            
          }
        )
    }

    render() {
        const { listeUsers, loading } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }
        return(
            <div>
                *********** User Page Content ************
                <Row>
                    <Col>
                    <CardHeader>
                            <strong><i className="icon-info pr-1"></i>List of users:</strong>
                    </CardHeader>
                        <CardBody>
                            <div className="float-right" id="addUtilisateur">
                                <Button color="success" tag={Link} to="/user/add">Add new User</Button>
                            </div> 
                            <Table responsive striped hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Username</th>
                                        <th>Roles</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {listeUsers.map(user => (
                                    <tr key={user.idUser}>
                                        <td>{user.idUser}</td>
                                        <td>{user.username}</td>
                                        <td></td>
                                        <td>
                                        <Row>
                                            <Col md={3}>
                                                <Button color="primary" className="px-4" href={"/user/edit/" + user.idUser}>Editer</Button>
                                            </Col>
                                            <Col md={3}>
                                                <Button color="danger" className="px-4" onClick={() => this.deleteClicked(user.idUser, user.username)}>Supprimer</Button>
                                            </Col>
                                        </Row>
                                        </td>
                                    </tr>
                                ))
                                }
                                </tbody>
                            </Table>
                        </CardBody>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ListUser;