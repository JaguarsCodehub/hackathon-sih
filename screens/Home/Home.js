import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import {
  Header,
  HorizontalFoodCard,
  SearchBar,
  VerticalFoodCard,
} from "../../components";
import {
  COLORS,
  dummyData,
  FONTS,
  icons,
  images,
  SIZES,
} from "../../constants";

const Section = ({ title, onPress, children }) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            flex: 1,
            ...FONTS.h3,
          }}
        >
          {title}
        </Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>

      {children}
    </View>
  );
};

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [selectedMenuType, setSelectedMenuType] = React.useState(1);
  const [popular, setPopluar] = React.useState([]);
  const [recommends, setRecommends] = React.useState([]);
  const [menuList, setMenuList] = React.useState([]);

  React.useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  // Handler
  function handleChangeCategory(categoryId, menuTypeId) {
    // Retrieve the Floor Details
    let selectedPopular = dummyData.menu.find((a) => a.name == "Popular");

    // Retrieve the recommended menu
    let selectedRecommend = dummyData.menu.find((a) => a.name == "Recommended");

    // Find the menu based on the menuTypeId
    let selectedMenu = dummyData.menu.find((a) => a.id == menuTypeId);

    // Set the popular menu based on the categoryId
    setPopluar(
      selectedPopular?.list.filter((a) => a.categories.includes(categoryId))
    );

    // Set the recommended menu based on the categoryId
    setRecommends(
      selectedRecommend?.list.filter((a) => a.categories.includes(categoryId))
    );

    // Set the menu based on the categoryId
    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );
  }

  function renderRecommendedSection() {
    return (
      <Section title="Recommended Maps" onPress={() => console.log(recommends)}>
        <FlatList
          data={recommends}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <HorizontalFoodCard
              containerStyle={{
                height: 180,

                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: "center",
              }}
              imageStyle={{
                // marginTop: 35,
                height: 120,
                width: 120,
              }}
              item={item}
              onPress={() => console.log("HORIZONTAL")}
            />
          )}
        />
      </Section>
    );
  }

  function renderMenuTypes() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight:
                index == dummyData.menu.length - 1 ? SIZES.padding : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCategoryId, item.id);
            }}
          >
            <Text
              style={{
                color:
                  selectedMenuType == item.id ? COLORS.primary : COLORS.gray,
                ...FONTS.h3,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  function renderFloorDetails() {
    return (
      <Section
        title="Popular Near You"
        onPress={() => console.log("SHOW ALL POPULAR ITEMS")}
      >
        <FlatList
          data={popular}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <VerticalFoodCard
              containerStyle={{
                marginLeft: index == 0 ? SIZES.padding : 18,
                padding: 18,
                marginRight: index == popular.length - 1 ? SIZES.padding : 0,
              }}
              item={item}
              onPress={() => console.log("POPULAR")}
            />
          )}
        />
      </Section>
    );
  }

  function renderFloorCategory() {
    return (
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 55,
              alignItems: "center",
              justifyContent: "center",
              marginTop: SIZES.padding,
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index == dummyData.categories.length - 1 ? SIZES.padding : 0,
              paddingHorizontal: 8,
              borderRadius: SIZES.radius,
              backgroundColor:
                selectedCategoryId == item.id
                  ? COLORS.lightGreen1
                  : COLORS.lightGray1,
            }}
            onPress={() => {
              setSelectedCategoryId(item.id);
              handleChangeCategory(item.id, selectedMenuType);
            }}
          >
            <Image
              source={item.icon}
              style={{
                // marginTop: 5,
                height: 40,
                width: 40,
                marginRight: 10,
                marginLeft: 5,
              }}
            />

            <Text
              style={{
                alignSelf: "center",
                marginRight: SIZES.base,
                fontWeight: "bold",
                color:
                  selectedCategoryId == item.id
                    ? COLORS.white
                    : COLORS.darkGray,
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  return (
    <>
      <Header />
      {/* Search */}
      <View
        style={{
          marginBottom: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 1,
          shadowRadius: 40.0,

          elevation: 60,
        }}
      >
        <SearchBar />
      </View>

      <ScrollView
        style={{
          backgroundColor: COLORS.white,
        }}
      >
        {/* List */}
        <FlatList
          data={menuList}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              {/* Render Floor Category */}
              {renderFloorCategory()}

              {/* Popular Section */}
              {renderFloorDetails()}

              {/* Recommended */}
              {renderRecommendedSection()}

              {/* Menu Types */}
              {renderMenuTypes()}
            </View>
          }
          renderItem={({ item, index }) => {
            return (
              <HorizontalFoodCard
                containerStyle={{
                  height: 130,
                  alignItems: "center",
                  marginHorizontal: SIZES.padding,
                  marginBottom: SIZES.radius,
                }}
                imageStyle={{
                  marginTop: 20,
                  height: 110,
                  width: 110,
                }}
                item={item}
                onPress={() => console.log("Horizontal FOodcArd")}
              />
            );
          }}
        />
        <View
          style={{
            flex: 1,
            marginTop: 60,
            backgroundColor: COLORS.white,
            width: 340,
            height: 480,
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: COLORS.gray,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 2.46,

            elevation: 9,
          }}
        >
          <View style={{ borderRadius: 20 }}>
            <Image
              source={images.map1}
              style={{
                width: 340,
                height: 240,
                borderRadius: 20,
                opacity: 0.8,
              }}
            />
          </View>
          <View
            style={{
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: COLORS.orange,
              }}
            >
              Fantastic eats and where to find them!
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 18,
                fontWeight: "600",
                color: COLORS.black,
              }}
            >
              Cusines from around the world
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderColor: COLORS.lightOrange2,
              borderWidth: 2,
              borderRadius: 18,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              marginHorizontal: 12,
              marginTop: 12,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: COLORS.gray,
                marginLeft: 5,
              }}
            >
              Explore Maps
            </Text>
            <Image
              source={icons.cherry}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: COLORS.orange,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* 2ND CARD */}
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            width: 340,
            height: 480,
            alignSelf: "center",
            borderRadius: 20,
            marginTop: 30,
            shadowColor: COLORS.gray,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 2.46,

            elevation: 9,
          }}
        >
          <View style={{ backgroundColor: COLORS.primary, borderRadius: 20 }}>
            <Image
              source={images.map2}
              style={{
                width: 340,
                height: 240,
                borderRadius: 20,
              }}
            />
          </View>
          <View
            style={{
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: COLORS.orange,
              }}
            >
              Fantastic eats and where to find them!
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 18,
                fontWeight: "600",
                color: COLORS.black,
              }}
            >
              Cusines from around the world
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderColor: COLORS.lightOrange2,
              borderWidth: 2,
              borderRadius: 18,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              marginHorizontal: 12,
              marginTop: 12,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: COLORS.gray,
                marginLeft: 5,
              }}
            >
              Explore Maps
            </Text>
            <Image
              source={icons.cherry}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: COLORS.orange,
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
