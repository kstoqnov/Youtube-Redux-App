import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  VideoDetailContainer,
  VideoDetailTitle,
  VideoDetailDescription,
  VideoDetailPlayer,
} from './../base/Results';


class VideoDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const url = `https://www.youtube.com/embed/${this.props.selectedVideo[0].id.videoId}`;
    return (
      <VideoDetailContainer>
        <VideoDetailTitle>
          {this.props.selectedVideo[0].snippet.title}
        </VideoDetailTitle>
        <VideoDetailPlayer src={url} />
        <VideoDetailDescription>
          {this.props.selectedVideo[0].snippet.description}
        </VideoDetailDescription>
      </VideoDetailContainer>
    );
  }
}
function mapStateToProps({ selectedVideo }) {
  return { selectedVideo };
}

export default connect(mapStateToProps)(VideoDetail);
