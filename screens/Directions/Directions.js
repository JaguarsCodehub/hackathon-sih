import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SIZES, COLORS, FONTS, constants, icons } from "../../constants";
import LineDivider from "../../components/LineDivider";
import { TextButton, TextIconButton } from "../../components";

const Directions = ({ route }) => {
  const navigation = useNavigation();

  const [currentStep, setCurrentStep] = React.useState(0);

  function renderInfo() {
    return (
      <View
        style={{
          marginTop: 10,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: COLORS.gray,
            ...FONTS.body4,
            fontWeight: "bold",
          }}
        >
          {route.params.name}
        </Text>
        <Text style={{ textAlign: "center", ...FONTS.h3, fontWeight: "bold" }}>
          21 Sept 2021 / 12:30 PM
        </Text>
      </View>
    );
  }

  function renderTrack() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          paddingVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          borderWidth: 2,
          borderColor: COLORS.lightGray2,
          backgroundColor: COLORS.white2,
        }}
        accessible={true}
        accessibilityLabel="Here in this block you will get various checkpoint guide in a column format"
        accessibilityHint="After you have finished a checkpoint Tap on the Next checkpoint block which is just below,  of the previous one to go to the next checkpoint"
      >
        {/* Track Order */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.h3, fontWeight: "bold" }}>
            Checkpoint Guide
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
            {route.params.name}
          </Text>
        </View>

        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.lightGray2,
          }}
        />

        {/* Status */}
        <View
          style={{
            marginTop: 30,
            paddingHorizontal: SIZES.padding,
          }}
        >
          {route.params.track_order_status.map((item, index) => {
            return (
              <View key={`StatusList-${index}`}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: -5,
                  }}
                  accessible={true}
                  accessibilityLabel={item.title + item.sub_title}
                  onPress={() => setCurrentStep(currentStep + 1)}
                >
                  <TouchableOpacity>
                    <Image
                      source={icons.check_circle}
                      style={{
                        width: 40,
                        height: 40,
                        tintColor:
                          index <= currentStep
                            ? COLORS.primary
                            : COLORS.lightGray1,
                      }}
                    />
                  </TouchableOpacity>

                  <View
                    style={{
                      marginLeft: 20,
                    }}
                  >
                    <Text
                      style={{ ...FONTS.h3, fontWeight: "bold", fontSize: 20 }}
                    >
                      {item.title}
                    </Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                      {item.sub_title}
                    </Text>
                  </View>
                </TouchableOpacity>

                {index < route.params.track_order_status.length - 1 && (
                  <View>
                    {index < currentStep && (
                      <View
                        style={{
                          height: 50,
                          width: 3,
                          marginLeft: 18,
                          backgroundColor: COLORS.primary,
                          zIndex: -1,
                        }}
                      />
                    )}

                    {index >= currentStep && (
                      <Image
                        source={icons.dotted_line}
                        resizeMode="cover"
                        style={{
                          width: 4,
                          height: 50,
                          marginLeft: 17,
                        }}
                      />
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
        }}
      >
        {currentStep < route.params.track_order_status.length - 1 && (
          <View
            style={{
              flexDirection: "row",
              marginTop: 120,
              height: 55,
              justifyContent: "space-evenly",
            }}
          >
            {/* Cancel */}
            <TextButton
              buttonContainerStyle={{
                width: "40%",
                borderRadius: SIZES.base,
                backgroundColor: COLORS.lightGray2,
              }}
              label="Cancel"
              labelStyle={{
                color: COLORS.primary,
                fontWeight: "bold",
              }}
              onPress={() => setCurrentStep(currentStep - 1)}
            />

            <TextIconButton
              containerStyle={{
                flex: 1,
                marginLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
              }}
              label="Next Step"
              labelStyle={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
              icon={icons.map}
              iconPosition="LEFT"
              iconStyle={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
                tintColor: COLORS.white,
              }}
              onPress={() => setCurrentStep(currentStep + 1)}
            />
          </View>
        )}

        {currentStep == route.params.track_order_status.length - 1 && (
          <TextIconButton
            containerStyle={{
              height: 55,
              borderRadius: SIZES.base,
              backgroundColor: COLORS.primary,
              marginTop: 120,
            }}
            label="DONE"
            labelStyle={{
              color: COLORS.white,
              ...FONTS.h3,
            }}
            icon={icons.map}
            iconPosition="LEFT"
            iconStyle={{
              width: 25,
              height: 25,
              marginRight: SIZES.base,
              tintColor: COLORS.white,
            }}
            onPress={() => console.log("DONE")}
          />
        )}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
      accessible={true}
      accessibilityLabel="This is the Directions Route Page, where you will get all the Route how to go to the Specific Room you have tapped on"
      accessibilityHint=""
    >
      {/* Header */}
      {/* <View
        style={{
          // marginTop: 60,
          // height: 50,
          // marginHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            letterSpacing: 3,
          }}
        >
          DIRECTION MATRIX
        </Text>
      </View> */}

      {/* Info */}
      {renderInfo()}

      {/* Track Order */}
      {renderTrack()}

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default Directions;

{
  /* <Text>{route.params.name}</Text>
<Text>{route.params.description}</Text>
<Text>{route.params.price}</Text> */
}
