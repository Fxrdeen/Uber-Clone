import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Unity Homes, Anugraha Layout",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "PESECC",
  },
];

const NavFavourite = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View className="bg-gray-200" style={{ height: 0.5 }} />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            style={{
              marginRight: 1,
              borderRadius: 100,
              backgroundColor: "lightgray",
              padding: 10,
            }}
            name={item.icon}
            type="ionicon"
            color={"white"}
            size={18}
          />
          <View className="p-1">
            <Text className="font-semibold text-lg">{item.location}</Text>
            <Text className="text-gray-500">{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourite;
