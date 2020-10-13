import React from "react";
import { Link } from "react-router-dom";

const textStyle = {
    fontFamily: "Arial",
    padding: "10px",
    fontSize: 18
}

const rowStyle = {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}

const MainPage = () => {

    return (
        <div>
            <h3 style={textStyle}>Username: </h3>
            <h3 style={textStyle}>Password: </h3>
            <button style = {textStyle}>
                <Link to='/BackendConfiguration'>Login</Link>
            </button>
        </div>
    )
};

export default MainPage;