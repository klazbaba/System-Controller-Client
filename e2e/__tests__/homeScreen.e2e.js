/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should open the home screen', async () => {
    await expect(element(by.text('HomeScreen'))).toBeVisible();
  });
});
