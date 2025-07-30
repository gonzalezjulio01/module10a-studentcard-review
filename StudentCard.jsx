// StudentCard.jsx
// This component displays a student profile card.
// It uses props (data from the parent component) and useState (internal state)
// to show or hide the bio text when a button is clicked.

import { useState } from 'react'; // Importing useState hook from React

function StudentCard({ name, major, year, bio, imageUrl }) {
  // State variable 'showBio' tracks whether the bio should be visible
  const [showBio, setShowBio] = useState(false);

  // toggleBio function flips the state between true and false
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  // JSX structure of the component
  return (
    <div
      style={{
        maxWidth: '350px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Profile Image */}
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '12px',
        }}
      />

      {/* Student Information */}
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>
        {major} – {year}
      </p>

      {/* Button to toggle bio visibility */}
      <button
        onClick={toggleBio}
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          fontSize: '14px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: 'white',
        }}
      >
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>

      {/* Conditionally render bio text if showBio is true */}
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

export default StudentCard;
