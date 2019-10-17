import React, {Component} from "react";
import axios from 'axios';
import InputFormContent from "./InputFormContent/InputFormContent";

export default class InputForm extends Component {
    state = {
        username: "",
        phone: "",
        dateBirth: "",
        product: "iPhone",
        colorPhone: "black",
        headset: true,
        charge: false,
        formErrors : {
            username: "",
            phone: "",
            dateBirth: "",
            netError: ""
        },
        isUsernameValid: true,
        isPhoneValid: true,
        isDateValid: true,
        isFormValid: true,
        isSuccess: false
    };

    isValidData = () => {
        const {username, phone, dateBirth} = this.state;
        let flag = true;
        let formErrors = {
            dateBirth: "",
            phone: "",
            username: ""
        };
        let isDateValid = false;
        let isPhoneValid = false;
        let isUsernameValid = false;

        const toDate = new Date(dateBirth);
        if (dateBirth === '') {
            flag = false;
            formErrors.date = "is empty";
        } else if (toDate > Date.now()){
            flag = false;
            formErrors.date = "cannot be in future";
        } else {
            isDateValid = true;
        }

        if (phone === '') {
            flag = false;
            formErrors.phone = "is empty";
        } else if (phone.match(/\D/)) {
            flag = false;
            formErrors.phone = "only digits allowed";
        } else {
            isPhoneValid = true;
        }

        if (username === '') {
            flag = false;
            formErrors.username = "is empty";
        } else if (username.match(/\W/)) {
            flag = false;
            formErrors.username = "only digits, a-z/A-Z and symbol '_' allowed"
        } else {
            isUsernameValid = true;
        }

        this.setState({
            formErrors,
            isUsernameValid,
            isDateValid,
            isPhoneValid,
            isFormValid: flag
        });
        return flag;
    };

    handleChange = (e) => {
        const { name, type } = e.target;
        let { value } = e.target;

        if (name === "product") {
            e.target.childNodes.forEach((opt) => {
                if (opt.selected) {
                    this.setState({
                        product: opt.value,
                        isSuccess: false
                    });
                }
            });
        }

        switch (type) {
            case "tel":
            case "text":
                value = value.trim();
                this.setState({
                    [name]: value,
                    isSuccess: false
                });
                break;
            case "date":
            case "radio":
                this.setState({
                    [name]: value,
                    isSuccess: false
                });
                break;
            case "checkbox":
                this.setState({
                    [name]: e.target.checked,
                    isSuccess: false
                });
                break;
            default: break;
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.isValidData()) {
            const {
                username,
                dateBirth,
                phone,
                product,
                colorPhone,
                headset,
                charge
            } = this.state;

            const order = {
                username: username,
                dateBirth: dateBirth,
                phone: phone,
                product: product,
                colorPhone: colorPhone,
                headset: headset,
                charge: charge
            };

            axios.post(`${axios.defaults.baseURL}/orders`, order)
                .then(res => {
                    this.setState({
                        username: "",
                        dateBirth: "",
                        phone: "",
                        product: "iPhone",
                        colorPhone: "black",
                        headset: true,
                        charge: false,
                        isSuccess: true,
                    });
                })
                .catch(err => {
                    console.log(err.message);
                    this.setState({
                        formError: {
                            netError: "Something goes wrong!"
                        }
                    });
                });
        }
    };

    render() {
        return (
        <InputFormContent
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state}
        />
        );
    }
}