import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const Post = ({ post }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {post.title}
    </Text>
    <Text style={styles.author}>
      {post.author}
    </Text>
    <Text style={styles.content}>
      {post.content}
    </Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  title: {
    color: '#333333',
  },
  author: {
    color: '#999999',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  content: {
    paddingTop: 5,
    color: '#666666',
  },
});

export default Post;
