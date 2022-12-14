import { Grid, Link, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";


const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    marginTop: 8,
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
    marginTop: 8,
  },
}));

export default function Sidebar({ archives, description, social, title }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4} >
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography  variant="h7">{description}</Typography>
      </Paper>

      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block"  href="#" key={network.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}