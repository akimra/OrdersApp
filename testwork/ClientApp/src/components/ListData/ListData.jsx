import React, { Component } from 'react';
import style from './ListData.module.scss';
import {Table, Form, InputGroup, FormControl, Button} from "react-bootstrap";
import ListElement from "./ListElement/ListElement";
import axios from 'axios';

export default class ListData extends Component {
    state = {
        filter: "",
        elements: [],
        isError: true
    };

    getOrders = () => {
        if (this.state.filter) {
            axios.get(`${axios.defaults.baseURL}/orders/${this.state.filter}`)
                .then(res => {
                    this.setState({
                        elements: res.data
                    });
                })
                .catch(err => {
                    console.log(err.message);
                    this.setState({
                        isError: true
                    });
                });
        } else {
            axios.get(`${axios.defaults.baseURL}/orders`)
                .then(res => {
                    this.setState({
                        elements: res.data
                    });
                })
                .catch(err => {
                    console.log(err.message);
                    this.setState({
                       isError: true
                    });
                });
        }
    };

    componentDidMount() {
        this.setState({
            isError: false
        });
        this.getOrders();
    }

    handleChange = (e) => {
      this.setState({
          filter: e.target.value
      });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.getOrders();
    };

    render() {
        const el = this.state.elements;

        const ListedElements = el.map((element) => {
            return <ListElement key={element.id} {...element}/>;
        });

        const ErrorGettingOrders = () => {
            return (
                <td colSpan="7">
                    Something goes wrong
                </td>
            );
        };

        return (
            <div className={style.list}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search username"
                                aria-label="username"
                                aria-describedby="basic-addon2"
                                name="filter"
                                onChange={this.handleChange}
                                value={this.state.filter}
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary"
                                        onClick={this.handleSubmit}>
                                    Find
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                </Form>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td>Username</td>
                            <td>Phone</td>
                            <td>Birth date</td>
                            <td>Product</td>
                            <td>Color</td>
                            <td>Headset</td>
                            <td>Wireless charge system</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.isError ? ErrorGettingOrders : ListedElements}
                    </tbody>
                </Table>
            </div>
        );
    }
};