import { ProductmanagementPage } from './app.po';

describe('productmanagement App', function() {
  let page: ProductmanagementPage;

  beforeEach(() => {
    page = new ProductmanagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
