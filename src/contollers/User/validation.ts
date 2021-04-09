export default Object.freeze({
    user: {
        post: {
            in: ["body"],
            errorMessage: "name is empty",
            optional: false,
            custome: {
                options: (name: String) => (name.length && name !== "" && typeof name === "string"),
                errorMessage: "name is bad format",
            }
        }
    }
})