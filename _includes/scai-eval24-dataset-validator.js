const requiredAttributes = [
  "/turns", "/turns[]/utterance", "/turns[]/response"
];
const format = {
  id: "string",
  turns: [
    {
      id: "string",
      utterance: "string",
      response: "string",
      provenance: [
        {
          id: "string",
          text: "string",
          title: "string",
          url: "string"
        }
      ]
    }
  ]
};

function validateAgainstFormat(object, format, path, lineNumber, log) {
  if (Array.isArray(format)) {
    if (!Array.isArray(object)) {
      log("Expecting an array at '" + path + "', but got " + typeof(object), lineNumber);
      return false;
    } else {
      for (let arrayIndex = 0; arrayIndex < object.length; arrayIndex += 1) {
        if (!validateAgainstFormat(object[arrayIndex], format[0], path + "[" + arrayIndex + "]", lineNumber)) {
          return false;
        }
      }
    }
  } else if (typeof(format) === "object") {
    if (Array.isArray(object)) {
      log("Expecting an object at '" + path + "', but got array", lineNumber);
      return false;
    } else if (typeof(object) !== "object") {
      log("Expecting an object at '" + path + "', but got " + typeof(object), lineNumber);
      return false;
    } else {
      const objectKeys = Object.keys(object);
      const formatKeys = Object.keys(format);
      for (const unknownKey of objectKeys.filter(key => !formatKeys.includes(key))) {
        log("Unknown attribute '" + unknownKey + "' at '" + path + "', known attributes are: " + formatKeys, lineNumber);
        return false;
      }
      for (const requiredAttribute of requiredAttributes) {
        if (requiredAttribute.replace(/\/[^\/]*$/g, "") === path.replace(/\[[0-9]*\]/g, "[]")) {
          const requiredKey = requiredAttribute.replace(/^.*\//g, "");
          if (!objectKeys.includes(requiredKey)) {
            log("Missing required attribute '" + requiredKey + "' at '" + path + "'", lineNumber);
            return false;
          }
        }
      }
      for (const key of objectKeys) {
        if (!validateAgainstFormat(object[key], format[key], path + "/" + key, lineNumber)) {
          return false;
        }
      }
    }
  } else {
    if (Array.isArray(object)) {
      log("Expecting a " + typeof(format) + " at '" + path + "', but got array", lineNumber);
      return false;
    } else if (typeof(object) !== typeof(format)) {
      log("Expecting a " + typeof(format) + " at '" + path + "', but got " + typeof(object), lineNumber);
      return false;
    }
  }
  return true;
}

function validateLine(dataLine, lineNumber, log) {
  try {
    const record = JSON.parse(dataLine);
    return validateAgainstFormat(record, format, "", lineNumber, log);
  } catch ({ name, message }) {
    log(message, lineNumber);
    return false;
  }
}

function validateLines(dataLines, log) {
  let foundError = false;
  let numRecords = 0;
  for (let lineNumber = 1; lineNumber <= dataLines.length; ++lineNumber) {
    const dataLine = dataLines[lineNumber - 1];
    if (dataLine !== "") {
      if (validateLine(dataLine, lineNumber, log)) {
        numRecords += 1;
      } else {
        foundError = true;
      }
    }
  }

  if (foundError) {
    return -1;
  } else {
    log("  - Found " + numRecords + " valid data records");
    return numRecords;
  }
}

function validateText(dataText, log) {
  const dataLines = dataText.split(/\r?\n/);
  const numValidRecords = validateLines(dataLines, log);
  return numValidRecords;
}

