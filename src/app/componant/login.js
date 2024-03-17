import React from 'react';
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";


const Login = () => {
    function gbtn(){
        alert("you press google button")
    }
    function gitbtn(){
        alert("you press github button")
    }

    return (
        <div className="flex gap-5 justify-center">
            <button onClick={gbtn} className="p-1 bg-[#F2F2F2] rounded-full"><FcGoogle style={{fontSize:'35px'}}/></button>
            <button onClick={gitbtn} className="p-1 bg-[#F2F2F2] rounded-full"><FaGithub  style={{fontSize:'35px'}}/></button>

        </div>
    );
};

export default Login;