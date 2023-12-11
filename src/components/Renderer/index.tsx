import Image from "next/image";
import styles from "./index.module.scss";

const Renderer = ({ content }: any) => {
  console.debug("🚀 ~ file: index.tsx:5 ~ Renderer ~ data:", content);
  return (
    content &&
    content.map((part: any, partIndex: number) => {
      switch (part.type) {
        case "image":
          return (
            <p className={styles.image}>
              <Image
                src={part.image.url}
                height={part.image.height}
                width={part.image.width}
                alt={part.image.alternativeText}
              />
            </p>
          );
        case "heading":
          switch (part.level) {
            case 1:
              return part.children.map((child: any, i: number) => {
                return <h1 key={`${partIndex}-${i}`}>{child.text}</h1>;
              });
            case 2:
              return part.children.map((child: any, i: number) => {
                return <h2 key={`${partIndex}-${i}`}>{child.text}</h2>;
              });
            case 3:
              return part.children.map((child: any, i: number) => {
                return <h3 key={`${partIndex}-${i}`}>{child.text}</h3>;
              });
            case 4:
              return part.children.map((child: any, i: number) => {
                return <h4 key={`${partIndex}-${i}`}>{child.text}</h4>;
              });
            case 5:
              return part.children.map((child: any, i: number) => {
                return <h5 key={`${partIndex}-${i}`}>{child.text}</h5>;
              });
            case 6:
              return part.children.map((child: any, i: number) => {
                return <h6 key={`${partIndex}-${i}`}>{child.text}</h6>;
              });
          }

        default:
          return part.children.map((child: any, i: number) => {
            return (
              <p key={`${partIndex}-${i}`} className={styles.paragraph}>
                {child.text}
              </p>
            );
          });
      }
    })
  );
};

export default Renderer;
