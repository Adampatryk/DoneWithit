import React, { useState } from "react";
import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({ items, icon, placeholder, onSelectItem, selectedItem }) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colours.medium}
							style={styles.icon}
						/>
					)}
					<AppText style={[defaultStyles.text, styles.text]}>
						{selectedItem ? selectedItem.label : placeholder}
					</AppText>
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={defaultStyles.colours.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Button
					title={"Close"}
					onPress={() => setModalVisible(false)}
				></Button>
				<FlatList
					data={items}
					keyExtractor={(item) => item.value}
					renderItem={({ item }) => (
						<PickerItem
							label={item.label}
							onPress={() => {
								setModalVisible(false);
								onSelectItem(item);
							}}
						/>
					)}
				/>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colours.light,
		flexDirection: "row",
		borderRadius: 15,
		width: "100%",
		padding: 15,
		marginVertical: 10,
		alignItems: "center",
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
});

export default AppPicker;
