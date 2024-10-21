import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID MFQxk-5flZN1nZ2d6-J08azwrum-5KbHEuq3nLI4Scg",
    },
    params: {
      query: term,
    },
  });
//   debugger;   
  return response.data.results;
};

export default searchImages;