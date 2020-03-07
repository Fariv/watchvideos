import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SearchBar from "./SearchBar"
import youtube, { defaultParams } from "../Api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onYoutubeTermSubmit("Quadruplets in UK");
    }

    onYoutubeTermSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                ...defaultParams,
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
        
    }

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        });
    }
    render () {
        return (
            <Container fixed>
                <SearchBar onSearchInputSubmit={this.onYoutubeTermSubmit}/>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    spacing={2}
                    style={{flexGrow: 1}}
                >
                    <Grid item xs={8}>
                        <VideoDetail video={this.state.selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default App;