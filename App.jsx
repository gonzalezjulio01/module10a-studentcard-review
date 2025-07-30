import StudentCard from './StudentCard';

function App() {
  return (
    <div>
      <StudentCard
        name="Jane Doe"
        major="Computer Science"
        year="Junior"
        bio="I love coding, UI design, and learning React. In my free time, I enjoy hiking and photography."
        imageUrl="https://via.placeholder.com/100"
      />
    </div>
  );
}

export default App;
