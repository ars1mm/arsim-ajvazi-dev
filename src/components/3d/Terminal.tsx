import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Text, OrbitControls, Circle } from '@react-three/drei';
import * as THREE from 'three';
import ContactModal from '../modals/ContactModal';

const MACOS_COLORS = {
  background: '#1E1E1E',
  text: '#FFFFFF',
  red: '#FF5F56',
  yellow: '#FFBD2E',
  green: '#27C93F',
  suggestion: '#666666'
};

interface DirectoryMap {
  [key: string]: string;
}

const AVAILABLE_DIRECTORIES: DirectoryMap = {
  'about': '#about-section',
  'projects': '#projects-section',
  'skills': '#skills-section',
  'contact': '#contact-section',
  'home': '#hero-section'
};

const AVAILABLE_FILES = {
  'contact-me': 'Contact form',
};

interface Command {
  input: string;
  output: string;
}

const COMMANDS = {
  HELP: {
    name: 'help',
    description: 'List all available commands'
  },
  CD: {
    name: 'cd',
    description: 'Navigate to a section (usage: cd <section>)'
  },
  CLEAR: {
    name: 'clear',
    description: 'Clear the terminal screen'
  },
  NVIM: {
    name: 'nvim',
    description: 'Open file in editor (usage: nvim contact-me)'
  }
};

const getHelpText = () => {
  return `How to use this terminal:

Type 'cd <section>' to navigate to different parts of the portfolio:
  - cd about       → Go to About section
  - cd projects    → Go to Projects section  
  - cd contact     → Go to Contact section
  - cd home        → Go to Hero section

Type 'nvim contact-me' to open the contact form
Type 'clear' to clear the terminal screen`;
};

const WindowControls = () => {
  return (
    <group position={[-2.7, 1.8, 0.11]}>
      {/* Close button */}
      <Circle args={[0.08]} position={[0, 0, 0]}>
        <meshBasicMaterial color={MACOS_COLORS.red} />
      </Circle>
      {/* Minimize button */}
      <Circle args={[0.08]} position={[0.2, 0, 0]}>
        <meshBasicMaterial color={MACOS_COLORS.yellow} />
      </Circle>
      {/* Maximize button */}
      <Circle args={[0.08]} position={[0.4, 0, 0]}>
        <meshBasicMaterial color={MACOS_COLORS.green} />
      </Circle>
    </group>
  );
};

const TerminalScreen: React.FC<{ 
  commands: Command[], 
  currentInput: string,
  suggestion: string 
}> = ({ commands, currentInput, suggestion }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });
  return (
    <RoundedBox 
      ref={meshRef}
      args={[6, 4, 0.2]} 
      radius={0.15} 
      smoothness={8}
      creaseAngle={0.4}
    >
      <meshStandardMaterial 
        color={MACOS_COLORS.background} 
        opacity={0.95} 
        transparent 
        roughness={0.2}
        metalness={0.1}
      />
      
      <WindowControls />

      <group position={[0, 0, 0.11]}>
        {/* Current input with suggestion */}
        <Text
          position={[-2.7, -1.7, 0]}
          fontSize={0.15}
          color={MACOS_COLORS.text}
          anchorX="left"
          anchorY="middle"
          maxWidth={5}
        >
          {`arsim-ajvazi@portfolio % ${currentInput}`}
        </Text>
        {suggestion && (
          <Text
            position={[-2.7, -1.7, 0]}
            fontSize={0.15}
            color={MACOS_COLORS.suggestion}
            anchorX="left"
            anchorY="middle"
            maxWidth={5}
          >
            {`arsim-ajvazi@portfolio % ${currentInput.startsWith('cd ') ? 'cd ' : 'nvim '} ${suggestion}`}
          </Text>
        )}

        {/* Previous commands */}
        {commands.slice(-5).map((cmd, index) => (
          <group key={index} position={[0, 1.5 - (index * 0.3), 0]}>
            <Text
              position={[-2.7, 0, 0]}
              fontSize={0.15}
              color={MACOS_COLORS.text}
              anchorX="left"
              anchorY="middle"
              maxWidth={5}
            >
              {`arsim-ajvazi@portfolio % ${cmd.input}`}
            </Text>
            {cmd.output.split('\n').map((line, lineIndex) => (
              <Text
                key={lineIndex}
                position={[-2.7, -0.15 - (lineIndex * 0.15), 0]}
                fontSize={0.12}
                color={MACOS_COLORS.text}
                anchorX="left"
                anchorY="middle"
                maxWidth={5}
              >
                {line}
              </Text>
            ))}
          </group>
        ))}
      </group>
    </RoundedBox>
  );
};

