import httpService from "./http.service";

const userEndpoint = "user/";

const userService = {
    get: async (id = "") => {
        const { data } = await httpService.get(userEndpoint + id);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            userEndpoint + payload._id,
            payload
        );
        return data;
    }
};
export default userService;
