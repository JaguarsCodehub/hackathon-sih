import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FONTS, COLORS, SIZES } from "../constants/theme";
import { dummyData } from "../constants";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Header = ({
  containerStyle,
  title,
  leftComponent,
  rightComponent,
  descriptionStyle,
  nameStyle,
  iconStyle,
  arrowStyle,
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginTop: 40,
        flexDirection: "row",
        marginHorizontal: SIZES.padding,
        alignItems: "center",
        height: 80,
      }}
      accessible={true}
      accessibilityLabel="This is the Header Component"
    >
      {/* Text */}
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="location-arrow"
            size={18}
            color="#FF6D6D"
            style={{ ...iconStyle }}
          />
          <Text
            style={{
              color: "#262626",
              fontSize: 22,
              fontWeight: "bold",
              paddingLeft: 10,
              ...nameStyle,
            }}
            accessible={true}
            accessibilityLabel="Tolani College of Commerce, Andheri"
          >
            HomePage
          </Text>
          <Entypo
            name="chevron-down"
            size={20}
            color="#8B8B8B"
            style={{ paddingLeft: 10, ...arrowStyle }}
          />
        </View>
        <Text
          style={{
            marginTop: 3,
            ...FONTS.body3,
            ...descriptionStyle,
          }}
        >
          Tolani College of Commerce, Sher E ...
        </Text>
      </View>

      {/* Image */}
      <TouchableOpacity onPress={() => navigation.navigate("Post")}>
        <Image
          source={dummyData?.myProfile?.profile_image}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
