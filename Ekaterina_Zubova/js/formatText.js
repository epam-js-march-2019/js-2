function toConstantCase (str) {
 return str.toUpperCase().split(/-|_/).join('_');
}

function toCamelCase (str) {
  return str.split(/-|_/)
            .map (function callback(item, index) {
              if (index==0)
                return item.charAt(0)+item.slice(1).toLowerCase();
              else
                return item.charAt(0).toUpperCase()+item.slice(1).toLowerCase();
             })
            .join('');
}