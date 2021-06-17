export declare const tokenify: (username: string, password: string, { log }?: {
    log?: boolean | undefined;
}) => Promise<{
    authToken: string;
    classIDs: number[];
    curriculumOverride: unknown;
    curriculumTreeID: number;
    goalId: unknown;
    grade: number;
    isMember: 0 | 1;
    isTowerTownEnabled: boolean;
    lastVisited: string;
    memberEndDate: string | null;
    memberStartDate: string | null;
    name: string;
    objectID: number;
    ownerIDs: number[];
    parentEmail: string | null;
    placementTestID: number;
    registerDate: string;
    token: string;
    userID: number;
    usertype: string;
    expires_in: string;
    state: string;
    id_token: string;
    access_token: string;
    token_type: "Bearer";
}>;
