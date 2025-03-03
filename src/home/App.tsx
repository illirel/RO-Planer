import styles from './LogIn.module.css';

function LogIn() {
  return (
    <div className={styles.logIn}>
      <h1></h1>
      <form>
        <h2>
          Войдите в Вашу <br></br> учетную запись
        </h2>
        <input type='username' placeholder='Введите 4-3-1' />
        <input type='password' placeholder='Введите пароль' />
        <button>Войти</button>
        <section>
          <div>
            <a href='#'>Регистрация</a>
          </div>
        </section>
      </form>
      <footer>
        <img src='./OFSLogoHoriz.png' alt='Home' />
      </footer>
    </div>
  );
}

export default LogIn;
