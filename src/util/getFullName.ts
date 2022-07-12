export const getFullName = (firstName: string, lastName: string) => {
  const trimmedFirstName = firstName === null ? "" : firstName;
  const trimmedLastName = lastName === null ? "" : lastName;
  return trimmedFirstName + " " + trimmedLastName;
};
