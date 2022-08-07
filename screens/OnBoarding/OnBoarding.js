import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { constants, images, FONTS, SIZES, COLORS } from "../../constants";
import { TextButton } from "../../components";

const OnBoarding = () => {
  const navigation = useNavigation();

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef();

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onViewChangeRef = React.useRef(({ viewableItems, changed }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.lightGreen, COLORS.primary, COLORS.lightGreen],
            extrapolate: "clamp",
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  function renderHeaderLogo() {
    return (
      <View
        style={{
          position: "absolute",
          top: SIZES.height > 800 ? 50 : 25,
          left: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.logo_02}
          resizeMode="contain"
          style={{
            width: SIZES.width * 0.5,
            height: 100,
          }}
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          height: 100,
        }}
      >
        {/* Pagination Dots */}

        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Dots />
        </View>

        {/* Buttons */}
        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label="Skip"
              buttonContainerStyle={{
                backgroundColor: null,
              }}
              labelStyle={{
                color: COLORS.primary,
              }}
              onPress={() => navigation.replace("Home")}
            />

            <TextButton
              label="Next"
              buttonContainerStyle={{
                height: 60,
                width: 100,
                borderRadius: SIZES.radius,
              }}
              // labelStyle={{
              //   color: COLORS.primary,
              // }}
              onPress={() => {
                flatListRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
                  animated: true,
                });
              }}
            />
          </View>
        )}
      </View>
    );

    {
      currentIndex == constants.onboarding_screens.length - 1 && (
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
          }}
        >
          <TextButton
            label="Let's Get Started"
            buttonContainerStyle={{
              height: 60,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      );
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* {renderHeaderLogo()} */}

      <Animated.FlatList
        horizontal
        ref={flatListRef}
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={20}
        snapToAlignment="center"
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],

          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: SIZES.width,
              }}
            >
              {/* Header */}
              <View
                style={{
                  flex: 3,
                }}
              >
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: index == 1 ? "98%" : "100%",
                    width: "100%",
                  }}
                >
                  <Image
                    source={item.bannerImage}
                    resizeMode="contain"
                    style={{
                      width: SIZES.width * 0.9,
                      height: SIZES.height * 0.9,
                      marginBottom: -140,
                      marginTop: 80,
                    }}
                  />
                </ImageBackground>
              </View>

              {/* Detail */}
              <View
                style={{
                  flex: 1,
                  marginTop: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: SIZES.radius,
                }}
              >
                <Text style={{ ...FONTS.h1, fontSize: 25 }}>{item.title}</Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: "center",
                    color: COLORS.darkGray,
                    paddingHorizontal: SIZES.padding,
                    ...FONTS.body3,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />

      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
