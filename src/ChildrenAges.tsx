import { ChangeEvent } from "react";

type ChildrenAgesProps = {
  ages: Array<number>;
  onChange(ages: Array<number>): void;
};

export function ChildrenAges({ ages, onChange }: ChildrenAgesProps) {
  function handleNumberOfChildrenChange(event: ChangeEvent<HTMLSelectElement>) {
    const numberOfChildren = Number(event.target.value);
    const nextAges = [...ages, ...Array(50).fill(0)].slice(0, numberOfChildren);

    onChange(nextAges);
  }

  function handleChildAgeChange(
    event: ChangeEvent<HTMLSelectElement>,
    index: number,
  ) {
    const value = Number(event.target.value);
    const nextAges = ages.with(index, value);

    onChange(nextAges);
  }

  return (
    <div>
      <label htmlFor="children">Number of children</label>
      <select
        id="children"
        onChange={handleNumberOfChildrenChange}
        defaultValue={ages.length}
      >
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>

      {Array(ages.length)
        .fill(null)
        .map((_, index) => {
          const id = `child-${index}`;
          return (
            <div key={index}>
              <label htmlFor={id}>Child {index + 1} age</label>
              <select
                id={id}
                defaultValue={ages[index]}
                onChange={(event) => handleChildAgeChange(event, index)}
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
          );
        })}
    </div>
  );
}
