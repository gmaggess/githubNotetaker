import React, { Component } from 'react';

import Badge from './Badge';
import Separator from './Helpers/Separator';
import Web from './Helpers/WebView';

import {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: "column",
    flex: 1,
    padding: 10
  },
  name: {
    color: "#48BBEC",
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: "#48BBEC",
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

export default class Repositories extends Component {
  openPage(url) {
    this.props.navigator.push({
      component: Web,
      title: 'Web View',
      passProps: {url}
    });
  }
  render() {
    const repos = this.props.repos;
    const list = repos.map((item, index) => {
      const desc = item.description ? <Text style={styles.description}> {item.description} </Text> : <View/>;
      return (
        <View key={index}>
          <TouchableHighlight
            onPress={this.openPage.bind(this, item.html_url)}
            overlayColor='transparent'>
            <Text style={styles.name}> {item.name} </Text>
          </TouchableHighlight>
          <Text style={styles.stars}> Stars: {item.stargazers_count} </Text>
          {desc}
          <Separator/>
        </View>
      )
    })
    return (
      <ScrollView style={styles.containe}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
}

Repositories.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired
}