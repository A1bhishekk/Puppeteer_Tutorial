import puppeteer from 'puppeteer'


const googleSearch= async ()=>{
    const browser=await puppeteer.launch({"headless":false});
    // launch browser 
    const page=await browser.newPage();
    
    // set viewport of the page 
    await page.setViewport({
        "width":1920,
        "height":1080
    })

    await page.goto('https://www.google.com');
    
    await page.type('[aria-label="Search"]',"global warming")

    const element=await page.$('[aria-label="Search"]')

    await element.press('Enter')
    
    await page.waitForNavigation({waitUntil:"networkidle2"})
    // await page.click('a>h3')

    await Promise.all([
        page.click('a>h3'),
        page.waitForNavigation({waitUntil:"networkidle2"})
    ])

    // take the screenshot 
    await page.screenshot({path:"img.png"})

    // close the browser 
    await browser.close()

}

googleSearch();