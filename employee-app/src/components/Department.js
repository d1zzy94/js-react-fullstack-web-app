import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddDepModal} from './AddDepModal';

export class Department extends Component 
{       constructor(props){
        super(props);
        this.state ={deps:[], addModalShow : false}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        fetch('https://localhost:44310/api/department')
        .then(Response => Response.json())
        .then(data => {
        this.setState({deps:data});
        }
        );
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        
        const {deps} = this.state;
        let addModalClose =() => this.setState({addModalShow:false});
        return (
            <div>
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>DepartmentID</th>
                        <th>DepartmentName</th>
                    </tr>
                </thead>
                <tbody>
                    {deps.map(dep=>
                        <tr key = {dep.DepartmentID}>
                        <td>{dep.DepartmentID}</td>
                        <td>{dep.DepartmentName}</td>
                        </tr>
                        )}
                </tbody>
                
            </Table>
            <ButtonToolbar>
                <Button variant='primary' onClick={()=> this.setState({addModalShow: true})}>
                    Add Department
                </Button>
                    <AddDepModal
                    show={this.state.addModalShow}
                    onHide={addModalClose}
                    />
            </ButtonToolbar>
            </div>
        )
    }
}
