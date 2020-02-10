import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

class Error404 extends Component {
    render() {
        return (
            <div>
                <Container>
                  <Row className="justify-content-center">
                    <Col md="6">
                      <div className="clearfix">
                        <h1 className="float-left display-3 mr-4">404</h1>
                        <h4 className="pt-3">Oops! </h4>
                        <p className="text-muted float-left">Page Introuvable</p>
                      </div>

                    </Col>
                  </Row>
                </Container>
            </div>
        )
    }
}

export default Error404;