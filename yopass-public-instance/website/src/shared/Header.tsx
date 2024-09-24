import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';
import { Link } from 'react-router-dom';
import { env } from '../env';

export const Header = () => {
  const private_instance = env.REACT_APP_ENCRYPTION_URL || `${window.location.protocol}//${window.location.host}`;

  return (
    <AppBar position="static" color="transparent" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <Link to={private_instance} style={{ color: 'inherit', textDecoration: 'none' }} color="inherit" underline="none" >
          <Typography variant="h6" component="div">
            Secretos
            <Box
              sx={{
                verticalAlign: 'middle',
                paddingLeft: '5px',
                width: '200px',
                height: '40px',
              }}
              component="img"
              height="40"
              alt=""
              src="yopass.svg"
            />
          </Typography>
        </Link>
        <Box
          sx={{
            marginLeft: 'auto',
          }}
        >
        </Box>
      </Toolbar>
    </AppBar>
  );
};
