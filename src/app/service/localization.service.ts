export class LocalizationService {

  isHungarian = true;

  switchLanguage() {
    this.isHungarian = !this.isHungarian;
  }
}
