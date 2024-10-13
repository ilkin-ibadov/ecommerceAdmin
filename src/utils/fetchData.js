import { refreshTokens } from "./authUtils";

const fetchAgain = async ({
  url,
  tokenRequired,
  method = "GET",
  body = null,
  returnsData = true,
}) => {
  try {
    storage.set("loading", true);

    const headers = {
      Accept: "application/json",
      ...((method === "POST" || method === "PUT" || method === "PATCH") && {
        "Content-Type": "application/json",
      }),
      ...(tokenRequired && {
        Authorization: `Bearer ${storage.getString("accessToken")}`,
      }),
    };

    const options = {
      headers,
      method,
      ...(body && { body: JSON.stringify(body) }),
    };

    const response = await fetch(url, options);
    const data = returnsData ? await response?.json() : null;

    if (response.ok) {
      return {
        success: true,
        status: response.status,
        data: data,
      };
    } else {
      console.error(`Fetch error: ${response.status} ${response.statusText}`);

      return {
        success: false,
        status: response.status,
        error: data.error,
      };
    }
  } catch (error) {
    console.error("Error in fetchData:", error);
  } finally {
    storage.set("loading", false);
  }
};

export const fetchData = async ({
  url,
  tokenRequired,
  method = "GET",
  body = null,
  returnsData = true,
  // calledFrom,
}) => {
  try {
    storage.set("loading", true);

    const headers = {
      Accept: "application/json",
      ...((method === "POST" || method === "PUT" || method === "PATCH") && {
        "Content-Type": "application/json",
      }),
      ...(tokenRequired && {
        Authorization: `Bearer ${storage.getString("accessToken")}`,
      }),
    };

    const options = {
      headers,
      method,
      ...(body && { body: JSON.stringify(body) }),
    };

    const response = await fetch(url, options);
    const data = returnsData ? await response?.json() : null;

    // console.log(
    //   `Data from ${calledFrom} \n Url: ${url} \n Options: ${JSON.stringify(
    //     options,
    //   )} \n Result: ${JSON.stringify(data)}`,
    // );

    if (response.ok) {
      return {
        success: true,
        status: response.status,
        data: data,
      };
    } else if (response.status === 403) {
      const tokensRefreshed = await refreshTokens();

      if (tokensRefreshed) {
        fetchAgain(url, (method = "GET"), (body = null), (returnsData = true));
      }
    } else {
      console.error(`Fetch error: ${response.status} ${response.statusText}`);

      return {
        success: false,
        status: response.status,
        error: data.error,
      };
    }
  } catch (error) {
    console.error("Error in fetchData:", error);
  } finally {
    storage.set("loading", false);
  }
};
