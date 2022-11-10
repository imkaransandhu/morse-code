const changeMorseToWord = (code, textArray, error) => {
  switch (code) {
    case ".-":
      textArray.push("a");
      break;
    case "-...":
      textArray.push("b");
      break;
    case "-.-.":
      textArray.push("c");
      break;
    case "-..":
      textArray.push("d");
      break;
    case ".":
      textArray.push("e");
      break;
    case "..-.":
      textArray.push("f");
      break;
    case "--.":
      textArray.push("g");
      break;
    case "....":
      textArray.push("h");
      break;
    case "..":
      textArray.push("i");
      break;
    case ".---":
      textArray.push("j");
      break;
    case "-.-":
      textArray.push("k");
      break;
    case ".-..":
      textArray.push("l");
      break;
    case "--":
      textArray.push("m");
      break;

    case "-.":
      textArray.push("n");
      break;
    case "---":
      textArray.push("o");
      break;
    case ".--.":
      textArray.push("p");
      break;
    case "--.-":
      textArray.push("q");
      break;
    case ".-.":
      textArray.push("r");
      break;
    case "...":
      textArray.push("s");
      break;
    case "-":
      textArray.push("t");
      break;
    case "..-":
      textArray.push("u");
      break;
    case "...-":
      textArray.push("v");
      break;
    case ".--":
      textArray.push("w");
      break;
    case "-..-":
      textArray.push("x");
      break;
    case "-.--":
      textArray.push("y");
      break;
    case "--..":
      textArray.push("z");
      break;

    // Numbers
    case "-----":
      textArray.push("0");
      break;
    case ".----":
      textArray.push("1");
      break;
    case "..---":
      textArray.push("2");
      break;
    case "...--":
      textArray.push("3");
      break;
    case "....-":
      textArray.push("4");
      break;
    case ".....":
      textArray.push("5");
      break;
    case "-....":
      textArray.push("6");
      break;
    case "--...":
      textArray.push("7");
      break;
    case "---..":
      textArray.push("8");
      break;
    case "----.":
      textArray.push("9");
      break;

    // Special Characters
    case ".-...":
      textArray.push("&");
      break;
    case ".----.":
      textArray.push("'");
      break;
    case ".--.-.":
      textArray.push("@");
      break;
    case "-.--.-":
      textArray.push(")");
      break;
    case "-.--.":
      textArray.push("(");
      break;
    case "---...":
      textArray.push(":");
      break;
    case "--..--":
      textArray.push(",");
      break;
    case "-...-":
      textArray.push("=");
      break;
    case "-.-.--":
      textArray.push("!");
      break;
    case ".-.-.-":
      textArray.push(".");
      break;
    case "-....-":
      textArray.push("-");
      break;
    // case "-..-":
    //   textArray.push("*");
    //   break;
    case "------..-.-----":
      textArray.push("%");
      break;
    case ".-.-.":
      textArray.push("+");
      break;
    case ".-..-.":
      textArray.push('"');
      break;
    case "..--..":
      textArray.push("?");
      break;
    case "-..-.":
      textArray.push("/");
      break;

    default:
      //textArray.push(`Code '${code}' is undefined in Morse Code`);

      error.push(`Code '${code}' is undefined in Morse Code`);
      console.log(error);
      break;
  }
};

module.exports = {
  changeMorseToWord,
};
