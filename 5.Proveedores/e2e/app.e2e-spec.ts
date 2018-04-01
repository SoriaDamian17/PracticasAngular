import { AppPage } from './app.po';

<<<<<<< HEAD
describe('provedores App', () => {
=======
describe('prov App', () => {
>>>>>>> aa4285b7a562e7be85a9eb732fea01ee89a9424f
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
