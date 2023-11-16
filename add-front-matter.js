const directoryPath = 'docs/nodeapi'; // Update with your documentation directory path
const fs = require('fs');
const path = require('path');


function addFrontMatterToFiles(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            addFrontMatterToFiles(fullPath); // Recurse into subdirectories
        } else if (fullPath.endsWith('.md') && path.basename(fullPath) === 'README.md') {
            const content = fs.readFileSync(fullPath, 'utf8');
            const frontMatter = `
---
layout: default
title: NodeJS Api
nav_order: 6
has_children: true
---
`;
            fs.writeFileSync(fullPath, frontMatter + content);
        } else if (fullPath.endsWith('.md') && path.basename(fullPath) !== 'README.md') {
            const content = fs.readFileSync(fullPath, 'utf8');
            const frontMatter = `
---
layout: page
title: Exports
parent: NodeJS Api
---
`;
            fs.writeFileSync(fullPath, frontMatter + content);
        }
    });
}

// Start the process from the root directory
addFrontMatterToFiles(directoryPath);
