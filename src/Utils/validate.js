export const checkValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /^[a-zA-Z ]{2,40}$/.test(name);

  if (!isEmailValid)
    return "Please enter a valid email address or phone number.";

  if (!isPasswordValid)
    return "Your password must contain between 4 and 60 characters.";
  if (!isNameValid) return " Please enter valid user name";

  return null;
};
