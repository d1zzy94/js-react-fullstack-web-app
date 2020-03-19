import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';

export class Department extends Component 
{       constructor(props){
        super(props);
        this.state ={deps:[], addModalShow : false, editDepModal : false }
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
        
        const {deps, depid, depname} = this.state;
        let addModalClose =() => this.setState({addModalShow:false});
        let editModalClose =() => this.setState({editModalShow:false});
        return (
            <div>
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>DepartmentID</th>
                        <th>DepartmentName</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {deps.map(dep=>
                        <tr key = {dep.DepartmentID}>
                        <td>{dep.DepartmentID}</td>
                        <td>{dep.DepartmentName}</td>
                        <td>
                        <ButtonToolbar>
                            <Button
                            className="mr-2" variant="info"
                            onClick= {()=> this.setState({editModalShow:true, depid:dep.DepartmentID, depname:dep.DepartmentName})}
                            >
                            Edit
                            </Button>

                        <EditDepModal
                        show = {this.state.editModalShow}
                        onHide = {editModalClose}
                        depid = {depid}
                        depname = {depname}
                        />
                        </ButtonToolbar>

                        </td>
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
