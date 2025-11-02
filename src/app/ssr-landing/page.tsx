// principal: #03363e
// secundario: #17494c
// terciario: #e4f0d3

import { HeaderLanding } from "@/components/landing/HeaderLanding";
import { HeaderMenu } from "@/components/landing/HeaderMenu";
import { PrincipalContent } from "@/components/landing/PrincipalContent";
import { QuickTour } from "@/components/landing/QuickTour";
import { TopBanner } from "@/components/landing/TopBanner";

const LandingPage = () => {
    return (
        <div>
            <TopBanner/>
            <HeaderMenu/>
            <HeaderLanding/>
            <PrincipalContent/>
            <QuickTour/>
        </div>
    )
}

export default LandingPage;