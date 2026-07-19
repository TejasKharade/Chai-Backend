import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser = asyncHandler(async (req, res) => {
    console.log("Register API hit");

    res.status(200).json({
        message: "Chai aur code"
    });
});

export {registerUser}