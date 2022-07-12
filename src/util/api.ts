export const fetchPosts = async () => {
  const result = await fetch(
    "https://apis.slstice.com/mock/posts?offset=0&limit=15&api_key=ZSTYF0GBSSF0l3Ou6DTPE",
    { mode: "cors" }
  );
  const response = await processResult(result, 'posts');
  return response;
};

export const fetchUser = async (username: string) => {
  const result = await fetch(
    `https://apis.slstice.com/mock/users/${username}?api_key=ZSTYF0GBSSF0l3Ou6DTPE`,
    { mode: "cors" }
  );
  const response = await processResult(result, 'user');
  return response;
};

export const fetchMedia = async (mediaId: string) => {
  const result = await fetch(
    `https://apis.slstice.com/mock/medias/${mediaId}?api_key=ZSTYF0GBSSF0l3Ou6DTPE`,
    { mode: "cors" }
  );
  const response = await processResult(result, 'media');
  return response;
};

const processResult = async (result: Response, type: string) => {
  try {
    const response = await result.json();
    return response.response[type];
  } catch (error) {
    console.log(error);
  }
};
