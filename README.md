# Azkme - News Finder

A React-based application that leverages Google's Gemini API to provide news summaries based on user-provided keywords. This project allows users to search for news in any language and receive relevant, AI-generated summaries through an interactive chat interface.
![News](https://github.com/user-attachments/assets/86a63c3b-e84a-4b67-b465-c9e32afee80c)


## Features

- **Keyword-Based News Search**: Input any keyword to fetch and summarize related news articles.
- **AI-Powered Summaries**: Utilizes Google's Gemini 2.0 Flash model for generating concise and relevant news summaries.
- **Interactive Chat Interface**: Built with React for a smooth user experience, including a sidebar for navigation and main chat area.
- **Custom Persona**: The AI responds as "AZKme" and focuses exclusively on news-related queries.
- **Safety Settings**: Configured to block harmful content categories for a safe interaction.

## Prerequisites

- **Node.js**: Version 16 or higher (recommended: 18+).
- **Google Gemini API Key**: Obtain a free API key from [Google AI Studio](https://makersuite.google.com/app/apikey).

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/gemini-clone.git
   cd gemini-clone
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add your Gemini API key:
     ```
     VITE_GEMINI_API_KEY=your_actual_api_key_here
     ```
   - **Important**: Do not hardcode the API key in the source code. Update `src/config/gemini.js` to use `import.meta.env.VITE_GEMINI_API_KEY` instead of the hardcoded value for security.

## Running the Application

1. **Start the Development Server**:
   ```bash
   npm run dev
   ```

2. **Open in Browser**:
   - Navigate to `http://localhost:5173` (or the port shown in the terminal).

3. **Build for Production** (optional):
   ```bash
   npm run build
   npm run preview
   ```

## Usage

- Enter a keyword in the chat input to search for news.
- The AI will respond with summaries of relevant news articles.
- Use the sidebar to navigate or access additional features like history or settings.

## Project Structure

- `src/components/`: React components (Main, Sidebar).
- `src/config/gemini.js`: Gemini API configuration and chat logic.
- `src/context/`: Context providers for state management.
- `src/assets/`: Icons and images.
- `public/`: Static assets.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).
- Powered by [Google Generative AI](https://ai.google.dev/).
