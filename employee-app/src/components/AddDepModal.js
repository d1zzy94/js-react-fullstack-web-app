import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddDepModal extends Component{
  constructor(props){
      super(props);
  }

    handleSubmit(event){
      event.preventDefault();

      alert(event.target.DepartmentName.value);
    }

    render(){
        return(
          
          <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Department
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="container">
          
          <Row>
            <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="DepartmentName">
                  <Form.Label>DepartmentName</Form.Label>
                  <Form.Control
                  type="text"
                  name="DepartmentName"
                  required
                  placeholder="Place for Department Name"
                  />
                </Form.Group>

                <Form.Group>
                    <Button variant="primary" type="submit">
                      Add Department
                    </Button>
                </Form.Group>

              </Form>
            </Col>
          </Row>

          </div>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      
        )
    }

}

