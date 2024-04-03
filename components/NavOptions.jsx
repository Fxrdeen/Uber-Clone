import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const data = [
  {
    id: "123",
    title: "Get a Ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity className="p-3 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40">
          <View>
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
