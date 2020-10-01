import Requester from "../../../helpers/requester";

export const getProfile = (params) => {
    return Requester({
        url: `/user/profile`,
        data: { userid: '5f6ee3a6311e7342684d6a37' }
    }).then((res) => res)
}

export const getDetails = (params) => {
    return Requester({
        url: `/getDetails`,
        data: { userid: '5f6ee3a6311e7342684d6a37' }
    }).then((res) => res)
}

export const post = (params) => {
    return Requester({
        url: "/user/profile",
        method: "patch",
        data: params
    })
}

export const downloadCV = (params) => {
    return Requester({
        url: "/download/cv"
    })
}