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
    this.getEventsMove = this.getEventsMove.bind(this);
    this.getEventsOut = this.getEventsOut.bind(this);
    this.setKeyDown = this.setKeyDown.bind(this);
    this.setKeyUp = this.setKeyUp.bind(this);

    document.addEventListener('click', this.getEventsClick);
    document.addEventListener('input', this.getEventsInput);
    document.addEventListener('mousemove', this.getEventsMouse);
    document.addEventListener('mouseover', this.getEventsMove);
    document.addEventListener('mouseout', this.getEventsOut);
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

      const card = <HTMLElement>event.target.closest('.card');

      if (card) {
        this.model.cardGame(card);
      }
      
      const pumpkinCanvas = <HTMLElement>event.target.closest('.pumpkin-canvas');
      const pumpkinBtnSettings = <HTMLButtonElement>event.target.closest('.pumpkin-settings-icon');
      const shooterGameCanvas = <HTMLElement>event.target.closest('.shooter-game');

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

      if (pumpkinBtnSettings) {
        this.model.showSettingsPumpkin();
      }

      if (shooterGameCanvas) {
        this.model.shooterGameSettings();
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
    if (event.target instanceof Element) {
      const pumpkinCanvasArea = <HTMLCanvasElement>event.target.closest('.pumpkin-canvas');

      if (pumpkinCanvasArea) {
        this.model.rotatePlayer(event);
      }
    }
  }

  getEventsMove(event: MouseEvent) {
    if (event.target instanceof Element) {
      const pumpkinBtnSettings = <HTMLButtonElement>event.target.closest('.pumpkin-settings-icon');

      if (pumpkinBtnSettings) {
        this.model.soundSettingsPumpkin(pumpkinBtnSettings);
      }
    }
  }

  getEventsOut(event: MouseEvent) {
    if (event.target instanceof Element) {
      const pumpkinBtnSettings = <HTMLButtonElement>event.target.closest('.pumpkin-settings-icon');

      if (pumpkinBtnSettings) {
        this.model.soundSettingsPumpkin(pumpkinBtnSettings);
      }
    }
  }

  setKeyDown(event: KeyboardEvent): void {
    this.model.setKeyDown(event);
  }

  setKeyUp(event: KeyboardEvent): void {
    this.model.setKeyUp(event);
  }
}
