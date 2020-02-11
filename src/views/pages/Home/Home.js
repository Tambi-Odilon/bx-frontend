import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return(
            <div>                
                <div>
                    <h2>Bienvenu à BEREXIA Casablanca</h2>
                </div>
                <div>
                    ***********Home Page Content***********
                </div>
                <div className="float-left" id="addUtilisateur">
                    <Button color="success" tag={Link} to="/users">List Users</Button>
                </div>
            </div>
        )
    }
}

export default Home;