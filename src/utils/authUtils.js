export const refreshTokens = async () => {
  const refreshToken = storage.getString("refreshToken");

  if (refreshToken) {
    const url = `https://api.myburda.com/api/v1/jwt/refresh/`;
    const body = JSON.stringify({ refresh: refreshToken });

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
      });
      const data = await response.json();

      if (response.ok) {
        storage.set("accessToken", data.access);
        return true;
      } else {
        const selectedLanguage = storage.getString("selectedLanguage");
        alert(
          selectedLanguage === "en"
            ? "Session expired, please sign in again"
            : selectedLanguage === "az"
            ? "Sessiyanın vaxtı bitdi, zəhmət olmasa yenidən daxil olun"
            : "Срок сеанса истек, пожалуйста, войдите снова"
        );
        storage.clearAll();
      }
    } catch (error) {
      // console.error('Error on refreshTokens', error);
    }
  }
};

export const login = async ({ formData, setErrors }) => {
  const url = `${API_URL}/jwt/create/`;

  try {
    if (formData.email && formData.password) {
      storage.set("loading", true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        storage.set("accessToken", data.access);
        storage.set("refreshToken", data.refresh);
      } else {
        setErrors(data.error);
      }
    } else {
      const selectedLanguage = storage.getString("selectedLanguage");
      selectedLanguage === "az"
        ? alert("Xəta", "İstifadəçi adı və ya parol boş ola bilməz")
        : selectedLanguage === "en"
        ? alert("Error", "Username or password cannot be empty")
        : alert("Ошибка", "Имя пользователя или пароль не могут быть пустыми");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    storage.set("loading", false);
  }
};

export const logout = () => {
  storage.clearAll();
};
