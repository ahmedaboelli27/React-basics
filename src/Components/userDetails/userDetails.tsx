
import {IuserData} from "../Interfaces"
import "./userDetails.scss"

interface Iprops {
    user: IuserData;
}

const userDetails = ({ user }: Iprops) => {

    return (
        <div className="details">
            <h1>Wellcom In Our Family!!</h1>
            <h3>Your Name Is : {user.username}</h3>
            <h3>Your Phone Number Is : {user.phone}</h3>
            <h3>Your Email Is : {user.email}</h3>
            <h3>Your address Is : {user.address}</h3>
        </div>
    )
}

export default userDetails
