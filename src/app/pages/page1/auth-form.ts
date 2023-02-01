import './style-auth-form.scss';

export default class Page1 {
  constructor() {}

  render(): string {
    return `
      <div class="container registration-container">
        <form class="registration-form">
          <div class="form-content">
            <div class="block-headers">
              <div class="registration-block">
                <h2>Зарегистрируйся,</h2>
                <h3>чтобы получить доступ к новым локациям!</h3>
              </div>
              <div class="authorization-block">
                <h2>Войти в аккаунт</h2>
              </div>
              <span class="errorMsg">Неправильный e-mail или пароль</span>
            </div>
            <div class="form-fields">
              <input type="text" id="name" name="username" placeholder="Имя" class="registration-block">
              <div class="email-field field">
                <input type="email" id="email" name="email" required placeholder="E-mail*">
                <span>Поле заполнено неверно!</span>
              </div>
              <div class="pwd-field field">
                <input type="password" id="pwd" name="password" required placeholder="Пароль*" minlength="8">
                <span>Минимальная длина пароля - 8 символов</span>
              </div>
            </div>
            <p>* - поля, обязательные для заполнения</p>
            <div class="registration-block">
              <a class="registration-btn fill-btn disabled">Зарегистрироваться</a>
              <div class="auth-link">
                <span>Уже зарегистрированы?</span>
                <button class="link-btn login-link" type="button">Да, войти!</button>
              </div>
            </div>
            <div class="authorization-block">
              <a class="empty-btn authorization-btn disabled">Войти</a>
              <div class="registration-link">
                <span>Нет аккаунта?</span>
                <button class="link-btn reg-link" type="button">Зарегистрироваться</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    `;
  }

  init(): void {}
}
