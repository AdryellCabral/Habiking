import { toast } from "react-toastify";
import { useGroupsSubscriptions } from "../../providers/groupsSubscriptions";
import { useToken } from "../../providers/UserToken";
import { apiKabit } from "../../utils/apis";
import ButtonComp from "../ButtonComp";
import { GroupContainer, Infos } from "./styles";

const CardGroup = ({ group }) => {
  const { userToken } = useToken();
  const { newRequestGroupsSubscription } = useGroupsSubscriptions();

  const handleSubs = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    apiKabit
      .post(`/groups/${group.id}/subscribe/`, null, config)
      .then((response) => newRequestGroupsSubscription())
      .then(() => toast.success("Inscrição feita com sucesso!"))
      .catch((e) => toast.error("Não foi possível entrar no grupo"));
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
