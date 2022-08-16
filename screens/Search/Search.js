import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";

const Search = () => {
  const navigation = useNavigation();

  function renderSearchBar() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginBottom: 20,
          paddingHorizontal: SIZES.radius,
          borderRadius: 15,
          backgroundColor: COLORS.white,
          shadowColor: COLORS.black,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 1,
          shadowRadius: 5.46,
          elevation: 32,
        }}
        onPress={() => navigation.navigate("Search")}
      >
        <Ionicons
          name="ios-chevron-back"
          size={25}
          color={COLORS.gray2}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={{
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search for library , canteen and more"
        />
      </TouchableOpacity>
    );
  }

  function renderTrendingSearch() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "flex-start",
            // padding: 20,
            marginLeft: 30,
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              ...FONTS.h2,
              color: COLORS.black,
            }}
          >
            Trending Searches
          </Text>
          <Feather
            name="trending-up"
            size={25}
            style={{
              color: COLORS.black,
              marginLeft: 10,
              // marginTop: 5,
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            // marginTop: 40,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            padding: 20,
            height: 80,
            width: SIZES.width * 0.85,
            marginTop: 20,
            marginLeft: 30,
            marginRight: SIZES.padding,
            paddingRight: SIZES.radius,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.55,
            shadowRadius: 3.84,

            elevation: 30,
          }}
        >
          <View style={{}}>
            <Feather
              name="trending-up"
              size={25}
              color={COLORS.gray2}
              style={{
                width: 50,
                height: 50,
                borderRadius: 40,
                paddingLeft: 12,
                padding: 10,
                backgroundColor: COLORS.lightGray2,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                fontSize: 18,
                fontWeight: "bold",
                color: COLORS.gray,
              }}
            >
              Library
            </Text>
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              33 steps ahead from 3rd Floor
            </Text>
          </View>
        </TouchableOpacity>

        {/* Canteen */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            // marginTop: 40,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            padding: 20,
            height: 80,
            width: SIZES.width * 0.85,
            marginTop: 20,
            marginLeft: 30,
            marginRight: SIZES.padding,
            paddingRight: SIZES.radius,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.55,
            shadowRadius: 3.84,

            elevation: 30,
          }}
        >
          <View style={{}}>
            <Feather
              name="trending-up"
              size={25}
              color={COLORS.gray2}
              style={{
                width: 50,
                height: 50,
                borderRadius: 40,
                paddingLeft: 12,

                padding: 10,
                backgroundColor: COLORS.lightGray2,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                fontSize: 18,
                fontWeight: "bold",
                color: COLORS.gray,
              }}
            >
              Canteen
            </Text>
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              110 steps ahead Ground Floor
            </Text>
          </View>
        </TouchableOpacity>

        {/* IT Lab */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            // marginTop: 40,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            padding: 20,
            height: 80,
            width: SIZES.width * 0.85,
            marginTop: 20,
            marginLeft: 30,
            marginRight: SIZES.padding,
            paddingRight: SIZES.radius,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.55,
            shadowRadius: 3.84,

            elevation: 30,
          }}
        >
          <View style={{}}>
            <Feather
              name="trending-up"
              size={25}
              color={COLORS.gray2}
              style={{
                width: 50,
                height: 50,
                borderRadius: 40,
                paddingLeft: 12,

                padding: 10,
                backgroundColor: COLORS.lightGray2,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                fontSize: 18,
                fontWeight: "bold",
                color: COLORS.gray,
              }}
            >
              IT Lab
            </Text>
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              16 steps ahead Third Floor
            </Text>
          </View>
        </TouchableOpacity>

        {/* Admin Lab */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            // marginTop: 40,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            padding: 20,
            height: 80,
            width: SIZES.width * 0.85,
            marginTop: 20,
            marginLeft: 30,
            marginRight: SIZES.padding,
            paddingRight: SIZES.radius,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.55,
            shadowRadius: 3.84,

            elevation: 30,
          }}
        >
          <View style={{}}>
            <Feather
              name="trending-up"
              size={25}
              color={COLORS.gray2}
              style={{
                width: 50,
                height: 50,
                borderRadius: 40,
                paddingLeft: 12,

                padding: 10,
                backgroundColor: COLORS.lightGray2,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                fontSize: 18,
                fontWeight: "bold",
                color: COLORS.gray,
              }}
            >
              Admin Office
            </Text>
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              16 steps ahead Third Floor
            </Text>
          </View>
        </TouchableOpacity>

        {/* AV Room Lab */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            // marginTop: 40,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            padding: 20,
            height: 80,
            width: SIZES.width * 0.85,
            marginTop: 20,
            marginLeft: 30,
            marginRight: SIZES.padding,
            paddingRight: SIZES.radius,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.55,
            shadowRadius: 3.84,

            elevation: 30,
          }}
        >
          <View style={{}}>
            <Feather
              name="trending-up"
              size={25}
              color={COLORS.gray2}
              style={{
                width: 50,
                height: 50,
                borderRadius: 40,
                paddingLeft: 12,

                padding: 10,
                backgroundColor: COLORS.lightGray2,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                fontSize: 18,
                fontWeight: "bold",
                color: COLORS.gray,
              }}
            >
              AV Room
            </Text>
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              16 steps ahead Third Floor
            </Text>
          </View>
        </TouchableOpacity>

        {/* Sports Dept */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            // marginTop: 40,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            padding: 20,
            height: 80,
            width: SIZES.width * 0.85,
            marginTop: 20,
            marginLeft: 30,
            marginRight: SIZES.padding,
            paddingRight: SIZES.radius,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.55,
            shadowRadius: 3.84,

            elevation: 30,
          }}
        >
          <View style={{}}>
            <Feather
              name="trending-up"
              size={25}
              color={COLORS.gray2}
              style={{
                width: 50,
                height: 50,
                borderRadius: 40,
                paddingLeft: 12,

                padding: 10,
                backgroundColor: COLORS.lightGray2,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                fontSize: 18,
                fontWeight: "bold",
                color: COLORS.gray,
              }}
            >
              Sports Department
            </Text>
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              16 steps ahead Third Floor
            </Text>
          </View>
        </TouchableOpacity>

        {/* Boys Common Room */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            // marginTop: 40,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            padding: 20,
            height: 80,
            width: SIZES.width * 0.85,
            marginTop: 20,
            marginLeft: 30,
            marginRight: SIZES.padding,
            paddingRight: SIZES.radius,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.55,
            shadowRadius: 3.84,

            elevation: 30,
          }}
        >
          <View style={{}}>
            <Feather
              name="trending-up"
              size={25}
              color={COLORS.gray2}
              style={{
                width: 50,
                height: 50,
                borderRadius: 40,
                paddingLeft: 12,

                padding: 10,
                backgroundColor: COLORS.lightGray2,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                fontSize: 18,
                fontWeight: "bold",
                color: COLORS.gray,
              }}
            >
              Boys Common Room
            </Text>
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              16 steps ahead Third Floor
            </Text>
          </View>
        </TouchableOpacity>

        {/* 201 ClassRoom */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            // marginTop: 40,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            padding: 20,
            height: 80,
            width: SIZES.width * 0.85,
            marginTop: 20,
            marginLeft: 30,
            marginBottom: 80,
            marginRight: SIZES.padding,
            paddingRight: SIZES.radius,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.55,
            shadowRadius: 3.84,

            elevation: 30,
          }}
        >
          <View style={{}}>
            <Feather
              name="trending-up"
              size={25}
              color={COLORS.gray2}
              style={{
                width: 50,
                height: 50,
                borderRadius: 40,
                paddingLeft: 12,

                padding: 10,
                backgroundColor: COLORS.lightGray2,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                fontSize: 18,
                fontWeight: "bold",
                color: COLORS.gray,
              }}
            >
              201 ClassRoom
            </Text>
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              16 steps ahead Third Floor
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <View
      style={{
        marginTop: 60,
      }}
    >
      {/* Search Bar */}
      {renderSearchBar()}

      {/* Search Fields */}
      {renderTrendingSearch()}
    </View>
  );
};

export default Search;

// Ground floor : Gymnasium, Auditorium, Canteen, Sports Dept
// First Floor: Admin Office, AV Room, Staff Room, Principal's Office
// Second Floor: Boys Common Room, Women Development Cell, 201 Classroom
// Third Floor: IT Lab, Girls Common Room
// Fourth Lab: Library, IT Lab
