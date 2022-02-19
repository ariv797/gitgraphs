import { Icon } from '@iconify/react';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import Tilt from 'react-parallax-tilt';
import { timelineContentClasses } from '@mui/lab';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
    theme.palette.error.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 234;

export default function AppBugReports() {
  return (
    <Tilt>
      <RootStyle>
        <IconWrapperStyle>
          <Icon icon="ant-design:bug-filled" width={24} height={24} />
        </IconWrapperStyle>
          <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
          <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          Issues
          </Typography>
      </RootStyle>
    </Tilt>
    
  );
}
