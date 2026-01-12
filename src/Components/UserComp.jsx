import useCounterStore from "../Store/useCounterStore";

const UserComp = () => {
  const myName = useCounterStore((state)=> state.name)
  return (
    <div>
      <h3>My name is {myName}</h3>
    </div>
  );
};

export default UserComp;



// function DisplayCount() {
//   const count = useCounterStore((state) => state.count);
//   return <h3>Current Count: {count}</h3>;
// }


