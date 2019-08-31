import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function CurrencyInfo (props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
<CardContent>
  <Typography variant="h5" component="h2">
    Курсы валют:
    </Typography>

  {!props.error &&
  <Typography variant="body2" component="p">
    Евро к Доллару: {props.eur}
  <br />
  Рубля к Доллару: {props.rub}
  </Typography>
  } {props.error && <p>Жми скорее уродливую кнопку!!!</p>}
  </CardContent>
  </Card>
  )
}