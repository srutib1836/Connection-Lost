// This file stays on the server. Users cannot see this!
// We are using the "Chronological" order based on the SysAdmin Log hint.
// 401 (9am) -> 404 (9:45am) -> 503 (10:30am) -> 418 (11:15am) -> 403 (1pm) -> 301 (2:30pm)

module.exports = {
    // The secret answer key
    SECRET_CODE: "401404503418403301" 
};