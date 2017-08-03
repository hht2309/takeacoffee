import { PersonalSitePage } from './app.po';

describe('personal-site App', function() {
  let page: PersonalSitePage;

  beforeEach(() => {
    page = new PersonalSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
