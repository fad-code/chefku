import React, { useEffect, useState, useRef } from 'react';

export default function Recipe({ recipe }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!recipe) return;

    clearTimeout(timeoutRef.current);
    setDisplayedLines([]);

<<<<<<< HEAD
=======
    
>>>>>>> d72b908f6212fee51ec421a40ebcdb27a0d2d01c
    const uniqueIngredients = [...new Set(recipe.ingredients)];
    const uniqueSteps = [...new Set(recipe.steps)];

    const lines = [];
    if (recipe.name !== 'No Match') {
      lines.push(recipe.name, '', 'Ingredients:');
      uniqueIngredients.forEach((item) => lines.push(`- ${item}`));
      lines.push('', 'Steps:');
      uniqueSteps.forEach((step, index) => lines.push(`${index + 1}. ${step}`));
    } else {
      lines.push('Try different ingredients!');
    }

<<<<<<< HEAD
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = '';

    const typeLine = () => {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          currentLine += lines[lineIndex][charIndex];
          setDisplayedLines((prev) => [...prev.slice(0, -1), currentLine]);
          charIndex++;
          timeoutRef.current = setTimeout(typeLine, 30);
        } else {
          currentLine = '';
          charIndex = 0;
          lineIndex++;
          setDisplayedLines((prev) => [...prev, '']);
          timeoutRef.current = setTimeout(typeLine, 150); 
        }
=======
    let index = 0;
    const addLine = () => {
      if (index < lines.length) {
        setDisplayedLines((prev) => [...prev, lines[index]]);
        index++;
        setTimeout(addLine, 300); 
      } else {
        setIsTyping(false);
>>>>>>> d72b908f6212fee51ec421a40ebcdb27a0d2d01c
      }
    };

    typeLine();

    return () => clearTimeout(timeoutRef.current);
  }, [recipe]);

  return (
    <section
      style={{
        backgroundColor: '#fafafa',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        fontFamily: 'monospace',
        lineHeight: '1.8',
        whiteSpace: 'pre-wrap',
      }}
    >
      {displayedLines.map((line, i) => (
        <p key={i} style={{ margin: '4px 0', minHeight: '20px' }}>
          {line}
        </p>
      ))}
      <span className="blinking-cursor">|</span>
      <style>
        {`
          .blinking-cursor {
            font-weight: bold;
            animation: blink 1s infinite step-end;
          }
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
}
