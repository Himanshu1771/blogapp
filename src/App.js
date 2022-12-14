
import { createTheme, Grid, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import "./App.css";
import { featuredPosts, sidebar } from "./Components/Data";
import FeaturedPost from "./Components/FeaturedPost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import PostCard from "./Components/PostCard";
import Sidebar from "./Components/Sidebar";


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: 3,
  },
}));

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      body1: {
        fontFamily: "Montserrat",
        
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,
            backgroundPosition: "center",
            padding: "35px 25px",
          },
        },
      },
    },
  });

  const Classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <br />
        <br />
        <Grid container spacing={5} className={Classes.mainGrid}>
         
          <Main title ="From the firehose"  />

          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
           
          />
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default App;
