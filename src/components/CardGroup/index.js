import { useToken } from "../../providers/UserToken";
import { apiKabit } from "../../utils/apis";
import ButtonComp from "../ButtonComp";
import { GroupContainer, Infos } from "./styles";

const CardGroup = ({ group }) => {
  const { userToken } = useToken();

  const handleSubs = () => {
    const config = {
      headers: {
        null: "",
        Authorization: `Bearer ${userToken}`,
      },
    };

    apiKabit
      .post(`/groups/${group.id}/subscribe/`, config)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };
  return (
    <Infos>
      <GroupContainer>
        <h1>Título</h1>
        <p>{group?.name}</p>
        <h1>Categoria</h1>
        <p>{group?.category}</p>
        <h1>Descrição</h1>
        <p>{group?.description}</p>
      </GroupContainer>
      <ButtonComp PropFunction={() => handleSubs()}>Inscrever-se</ButtonComp>
    </Infos>
  );
};

export default CardGroup;
