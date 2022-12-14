import { Badge, Divider, IconButton,  Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import {makeStyles} from '@mui/styles';
import SideDrawer from "./SideDrawer";


const useStyles = makeStyles((theme) =>({
title:{
    flexGrow:1
},
tagline:{
    fontSize:20,
    textTransform:'uppercase',
    justifyContent: 'center',
    fontFamily: 'Montserrat'
}
}))

const Header = () => {
    const Classes = useStyles();
  return (
    <>
      <Toolbar>
        <SideDrawer>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        </SideDrawer>
        
        <Typography variant="h5" className={Classes.title}>Blogging Website</Typography>

        <IconButton  color="inherit">
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>

        <IconButton  color="inherit">
          <AccountCircleIcon />
        </IconButton>

      </Toolbar>

      <Divider />

      <Toolbar className={Classes.tagline} style={{fontSize:'30px', marginTop: '10px',}}>Express Your Emotions Through Words</Toolbar>
    </>
  );
};

export default Header;
