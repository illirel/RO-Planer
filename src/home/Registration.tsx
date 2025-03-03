import styles from './LogIn.module.css';

function Registration() {
  return (
    <div className={styles.logIn}>
      <h1></h1>
      <form>
        <h2>
          Cоздайте Вашу <br></br> учетную запись test
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

export default Registration;
