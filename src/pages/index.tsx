import { Dashboard } from "../layouts/DashBoard";
import { GetStaticProps } from "next";
import api from "../utils/api";

interface DataApi {
  data: {
    snapshotByPortfolio: {
      equity: number;
      valueApplied: number;
      equityProfit: number;
      percentageProfit: number;
      indexerValue: number;
      percentageOverIndexer: number;
    };
  };
}

export default function Home({ data }: DataApi) {
  return (
    <div>
      <Dashboard
        equity={data.snapshotByPortfolio.equity}
        valueApplied={data.snapshotByPortfolio.valueApplied}
        equityProfit={data.snapshotByPortfolio.equityProfit}
        percentageProfit={data.snapshotByPortfolio.percentageProfit}
        indexerValue={data.snapshotByPortfolio.indexerValue}
        percentageOverIndexer={data.snapshotByPortfolio.percentageOverIndexer}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await api.get("/").then((response) => {
    return response.data.data;
  });

  console.log(data);

  return {
    props: {
      data,
    },
  };
};
