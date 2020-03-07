import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        marginLeft: 10,
    }
}));

const VideoItem = ({video, onVideoSelect}) => {
    const classes = useStyles();
    return (
        <ListItem onClick={() => onVideoSelect(video)} alignItems="center" style={{cursor: "pointer"}}>
            <img src={video.snippet.thumbnails.medium.url} alt="" style={{ flex: "0 0 128px" }} />
            <ListItemText primary={video.snippet.title} className={classes.root} />
        </ListItem>
    )
}

export default VideoItem;