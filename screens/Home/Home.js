import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TouchableWithoutFeedback, 
    Image, 
    FlatList 
  } from "react-native";
import Animated from "react-native-reanimated"
import { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
} from 'react-native-reanimated'

import { connect } from 'react-redux'
import { setSelectedTab } from '../../stores/tab/tabActions';

import { OnBoarding } from '../../screens'


const Home = ({ navigation }) => {
  return (
    <Animated.View>
      {/* Header */}

      {/* Content */}
      <Text>Main Layout</Text>

      {/* Bottom Tabs */}
    </Animated.View>
  );
};

export default Home;
