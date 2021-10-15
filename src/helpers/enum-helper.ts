export const useParseEnum = (enumObj: any) => {
  return Object.keys(enumObj).filter(key => typeof enumObj[key] === "number").map(key => ({
    id: enumObj[key],
    display: unCamelCase(key)
  }))
}


function unCamelCase(str: string) {
  return str
    // insert a space between lower & upper
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // space before last upper in a sequence followed by lower
    .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
    // uppercase the first character
    .replace(/^./, function (str) { return str.toUpperCase(); })
}