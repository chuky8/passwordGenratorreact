import React from 'react'
import { useState } from 'react'



const Password = () => {

    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
  



    const generatePassword = () => {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        
        let characterPool = '';
        if (includeLowercase) characterPool += lowercaseChars;
        if (includeUppercase) characterPool += uppercaseChars;
        if (includeNumbers) characterPool += numberChars;
        if (includeSymbols) characterPool += symbolChars;
    
        if (characterPool.length === 0) return 
        setPassword('Please select at least one character type!');
    
        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characterPool.length);
          generatedPassword += characterPool[randomIndex];
        }
        
        setPassword(generatedPassword);
      };
    
  return (
    <div>
 <div className="app">
      <h1>Password Generator</h1>
      <div className="password-container">
        <input type="text" value={password} readOnly placeholder="Generated Password" />
        <button onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
      </div>
      
      <div className="controls">
        <label>
          Password Length: 
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="4"
            max="32"
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          Include Uppercase Letters
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          Include Lowercase Letters
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>

        <button onClick={generatePassword}>Generate Password</button>
      </div>
    </div>
    </div>
  )
}

export default Password