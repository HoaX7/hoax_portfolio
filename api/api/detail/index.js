import Requester from "../../../helpers/requester";

export const patch = (params) => {
    return Requester({
        url: "/details",
        method: "patch",
        data: params
    })
}