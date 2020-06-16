// import React from "react";
// import Container from "./Container";

// function PeaksCard({ name, range, rank, elevation, lat, long, town, image }) {
//   return (
//     <div className="cards">
//       <h2>{name}</h2>
//       <h3>{range}</h3>
//       <img src={image} alt={name} className="mountain-photos" />
//       <ul className="mountain-list">
//         <li>Elevation: {elevation}</li>
//         <li>
//           Latitude and Longitude: ~{lat}, ~{long}
//         </li>
//       </ul>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[400],
  },
}));

function PeaksCard({ name, range, rank, elevation, lat, long, town, image }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const elevationValue = JSON.stringify(elevation);
  console.log(elevationValue);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={range}
      />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {elevationValue} ft
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Explore More"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Latitude:</Typography>
          <Typography paragraph>{lat}</Typography>
          <Typography paragraph>Longitude:</Typography>
          <Typography paragraph>{long}</Typography>
          <Typography paragraph>Town:</Typography>
          <Typography>{town}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default PeaksCard;

// PeaksCard.contextTypes = { store: React.PropTypes };
