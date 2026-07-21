export default function SnackList() {
  const List = [
    { rank: 6, name: 'chocolate' },
    { rank: 5, name: 'popcorn' },
    { rank: 4, name: 'gummy candy' },
    { rank: 3, name: 'potato chips' },
    { rank: 2, name: 'hot fries' },
    { rank: 1, name: 'fresh mango or fruit' },
  ];

  const SortedList = List.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {SortedList.map((List) => (
        <li key={List.name}>{List.name}</li>
      ))}
    </ol>
  );
}
