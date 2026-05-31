import { Card } from "../../atoms";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8 gap-4 max-w-[60%] mx-auto">
      <Card className="w-full">
        Rendas
      </Card>
      <div className="flex gap-4">
        <Card>
          Gastos
        </Card>
        <Card>
          Resumo
        </Card>
        <Card>
          Metas
        </Card>
      </div>
      <Card className="w-full">
        Formuário de cadastro de gasto
      </Card>
    </div>
  );
};

export { Home };
