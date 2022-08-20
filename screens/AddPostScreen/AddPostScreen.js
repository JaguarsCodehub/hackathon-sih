import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import TabNavigator from "../../navigation/TabNavigator";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

const AddPostScreen = () => {
  return (
    <View>
      {/* Header Component */}
      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Add Post
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("AddPostScreen")}>
          <AntDesign name="plussquare" size={30} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View
        style={{
          //   flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 690,
          backgroundColor: "#BED1FF",
        }}
      >
        <TextInput
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            textAlign: "center",
            width: "90%",
          }}
          placeholder="What's on your Mind ?"
          multiline
          numberOfLines={4}
        />
      </View>
      {/* <TabNavigator /> */}
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={() => console.log("notes tapped!")}
        >
          <Icon name="camera" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose from Gallery"
          onPress={() => {}}
        >
          <Icon name="phone-landscape" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="All Tasks"
          onPress={() => {}}
        >
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
