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

const Schools = () => {
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
                Dilkhush Special schools
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 320,
                  marginTop: 6,
                }}
              >
                Address : juhu Tara Road, Juhu, Mumbai - 400049, Opposite Farm
                Grow
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 4,
                }}
              >
                Special for:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                Schools For Physically Challenged
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Schools For Learning Disabled
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Schools For Mentally Challenged
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 3,
                }}
              >
                Contact no:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                022 26151304
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                022 26188688
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
            height: 520,
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
                Human Development Centre
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 320,
                  marginTop: 6,
                }}
              >
                Address : jF/17, Bussa Apartment, BM Bhargav Road, Santacruz
                West, Mumbai - 400054, Near Khira Industrial Estate
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 4,
                }}
              >
                Special for:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                Counselling Services
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Institutions For Deaf and Dumb
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Institutes For Mentally / Physically Challenged
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 3,
                }}
              >
                Contact no:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                022 26615233
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                91 9967193586
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
            height: 460,
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
                Saraswati mandir school
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 320,
                  marginTop: 6,
                }}
              >
                Address : 135-145, Raja Shivaji Vidyasankul, Dadar East, MUMBAI
                - 400014, Hindu Colony
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 4,
                }}
              >
                Special for:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                Schools For Physically Challenged
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 3,
                }}
              >
                Contact no:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                022 02905665
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                022 2415573
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
            height: 540,
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
                Sai Aashray Special school
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 320,
                  marginTop: 6,
                }}
              >
                Address : Shop No.8, Sony House, Chandavarkar Road, Borivali
                West, Mumbai - 400092, Near Ghantawala Pan Bhandar
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 4,
                }}
              >
                Special for:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                Schools For Learning Disabled
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Schools For Physically Challenged
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Institutes For Mentally Challenged
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Remedial Education Training Services
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 3,
                }}
              >
                Contact no:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                91 9869611271
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                91 7506449945
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
            height: 540,
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
                Jivdani matimad school
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 320,
                  marginTop: 6,
                }}
              >
                Address : 773, Mtnl Marg, Dadar West, Mumbai - 400028, Opposite
                Telephone Exchange and Portuguese Church Lane , Bhantewadi
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 4,
                }}
              >
                Special for:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                Counselling Services
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Remedial Education Training Services
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Institutions For Deaf and Dumb
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Institutes For Mentally / Physically Challenged
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 3,
                }}
              >
                Contact no:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                91 9869611271
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                91 7506449945
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
            height: 540,
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
                Rightway special school
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  width: 320,
                  marginTop: 6,
                }}
              >
                Address : Maruti Cresent, A Wing, 202, Plot No 16, Sector No 14,
                Kalamboli, Navi Mumbai - 410218, Near - D Mart
              </Text>

              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 4,
                }}
              >
                Special for:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                Child Development Centres
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Pediatric Occupational Therapy Doctors
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Institutions For Deaf and Dumb
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Institutes For Mentally / Physically Challenged
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 3,
                }}
              >
                Contact no:
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 2,
                }}
              >
                91 9930818819
              </Text>
              <Text
                style={{
                  // ...FONTS.h3,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                91 7666453575
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Schools;
