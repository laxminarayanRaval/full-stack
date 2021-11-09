/**
 * tasks :-
 * create directory
 * remove directory
 * write file
 * read file
 * delete file
 * append data to file
 * update / replace file with new data
 * rename file
 * 
 * url :- 
 */

console.log(" Working with Files ");

const fs = require('fs');
const path = require("path");
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


const menu = function () {
    console.log("   ---    ------- -------- ------    ---");
    console.log("   ---              Menu             ---");
    console.log("   ---    ------- -------- ------    ---");
    console.log("   --- 0. Terminate Program          ---");
    console.log("   --- 1. Create Directory           ---");
    console.log("   --- 2. Remove Directory           ---");
    console.log("   --- 3. Write  File                ---");
    console.log("   --- 4. Read   File                ---");
    console.log("   --- 5. Delete File                ---");
    console.log("   --- 6. Append Date to File        ---");
    console.log("   --- 7. Replace File with new data ---");
    console.log("   --- 8. Rename File                ---");
    console.log("   ---    ------- -------- ------    ---");
    choice();
}

const createDir = (str) => {
    console.log("  ---> Create Directory");

    rl.question(str, (name) => {
        let dir = path.join(__dirname, name); // directory name with path
        console.log("Path of Directory : " + dir);

        fs.mkdir(dir, (err) => {
            if (err) {
                console.log("Error : ", err);
                rl.close();
            } else {
                console.log("\n    --|   Directory Creation Done.   |--");
                menu();
            }
        });

    });
};

const removeDir = (str) => {
    console.log("  ---> Remove Directory");

    rl.question(str, (name) => {
        let dir = path.join(__dirname, name); // directory name with path
        console.log("Path of Directory : " + dir);

        fs.rmdir(dir, (err) => {
            if (err) {
                console.log("Error : ", err);
                rl.close();
            } else {
                console.log("\n    --|   Directory Deletion Done.   |--");
                menu();
            }
        });

    });

}

const writeFile = (str) => {
    console.log("  ---> Write File");

    rl.question(str, (name) => {
        let fil = `${name}.txt`;

        rl.question("Insert Data :>> ", (data) => {

            fs.writeFile(fil, data, (err) => {
                if (err) {
                    console.log("Error : ", err);
                    rl.close();
                } else {
                    console.log("\n    --|   File Writing Done.   |--");
                    menu();
                }
            });

        });
    });

}

const readFile = (str) => {
    console.log("  ---> Read File");

    rl.question(str, (name) => {
        let fil = `${name}.txt`;

        fs.readFile(fil, "utf8", (err,data) => {
            if (err) {
                console.log("Error : ", err);
                rl.close();
            } else {
                console.log("\n    --|   File Data.   |--\n",data,"\n    --|   ..........   |--");
                menu();
            }
        });

    });

}

const deleteFile = (str) => {
    console.log("  ---> Delete File");

    rl.question(str, (name) => {
        let fil = `${name}.txt`;

        fs.unlink(fil, (err) => {
            if (err) {
                console.log("Error : ", err);
                rl.close();
            } else {
                console.log("\n    --|   File Removed.   |--");
                menu();
            }
        });

    });

}

const appendFile = (str) => {
    console.log("  ---> Append Data to 'Old' File");

    rl.question(str, (name) => {
        let fil = `${name}.txt`;

        rl.question("Insert More Data :>> ", (data) => {

            fs.appendFile(fil, data, (err) => {
                if (err) {
                    console.log("Error : ", err);
                    rl.close();
                } else {
                    console.log("\n    --|   File Appending Done.   |--");
                    menu();
                }
            });

        });
    });

}

const replceFile = (str) => {
    console.log("  ---> Replace File with New Data");

    rl.question(str, (name) => {
        let fil = `${name}.txt`;

        rl.question("Insert New Data :>> ", (data) => {

            fs.writeFile(fil, data, (err) => {
                if (err) {
                    console.log("Error : ", err);
                    rl.close();
                } else {
                    console.log("\n    --|   File Updation Done.   |--");
                    menu();
                }
            });

        });
    });

}

const renameFile = (str) => {
    console.log("  ---> Rename 'Old' File");

    rl.question(str, (name) => {
        let fil = `${name}.txt`;

        rl.question("Insert New Name :>> ", (newFil) => {

            fs.rename(fil, `${newFil}.txt`, (err) => {
                if (err) {
                    console.log("Error : ", err);
                    rl.close();
                } else {
                    console.log("\n    --|   File Renaming Done.   |--");
                    menu();
                }
            });

        });
    });

}

const funcs = [createDir, removeDir, writeFile, readFile, deleteFile, appendFile, replceFile, renameFile];

const choice = function () {
    rl.question("\tEnter Your Choice : ", (call) => {
        if (call === "0") {
            console.log(" ---> Program Terminatation!");
            process.exit(0);
        } else {
            let str = "\n\t" + ((call === "1" || call === "2") ? "Directory " : "File ") + "Name : ";
            funcs[call - 1](str);
        }
        // rl.close();
    });
    // menu();
}

menu();