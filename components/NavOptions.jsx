import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { setOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";
const data = [
  {
    id: "123",
    title: "Get a Ride",
    image: "https://links.papareact.com/3pn",
    screen: "Mapscreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const origin = useSelector(setOrigin);
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          disabled={!origin}
          className="p-3 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          onPress={() => navigation.navigate(item.screen)}
        >
          <View style={`${!origin}` && "opacity-20"}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120 }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon
              style={{
                padding: 2,
                backgroundColor: "black",
                borderRadius: 200,
                width: 60,
                marginTop: 20,
              }}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NavOptions;
