import React from "react";
import styled from "styled-components";

class Avatar extends React.Component {
  state = {
    photo: "https://cl.ly/55da82beb939/download/avatar-default.jpg",
  };

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=1&random", {
      headers: new Headers({
        "X-API-KEY": "8fae5416f4571b87a259120cb5e04c",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          photo: response[0].photo,
        });
      });
  }

  render() {
    return <Image source={{uri: this.state.photo}} />;
  }
}

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
