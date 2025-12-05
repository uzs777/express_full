export class ApiError extends Error {
    constructor(messge, statuCode) {
        super(messge),
            this.statuCode = statuCode;
    }
}   