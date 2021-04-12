import React from "react";
import Fade from "react-reveal/Fade";
import diamond from "../../../images/diamond.png";
import tools from "../../../images/tools.png";
import qa from "../../../images/qa.png";
import team from "../../../images/team.png";


import {
  ProcessContainer,
  Contents,
  Content,
  Text,
} from "./ProcessElements.js";
const Process = () => {
  return (
    <ProcessContainer>
      <h1 style={{ textAlign: "center", margin: "30px auto" }}>
        {" "}
        Lets get more into the nitty gritty stuff & find out if we're a fit for
        each other.{" "}
      </h1>
      <p style={{textAlign:'center',marginBottom:'30px'}}>Rather see a resume? Download here.</p>
      <Contents>
        <Fade>
          <Content>
            <img width={70} src={diamond} />
            <h2>What I Value</h2>
            <Text>
              I belive in a couple core values. Passion is first, if you have passion, the rest will fall in line. Next up, dependibility, you cant count on me being trustworthy and reliable.  Last but not least, commitment, if i decide to put my mind to something, I will see it through to completion.
            </Text>
          </Content>
        </Fade>
        <Fade delay={500}>
          <Content>
            <img width={70} src={tools} />
            <h2> Tools & Tech I Use</h2>
            <Text>
                I absolutely love the React & NPM ecosystem, thats probably why I spend 70% of my time developing React apps. The rest of the time im usually doing some cool stuff with Python. I am well versed in HTML, and I can bring life to pages by using Adobe Suite to create SVG's and then animate them with CSS.

            </Text>
          </Content>
        </Fade>
        <Fade delay={1000}>
          <Content>
            <img width={70} src={qa} />
            <h2>Quality Assurance</h2>
            <Text>
              I genuinely care about what I attach my name to. At every stage of the process I am obsessed with the details. I will go above and beyond to make sure I reach the level of quality or service you want me to provide. The best way to resolve a problem, is to not have the problem in the first place.
            </Text>
          </Content>
        </Fade>
        <Fade delay={1500}>
          <Content>
            <img width={70} src={team} />
            <h2>What I bring to the team</h2>
            <Text>
              I am a veteran, I have first hand experience on how vital a cohevise team is to success. I am able to communicate effectively, I can put my leadership pants on when nessecary, I am efficient and I love to learn. Last but not least I am a universal problem solver. I dont always know what i'm doing, but you can be sure i'll figure it out quickly.
            </Text>
          </Content>
        </Fade>
      </Contents>
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      ></div>
    </ProcessContainer>
  );
};

export default Process;
