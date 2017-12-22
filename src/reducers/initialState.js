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
        }
    }
}

export default initialState