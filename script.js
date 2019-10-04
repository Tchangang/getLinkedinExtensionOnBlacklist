function getLinkedinExtensionsOnBlacklist() {
  function decode(str) {
    if (!str) {
      return str;
    }
    var mapping = {
      'r': 'a',
      'O': 'a',
      'x': 'b',
      'L': 'b',
      'G': 'c',
      'I': 'C',
      'w': 'd',
      'v': 'd',
      'f': 'e',
      'P': 'E',
      'B': 'F',
      'H': 'f',
      'U': 'g',
      'k': 'G',
      'F': 'h',
      'n': 'H',
      'T': 'i',
      'D': 'i',
      'u': 'k',
      'd': 'l',
      'a': 'L',
      'h': 'm',
      'A': 'M',
      'X': 'n',
      'W': 'o',
      'c': 'O',
      'o': 'P',
      'S': 'p',
      'M': 'q',
      'l': 'r',
      's': 'r',
      'j': 'S',
      'C': 's',
      'Y': 't',
      'y': 't',
      'R': 'u',
      'V': 'u',
      'K': 'v',
      'Q': 'W',
      'm': 'x',
      'Z': 'y',
      'i': 'z',
    };
    var decoded = '';
    str.split('').forEach(function (char) {
      if (mapping[char]) {
        decoded += mapping[char];
      } else {
        decoded += char;
      }
    });
    return decoded;
  }
  var extensionList = [];
  var extensionDataParsedFromLocalStorage;
  try {
    extensionDataParsedFromLocalStorage = JSON.parse(atob(localStorage.getItem('C_C_M')));
  } catch (error) {
  }
  if (extensionDataParsedFromLocalStorage !== undefined) {
    extensionDataParsedFromLocalStorage.Metadata.ext.forEach(function (ext) {
      var extWithNameDecoded = {
          ...ext,
        name: decode(ext.name),
      };
      extensionList.push(extWithNameDecoded);
    });
  }
  return extensionList;
}
getLinkedinExtensionsOnBlacklist()()
