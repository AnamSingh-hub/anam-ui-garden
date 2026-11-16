import React, { useState } from 'react';

export interface DropdownProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function Dropdown({ children, disabled = false }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div style={{ width: '220px', fontFamily: 'Arial, sans-serif' }}>
      <button
        type="button"
        disabled={disabled}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        style={{
          width: '100%',
          padding: '12px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          backgroundColor: disabled ? '#d1d5db' : '#2563eb',
          color: disabled ? '#666' : '#fff',
          cursor: disabled ? 'not-allowed' : 'pointer',
          textAlign: 'left',
        }}
      >
        {selected || children || 'Choose an option'}
        {!disabled && <span style={{ float: 'right' }}>▼</span>}
      </button>

      {isOpen && !disabled && (
        <div
          style={{
            marginTop: '4px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            backgroundColor: '#fff',
          }}
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                border: 'none',
                backgroundColor: '#fff',
                color: '#222',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
