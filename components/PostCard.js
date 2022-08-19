import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, dummyData, icons } from "../constants";
import HeaderPost from "./HeaderPost";
import LineDivider from "./LineDivider";

const PostCard = ({ item }) => {
  const [liked, setLiked] = useState(false);

  const likeIcon = item.liked ? "heart" : "heart-outline";
  const likeIconColor = item.liked ? "#2e64e5" : "#333";

  return (
    <View>
      <View style={{}}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              //   marginBottom: 10,
              borderRadius: 20,
              padding: 10,
              backgroundColor: COLORS.lightGray1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Image
                source={dummyData?.myProfile?.profile_image}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 15,
                }}
              />
              {/* Post Header */}
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>{item.userName}</Text>
                <Text>{item.postTime}</Text>
              </View>
            </View>
            {/* Post Image */}
            <View>
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 20,
                  // paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                {item.post}
              </Text>

              {item.postImg !== "none" ? (
                <Image
                  source={item.postImg}
                  style={{
                    width: "100%",
                    height: 250,
                    marginTop: 15,
                    borderRadius: 20,
                  }}
                />
              ) : (
                <LineDivider />
              )}
            </View>
            {/* BUttons WRapper */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  // justifyContent: "center",
                  // alignItems: "center",
                  borderRadius: 5,
                  justifyContent: "space-between",
                  padding: 10,
                  backgroundColor: "#BED1FF",
                }}
                onPress={() => setLiked()}
              >
                <Ionicons
                  name={likeIcon}
                  size={24}
                  style={{
                    color: likeIconColor,
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: COLORS.black,
                    marginLeft: 5,
                  }}
                >
                  Like
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  // justifyContent: "center",
                  // alignItems: "center",
                  borderRadius: 5,
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <Ionicons name="md-chatbubble-outline" size={24} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: COLORS.black,
                    marginLeft: 5,
                  }}
                >
                  Comment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
