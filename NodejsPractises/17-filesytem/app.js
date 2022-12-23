const yargs = require("yargs");
const file = require("./file");


yargs.command({
    command: "add",
    describe: "Add new file",
    builder: {
        title: {
            type: "string",
        },
        desc: {
            type: "string"
        }
    },
    handler: function (argv) {

        const title = argv.title;
        const desc = argv.desc;
        //console.log(`title  : ${title}, desc : ${desc}`);
        let data = {
            "title": title,
            "desc": desc
        }
        file.writefile(data);
    }
})

yargs.command({
    command: "view",
    describe: "View all files",

    handler: function () {
        file.readfile();
    }
})

yargs.command({
    command: "remove",

    describe: "remove data",
    builder: {
        title: {
            type: "string",
        }
    },
    handler: function (argv) {
        let title = argv.title;
        file.removeTitle(title)
    }
})



console.log(yargs.argv);