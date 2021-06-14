import ButtonComp from "../ButtonComp";

const CardGroup = ({ group, action }) => {
  return (
    <div>
      <h2>{group?.name}</h2>
      <span>{group?.category}</span>
      <p>{group?.description}</p>
      <ButtonComp>Inscrever-se</ButtonComp>
    </div>
  );
};

export default CardGroup;
