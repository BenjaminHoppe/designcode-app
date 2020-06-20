import React from "react";
import styled from "styled-components";
import Project from "../components/Project";
import {PanResponder, Animated} from "react-native";

class ProjectsScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    pan: new Animated.ValueXY(),
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),
    });
  }

  render() {
    return (
      <Container>
        <Animated.View
          style={{
            transform: [
              {translateX: this.state.pan.x},
              {translateY: this.state.pan.y},
            ],
          }}
          {...this._panResponder.panHandlers}
        >
          <Project />
        </Animated.View>
      </Container>
    );
  }
}

export default ProjectsScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f0f3f5;
`;

const Text = styled.Text``;
