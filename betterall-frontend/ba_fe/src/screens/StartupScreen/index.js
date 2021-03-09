import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, Animated, LogBox} from 'react-native';
import Logo from '../../../assets/images/betterall-logo-200x200.png';
import MainRoute from '../../MainRoute';

export default class StartupScreen extends React.Component {
  state = {
    LogoAnime: new Animated.Value(0),
    LogoTextAnime: new Animated.Value(0),
    loadingSpinner: false,
    redirect: false,
  };

  componentDidMount() {
    const {LogoAnime, LogoTextAnime} = this.state;

    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1200,
      }).start(),

      Animated.timing(LogoTextAnime, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      this.setState({
        loadingSpinner: true,
      });
    });
    // Ignoring Warning logs
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    this.id = setTimeout(() => this.setState({redirect: true}), 4000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }
  /* if (!this.state.redirect) {
} else {
  <Redirect to="./screens/Home"/>
  -----


    if (this.state.redirect) {
      return (
        <Router>
          <div>
            <Route path="./screens/Home" />
          </div>
        </Router>
      );
    }
}*/
  render() {
    if (this.state.redirect) {
      return <MainRoute />;
    }

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.LogoAnime,
            top: this.state.LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
          }}>
          <Image source={Logo} />
        </Animated.View>
        <Animated.View style={{opacity: this.state.LogoTextAnime}}>
          <Text style={styles.logoText}>BetterAll</Text>
        </Animated.View>
      </View>
    );
  }
}

//export default StartupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDDA7E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    color: '#FFFFFF',
    fontFamily: 'Mulish.Regular',
    fontSize: 45,
    fontWeight: '700',
    marginTop: 29.1,
  },
});
