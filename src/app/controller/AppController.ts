import AppModel from '../model/AppModel';

export default class AppController {
  model: AppModel;
  container: HTMLElement;

  constructor(model: AppModel, container: HTMLElement) {
    this.model = model;
    this.container = container;

    this.getEventsClick = this.getEventsClick.bind(this);
    this.getEventsInput = this.getEventsInput.bind(this);
    this.getEventsMouse = this.getEventsMouse.bind(this);
    this.setMouseDown = this.setMouseDown.bind(this);
    this.setMouseUp = this.setMouseUp.bind(this);
    this.setKeyDown = this.setKeyDown.bind(this);
    this.setKeyUp = this.setKeyUp.bind(this);

    document.addEventListener('click', this.getEventsClick);
    document.addEventListener('input', this.getEventsInput);
    document.addEventListener('mousemove', this.getEventsMouse);
    document.addEventListener('mousedown', this.setMouseDown);
    document.addEventListener('mouseup', this.setMouseUp);
    document.addEventListener('keydown', this.setKeyDown);
    document.addEventListener('keyup', this.setKeyUp);
  }

  getEventsClick(event: Event): void {
    if (event.target instanceof Element) {
      const userIcon = <HTMLElement>event.target.closest('.user-icon');
      const btnAuthorization = <HTMLElement>event.target.closest('.authorization-btn');
      const regLink = <HTMLElement>event.target.closest('.reg-link');
      const loginLink = <HTMLElement>event.target.closest('.login-link');
      const btnRegistration = <HTMLElement>event.target.closest('.registration-btn');
      const closeRegistrationForm = <HTMLElement>event.target.closest('.close-registration-form');
      const userInfo = <HTMLElement>event.target.closest('.user-info');
      const userQuit = <HTMLElement>event.target.closest('.user-quit');
      const pumpkinCanvas = <HTMLElement>event.target.closest('.pumpkin-canvas');
      
      if (userIcon) {
        this.model.goToLoginContainer();
      }
      
      if (btnAuthorization) {
        this.model.authorization();
      }

      if (regLink) {
        this.model.goToRegistrationMode();
      }

      if (loginLink) {
        this.model.goToLoginMode();
      }

      if (btnRegistration) {
        this.model.registration();
      }

      if (closeRegistrationForm) {
        this.model.closeRegistrationForm();
      }

      if (userInfo) {
        this.model.goToUserMenu();
      }

      if (userQuit) {
        this.model.userSignOut();
      }

      if (pumpkinCanvas) {
        this.model.shootPumpkin();
      }
    }
  }

  getEventsInput(event: Event): void {
    if (event.target instanceof Element) {
      const emailInput = <HTMLInputElement>event.target.closest('#email');
      const passwordInput = <HTMLInputElement>event.target.closest('#password');
      
      if (emailInput) {
        this.model.validateEmail(emailInput);
      }

      if (passwordInput) {
        this.model.validatePassword(passwordInput);
      }
    }
  }

  getEventsMouse(event: MouseEvent): void {
    this.model.rotatePlayer(event);
  }

  setMouseDown(): void {
    this.model.setMouseDown();
  }

  setMouseUp(): void {
    this.model.setMouseUp();
  }

  setKeyDown(event: KeyboardEvent): void {
    this.model.setKeyDown(event);
  }

  setKeyUp(event: KeyboardEvent): void {
    this.model.setKeyUp(event);
  }
}
