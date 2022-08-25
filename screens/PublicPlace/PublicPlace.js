import react, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const PublicPlace = () => {
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
            height: 500,
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
                Mahakali caves
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 300,
                  marginTop: 6,
                }}
              >
                Address : Mahakali Caves Rd, Sunder Nagar, Andheri East, Mumbai,
                Maharashtra, 400093
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 5,
                }}
              >
                Time To Visit : 08:00 am - 05:00 pm
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 300,
                  marginTop: 5,
                }}
              >
                Information : The Mahakali Caves, also Kondivite Caves, are a
                group of 19 rock-cut monuments built between 1st century BCE and
                6th century CE. Kondivite Caves, Cave 2.
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 300,
                  marginTop: 5,
                  color: "blue",
                }}
              >
                {" "}
                <Text
                  style={styles.hyperlinkStyle}
                  onPress={() => {
                    Linking.openURL(
                      "https://en.wikipedia.org/wiki/Mahakali_Caves"
                    );
                  }}
                >
                  Click Here For More Information...
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>

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
            height: 530,
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
                Shahid Hemant Karkarey Udyan
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 300,
                  marginTop: 6,
                }}
              >
                Address : Opposite BUILDING NO.5, Darshan -II Co-operative HSG
                Society, Poonam Nagar, Jogeshwari East, Mumbai, Maharashtra
                400093
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 5,
                }}
              >
                Time To Visit : 5am – 12pm, 4pm – 9pm
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 300,
                  marginTop: 5,
                }}
              >
                Information : Shahid Hemant Karkarey Udyan has been devloped in
                honour of Shahid chief of the Mumbai Anti-Terrorist Shri Squad
                Hemant Karkarey
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 300,
                  marginTop: 5,
                  color: "blue",
                }}
              >
                {" "}
                <Text
                  style={styles.hyperlinkStyle}
                  onPress={() => {
                    Linking.openURL(
                      "https://en.wikipedia.org/wiki/Hemant_Karkare"
                    );
                  }}
                >
                  Click Here For More Information...
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>

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
            height: 530,
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
                Jogeshwari Caves
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 300,
                  marginTop: 6,
                }}
              >
                Address : 4VQ4+HVC, Gupha Tekdi, Jogeshwari West, Mumbai,
                Maharashtra 400060
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 5,
                }}
              >
                Time To Visit : 6am–1pm, 4:30–9pm
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 300,
                  marginTop: 5,
                }}
              >
                Information : The Jogeshwari Caves are some of the earliest
                Buddhist cave temples sculptures located in the Mumbai suburb of
                Jogeshwari, India.
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 300,
                  marginTop: 5,
                  color: "blue",
                }}
              >
                {" "}
                <Text
                  style={styles.hyperlinkStyle}
                  onPress={() => {
                    Linking.openURL(
                      "https://en.wikipedia.org/wiki/Jogeshwari_Caves"
                    );
                  }}
                >
                  Click Here For More Information...
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>

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
            height: 530,
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
                Chhatrapati Shivaji Udyan Park
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 300,
                  marginTop: 6,
                }}
              >
                Address : Near Vastu Enclave, Pump House, 400093, Parsi Colony,
                Jogeshwari East, Mumbai, Maharashtra 400060
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 5,
                }}
              >
                Time To Visit : 6am–7pm
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 300,
                  marginTop: 5,
                }}
              >
                Information : Chhatrapati Shivaji Udyan Park Is Built In Honour
                of Great Indian Ruler Chhatrapati Shivaji Maharaj
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 300,
                  marginTop: 5,
                  color: "blue",
                }}
              >
                {" "}
                <Text
                  style={styles.hyperlinkStyle}
                  onPress={() => {
                    Linking.openURL("https://en.wikipedia.org/wiki/Shivaji");
                  }}
                >
                  Click Here For More Information...
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PublicPlace;

const styles = StyleSheet.create({
  hyperlinkStyle: {
    color: "blue",
  },
});
