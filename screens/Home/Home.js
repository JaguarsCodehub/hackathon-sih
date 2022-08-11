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
import { COLORS,FONTS,SIZES,constants,dummyData,icons,images,theme } from '../../constants'
import {Header} from "../../components";

const Home = ({ navigation, selectedTab, setSelectedTab }) => {

  React.useEffect(() => {
    setSelectedTab(constants.screens.home)
  })



  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      {/* Header */}
      <Header 
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: 'center'
        }}
        title={selectedTab.toUpperCase()}
      />

      {/* Content */}
      <View style={{
        flex: 1
      }}>
        <Text>
          Main Layout
        </Text>
      </View>

      {/* Bottom Tabs */}
    </Animated.View>
  );
};


function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)