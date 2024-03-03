import { Box, Button } from '@mui/material';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Calculations = () => {
    const calculationFactors = [
        "ping speed",
        "local outages",
        "network jitter",
        "packet loss"
    ]

    const generateSequence = () => {
        let sequence = [];

        calculationFactors.forEach((factor, index) => {
            sequence.push(`We calculate based on ${factor}`);
            if (index < calculationFactors.length) {
                sequence.push(2000);
            }
        });

        return sequence;
    };
    const sequence = generateSequence();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        console.log("Hello")
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ display: "block" }}>
                <TypeAnimation
                    sequence={sequence}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </Box>
            <Button variant='outlined' onClick={handleClickOpen}>Learn more</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"How the Network Stability Score is calculated"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Here we explain how the calculation works
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Calculations;