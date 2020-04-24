// import siteHead from "./src/components/siteHead"
var siteHead = require("./src/components/siteHead")
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    // const headComponents = getHeadComponents()
    // const htmlHead = siteHead();
   //  headComponents.sort((x, y) => {
    //   if (x.key === 'TypographyStyle') {
    //     return -1
    //   } else if (y.key === 'TypographyStyle') {
    //     return 1
    //   }
    //   return 0
    // })
    replaceHeadComponents(siteHead)
  }