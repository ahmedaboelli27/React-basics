
import React, { Dispatch, SetStateAction } from 'react';
import "./Form.scss"
import { IuserData } from "../Interfaces"
import {formInputList} from "../Data"

interface FormProps {
    loginName: boolean;
    setLoginName: Dispatch<SetStateAction<boolean>>;
    userData : IuserData;
    setuserData :(user: IuserData) => void;
}

const Form: React.FC<FormProps> = ({ setLoginName, userData, setuserData }) => {

    const handleChange = () => {
    setLoginName(prevState => !prevState);
    };

    const onChangeHnadler = 
        (event : React.ChangeEvent<HTMLInputElement>) => {
        const {value , name} = event.target;
        setuserData({
            ...userData,
            [name]: value
        })
    }

        // ** Renders
    const renderFormInputList = formInputList.map(input => (
        <div className="d_form_1">
            <label htmlFor={input.id}>{input.label} : </label>
            <input 
                type={input.type} 
                name={input.name} 
                id={input.id} 
                value={userData [input.name as keyof IuserData]}
                onChange={onChangeHnadler}
                />
        </div>
    ))

    return (
        <div className="d_form">
            <form onSubmit={(event) => {event.preventDefault()}} id="form">
                {renderFormInputList}
                <div className='b'>
                    <button onClick={handleChange}>Login</button>
                </div>
            </form>
        </div>
)
}

export default Form







                // <div className="d_form_1">
                //     <label htmlFor="">Name</label>
                //     <input 
                //         type="text" 
                //         name="name" 
                //         id="name" 
                //         value={userData.name}
                //         onChange={onChangeHnadler}
                //         />
                // </div>



                // <div className="h">
                //     <h3>Your Name Is : {userData.name}</h3>
                //     <h3>Your Phone Number Is : {userData.phone}</h3>
                //     <h3>Your address Is : {userData.address}</h3>
                //     <h3>Your Email Is : {userData.email}</h3>
                // </div>
