const os = require("os");

try {
    console.log("OS CPU architecture                : ",os.arch());
    console.log("Free memory of the system (RAM)    : ",(os.freemem() / (1024 ** 3)).toFixed(2),"GB");
    console.log("Total memory of the system(RAM)    : ",(os.totalmem() / (1024 ** 3)).toFixed(2),"GB");
    console.log("OS Platform                        : ",os.platform());
    console.log("Information about the current user : ",os.userInfo().username,"(username) & ",os.userInfo().homedir,"(homedir)");
} catch (e) {
    console.log("Error : ",e);
}
