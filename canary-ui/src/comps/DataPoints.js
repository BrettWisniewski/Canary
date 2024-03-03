import React, { useState, useEffect } from 'react';
import { Button, Paper } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

const DataPoints = () => {
    const [dataPoints, setDataPoints] = useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/equations")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDataPoints(data  );
                console.log(data);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, []);

    

    return (
        <>
            <Button size="large" variant='outlined' sx={{marginBottom: 2}}>Refresh<RefreshIcon /></Button>
            <Paper elevation={3}
                sx={{
                    borderRadius: 8,
                    backgroundColor: "black",
                    padding: 3,
                    fontFamily: "monospace",
                    fontSize: 20
                }}
            >
                <p>{dataPoints && dataPoints.ispStatus}</p>
            </Paper>
        </>
    );
};

export default DataPoints;