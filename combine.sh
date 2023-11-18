#!/bin/bash
find . -name '*.md' -exec cat {} + > combined.md
pandoc combined.md --pdf-engine=xelatex -o combined.pdf --lua-filter=combine.lua