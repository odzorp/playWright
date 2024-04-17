export default class LoginPage {
    constructor(page) {
      this.page = page;
    }
  
    async navigateToLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
  
    async login(username, password) {
        await this.page.fill('[id="username"]', username);
        await this.page.fill('[id="password"]', password);
        await this.page.click('[type="submit"]');
    }
  
    async isLoggedIn() {
      return await this.page.isVisible('a[href="/secure"]');
    }
  
    async goToSecureArea() {
      await this.page.click('a[href="/secure"]');
    }
  
    async getPageTitle() {
      return await this.page.title();
    }
  
    async logOut(){
        await this.page.click('a[href="/logout"]');
    }
}
