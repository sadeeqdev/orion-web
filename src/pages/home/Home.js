import React from 'react'
import Glossy from '../../assets/img/Glossy .png'
import People from '../../assets/img/People-1.png'
import ChartPie from '../../assets/img/NBcharts-PIE.svg'
import Stakebox from '../../components/stakebox/Stakebox'
import FeatureBox from '../../components/featuresBox/FeaturesBox' 
import FailPass from '../../assets/img/Pass Fail.svg'
import Queue from '../../assets/img/Queue.svg'
import SecurityLock from '../../assets/img/Security Lock.svg'
import RobotImg from '../../assets/img/white robot.png'

const features = [
    {"header": "Decentralized network of investors", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus et blandit nisi habitasse mauris, ac elit tortor viverra. Urna.", "img": FailPass},
    {"header": "Secure and Audited Platform", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus et blandit nisi habitasse mauris, ac elit tortor viverra. Urna.", "img": Queue},
    {"header": "Waitlist of new and innovative projects on Aptos", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus et blandit nisi habitasse mauris, ac elit tortor viverra. Urna.", "img": SecurityLock},
]

const Home = () => {
  return (
    <>
        <div className="w-5/6 2xl:w-4/6 mx-auto text-white">
            <div className='pt-20 flex justify-between'>
                <div className='w-4/5'>
                    <h2 className='text-8xl font-bold'>
                        Premier Fundraising Platform 
                    </h2>
                    <p className='text-xl mt-9 w-4/5'>
                        Orion is a Premier Fundraising Platfrom
                        being developed on the new scalable L1
                        Chain called Aptos.
                        Orion aims to be the stop shop for new
                        protocols launching on Aptos to use as a
                        strategic Partner for a raise through a decentralized network.
                    </p>
                    <button className='border border-greentext px-40 py-4 mt-12 hover:bg-greentext transition-all'>LAUNCH APP</button>
                </div>
                <div className='flex lg:w-1/1 2xl:w-4/6   float-right justify-end'>
                    <img src={Glossy} alt="Logo" width="100%"/>
                </div>
            </div>
            <div className='mt-16 flex justify-between '>
                <button className='px-32 2xl:px-40 py-4 mt-12 bg-green shadow-md shadow-greenshadow'>LAUNCH APP</button>
                <button className='px-32 2xl:px-40 py-4 mt-12 bg-blue shadow-md shadow-blueshadow'>LAUNCH APP</button>
                <button className='px-32 2xl:px-40 py-4 mt-12 bg-yellow shadow-md shadow-yellowshadow'>LAUNCH APP</button>
            </div>
        </div>
        <div className='mt-32 text-white'>
            <h2 className='text-6xl text-center font-bold'>Vision Of Orion</h2>
            <div className='mt-9 w-1/1 h-80 bg-sub-dark shadow-xl'>
                <div className='w-5/6 2xl:w-4/6 mx-auto text-white flex justify-between'>
                    <div>
                        <img src={People} alt="Logo" width="100%" style={{marginTop:'-70px'}}/>
                    </div>
                    <div className='flex float-right mt-12 justify-end'>
                        <div>
                        <p className='w-4/5 text-right float-right'>
                            Orion aims to be the main launchpad
                            and incubator Partner on Aptos by
                            leveraging the first mover advantage
                            to grow our network and partners and
                            building a community of interested investors.
                            With this vision, we aim to have a portfolio
                            of unique and ecosystem evolving projects that
                            push Aptos to further heights
                        </p>
                        <button className='px-32 2xl:px-40 py-4 mt-9 bg-grey text-black font-bold text-xl shadow-md float-right'>LAUNCH APP</button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        <div className='w-5/6 2xl:w-4/6 mx-auto my-32'>
            <div className='flex justify-between'>
                <Stakebox/>
                <Stakebox/>
                <Stakebox/>
                <Stakebox/>
            </div>

            <div className='mt-32 '>
                <h2 className='text-white  font-bold text-5xl text-center'>Token Distribution</h2>
                <div className='bg-dark mt-16 max-w px-12 py-16 flex justify-between' style={{boxShadow:'0px 4px 35px rgba(0, 0, 0, 0.4)'}}>
                    <div className=''>
                        <div>
                            <p className='text-green text-xl'>Token Name - <span className='font-medium'>$Orion</span></p>
                            <p className='text-green text-xl mt-9'>Token Supply - <span className='font-medium'>20M</span></p>
                        </div>
                    </div>
                    <div className=''>
                        <ul className='font-medium text-lg text-white list-disc'>
                            <li>Seed - 5.5%</li>
                            <li>Private - 9.5%</li>
                            <li>Public - 4%</li>
                            <li>Farm Pool/Staking - 28%</li>
                            <li>Team - 14%</li>
                            <li>Initial Liquidity - 10%</li>
                            <li>Treasury - 10%</li>
                            <li>Marketing - 10%</li>
                            <li>Ecosystem - 8%</li>
                            <li>Airdrop - 1%</li>
                        </ul>
                    </div>
                    <div className='flex items-start -mt-24'>
                        <img src={ChartPie} alt="" width="100%"/>
                    </div>
                </div>
            </div>
             <div className='flex justify-between mt-40 space-x-16'>
                {features.map((feature, index) => (
                    <FeatureBox key={index} image={feature.img} header={feature.header} content={feature.content} />
                ))}
            </div>
          
        </div>
        <div className='mt-32 '>
            <h2 className='text-white font-bold text-5xl text-center'>Road Map</h2>
            <div className='mt-10' style={{background: 'linear-gradient(280.99deg, rgba(217, 217, 217, 0.15) 18.55%, rgba(217, 217, 217, 0) 95.81%)'}}>
                <div className='w-5/6 2xl:w-4/6 space-x-10 mx-auto flex justify-between'>
                    <div className='w-2/4'>
                        <img src={RobotImg} alt="" width="100%" className='-mt-20 -ml-5'/>
                    </div>
                    <ul className='font-medium text-2xl text-white list-disc mt-20'>
                        <li>
                        Market Study
                        </li>
                        <li>
                        Team Onboarding and Expansion
                        </li>
                        <li>
                        UI and UX Design/ Prototyping
                        </li>
                        <li>
                        Backend Creation and Contracts
                        </li>
                        <li>
                        Funding rounds
                        </li>
                        <li>
                        Main-net Launch
                            
                        </li>
                    </ul>
                    <ul className='font-medium text-2xl text-white list-disc mt-20'>
                        <li>
                            Project IDO's 
                        </li>
                        <li>
                            Strategic Partnerships
                        </li>
                        <li>
                            Cross Community Building
                        </li>
                        <li>
                            Listing on Cexs
                        </li>
                        <li>
                            Governance Creation
                        </li>
                    </ul>
                 </div>
            </div>
        </div>
    </>
  )
}

export default Home