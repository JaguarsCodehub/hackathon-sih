import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from "react-native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";
import { OnBoarding, Cart, Favourite, Notification, Search } from "../screens";
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  dummyData,
  icons,
  images,
  theme,
} from "../constants";
import { Header } from "../components";
import TabNavigator from "../navigation/TabNavigator";

const TabButton = ({
  label,
  icon,
  isFocused,
  onPress,
  outerContainerStyle,
  innerContainerStyle,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          },
          outerContainerStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              flexDirection: "row",
              width: "80%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
            },
            innerContainerStyle,
          ]}
        >
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: isFocused ? COLORS.white : COLORS.gray,
            }}
          />

          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.h3,
              }}
            >
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const MainLayout = ({ navigation, selectedTab, setSelectedTab }) => {
  const flatListRef = React.useRef();

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: "center",
        }}
        // title={selectedTab}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.navigate("OnBoarding")}
          >
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={dummyData?.myProfile?.profile_image}
              style={{
                width: 40,
                height: 40,
                borderRadius: SIZES.radius,
              }}
            />
          </TouchableOpacity>
        }
      />

      {/* Content */}
      <View
        style={{
          flex: 1,
        }}
      ></View>

      {/* Footer */}
      <View
        style={{
          height: 100,
          justifyContent: "flex-end",
        }}
      >
        {/* Shadow */}
        <LinearGradient
          start={{ x: 8, y: 8 }}
          end={{ x: 7, y: 4 }}
          colors={[COLORS.lightOrange, "#F4F4F4"]}
          style={{
            position: "absolute",
            top: -3,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />

        {/* Tabs */}
        <TabNavigator />
      </View>
    </Animated.View>
  );
};

// export default Home;

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
