export const getTokenPayload = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const base64 = token.split(".")[1]
        return JSON.parse(atob(base64));
    } catch {
        return null;
    }
};

export const isTokenExpired = () => {
    const payload = getTokenPayload();
    if (!payload?.exp) return true;

    return Date.now() > payload.exp * 1000;
};
