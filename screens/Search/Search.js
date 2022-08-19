import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
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
      </ScrollView>
    );
  }

  function renderCard() {
    return (
      <>
        <TouchableOpacity
          style={{
            height: 100,
            backgroundColor: COLORS.lightGray1,
            // padding: 20,
            margin: 20,
            borderRadius: 20,
            flexDirection: "row",
          }}
        >
          <Image
            source={icons.bus}
            style={{
              height: 100,
              width: 100,
              marginLeft: 10,
            }}
          />

          <View
            style={{
              flex: 1,
              marginLeft: 20,
              paddingTop: 16,
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                fontSize: 17,
                fontWeight: "bold",
                color: COLORS.black,
              }}
            >
              Nearby Bus Stops
            </Text>

            <Text
              style={{
                color: COLORS.darkGray2,
              }}
            >
              Andheri East, Tolani, Takshila
            </Text>
            <Text
              style={{
                marginTop: SIZES.base,
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              392 , 339, 308
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 100,
            backgroundColor: COLORS.lightGray1,
            // padding: 20,
            margin: 20,
            borderRadius: 20,
            flexDirection: "row",
            marginTop: -10,
          }}
        >
          <Image
            source={icons.train}
            style={{
              height: 100,
              width: 100,
              marginLeft: 10,
            }}
          />

          <View
            style={{
              flex: 1,
              marginLeft: 20,
              paddingTop: 16,
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                fontSize: 17,
                fontWeight: "bold",
                color: COLORS.black,
              }}
            >
              Railway Stations
            </Text>

            <Text
              style={{
                color: COLORS.darkGray2,
              }}
            >
              Andheri, Jogeshwari
            </Text>
            <Text
              style={{
                marginTop: SIZES.base,
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Local Metro
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 100,
            backgroundColor: COLORS.lightGray1,
            // padding: 20,
            margin: 20,
            marginTop: -10,
            borderRadius: 20,
            flexDirection: "row",
          }}
        >
          <Image
            source={icons.school}
            style={{
              height: 100,
              width: 100,
              marginLeft: 10,
            }}
          />

          <View
            style={{
              flex: 1,
              marginLeft: 20,
              paddingTop: 16,
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                fontSize: 17,
                fontWeight: "bold",
                color: COLORS.black,
              }}
            >
              Schools Near by
            </Text>

            <Text
              style={{
                color: COLORS.darkGray2,
              }}
            >
              Andheri East, Tolani, Takshila
            </Text>
            <Text
              style={{
                marginTop: SIZES.base,
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Dominic, Holy Family
            </Text>
          </View>
        </TouchableOpacity>
      </>
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

      {/* Location Cards */}
      {renderCard()}
    </View>
  );
};

export default Search;

// Ground floor : Gymnasium, Auditorium, Canteen, Sports Dept
// First Floor: Admin Office, AV Room, Staff Room, Principal's Office
// Second Floor: Boys Common Room, Women Development Cell, 201 Classroom
// Third Floor: IT Lab, Girls Common Room
// Fourth Lab: Library, IT Lab
