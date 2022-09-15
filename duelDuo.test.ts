
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays the div with “choices”', async () => {
    await driver.findElement(By.id('draw')).click()
    const choicesSection = await driver.findElement(By.id('choices'))
    const displayed = await choicesSection.isDisplayed()
    await driver.sleep(2000)
    expect(displayed).toBe(true)
})

test(' “Add to Duo” button displays the div “player-duo”', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.css('.bot-btn'))
    const playerDuoSection = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuoSection.isDisplayed()
    await driver.sleep(2000)
    expect(displayed).toBe(true)
})