export function getHeaderFormObject(data: any) {
  return Object.keys(data).map((key) => unCamelCase(key));
}

export function createTableDataFromObject(data: any) {
  return {
    header: getHeaderFormObject(data[0]),
    data
  }
}

function unCamelCase(str: string) {
  return (
    str
      // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3")
      // uppercase the first character
      .replace(/^./, function (str) {
        return str.toUpperCase();
      })
  );
}
