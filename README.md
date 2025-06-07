# VECTOR-SUN Flow Editor

A powerful, interactive flow editor built with React and React Flow for creating and managing visual data processing pipelines.

## Features

- **Interactive Node Editor**: Drag and drop interface for creating complex workflows
- **Multiple Node Types**:
  - Input Node: Handle text and file inputs
  - Output Node: Display text or image outputs
  - LLM Node: Language model integration
  - Text Node: Variable text processing with dynamic handles
  - Multiplier Node: Numerical multiplication operations
  - Addition Node: Multi-input addition operations
  - Numeral Node: Single number input
  - Multiple Prompts Node: Handle multiple text prompts
  - Response Node: Display multiple responses

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd VECTOR-SUN
```

2. Install dependencies:

```bash
cd frontend
npm install
```

3. Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Usage

### Creating a Flow

1. Use the toolbar at the top to drag nodes onto the canvas
2. Connect nodes by dragging from output handles (right side) to input handles (left side)
3. Configure node properties using the input fields in each node
4. Use the minimap and controls for navigation

### Available Nodes

- **Input Node**:

  - Configurable input type (Text/File)
  - Custom naming support

- **Output Node**:

  - Supports text and image outputs
  - Customizable output name

- **LLM Node**:

  - System and prompt inputs
  - Integrated with language models

- **Text Node**:

  - Dynamic variable detection
  - Real-time handle creation for variables

- **Multiplier Node**:

  - Two numerical inputs
  - Multiplication operation

- **Addition Node**:

  - Three numerical inputs
  - Addition operation

- **Numeral Node**:

  - Single number input
  - Direct numerical value output

- **Multiple Prompts Node**:

  - Handle multiple text prompts
  - Prompt A and Prompt B inputs

- **Response Node**:
  - Display multiple responses
  - Two response fields

## Technical Stack

- **React**: Frontend framework
- **React Flow**: Flow visualization and editing
- **Material-UI**: UI components
- **Tailwind CSS**: Styling
- **Zustand**: State management

## Development

### Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable components
│   ├── nodes/         # Node type implementations
│   ├── config.js      # Node configurations
│   ├── store.js       # State management
│   ├── ui.js          # Main flow editor
│   └── toolbar.js     # Node toolbar
└── public/           # Static assets
```

### Adding New Node Types

1. Create a new node component in `src/nodes/`
2. Add node configuration in `src/config.js`
3. Register the node type in `src/ui.js`
4. Add the node to the toolbar in `src/toolbar.js`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
