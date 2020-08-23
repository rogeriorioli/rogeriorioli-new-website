import React from 'react'
import Seo from  '../../Components/Seo'
import SocialIcons from '../../Components/SocialIcons';
import { PageContainer } from './style';
import rogeriog from '../../assets/images/rogerioog.jpg'
import {FiCodepen, FiGithub, FiLinkedin , FiPhone, FiDownload, FiTwitter} from 'react-icons/fi'
import CardPortifolio from '../../Components/CardPortifolio';
import Title  from '../../Components/Title';
import Hero from '../../Components/Hero';

const Home: React.FC = () => {
  return (
      <>
      <Seo  
        lang="en"
        title="Rogerio Orioli | Web Developer " 
        meta={[
            {
                name : 'robots',
                content : 'index, follow'
            },
            { 
                name : "description",    
                content : 'Paulistano, Web Developer and Graphic Designer whit solid knowledgment in Javascript and Wordpress , in the short time skater and collector of Vinyl records. I like Music, technology, sports, gastronomy and movies. I do not refuse a good course, be with family and friends.I have great love for advertising, art and Javascript.'
            }
            ]}
            
        metaOg={[
            {
                property : "og:url",
                content : 'https://rogerioorioli.dev.br/'
            },
            {
                property : "og:type",
                content : 'website'
            },
            {
                property : "og:title",
                content : 'Rogerio Orioli Web Developer'
            },
            {
                property : "og:description",
                content : 'Paulistano, Web Developer and Graphic Designer whit solid knowledgment in Javascript and Wordpress , in the short time skater and collector of Vinyl records. I like Music, technology, sports, gastronomy and movies. I do not refuse a good course, be with family and friends.I have great love for advertising, art and Javascript.'
            },
            {
                property : "og:image:type",
                content : "image/jpg"
            },
            {
                property : "og:image",
                content : `https://rogerioorioli.dev.br/${rogeriog}`
            }
        ]}   
        />
      <PageContainer>
                <div className="profile">
                <div className="profile-content">

                <Title contenTitle="HI! I'm Rogerio Orioli" />
                <p>Paulistano, Web Developer and Graphic Designer whit solid knowledgment in Javascript and Wordpress , in the short time skater and collector of Vinyl records. I like Music, technology, sports, gastronomy and movies. I do not refuse a good course, be with family and friends.I have great love for advertising, art and Javascript.</p>
             <SocialIcons 
                social ={[
                    {
                        name : 'github',
                        link : 'https://github.com/rogeriorioli', 
                        icon : <FiGithub size={25} color="#bd93f9"/>
                    },
                    {
                        name : 'LinkedIn',
                        link : 'https://www.linkedin.com/in/rogeriorioli/',
                        icon : <FiLinkedin size={25} />
                    },
                    {
                        name : 'Twitter',
                        link : 'https://twitter.com/RogerioOrioli',
                        icon : <FiTwitter  size={25} />
                    },
                    {
                        name : 'CodePen',
                        link : 'https://codepen.io/rogeriorioli',
                        icon : <FiCodepen size={25} />
                    },
                    
                    {
                        name : 'WhatsApp',
                        link : 'https://api.whatsapp.com/send?phone=5511989885408&text=Oi%20Rogerio',
                        icon : <FiPhone  size={25} />
                    },
                    {
                        name : 'Download profile',
                        link : 'https://docs.google.com/document/d/1APFhxIqI9mvf1UlefMoync4-dUWSjRY6N_S86vk3AVU/edit?usp=sharing',
                        icon : <FiDownload size={25} />
                    }
                ]}
                
                />
                </div>
            <Hero/>
            </div>
        <div className="container">
             <CardPortifolio/>
        </div>    
      </PageContainer>
      </>
  );
}

export default Home;