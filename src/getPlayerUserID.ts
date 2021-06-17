export const getPlayerUserID = async(token: string, { log }: { log?: boolean } = {}) => {
    try {
        const userID = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString("ascii")).content.userID
        return userID
    } catch(e) {
        throw new Error(e)
    }
}