/**
 * @param birthdayDate - birthday date string in YYYY-MM-DD format
 */
export const getAge = (birthdayDateString) => {
  const today = new Date();
  const birthday = new Date(birthdayDateString);

  const todayYear = today.getFullYear();
  const birthdayYear = birthday.getFullYear();

  const todayMonth = today.getMonth();
  const birthdayMonth = birthday.getMonth();

  const todayDate = today.getDate();
  const birthdayDate = birthday.getDate();

  if (
    todayMonth < birthdayMonth ||
    (todayMonth === birthdayMonth && todayDate < birthdayDate)
  ) {
    return todayYear - birthdayYear - 1;
  } else {
    return todayYear - birthdayYear;
  }
};
