import { Ng2MasterDetail2Page } from './app.po';

describe('ng2-master-detail-2 App', function() {
  let page: Ng2MasterDetail2Page;

  beforeEach(() => {
    page = new Ng2MasterDetail2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
