var initialState = {
    general: {

    },
    dial: {
        value: 0,
        rotate: 0,
        combination: {
            // These start of as undefined because they could be set to zero and
            // still be a valid combination
            1: undefined,
            2: undefined,
            3: undefined,
            focus: 1,
        },
        lastRotation: 0,
        checkpoints: {
            1: undefined,
            2: undefined,
            3: undefined,
            toClear: 1, // The checkpoint to be cleared
        },
        validation: undefined,
    },
    message: {
        message: "",
    },
    auth: {
        user: null,
        redirectingFromGoogle: true, // This is true because the user could still be authenticated
    }
}

export default initialState