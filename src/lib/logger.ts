export const logger = (type: String, msg: any) => {
    switch (type) {
        case "DEBUG":
            return console.log("DEBUG  :: ", msg);
        case "ERROR":
            return console.error(`${type} ::${msg}`);
        case "WARN":
            return console.warn(`${type} ::${msg}`)
        default:
            return console.log(`${type} ::${msg}`)
    }
    return console.log(`${type} ::${msg}`)

}