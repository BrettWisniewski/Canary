import React, { useState } from 'react';
import { Box, TextField, Typography, Button, InputAdornment, IconButton, List, ListItem, ListItemText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const EmailConfig = (props) => {
    const handleAddItem = () => {
        const updatedList = [...stagedEmails, tempEmail];
        setStagedEmails(updatedList)
        setTempEmail('')
    };

    const handleClear = () => {
        setTempEmail('')
        setStagedEmails([])
        setMainEmail('')
        setTempMessage('')
    }

    const handleSubmit = () => {
        console.log(props)
        props.emailProps.setUserEmail(mainEmail)
        props.emailProps.setEmailMessage(tempMessage)
        props.emailProps.setEmails([...stagedEmails])
        handleClear()
    }

    const [stagedEmails, setStagedEmails] = useState([]);
    const [tempEmail, setTempEmail] = useState("");
    const [mainEmail, setMainEmail] = useState("");
    const [tempMessage, setTempMessage] = useState("");

    const handleTempEmailsFieldChange = (event) => {
        setTempEmail(event.target.value);
    };

    const handleMainEmailFieldChange = (event) => {
        setMainEmail(event.target.value);
    };

    const handleMessageFieldChange = (event) => {
        setTempMessage(event.target.value);
    };

    return (
        <>
            <Box sx={{ width: "60%", margin: "auto" }}>
                <Typography sx={{ marginBottom: 2 }}>
                    When the network instability rises above 90%, emails will automatically be sent to the recipiants with the message.
                </Typography>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="email"
                    label="Your Email Address"
                    type="email"
                    fullWidth
                    value={mainEmail}
                    onChange={handleMainEmailFieldChange}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Add Email"
                    variant="outlined"
                    margin="dense"
                    type="email"
                    name="email"
                    fullWidth
                    sx={{ marginBottom: 2 }}
                    value={tempEmail}
                    onChange={handleTempEmailsFieldChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleAddItem} edge="end">
                                    <AddIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                {
                    stagedEmails.length !== 0 && (
                        <List>
                            {stagedEmails.map((email, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={email}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    )
                }
                <TextField
                    label="Email message"
                    margin="dense"
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    value={tempMessage}
                    onChange={handleMessageFieldChange}
                    sx={{ marginBottom: 2 }}
                />

                <Button variant="outlined" sx={{ marginRight: 1 }} onClick={handleSubmit}>
                    Submit
                </Button>
                <Button variant="outlined" onClick={handleClear}>
                    Clear
                </Button>
            </Box>
            <Typography variant="h6" gutterBottom fontWeight="bold">Email Config</Typography>
            <Typography variant="body2" gutterBottom fontFamily="'Courier New', monospace">
                Email: {props.emailProps.userEmail ? `${props.emailProps.userEmail}` : 'None'}
            </Typography>
            <Typography variant="body2" gutterBottom fontFamily="'Courier New', monospace">
                Recipients: {props.emailProps.userEmail ? `${props.emailProps.emails[0]}` : 'None'}
            </Typography>
            <Typography variant="body2" gutterBottom fontFamily="'Courier New', monospace">
                Message: {props.emailProps.userEmail ? `${props.emailProps.emailMessage}` : 'None'}
            </Typography>

        </>
    );
};

export default EmailConfig;
