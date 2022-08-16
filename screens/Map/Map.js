import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Header, SearchBar } from "../../components";
import { COLORS, images, icons, FONTS } from "../../constants";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Map = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.lightOrange,
      }}
    >
      <Header
        descriptionStyle={{
          color: COLORS.white,
        }}
        nameStyle={{
          color: "black",
        }}
        iconStyle={{
          color: COLORS.white,
        }}
        arrowStyle={{
          color: COLORS.black,
        }}
      />

      <ScrollView
        style={{
          backgroundColor: COLORS.lightOrange3,
        }}
      >
        {/* Ground Floor */}
        <View
          style={{
            // flex: 1,
            marginTop: 60,
            backgroundColor: COLORS.white,
            width: 340,
            height: 360,
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: COLORS.black,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 2.46,

            elevation: 30,
          }}
        >
          <View style={{ borderRadius: 20 }}>
            <Image
              source={images.firstmap}
              resizeMode="contain"
              style={{
                width: 320,
                height: 240,
                borderRadius: 20,
                opacity: 0.8,
                margin: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  ...FONTS.h1,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                Ground Floor - G
              </Text>

              <Text
                style={{
                  ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                28 steps from the Entry Gate
              </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="shoe-print"
                size={50}
                color={COLORS.black}
                style={{
                  marginRight: 20,
                }}
              />
            </View>
          </View>
        </View>

        {/* First Floor */}
        <View
          style={{
            // flex: 1,
            marginTop: 60,
            backgroundColor: COLORS.white,
            width: 340,
            height: 360,
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: COLORS.black,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 2.46,

            elevation: 30,
          }}
        >
          <View style={{ borderRadius: 20 }}>
            <Image
              source={images.secondmap}
              resizeMode="contain"
              style={{
                width: 320,
                height: 240,
                borderRadius: 20,
                opacity: 0.8,
                margin: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  ...FONTS.h1,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                First Floor - 1
              </Text>

              <Text
                style={{
                  ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                60 steps from the Entry Gate
              </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="shoe-print"
                size={50}
                color={COLORS.black}
                style={{
                  marginRight: 20,
                }}
              />
            </View>
          </View>
        </View>

        {/* Second Floor */}
        <View
          style={{
            // flex: 1,
            marginTop: 60,
            backgroundColor: COLORS.white,
            width: 340,
            height: 360,
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: COLORS.black,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 2.46,

            elevation: 30,
          }}
        >
          <View style={{ borderRadius: 20 }}>
            <Image
              source={images.thirdmap}
              resizeMode="contain"
              style={{
                width: 320,
                height: 240,
                borderRadius: 20,
                opacity: 0.8,
                margin: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  ...FONTS.h1,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                Second Floor - 2
              </Text>

              <Text
                style={{
                  ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                86 steps from the Entry Gate
              </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="shoe-print"
                size={50}
                color={COLORS.black}
                style={{
                  marginRight: 20,
                }}
              />
            </View>
          </View>
        </View>

        {/* Third Floor */}
        <View
          style={{
            // flex: 1,
            marginTop: 60,
            backgroundColor: COLORS.white,
            width: 340,
            height: 360,
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: COLORS.black,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 2.46,

            elevation: 30,
          }}
        >
          <View style={{ borderRadius: 20 }}>
            <Image
              source={images.firstmap}
              resizeMode="contain"
              style={{
                width: 320,
                height: 240,
                borderRadius: 20,
                opacity: 0.8,
                margin: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  ...FONTS.h1,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                Third Floor - 3
              </Text>

              <Text
                style={{
                  ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                60 steps from the Entry Gate
              </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="shoe-print"
                size={50}
                color={COLORS.black}
                style={{
                  marginRight: 20,
                }}
              />
            </View>
          </View>
        </View>

        {/* Fourth Floor */}
        <View
          style={{
            // flex: 1,
            marginTop: 60,
            marginBottom: 200,
            backgroundColor: COLORS.white,
            width: 340,
            height: 360,
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: COLORS.black,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 2.46,

            elevation: 30,
          }}
        >
          <View style={{ borderRadius: 20 }}>
            <Image
              source={images.firstmap}
              resizeMode="contain"
              style={{
                width: 320,
                height: 240,
                borderRadius: 20,
                opacity: 0.8,
                margin: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  ...FONTS.h1,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                Fourth Floor - 4
              </Text>

              <Text
                style={{
                  ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                138 steps from the Entry Gate
              </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="shoe-print"
                size={50}
                color={COLORS.black}
                style={{
                  marginRight: 20,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Map;
