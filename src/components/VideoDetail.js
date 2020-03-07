import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const VideoDetail = ({video}) => {
    if ( !video ) {
        return (
            <div>Loading...</div>
        );
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <Card elevation={2} style={{padding: "10px 14px", marginTop: "5px", marginBottom: "5px"}}>
            <CardMedia
                component="iframe"
                image={videoSrc}
                title={video.snippet.title}
                style={{ height: "450px" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {video.snippet.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {video.snippet.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default VideoDetail;