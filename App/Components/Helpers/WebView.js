import React, {Component} from 'react';

import {
  View,
  WebView,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F6F6EF"
  }
});

export default class Web extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url} />
      </View>
    );
  }
}

Web.propTypes = {
  url: React.PropTypes.string.isRequired,
}