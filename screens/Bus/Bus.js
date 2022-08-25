import react, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Bus = () => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#dadada",
        }}
      >
        <View
          style={{
            // flex: 1,
            marginTop: 60,
            backgroundColor: "#fff",
            width: 340,
            height: 450,
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 4,
              padding: 10,
            },
            shadowOpacity: 0.32,
            shadowRadius: 2.46,

            elevation: 30,
          }}
          accessible={true}
          accessibilityLabel="Tolani College Naka"
          accessibilityHint="Busses: 339"
        >
          <View style={{ borderRadius: 20 }}>
            <Image
              source={require("../../assets/images/image1.png")}
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
                  // ...FONTS.h1,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 10,
                  fontSize: 20,
                }}
              >
                Tolani Naka Bus-stop
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 350,
                  marginTop: 3,
                }}
              >
                Address : Guru Gobind Singh Marg, Madhukunj Society, Sher E
                Punjab Colony, Jogeshwari East, Mumbai, Maharashtra 400093
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 3,
                }}
              >
                Busses:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                339 Timing : 06:56, 12:52
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                392 Timing : 07:00, 12:57
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // flex: 1,
            marginTop: 60,
            backgroundColor: "#fff",
            width: 340,
            height: 450,
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 2.46,

            elevation: 30,
          }}
          accessible={true}
          accessibilityLabel="Tolani College Bus-Stop"
          accessibilityHint="Busses: 339"
        >
          <View style={{ borderRadius: 20 }}>
            <Image
              source={require("../../assets/images/image1.png")}
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
                  // ...FONTS.h1,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 10,
                  fontSize: 20,
                }}
              >
                Tolani College Bus-Stop
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 340,
                  marginTop: 2,
                }}
              >
                Address : Madhukunj Society, Sher E Punjab Colony, Andheri East,
                Mumbai, Maharashtra 400093
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 3,
                }}
              >
                Busses:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                339 Timing : 06:53, 12:48
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                392 Timing : 06:17, 01:00
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // flex: 1,
            marginTop: 60,
            backgroundColor: "#fff",
            width: 340,
            height: 450,
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 4,
              padding: 10,
            },
            shadowOpacity: 0.32,
            shadowRadius: 2.46,

            elevation: 30,
          }}
          accessible={true}
          accessibilityLabel="Tolani College Naka"
          accessibilityHint="Busses: 339"
        >
          <View style={{ borderRadius: 20 }}>
            <Image
              source={require("../../assets/images/image1.png")}
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
                  // ...FONTS.h1,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 10,
                  fontSize: 20,
                }}
              >
                Dominic Bus-Stop
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 320,
                  marginTop: 3,
                }}
              >
                Address : Sher E Punjab Colony,Opposite Dominic School, Andheri
                East, Mumbai, Maharashtra 400093
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 3,
                }}
              >
                Busses:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                339 Timing : 06:49, 12:45
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                392 Timing : 06:13, 12:56
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            // flex: 1,
            marginTop: 60,
            backgroundColor: "#fff",
            width: 340,
            height: 450,
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 4,
              padding: 10,
            },
            shadowOpacity: 0.32,
            shadowRadius: 2.46,

            elevation: 30,
          }}
          accessible={true}
          accessibilityLabel="Tolani College Naka"
          accessibilityHint="Busses: 339"
        >
          <View style={{ borderRadius: 20 }}>
            <Image
              source={require("../../assets/images/image1.png")}
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
                  // ...FONTS.h1,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 10,
                  fontSize: 20,
                }}
              >
                Holy Spirit Bus-Stop
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 320,
                  marginTop: 3,
                }}
              >
                Address :Sunder Nagar, Jogeshwari East, Mumbai, Maharashtra
                400093
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 3,
                }}
              >
                Busses:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                332 Timing : 06:40, 12:30
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                333 Timing : 06:24, 01:04
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                410 Timing : 07:25, 01:00
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                226 Timing : 07:07, 12:50
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            // flex: 1,
            marginTop: 60,
            backgroundColor: "#fff",
            width: 340,
            height: 462,
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 4,
              padding: 10,
            },
            shadowOpacity: 0.32,
            shadowRadius: 2.46,

            elevation: 30,
          }}
          accessible={true}
          accessibilityLabel="Tolani College Naka"
          accessibilityHint="Busses: 339"
        >
          <View style={{ borderRadius: 20 }}>
            <Image
              source={require("../../assets/images/image1.png")}
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
                  // ...FONTS.h1,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 10,
                  fontSize: 20,
                }}
              >
                Canossa School Bus-Stop
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 310,
                  marginTop: 3,
                }}
              >
                Address :Sher E Punjab Colony,Opposite Canossa School, Andheri
                East, Mumbai, Maharashtra 4000933
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 3,
                }}
              >
                Busses:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                332 Timing : 06:34, 12:23
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                333 Timing : 06:28, 01:09
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                410 Timing : 07:20, 12:57
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                226 Timing : 07:02, 12:45
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Bus;
