import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css'
import fields from './fields'
import {state} from './initialState'

import shortid from 'shortid';

class Form extends Component {
    state = {
       ...state
    }

    

    handelSubmit = e => {
        
        e.preventDefault();

        const { onSubmit } = this.props;
        onSubmit(this.state)
        this.reset();
    }


    handelChange = ({ target }) => {

        const { name, value } = target;
        this.setState({ [name]: value })
    }

    reset = () => {
        this.setState({
            name: "",
            number: "",
        })
    }

    render() {
        const { name, number } = this.state
        const inptIdName = shortid.generate();
        const inptIdNumber = shortid.generate();

        return (
            <>
                <form onSubmit={this.handelSubmit} className={styles.formPhonebook}>
                    <label htmlFor={inptIdName} className={styles.label}>
                        Name
                    </label>
                    <input
                        {...fields.userName}
                        className={styles.inputForm}           
                        id={inptIdName}
                        onChange={this.handelChange}
                        value={name}
                        /> 
                    
                    <label htmlFor={inptIdNumber} className={styles.label}>
                        Number
                    </label>
                    <input
                        className={styles.inputForm}
                        onChange={this.handelChange}
                        {...fields.userPhone}
                        id={inptIdNumber}
                        value={number}
                    />
                    
                    <button type="submit" className={styles.btnAddContact}>Add contact</button>
                </form>
            </>
        );
    }
}

export default Form;