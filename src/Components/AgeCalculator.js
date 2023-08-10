import React from 'react';
import { useState } from 'react';

const AgeCalculator = () => {

    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');

    const calcAge = (e) => {
        e.preventDefault();
        const today = new Date();
        const dobDate = new Date(dob);
        let age = today.getFullYear() - dobDate.getFullYear();
        const monthdiff = today.getMonth() - dobDate.getMonth();
        if (monthdiff < 0 || (monthdiff === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }
        setAge(age + ' years');
    }

    const clear = () => {
        setAge('');
        setDob('');

    }

    return ( <
        div className = "max-w-md mx-auto my-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" >

        <
        form className = "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <
        div className = "md:flex md:items-center mb-6" >
        <
        div className = "md:w-1/3" >
        <
        label className = "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for = "inline-full-name" >
        Date Of Birth <
        /label> <
        /div> <
        div className = "md:w-2/3" >
        <
        input className = "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id = "inline-full-name"
        value = { dob }
        type = "date"
        placeholder = "dd-mm--yyyy"
        onChange = { e => setDob(e.target.value) }
        /> <
        /div> <
        /div> <
        div className = "md:flex md:items-center" >
        <
        div className = "md:w-1/3" > < /div> <
        div className = "md:w-2/3" >
        <
        button onClick = { calcAge }
        className = "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type = "submit" >
        Submit <
        /button> <
        button onclick = { clear }
        className = "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-8"
        type = "button" >
        Clear <
        /button> <
        /div> <
        /div> <
        div className = "mb-6" >
        <
        h3 className = "block text-gray-700 text-sm font-bold mb-2" > Your Age is { age } < /h3>  <
        /div> <
        /form> <
        /div>
    )
}

export default AgeCalculator