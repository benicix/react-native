import React from 'react';
import {  Text, View } from 'react-native';
//import Header from '../components/header';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      peoples: []
    }
  }
  componentDidMount(){
    axios.get('https://randomuser.me/api/?nat=br&results=5').then(response => {
      //console.log(response.data);
      const {results} = response.data;
      this.setState({
        peoples: results
      });
    });
  }
  
  render() {

    
    //this.props.navigation.navigate('PeopleDetail');
    return (
      <View>
        
        <PeopleList 
        peoples={this.state.peoples} 
        onPressItem={pageParam=> {
          this.props.navigation.navigate('PeopleDetail', pageParam);
        }} />
        
        
      </View>
    );

  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
