// draggableNode.js
import {
  Input as InputIcon,
  Output as OutputIcon,
  Psychology as LLMIcon,
  TextFields as TextIcon,
  Calculate as CalculateIcon,
  Add as AddIcon,
  Numbers as NumberIcon,
  Chat as ChatIcon,
  QuestionAnswer as ResponseIcon,
} from "@mui/icons-material";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const getIcon = (type) => {
    switch (type) {
      case "customInput":
        return <InputIcon className="text-white mb-1" />;
      case "customOutput":
        return <OutputIcon className="text-white mb-1" />;
      case "llm":
        return <LLMIcon className="text-white mb-1" />;
      case "text":
        return <TextIcon className="text-white mb-1" />;
      case "multiplier":
        return <CalculateIcon className="text-white mb-1" />;
      case "addition":
        return <AddIcon className="text-white mb-1" />;
      case "numeralInput":
        return <NumberIcon className="text-white mb-1" />;
      case "multiplePrompts":
        return <ChatIcon className="text-white mb-1" />;
      case "response":
        return <ResponseIcon className="text-white mb-1" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`
          ${type}
          cursor-grab
          min-w-[80px]
          h-[60px]
          flex
          items-center
          justify-center
          flex-col
          rounded-lg
          bg-gray-500
          transition-all
          duration-300
          ease-in-out
          hover:scale-110
          hover:shadow-lg
          hover:shadow-gray-500/50
          p-2
        `}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      {getIcon(type)}
      <span className="text-white text-sm">{label}</span>
    </div>
  );
};
