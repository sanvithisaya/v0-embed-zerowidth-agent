// config.js
// =============================================================================
// Chat Application Configuration
// =============================================================================
// This configuration file stores metadata and descriptions related to the Chat Agent component.
// The goal is to keep the main component clean and maintainable.
//
// Key Features:
// - Stores the descriptive header for the chat component.
// - Provides metadata such as the author and version.
// - Can be extended for additional configuration settings in the future.
// =============================================================================

const chatConfig = {
  flowURL:
    "https://api.zerowidth.ai/beta/process/F6dB2p738XGmrjbmoaAR/0jRH8vCzzVQOGt2kEqPn",
  header: {
    title: "Chat with Sanvi",
    description:
      "Greetings",
  },
  suggestedPromptsTitle: "Here are some suggested prompts.",
  suggestedPrompts: [
    "I spend too much time with computers.",
    "I feel overwhelmed trying to keep up with AI trends.",
    "I am anxious about the future.",
  ],
  chatInputPlaceholder: "Chat with this agent...",
  maxChatHeight: 200,
};

export default chatConfig;
