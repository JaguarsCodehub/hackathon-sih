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
import {
  OnBoarding,
  Cart,
  Favourite,
  Notification,
  Search,
} from "../screens";
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

  // // Reanimated Shared Value
  // const homeTabFlex = useSharedValue(1);
  // const homeTabColor = useSharedValue(COLORS.white);
  // const searchTabFlex = useSharedValue(1);
  // const searchTabColor = useSharedValue(COLORS.white);
  // const cartTabFlex = useSharedValue(1);
  // const cartTabColor = useSharedValue(COLORS.white);
  // const favouriteTabFlex = useSharedValue(1);
  // const favouriteTabColor = useSharedValue(COLORS.white);
  // const notificationTabFlex = useSharedValue(1);
  // const notificationTabColor = useSharedValue(COLORS.white);

  // // Reanimated Animated Style

  // const homeFlexStyle = useAnimatedStyle(() => {
  //   return {
  //     flex: homeTabFlex.value,
  //   };
  // });

  // const homeColorStyle = useAnimatedStyle(() => {
  //   return {
  //     backgroundColor: homeTabColor.value,
  //   };
  // });

  // const searchFlexStyle = useAnimatedStyle(() => {
  //   return {
  //     flex: searchTabFlex.value,
  //   };
  // });

  // const searchColorStyle = useAnimatedStyle(() => {
  //   return {
  //     backgroundColor: searchTabColor.value,
  //   };
  // });

  // const cartFlexStyle = useAnimatedStyle(() => {
  //   return {
  //     flex: cartTabFlex.value,
  //   };
  // });

  // const cartColorStyle = useAnimatedStyle(() => {
  //   return {
  //     backgroundColor: cartTabColor.value,
  //   };
  // });

  // const favouriteFlexStyle = useAnimatedStyle(() => {
  //   return {
  //     flex: favouriteTabFlex.value,
  //   };
  // });

  // const favouriteColorStyle = useAnimatedStyle(() => {
  //   return {
  //     backgroundColor: favouriteTabColor.value,
  //   };
  // });

  // const notificationFlexStyle = useAnimatedStyle(() => {
  //   return {
  //     flex: notificationTabFlex.value,
  //   };
  // });

  // const notificationColorStyle = useAnimatedStyle(() => {
  //   return {
  //     backgroundColor: notificationTabColor.value,
  //   };
  // });

  // React.useEffect(() => {
  //   setSelectedTab(constants.screens.home);
  // }, []);

  // React.useEffect(() => {
  //   if (selectedTab == constants.screens.home) {
  //     flatListRef?.current?.scrollToIndex({
  //       index: 0,
  //       animated: false,
  //     });

  //     homeTabFlex.value = withTiming(4, { duration: 200 });
  //     homeTabColor.value = withTiming(COLORS.primary, { duration: 200 });
  //   } else {
  //     homeTabFlex.value = withTiming(1, { duration: 200 });
  //     homeTabColor.value = withTiming(COLORS.white, { duration: 200 });
  //   }

  //   if (selectedTab == constants.screens.search) {
  //     flatListRef?.current?.scrollToIndex({
  //       index: 1,
  //       animated: false,
  //     });

  //     searchTabFlex.value = withTiming(4, { duration: 200 });
  //     searchTabColor.value = withTiming(COLORS.primary, { duration: 200 });
  //   } else {
  //     searchTabFlex.value = withTiming(1, { duration: 200 });
  //     searchTabColor.value = withTiming(COLORS.white, { duration: 200 });
  //   }

  //   if (selectedTab == constants.screens.cart) {
  //     flatListRef?.current?.scrollToIndex({
  //       index: 2,
  //       animated: false,
  //     });

  //     cartTabFlex.value = withTiming(4, { duration: 200 });
  //     cartTabColor.value = withTiming(COLORS.primary, { duration: 200 });
  //   } else {
  //     cartTabFlex.value = withTiming(1, { duration: 200 });
  //     cartTabColor.value = withTiming(COLORS.white, { duration: 200 });
  //   }

  //   if (selectedTab == constants.screens.favourite) {
  //     flatListRef?.current?.scrollToIndex({
  //       index: 3,
  //       animated: false,
  //     });

  //     favouriteTabFlex.value = withTiming(4, { duration: 200 });
  //     favouriteTabColor.value = withTiming(COLORS.primary, { duration: 200 });
  //   } else {
  //     favouriteTabFlex.value = withTiming(1, { duration: 200 });
  //     favouriteTabColor.value = withTiming(COLORS.white, { duration: 200 });
  //   }

  //   if (selectedTab == constants.screens.notification) {
  //     flatListRef?.current?.scrollToIndex({
  //       index: 4,
  //       animated: false,
  //     });

  //     notificationTabFlex.value = withTiming(4, { duration: 500 });
  //     notificationTabColor.value = withTiming(COLORS.primary, {
  //       duration: 500,
  //     });
  //   } else {
  //     notificationTabFlex.value = withTiming(1, { duration: 500 });
  //     notificationTabColor.value = withTiming(COLORS.white, { duration: 500 });
  //   }
  // }, [selectedTab]);

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
      >
        {/* <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: SIZES.height,
                  width: SIZES.width,
                }}
              >
                {item.label == constants.screens.home && (<Home />)}
                {item.label == constants.screens.search && (<Search />)}
                {item.label == constants.screens.cart && (<Cart />)}
                {item.label == constants.screens.favourite && (<Favourite />)}
                {item.label == constants.screens.notification && (
                  <Notification />
                )}
              </View>
            );
          }}
        /> */}
      </View>

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
        {/* <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white,
          }}
        >
          <TabButton
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => setSelectedTab(constants.screens.home)}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
          />
          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedTab == constants.screens.search}
            onPress={() => setSelectedTab(constants.screens.search)}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
          />
          <TabButton
            label={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab == constants.screens.cart}
            onPress={() => setSelectedTab(constants.screens.cart)}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
          />
          <TabButton
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constants.screens.favourite}
            onPress={() => setSelectedTab(constants.screens.favourite)}
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
          />
          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
            onPress={() => setSelectedTab(constants.screens.notification)}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
          />
        </View> */}
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
