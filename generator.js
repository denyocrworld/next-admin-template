const fs = require('fs');
const path = require('path');

function readFilesRecursively(dir, snippetsObj) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            // Jika direktori, rekursif baca isinya
            readFilesRecursively(filePath, snippetsObj);
        } else if (path.extname(file) === '.js' || path.extname(file) === '.ts' || path.extname(file) === '.tsx') {
            // Jika file dengan ekstensi .js, .ts, atau .tsx, baca dan proses
            const data = fs.readFileSync(filePath, 'utf8');
            const regex = /\/\*\s*([\w\d]+)\s*\*\/([\s\S]*?)\/\*\s*~\s*\*\//g;
            let match;
            while ((match = regex.exec(data)) !== null) {
                let prefix = match[1].trim();
                let content = match[2].trim();

                if (content.startsWith("\r\n")) {
                    content = content.replace("\r\n", "").trim();
                }
                content = content.replace(/\r\n            /g, "");
                content = content.replace(/\r\n          /g, "");

                content = content.substring(1, content.length - 1);

                snippetsObj[prefix] = {
                    prefix: prefix,
                    body: content,
                    description: ``,
                };
            }
        }
    });
}

const snippetsObj = {}; // Objek untuk menyimpan semua snippet
const appDirectory = path.join(__dirname, 'app'); // Direktori "app" di dalam direktori saat ini
readFilesRecursively(appDirectory, snippetsObj);

const snippetsFile = path.join('.vscode', 'snippets.code-snippets');
fs.writeFileSync(snippetsFile, JSON.stringify(snippetsObj, null, 2));
console.log(`Semua snippet disimpan dalam ${snippetsFile}`);
