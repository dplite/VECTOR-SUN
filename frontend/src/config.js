export const customFields = (id) => {
  return {
    inputNode: [
      { label: "Name", name: "inputName", type: "text" },
      {
        label: "Type",
        name: "inputType",
        type: "select",
        options: ["Text", "File"],
        default: "Text",
      },
    ],
    outputNode: [
      {
        label: "Name",
        name: "outputName",
        type: "text",
        default: id?.replace("customOutput-", "output_"),
      },
      {
        label: "Type",
        name: "outputType",
        type: "select",
        options: ["Text", "Image"],
        default: "Text",
      },
    ],
    multiplierNode: [
      {
        label: "Multiplier A",
        name: "multiplierA",
        type: "number",
        default: 1,
      },
      {
        label: "Multiplier B",
        name: "multiplierB",
        type: "number",
        default: 1,
      },
    ],
    additionNode: [
      {
        label: "Addition A",
        name: "additionA",
        type: "number",
        default: 1,
      },
      {
        label: "Addition B",
        name: "additionB",
        type: "number",
        default: 1,
      },
      {
        label: "Addition C",
        name: "additionC",
        type: "number",
        default: 1,
      },
    ],
    numeralNode: [
      {
        label: "Number",
        name: "inputNumber",
        type: "number",
        default: 0,
      },
    ],
    multiplePromptsNode: [
      {
        label: "Prompt A",
        name: "promptA",
        type: "text",
        default: 1,
      },
      {
        label: "Prompt B",
        name: "promptB",
        type: "text",
        default: 1,
      },
    ],
    responseNode: [
      {
        label: "Response 1",
        name: "response1",
        type: "text",
        default: "Response 1",
      },
      {
        label: "Response 2",
        name: "response2",
        type: "text",
        default: "Response 2",
      },
    ],
  };
};
