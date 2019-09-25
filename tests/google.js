
module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    after: browser => {
        browser.end()
    },
    'Google search': browser => {
        browser
         .expect.url().endWith('ssl')
         browser.expect.element('#hplogo').a('img')
         browser.setValue('[name="q"]', ['winning', browser.Keys.ENTER])
         .waitForElementVisible('#res')
         .verify.containsText('#res', 'winning')
         browser.expect.element('[name="q"]').value.equal('winning')
         browser.pause(3000)
    }
}