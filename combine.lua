-- ignore-unicode.lua
function Str(elem)
  -- replace any non-ASCII character with an empty string
  return pandoc.Str(elem.text:gsub("[^\32-\126]", ""))
end
