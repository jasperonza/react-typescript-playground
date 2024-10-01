import { Code } from '@mui/icons-material';
import { Box, Container, Link, Typography } from '@mui/material';

export default function TodoFooter() {
  return (
    <>
      <Box>
        <Container sx={{ textAlign: 'center' }}>
          <Box sx={{ verticalAlign: 'middle' }}>
            <Typography>
              Todo App -&nbsp;
              <Code sx={{ verticalAlign: 'bottom' }} /> by&nbsp;
              <Link href='https://github.com/jasperonza'>@jasperonza</Link></Typography>
          </Box>
          <Typography>
            Source&nbsp;
            <Link href='https://github.com/jasperonza/react-typescript-playground/tree/main/ztodo-app'>here</Link>
          </Typography>
        </Container>
      </Box>
    </>
  )
}