import React from 'react';
import VideoItem from './VideoItem';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }
}));

const VideoList = ({videos, onVideoSelect}) => {
    const classes = useStyles();
    const renderedVidList = videos.map(video => {
        return (
            <React.Fragment key={video.id.videoId}>
                <VideoItem onVideoSelect={onVideoSelect} video={video} />
                <Divider component="li" />
            </React.Fragment>
        );
    });
    return (
        <List className={classes.root}>
            {renderedVidList}
        </List>
    );
}

export default VideoList;