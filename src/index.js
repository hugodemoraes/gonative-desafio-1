import React, { Component } from 'react';
import {
  StyleSheet, View, ScrollView, Text,
} from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import Post from 'components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Hugo de Moraes',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ipsum laoreet, auctor diam vitae, suscipit sem. Morbi in finibus lacus. Pellentesque suscipit viverra elit, id gravida magna fringilla feugiat. Morbi consectetur accumsan leo, vitae bibendum lacus facilisis at. Fusce in viverra nisl. Phasellus dapibus.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Hugo de Moraes',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ipsum laoreet, auctor diam vitae, suscipit sem. Morbi in finibus lacus. Pellentesque suscipit viverra elit, id gravida magna fringilla feugiat. Morbi consectetur accumsan leo, vitae bibendum lacus facilisis at. Fusce in viverra nisl. Phasellus dapibus.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Hugo de Moraes',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ipsum laoreet, auctor diam vitae, suscipit sem. Morbi in finibus lacus. Pellentesque suscipit viverra elit, id gravida magna fringilla feugiat. Morbi consectetur accumsan leo, vitae bibendum lacus facilisis at. Fusce in viverra nisl. Phasellus dapibus.',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
GoNative App
        </Text>
        <ScrollView>
          {this.state.posts.map(post => <Post key={post.id} post={post} />)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE7777',
  },
  title: {
    backgroundColor: '#FFFFFF',
    color: '#333333',
    alignSelf: 'stretch',
    padding: 20,
    textAlign: 'center',
  },
});
