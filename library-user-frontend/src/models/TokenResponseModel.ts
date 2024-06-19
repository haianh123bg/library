class TokenResponseModel {
    accessToken: string;
    refreshToken: string;
    userId: number;
    roles: string;
    constructor(accessToken: string, refreshToken: string, userId: number, roles: string) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.roles = roles;
        this.userId = userId;
    }
}
