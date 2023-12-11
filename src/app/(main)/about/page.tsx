import Renderer from "@/components/Renderer";
import { getUrl } from "@/utils/url";
import styles from "./index.module.scss";

const getData = async () => {
  const dataResponse = await fetch(`${getUrl()}/api/about`);

  return await dataResponse.json();
};

export default async function Page() {
  const { data } = await getData();

  return (
    <div className={styles.container}>
      <Renderer content={data.attributes.content} />;
    </div>
  );
}
