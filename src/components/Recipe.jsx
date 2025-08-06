import React, { useEffect, useState } from 'react';

export default function Recipe({ recipe }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!recipe) return;

    setDisplayedLines([]);
    setIsTyping(true);

    
    const uniqueIngredients = [...new Set(recipe.ingredients)];
    const uniqueSteps = [...new Set(recipe.steps)];

    const lines = [];

    if (recipe.name !== 'No Match') {
      lines.push(recipe.name);
      lines.push('');
      lines.push('Ingredients:');
      uniqueIngredients.forEach((item) => lines.push(`- ${item}`));
      lines.push('');
      lines.push('Steps:');
      uniqueSteps.forEach((step, index) => lines.push(`${index + 1}. ${step}`));
    } else {
      lines.push('Try different ingredients!');
    }

    let index = 0;
    const addLine = () => {
      if (index < lines.length) {
        setDisplayedLines((prev) => [...prev, lines[index]]);
        index++;
        setTimeout(addLine, 300); 
      } else {
        setIsTyping(false);
      }
    };

    addLine();
  }, [recipe]);

  return (
    <section
      style={{
        backgroundColor: '#fafafa',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        fontFamily: 'monospace',
        lineHeight: '1.8'
      }}
    >
      {displayedLines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
      {isTyping && <span className="blinking-cursor">|</span>}
    </section>
  );
}
