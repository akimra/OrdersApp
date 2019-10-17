import React from 'react';
import style from './InputFormContent.module.scss';
import {Form, InputGroup, Button} from 'react-bootstrap';
import ValidationError from './ValidationError/ValidationError';
import PuttedOrderMessage from "../PuttedOrderMessage/PuttedOrderMessage";

const InputFormContent = (props) => {
         return (
             <Form onSubmit={props.handleSubmit} validated={false}>
                 <Form.Group controlId='username' className={style.username}>
                     <Form.Label>Enter your name</Form.Label>
                     <Form.Control
                         className={props.isUsernameValid ? "" : style.invalid}
                         placeholder="username"
                         type="text"
                         value={props.username}
                         name="username"
                         onChange={props.handleChange}
                         required/>
                 </Form.Group>
                 <Form.Group controlId="phone" className={style.phone}>
                     <Form.Label>Enter your phone</Form.Label>
                     <InputGroup>
                         <InputGroup.Prepend>
                             <InputGroup.Text
                                 id="inputGroupPrepend">
                                 +7
                             </InputGroup.Text>
                         </InputGroup.Prepend>
                         <Form.Control
                             className={props.isPhoneValid ? "" : style.invalid}
                             type="tel"
                             placeholder=""
                             aria-describedby="inputGroupPrepend"
                             value={props.phone}
                             name="phone"
                             onChange={props.handleChange}
                             required
                         />
                     </InputGroup>
                 </Form.Group>
                 <Form.Group controlId='product' className={style.product}>
                     <Form.Label>Choose product</Form.Label>
                     <Form.Control
                         placeholder="product"
                         as="select"
                         value={props.product}
                         name="product"
                         onChange={props.handleChange}
                         required>
                         <option value="iPhone">iPhone</option>
                         <option value="Samsung">Samsung</option>
                         <option value="Xiaomi">Xiaomi</option>
                     </Form.Control>
                 </Form.Group>
                 <Form.Group controlId='date' className={style.date}>
                     <Form.Label>Enter your date of birth</Form.Label>
                     <Form.Control
                         className={props.isDateValid ? "" : style.invalid}
                         type="date"
                         value={props.dateBirth}
                         name="dateBirth"
                         onChange={props.handleChange}
                         required/>
                 </Form.Group>
                 <Form.Group controlId='optionalGoods' className={style.goods}>
                     <Form.Label>Select optional accessories</Form.Label>
                     <Form.Check
                         type="checkbox"
                         name="headset"
                         label="headset"
                         checked={props.headset}
                         onChange={props.handleChange}
                     />
                     <Form.Check
                         type="checkbox"
                         name="charge"
                         label="wireless charge system"
                         checked={props.charge}
                         onChange={props.handleChange}/>
                 </Form.Group>
                 <Form.Group value={props.colorPhone} controlId='colorPhone' className={style.colorPhone}>
                     <Form.Label>Select color of your phone</Form.Label>
                     <Form.Check
                         type="radio"
                         value="black"
                         name="colorPhone"
                         label="black"
                         checked={props.colorPhone === "black"}
                         onChange={props.handleChange}/>
                     <Form.Check
                         type="radio"
                         value="white"
                         name="colorPhone"
                         label="white"
                         checked={props.colorPhone === "white"}
                         onChange={props.handleChange}/>
                 </Form.Group>
                 <Button type="submit" onClick={props.handleSubmit}>
                     Submit
                 </Button>
                 {props.isFormValid || props.formErrors.netError ? "" : <ValidationError formErrors={props.formErrors}/>}
                 {props.isSuccess ? <PuttedOrderMessage/> : ""}
             </Form>
         );
     };

export default InputFormContent;