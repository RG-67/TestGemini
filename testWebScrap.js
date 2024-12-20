import puppeteer from "puppeteer";

const url = "https://www.ibm.com/in-en/careers/search";

const webScrap = async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: "networkidle2" });
        //   await page.waitForNavigation();
        // await page.waitForSelector(".job-title");
        await page.waitForSelector('*', { visible: true });

        /* const jobs = await page.evaluate(() => {
          const jobList = document.querySelectorAll(".job-title");
          const jobArray = [];
          jobList.forEach((job) => {
            jobArray.push(job.innerText);
          });
          return jobArray;
        }); */

        //   console.log(jobs);

        const textContent = await page.evaluate(() => {
            // const element = document.querySelectorAll("Engage IBM Consulting");
            // const element = Array.from(document.querySelectorAll('*')).find(el => el.textContent.includes("Engage IBM Consulting"));   
            // const element = Array.from(document.querySelectorAll('*')).find(el => el.textContent.trim() === "Application Developer: Experience Front End");
            // return element ? element.textContent : null;
            // return element.length > 0 ? element.map(el => el.textContent).join('\n') : null;
            const resBody = document.body.innerText;
            const matchingText = Array.from(resBody.split('\n')).find(el => el.includes("Application Developer: Experience Front End"));
            // return document.body.innerText;
            return matchingText ? matchingText : null;
        });
        console.log(textContent);

        await browser.close();
    } catch (error) {
        console.log("Error Occurred: ", error);
    }
}

webScrap();