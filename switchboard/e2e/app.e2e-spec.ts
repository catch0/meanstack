import { SwitchboardPage } from './app.po';

describe('switchboard App', function() {
  let page: SwitchboardPage;

  beforeEach(() => {
    page = new SwitchboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
