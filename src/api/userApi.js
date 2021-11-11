const baseUrl = process.env.REACT_APP_API_URL + "/user/";

export async function getUser(userInfo) {
    const response = await fetch(baseUrl)
    const user = await response.json();

    if (user.username === userInfo.email && user.password === userInfo.password ){
        return user
    }
    return false
}
