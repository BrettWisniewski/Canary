import React from 'react';
import { Button, Paper } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

const UserAgent = () => {
    const computerInfo = {
        batteryLevel: ["Battery Level", 8],
    }
    return (
        <>
            <Button size="large" variant='outlined' sx={{marginBottom: 2}}>Refresh<RefreshIcon /></Button>
            <Paper elevation={3}
                sx={{
                    borderRadius: 8,
                    backgroundColor: "black",
                    padding: 4,
                    fontFamily: "monospace",
                    fontSize: 20
                }}
            >
                {Object.entries(computerInfo).map(([key, value]) => (
                    <div key={key}>
                        {value[0]}: {value[1]}
                    </div>
                ))}
            </Paper>
        </>
    );
};

export default UserAgent;
