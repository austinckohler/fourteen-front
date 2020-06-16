import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Link from "@material-ui/core/Link";

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
}));

function PeaksCard({ name, range, rank, elevation, lat, long, town, image }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const elevationValue = JSON.stringify(elevation);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={name} subheader={range} />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
        align="center"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          align="center"
        >
          {elevationValue} ft
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon>{/* <Link >Add to Favorites</Link> */}</FavoriteIcon>
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
          <Typography ul align="left"></Typography>
          <Typography li align="left">
            Rank by elevation: {rank}
          </Typography>
          <Typography li align="left">
            Latitude: approx {lat}
          </Typography>
          <Typography li align="left">
            Longitude: approx {long}
          </Typography>
          <Typography li align="left">
            Town/Towns near {name}:
          </Typography>
          <Typography li align="left">
            {town}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default PeaksCard;

// PeaksCard.contextTypes = { store: React.PropTypes };
