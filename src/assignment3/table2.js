import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Navigation from './navigation';
import {BrowserRouter} from 'react-router-dom';
import ExportToExcel from './ExportToExcel';
import './button.css'

class Assign extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = 'https://rest.digishaala.com/api/roamers/all';
        fetch(url, {
            method: 'GET'
        }).then(response=> response.json()).then(posts =>{
            this.setState({posts: posts})
        })
    }
    render() {
        // const Button = styled.button`
        //     background-color: blue;
        //     color: white;
        //     padding: 5px 15px;
        // `
        const data = this.state.posts; 
        const columns = [
            {
                Header: "First Name",
                accessor: "firstName",
                style: {
                    textAlign: 'left'
                }
            },
            {
                Header: "Last Name",
                accessor: "lastName"
            },
            {
                Header: "Phone",
                accessor: "phone"
            },
            {
                Header: "Email",
                accessor: "email"
            },
            {
                Header: "ZipCode",
                accessor: "zipCode",
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: "Num Visits",
                accessor: "numVisits",
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: "Last Visited On",
                accessor: "lastVisitedOn"
            },
        ]
        return (
            <div>
                <BrowserRouter >
                    <Navigation/>
                </BrowserRouter>
                <ReactTable
                    className= "-striped -highlight"
                    columns = {columns}
                    data = {data}
                    filterable
                    sortable
                    defaultPageSize={5}
                    noDataText={"please wait..."}
                >

                {(state, filtredData, instance) =>{
                    this.reactTable = state.pageRows.map(post => {return post._original});
                    return (
                        <div>
                            { filtredData() }
                            <ExportToExcel posts={this.reactTable}/>
                        </div>
                    )
                }}

                </ReactTable> 
            </div>                   
        );
    }
}
export default Assign;