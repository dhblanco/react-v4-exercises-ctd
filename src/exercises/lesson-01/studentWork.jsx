//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here

  const name = 'Daniela Hernández Blanco';
  const age = 33;
  const hobbyList = [
    { id: 1, title: 'hanging out with friends' },
    { id: 2, title: 'watching and playing rugby' },
    { id: 3, title: 'eating and cooking' },
  ];

  return (
    <div>
      <h1>About Me!</h1>
      <ul>
        {hobbyList.map((hobby) => (
          <li key={hobby.id}>{hobby.title}</li>
        ))}
      </ul>
      <p>
        Hello! My name is {name} and {age} years old. I&apos;m a student from
        Costa Rica studying programming in North Carolina.
      </p>
    </div>
  );
}
