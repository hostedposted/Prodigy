import fetch from "node-fetch";

export const updatePlayerFriendRequests = async(token: string, userID: string, friendID: string, { log }: { log?: boolean } = {}) => {
    if (log) console.log("Posting friend data...");
    const friendreq = await (await fetch(`https://api.prodigygame.com/friend-api/v1/friend/${userID}/add/${friendID}?userID=${userID}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "POST"
    }));
    if (!friendreq.ok) throw new Error(`The update friend requests page request was unable to be fetched with a code of ${friendreq.status}.`);
    if (log) console.log("Successfully updated friend requests.");
    return friendreq.json() as {};
};