import { SingleVendorPage } from './app.po';

describe('single-vendor App', function() {
  let page: SingleVendorPage;

  beforeEach(() => {
    page = new SingleVendorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
