import React from "react";
import Card from "../AnimatedScard/Card";
import avatar from "../../images/avatars.png";
import proficiency from "../../images/proficiency.svg";
import AnimatedLogo from "../AnimatedLogo";
import mmIllustrator from "../../images/mmIllustrator.png";
import codingCollection from "../../images/codingCollection.png";
import Process from "./Process";
import {
  CodeImage,
  Stripe,
  AboutContainer,
  AboutBg,
  HeadingWrapper,
  AboutWords,
  HeadersContainer,
  TextBlock,
  TextBlockHack,
} from "./AboutElements";
import Fade from "react-reveal/Fade";
const About = () => {
  return ( <
    >
    <
    AboutContainer id = "about" >
    <
    Stripe / >
    <
    h1 style = {
      {
        textAlign: "center",
        position: "absolute",
        top: "18vh",
        color: "white",
      }
    } >
    Hi, I 'm Matt. Nice to meet you. < /
    h1 > <
    p style = {
      {
        textAlign: "center",
        position: "absolute",
        top: "22vh",
        width: "40vw",
        color: "white",
      }
    } >
    I am a designer, developer, and photographer.I 'm devoted to figuring
    out how to produce the best product
    for your and your team. {
      " "
    } <
    /p> <
    AboutBg >
    <
    Fade left cascade >
    <
    HeadingWrapper >
    <
    img src = {
      avatar
    }
    style = {
      {
        height: "300px",
        width: "300px",
        margin: "20px auto"
      }
    }
    /> < /
    HeadingWrapper > <
    AboutWords >
    <
    HeadersContainer >
    <
    TextBlock >
    <
    h1 style = {
      {
        textAlign: "center"
      }
    } > Who ? < /h1> <
    p style = {
      {
        textAlign: "justify",
        maxWidth: "150vw"
      }
    } >
    I am a software development consultant focusing on web development & design.I am hyper focused on details, and strive
    for perfection.I am currently working at PDX Code Guild.In my off - time you can find me somewhere in the backcountry with a camera & my dog. {
      " "
    } <
    /p> < /
    TextBlock > <
    TextBlock >
    <
    h1 style = {
      {
        textAlign: "center"
      }
    } > What ? < /h1> <
    p style = {
      {
        maxWidth: "150vw",
        textAlign: "justify"
      }
    } >
    I enjoy building things, especially when I get to build them with a computer.I mainly work on the front - end with Javascript and React, but, I can still implement back - end things, like servers and RESTful - API 's with both JavaScript &
    Python. <
    /p> < /
    TextBlock > <
    TextBlock >
    <
    h1 style = {
      {
        textAlign: "center"
      }
    } > Why ? < /h1> <
    p style = {
      {
        maxWidth: "150vw",
        textAlign: "justify"
      }
    }
    className = "boldP" >
    I have a deep passion
    for technology.Life to me isnt about materialistic things, its about having skill.I like to solve complex problems, "it always seems impossible til its
    done " - Nelson Mendela. < /
    p > <
    /TextBlock> < /
    HeadersContainer > <
    /AboutWords> <
    img src = {
      proficiency
    }
    style = {
      {
        width: "50%",
        margin: "50px auto"
      }
    }
    /> < /
    Fade > <
    /AboutBg> <
    Process / >
    <
    /AboutContainer> < / >
  );
};

export default About;