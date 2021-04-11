import * as yup from "yup";

export const signinFormSchema = yup.object().shape({
	email: yup.string().required("Email is required.").email(),
	password: yup.string().required("Password is required."),
});

export const createUserFormSchema = yup.object().shape({
	name: yup.string().required("Name is required."),
	email: yup.string().required("Email is required.").email(),
	password: yup
		.string()
		.required("Password is required.")
		.min(6, "Password needs at least 6 characters"),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref("password")], "Passwords need to match"),
});
