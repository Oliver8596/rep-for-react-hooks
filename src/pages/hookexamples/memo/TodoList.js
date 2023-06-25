import { useMemo } from "react";
import List from "./List.js";
import { filterTodos } from "./utils.js";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, theme, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  return (
    <div className={styles[theme]}>
      <p>
        <b>
          Note: <code>List</code> is artificially slowed down!
        </b>
      </p>
      <List items={visibleTodos} />
    </div>
  );
}
