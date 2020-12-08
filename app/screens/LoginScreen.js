import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "./../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "./../components/ErrorMessage";
import Screen from "./../components/Screen";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
	return (
		<Screen style={styles.screen}>
			<Image
				style={styles.logo}
				source={require("../assets/logo-red.png")}
			/>

			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({
					handleChange,
					handleSubmit,
					errors,
					setFieldTouched,
					touched,
				}) => (
					<>
						<AppTextInput
							icon="email"
							placeholder="Email"
							autoCapitalize="none"
							keyboardType="email-address"
							autoCorrect={false}
							onBlur={() => setFieldTouched("email")}
							textContentType="emailAddress"
							onChangeText={handleChange("email")}
						/>
						<ErrorMessage
							visible={touched.email}
							error={errors.email}
						/>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							secureTextEntry
							icon="lock"
							placeholder="Password"
							onBlur={() => setFieldTouched("password")}
							textContentType="password"
							onChangeText={handleChange("password")}
						/>
						<ErrorMessage
							visible={touched.password}
							error={errors.password}
						/>
						<AppButton onPress={handleSubmit}>Login</AppButton>
					</>
				)}
			</Formik>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 15,
	},
	logo: { width: 100, height: 100, alignSelf: "center", margin: 50 },
});

export default LoginScreen;
