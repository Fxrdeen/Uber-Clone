import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { selectTravelTimeInformation } from "../slices/navSlice";
import { useSelector } from "react-redux";
const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-X-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-X-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];
const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeinfo = useSelector(selectTravelTimeInformation);
  const surge_rate = 1.5;
  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <TouchableOpacity
          className="absolute top-3 z-50 left-5 p-3 rounded-full"
          onPress={() => navigation.navigate("navCard")}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select A Ride - {travelTimeinfo?.distance.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`flex-row items-center justify-between px-10 ${
              item.id === selected?.id && "bg-gray-200"
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <View className="-ml-6">
              <Text className="text-xl font-semibold">{item.title}</Text>
              <Text>{travelTimeinfo?.duration.text} </Text>
            </View>
            <Text className="text-xl">
              Rs .{" "}
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(
                (travelTimeinfo?.duration.value *
                  surge_rate *
                  item.multiplier) /
                  10
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View className="mt-auto border-t border-red-200">
        <TouchableOpacity
          className={`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
          disabled={!selected}
        >
          <Text className="text-center text-white text-xl">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;
