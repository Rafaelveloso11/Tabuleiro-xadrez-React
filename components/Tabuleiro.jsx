import Linha from "./Linha";
import styles from "../styles/Tabuleiro.module.css"

export default function Tabuleiro(props) {
  return (
    <div className={styles.centralizar}>
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
    </div>
  );
}
