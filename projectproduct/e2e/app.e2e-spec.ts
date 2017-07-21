import { ProjectproductPage } from './app.po';

describe('projectproduct App', function() {
  let page: ProjectproductPage;

  beforeEach(() => {
    page = new ProjectproductPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
