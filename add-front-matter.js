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
            const frontMatter = `---
layout: default
title: NodeJS Api
nav_order: 9
has_children: true
---
`;
            if(!content.startsWith('---')) {
                // fs.writeFileSync(fullPath, frontMatter + content.replace(/\.md#/g, ".html#"));
                fs.writeFileSync(fullPath, frontMatter + content.replace(/\.md/g, ".html"));
            } else {
                fs.writeFileSync(fullPath, content.replace(/\.md/g, ".html"));
            }
        } else if (fullPath.endsWith('.md') && path.basename(fullPath) !== 'README.md') {
            const content = fs.readFileSync(fullPath, 'utf8');
            const frontMatterExclude = `---
layout: page
title: ${path.basename(fullPath, '.md')}
nav_exclude: true
parent: NodeJS Api
---
`;
const frontMatter = `---
layout: page
title: ${path.basename(fullPath, '.md')}
parent: NodeJS Api
---
`;

            if(!content.startsWith('---')) {
                if(fullPath.indexOf('interfaces') > -1) {
                    fs.writeFileSync(fullPath, frontMatterExclude + content.replace(/\.md/g, ".html"));
                } else {
                    fs.writeFileSync(fullPath, frontMatter + content.replace(/\.md/g, ".html"));
                }
            } else {
                fs.writeFileSync(fullPath, content.replace(/\.md/g, ".html"));
            }

            
        }
    });
}

// Start the process from the root directory
addFrontMatterToFiles(directoryPath);
