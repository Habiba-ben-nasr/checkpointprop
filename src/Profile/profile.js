import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const handleName =(x)=>{
    return alert(`My name is ${x}`)
}

const Profile = (props) => {
    return (
        <div>
            {props.children}

            <Card style={{ width: "500px", marginLeft:"auto", marginRight:"auto" }}>
                <Card.Body>
                    <Card.Title>{props.fullName}</Card.Title>
                    <Card.Text>
                        {props.bio}
                    </Card.Text>
                    <h2>{props.profession}</h2>
                    <Button variant="primary" onClick={()=>{handleName(props.fullName)}}> Profile</Button>
                </Card.Body>
            </Card>

        </div>
    )
};
Profile.propTypes = {
    fullName: PropTypes.string.isRequired
};


export default Profile

Profile.defaultProps = {
    fullName: "Name indefined"
};


