const blogs = [
  {
    id: "json-parser-c",
    title: "Building a Simple JSON Parser in C",
    description: "Learn how to build a lightweight JSON parser in C from scratch using recursive descent parsing and dot notation lookup.",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*irS_OQ5MwKA3kXB9QknJ3A.png", // replace with your blog image if any
    link: "https://myblog.com/json-parser-c",
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "JSON (JavaScript Object Notation) is a lightweight data-interchange format that’s easy for humans to read and write. In this blog, we’ll build a JSON parser from scratch in C." },

      { type: "heading", text: "How the Parser Works" },
      { type: "paragraph", text: "This parser reads a JSON file and parses its content into C structures using a recursive descent approach. It supports strings, numbers, booleans, null values, and objects." },

      { type: "subheading", text: "Step 1: Sample JSON File" },
      { type: "code", language: "json", code: `{
  "details": {
    "name": "Alice",
    "age": 30
  },
  "active": true
}` },

      { type: "subheading", text: "Step 2: Full C Code" },
      { type: "code", language: "c", code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

// Type of JSON values
typedef enum {
    TYPE_STRING,
    TYPE_NUMBER,
    TYPE_BOOL,
    TYPE_NULL,
    TYPE_OBJECT
} JsonType;

// Forward declaration
struct JsonValue;

typedef struct {
    char* key;
    struct JsonValue* value;
} JsonPair;

// JSON value structure
typedef struct JsonValue {
    JsonType type;
    union {
        char* stringValue;
        double numberValue;
        int boolValue;
        struct {
            JsonPair* pairs;
            int count;
        } objectValue;
    };
} JsonValue;

// (functions like skipSpaces, readString, readNumber, readBool, readValue, readObject, loadFile, getValue, printValue, main follow here...)
` },

      { type: "heading", text: "Code Explanation" },
      { type: "subheading", text: "skipSpaces()" },
      { type: "paragraph", text: "Skips whitespace characters in the JSON text." },

      { type: "subheading", text: "readString()" },
      { type: "paragraph", text: "Reads and returns a string value from the JSON text." },

      { type: "subheading", text: "readNumber()" },
      { type: "paragraph", text: "Parses and returns a number (integer or float) from the JSON text." },

      { type: "subheading", text: "readBool()" },
      { type: "paragraph", text: "Parses boolean values (true/false)." },

      { type: "subheading", text: "readObject()" },
      { type: "paragraph", text: "Reads a JSON object and stores its key-value pairs." },

      { type: "subheading", text: "readValue()" },
      { type: "paragraph", text: "Determines the value type (string, number, bool, null, object) and calls the appropriate parsing function." },

      { type: "subheading", text: "loadFile()" },
      { type: "paragraph", text: "Loads the entire JSON file into memory for parsing." },

      { type: "subheading", text: "getValue()" },
      { type: "paragraph", text: "Allows retrieving a nested value using dot notation like details.name." },

      { type: "subheading", text: "printValue()" },
      { type: "paragraph", text: "Prints values depending on their type (string, number, boolean, null, object)." },

      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "This simple JSON parser demonstrates how you can parse structured data in C without external libraries. It can be extended to support arrays, better error handling, and memory management." }
    ],
  },
];

export default blogs;
