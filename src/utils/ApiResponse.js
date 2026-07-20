class ApiResponse{
    constructor(statusCode, data, message = "Success"){
        this.StatusCode=statusCode
        this.data=datathis.message=message
        this.success=statusCode < 400
    }
}

export {ApiResponse}