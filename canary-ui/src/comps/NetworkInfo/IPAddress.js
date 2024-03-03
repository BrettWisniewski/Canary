import React, { useState, useEffect } from 'react';
import axios from "axios";

const IPAddress = () => {
    const [ip, setIP] = useState("");

    const getData = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
        setIP(res.data.ip);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>{ip}</>
    );
};

export default IPAddress;