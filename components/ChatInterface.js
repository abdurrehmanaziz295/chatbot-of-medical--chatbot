import { useState } from 'react';

export default function ChatInterface() {
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: 'Hello! How can I help you today?'
  }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input; // Keep a copy of the input for potential API calls
    setInput('');
    setIsLoading(true);

    try {
      // Simulate API call for demonstration purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      const aiResponse = "Hello! I'm your AI chatbot deployed on Vercel. Connect me to an AI backend to make me fully functional!";
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: aiResponse
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, something went wrong.'
      }]);
    }
    
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div data-filename="pages/ChatbotDetail" data-linenumber="648" data-visual-selector-id="pages/ChatbotDetail648" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      maxWidth: '56rem',
      margin: '0 auto',
      padding: '1rem'
    }}>
      <div data-filename="pages/ChatbotDetail" data-linenumber="656" data-visual-selector-id="pages/ChatbotDetail656" style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        borderBottom: '1px solid #e5e7eb',
        padding: '1.5rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 data-filename="pages/ChatbotDetail" data-linenumber="665" data-visual-selector-id="pages/ChatbotDetail665" style={{
          fontSize: '1.875rem',
          fontWeight: 'bold',
          color: '#8b5cf6',
          marginBottom: '0.5rem'
        }}>
          chatbot of medical 
        </h1>
        <p data-filename="pages/ChatbotDetail" data-linenumber="673" data-visual-selector-id="pages/ChatbotDetail673" style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>here you can find your answers related to any topics </p>
      </div>
      
      <div data-filename="pages/ChatbotDetail" data-linenumber="679" data-visual-selector-id="pages/ChatbotDetail679" style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        background: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(4px)'
      }}>
        {messages.map((msg, i) => (
          <div data-filename="pages/ChatbotDetail" data-linenumber="690" data-visual-selector-id="pages/ChatbotDetail690" key={i} style={{
            display: 'flex',
            justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
          }}>
            <div data-filename="pages/ChatbotDetail" data-linenumber="694" data-visual-selector-id="pages/ChatbotDetail694" style={{
              maxWidth: '75%',
              borderRadius: '1rem',
              padding: '1rem 1.25rem',
              background: msg.role === 'user' 
                ? 'linear-gradient(135deg, #8b5cf6, #3b82f6)'
                : '#ffffff',
              color: msg.role === 'user' ? '#ffffff' : '#1e293b',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              wordWrap: 'break-word'
            }}>
              <p data-filename="pages/ChatbotDetail" data-linenumber="705" data-visual-selector-id="pages/ChatbotDetail705" style={{ fontSize: '0.9375rem', lineHeight: '1.5' }}>{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div data-filename="pages/ChatbotDetail" data-linenumber="710" data-visual-selector-id="pages/ChatbotDetail710" style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div data-filename="pages/ChatbotDetail" data-linenumber="711" data-visual-selector-id="pages/ChatbotDetail711" style={{
              background: '#ffffff',
              borderRadius: '1rem',
              padding: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center'
            }}>
              <div data-filename="pages/ChatbotDetail" data-linenumber="720" data-visual-selector-id="pages/ChatbotDetail720" style={{
                width: '0.5rem',
                height: '0.5rem',
                background: '#94a3b8',
                borderRadius: '50%',
                animation: 'bounce 1s infinite'
              }} />
              <div data-filename="pages/ChatbotDetail" data-linenumber="727" data-visual-selector-id="pages/ChatbotDetail727" style={{
                width: '0.5rem',
                height: '0.5rem',
                background: '#94a3b8',
                borderRadius: '50%',
                animation: 'bounce 1s infinite 0.15s'
              }} />
              <div data-filename="pages/ChatbotDetail" data-linenumber="734" data-visual-selector-id="pages/ChatbotDetail734" style={{
                width: '0.5rem',
                height: '0.5rem',
                background: '#94a3b8',
                borderRadius: '50%',
                animation: 'bounce 1s infinite 0.3s'
              }} />
            </div>
          </div>
        )}
      </div>

      <div data-filename="pages/ChatbotDetail" data-linenumber="746" data-visual-selector-id="pages/ChatbotDetail746" style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
        borderTop: '1px solid #e5e7eb',
        padding: '1rem',
        boxShadow: '0 -1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <div data-filename="pages/ChatbotDetail" data-linenumber="755" data-visual-selector-id="pages/ChatbotDetail755" style={{ display: 'flex', gap: '0.75rem' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isLoading}
            style={{
              flex: 1,
              padding: '0.875rem 1.125rem',
              borderRadius: '0.75rem',
              border: '1px solid #cbd5e1',
              outline: 'none',
              fontSize: '1rem',
              transition: 'border-color 0.2s',
              backgroundColor: '#ffffff'
            }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            style={{
              padding: '0.875rem 1.75rem',
              borderRadius: '0.75rem',
              color: '#ffffff',
              fontWeight: '600',
              border: 'none',
              cursor: !input.trim() || isLoading ? 'not-allowed' : 'pointer',
              background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              opacity: (!input.trim() || isLoading) ? 0.6 : 1,
              transition: 'opacity 0.2s'
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}