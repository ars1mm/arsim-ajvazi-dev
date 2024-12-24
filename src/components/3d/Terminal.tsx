import React, { useRef, useState, useEffect } from 'react';

interface Command {
  input: string;
  output: string;
}

const AVAILABLE_COMMANDS = {
  'Go-ToProjects': 'Navigating to Projects section...',
  'Show-Skills': `My Skills:
• Frontend: React, Next.js, TypeScript, Tailwind CSS
• Backend: Node.js, Express, PostgreSQL
• Tools: Git, Docker, AWS
• Languages: JavaScript, Python, SQL`,
  'Show-Experience': `Work Experience:
• Senior Frontend Developer at TechCorp (2022-Present)
• Full Stack Developer at StartupX (2020-2022)
• Software Engineer at CodeCo (2018-2020)`,
  'Contact-Me': `Let's Connect!
• Email: arsim.ajvazi@example.com
• LinkedIn: linkedin.com/in/arsim-ajvazi
• GitHub: github.com/arsim-ajvazi`,
  'Download-CV': 'Initiating CV download...',
  'Show-Projects': `Featured Projects:
• E-commerce Platform - Next.js, Stripe, PostgreSQL
• AI Chat Application - OpenAI API, React, Node.js
• Portfolio Website - React Three Fiber, TypeScript
• Task Management Tool - MERN Stack, Redux`,
  'Help': `Available commands:
• Go-ToProjects - View my project portfolio
• Show-Skills - Display my technical skills
• Show-Experience - View my work experience
• Contact-Me - Get my contact information
• Download-CV - Download my resume
• Show-Projects - See my featured projects
• Clear - Clear the terminal screen
• Help - Show this help message`
};

const Terminal = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const processCommand = (cmd: string) => {
    const command = cmd.trim();
    
    if (command === '') return;
    
    const output = AVAILABLE_COMMANDS[command as keyof typeof AVAILABLE_COMMANDS] || `Command not found: ${command}. Type 'Help' for available commands.`;
    
    setCommands(prev => [...prev, { input: command, output }]);
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    if (command.toLowerCase() === 'clear') {
      setCommands([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand(currentInput);
      setCurrentInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div 
      ref={terminalRef}
      style={{
        width: '100%',
        height: '400px',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        fontFamily: 'monospace',
        fontSize: '14px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #333'
      }}
    >
      <div 
        style={{ 
          flexGrow: 1, 
          overflowY: 'auto',
          padding: '20px',
          paddingBottom: '50px'
        }}
      >
        {commands.map((cmd, i) => (
          <div key={i}>
            <div style={{ color: '#00ff00' }}>visitor@portfolio:~$ {cmd.input}</div>
            {cmd.output && (
              <div style={{ whiteSpace: 'pre-wrap', marginBottom: '10px' }}>
                {cmd.output}
              </div>
            )}
          </div>
        ))}
      </div>
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center',
          padding: '10px 20px',
          borderTop: '1px solid #333'
        }}
      >
        <span style={{ color: '#00ff00', marginRight: '8px' }}>
          visitor@portfolio:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontFamily: 'monospace',
            fontSize: '14px',
            outline: 'none',
            width: '100%',
            padding: '5px 0'
          }}
        />
      </div>
    </div>
  );
};

export default Terminal;
