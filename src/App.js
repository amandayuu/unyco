import Header from './components/Header';
import styles from './assets/style/Main.module.css'
function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sticky}>
          <Header/>
        </div>
      </div>
    </>
  );
}

export default App;
