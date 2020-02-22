import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
    },
    root: {
        backgroundColor: 'rgba(75,0,130);',
        position: 'sticky'
    },
    login: {
        color: '#f5f5f5'
    }
}))

export default function NavigationBar({ toggle, setToggle }) {

    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.root}>
                <Toolbar>
                    <IconButton>
                        <MenuIcon className={classes.login} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Helplace
                    </Typography>
                    <Button onClick={() => {
                        setToggle({ menu: !toggle.menu })
                        document.documentElement.scrollTop = 0;
                    }} className={classes.login}>Login</Button>
                </Toolbar>
            </AppBar>
        </>
    );
}
