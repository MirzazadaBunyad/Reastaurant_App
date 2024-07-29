import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer qhhE6yEt-4ytzDOKvvE_rdFEGyWgAIoSvxMgGCw_S6NqnWFaO6P_451dg1bDyr6ea4lfeD0dEEBaZXKA5i8W7aXun4io-VGw4gFaEXcHvHt1pg2bUfP21Hzc0wmmZnYx",
  },
});