const Terminal: React.FC = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Smooth scroll with easing
      const start = window.pageYOffset;
      const target = offsetPosition;
      const distance = target - start;
      const duration = 1000; // ms
      let startTime: number | null = null;

      const easeInOutCubic = (t: number) => 
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easing = easeInOutCubic(progress);
        
        window.scrollTo(0, start + distance * easing);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
      return true;
    }
    return false;
  };

  const handleCommand = (input: string) => {
    const trimmedInput = input.trim().toLowerCase();
    
    // Clear commands for any new command
    setCommands([]);
    
    if (trimmedInput === 'clear') {
      setCurrentInput('');
      return;
    }

    if (trimmedInput === 'help') {
      setCommands([{
        input: trimmedInput,
        output: getHelpText()
      }]);
      setCurrentInput('');
      return;
    }

    // Handle nvim command
    if (trimmedInput.startsWith('nvim ')) {
      const file = trimmedInput.slice(5).toLowerCase();
      if (file === 'contact-me') {
        setIsContactModalOpen(true);
        setCommands([{
          input: trimmedInput,
          output: 'Opening contact form...'
        }]);
      } else {
        setCommands([{
          input: trimmedInput,
          output: `File '${file}' not found. Type 'help' for available files.`
        }]);
      }
      setCurrentInput('');
      return;
    }

    // Handle cd command
    if (trimmedInput.startsWith('cd ')) {
      const directory = trimmedInput.slice(3).toLowerCase();
      const targetSection = AVAILABLE_DIRECTORIES[directory];
      
      if (targetSection) {
        const success = scrollToSection(targetSection);
        setCommands([{
          input: trimmedInput,
          output: success ? `Navigating to ${directory}...` : `Error: Could not navigate to ${directory}`
        }]);
      } else {
        setCommands([{
          input: trimmedInput,
          output: `Available directories: ${Object.keys(AVAILABLE_DIRECTORIES).join(', ')}`
        }]);
      }
    } else {      setCommands([{
        input: trimmedInput,
        output: `Command '${trimmedInput}' not found. Type 'help' for usage instructions.`
      }]);
    }
    
    setCurrentInput('');
    setSuggestion('');
  };

  const handleInputChange = (input: string) => {
    setCurrentInput(input);
    
    // Handle autocomplete for cd command
    if (input.startsWith('cd ')) {
      const partial = input.slice(3).toLowerCase();
      const match = Object.keys(AVAILABLE_DIRECTORIES).find(dir => 
        dir.startsWith(partial) && dir !== partial
      );
      
      if (match) {
        setSuggestion(match.slice(partial.length));
      } else {
        setSuggestion('');
      }
    }
    // Handle autocomplete for nvim command
    else if (input.startsWith('nvim ')) {
      const partial = input.slice(5).toLowerCase();
      const match = Object.keys(AVAILABLE_FILES).find(file => 
        file.startsWith(partial) && file !== partial
      );
      
      if (match) {
        setSuggestion(match.slice(partial.length));
      } else {
        setSuggestion('');
      }
    } else {
      setSuggestion('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    e.preventDefault();
    
    // Handle ESC key for modal
    if (e.key === 'Escape' && isContactModalOpen) {
      handleModalClose();
      return;
    }
    
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    } else if (e.key === 'Tab' && suggestion) {
      if (currentInput.startsWith('cd ')) {
        setCurrentInput('cd ' + currentInput.slice(3) + suggestion);
      } else if (currentInput.startsWith('nvim ')) {
        setCurrentInput('nvim ' + currentInput.slice(5) + suggestion);
      }
      setSuggestion('');
    } else if (e.key === 'Backspace') {
      handleInputChange(currentInput.slice(0, -1));
    } else if (e.key.length === 1) {
      handleInputChange(currentInput + e.key);
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isContactModalOpen) {
        handleModalClose();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isContactModalOpen]);

  const handleModalClose = () => {
    setIsContactModalOpen(false);
    setCommands([{
      input: '',
      output: 'Contact form closed.'
    }]);
  };

  return (
    <>
      <div className="w-full h-full relative">
        <Canvas
          camera={{ position: [3, 0, 5], fov: 45 }}
          style={{ 
            width: '100%', 
            height: '100%',
            outline: 'none'
          }}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          
          <TerminalScreen 
            commands={commands}
            currentInput={currentInput}
            suggestion={suggestion}
          />
          
          <OrbitControls
            enableZoom={false}
            minAzimuthAngle={-Math.PI / 12}  
            maxAzimuthAngle={Math.PI / 12}   
            minPolarAngle={Math.PI / 2}      
            maxPolarAngle={Math.PI / 2}      
            enablePan={false}
          />
        </Canvas>
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleModalClose}
      />
    </>
  );
};

export default Terminal;