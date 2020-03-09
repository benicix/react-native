import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
//import Header from '../components/header';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
    }
  }
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {


      axios.get('https://randomuser.me/api/?nat=br&results=15')
        .then(response => {
          //console.log(response.data);
          const { results } = response.data;
          this.setState({
            peoples: results,
            loading: false

          });
        });
    }, 3500);
  }
  renderLoading() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#6ca2f7" />
    }
    return null

    //return <ActivityIndicator size="large" color="#6ca2f7" />
  }

  render() {


    //this.props.navigation.navigate('PeopleDetail');
    return (
      <View style={styles.container}>
        {/*this.renderLoading()*/}
        {
          this.state.loading ?
            <ActivityIndicator size="large" color="#6ca2f7" /> :
            <PeopleList
              peoples={this.state.peoples}
              onPressItem={pageParam => {
                this.props.navigation.navigate('PeopleDetail', pageParam);
              }} />

        }



      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
