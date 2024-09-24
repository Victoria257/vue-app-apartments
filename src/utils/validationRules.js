export const isRequired = (val) => ({
  hasPassed: typeof val === "string" && !!val.trim(),
  message: "Будь ласка, заповніть це поле.",
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "Ви перевищили ліміт.",
});

export const emailValidation = (val) => ({
  hasPassed:
    typeof val === "string" &&
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: "невірний емайл.",
});

export const passwordValidation = (val) => ({
  hasPassed:
    typeof val === "string" &&
    /^(?=.*[A-Za-z])(?=.*[\d])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,256}$/.test(
      val
    ),

  message:
    "Пароль має бути не менше 7 символів і включати одну цифру і один символ.",
});
