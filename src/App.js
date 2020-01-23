import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DvrIcon from '@material-ui/icons/Dvr';
import GitHubIcon from '@material-ui/icons/GitHub';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://bahuet.com/">
        Bahuet.com
              </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  iconRightSpace: {
    marginRight: theme.spacing(2),
  },
  iconLeftSpace: {
    marginLeft: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))



const projectsList = [
  {
    title: 'Project management App',
    shortInfo: 'Task and employees management App POC (Front-End) Made with React and Material UI',
    moreInfo: '',
    demoLink: '',
    codeLink: 'https://github.com/bahuet/todo-app',
    imgLink: '/img/todoappimg.png',
    imgTitle: 'screenshot of project'
  }];

export default function Album() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <DvrIcon className={classes.iconRightSpace} />

          <Typography variant="h6" color="inherit" noWrap>Projects.Bahuet.com</Typography>

        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
              Eloi Bahuet e-portfolio
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              On this page you can find the list of my main personal projects, with links to demos and source code
            </Typography>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projectsList.map(project => (
              <Grid item key={project.title} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <Link href={project.demoLink} target="_blank">
                    <CardMedia
                      className={classes.cardMedia}
                      image={project.imgLink}
                      title={project.title}
                    />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>
                      {project.shortInfo}
                    </Typography>
                  </CardContent>
                  <CardActions>

                    <Link href={project.codeLink} target="_blank">
                      <Button color="primary" variant='outlined'>
                        code <GitHubIcon className={classes.iconLeftSpace} />
                      </Button>
                    </Link>

                    {/* <Link href={project.demoLink}>
                      <Button size="small" color="primary" variant='outlined'>
                        info
                    </Button>
                    </Link> */}

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>

        <Copyright />
      </footer>
      {/* End footer */}
    </>
  );
}