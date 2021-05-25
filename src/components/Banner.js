import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const Banner = () => {
    return (
        <div className={"relative"}>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading={"lazy"} src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg" alt="" />
                </div>
                <div>
                    <img loading={"lazy"} src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/content/GTM/Editorial/0504-AMZN-GNBC-GatewayHero-1500x600_v5._CB669739807_.jpg" alt="" />
                </div>
                <div>
                    <img loading={"lazy"} src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/launch/gateway/TheUndergroundRailroad/UGRR_S1_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB669781769_.jpg" alt="" />
                </div>
                <div>
                    <img loading={"lazy"} src="https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2021/Marketing/SWSpringDeal_DMUX-4280/Gateway/DV2/UK-EN_030821_SpringSitewide_ACQ_GW_Hero_D_1500x600_CV69._CB656397523_.jpg" alt="" />
                </div>
                <div>
                    <img loading={"lazy"} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="" />
                </div>
                <div>
                    <img loading={"lazy"} src="https://images-fe.ssl-images-amazon.com/images/G/09/2020/global/AIS-GW/Fuji_TallHero_ShipATW_Jan20_he_IL_1x._CB413311618_.png" alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
