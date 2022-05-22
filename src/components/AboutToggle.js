import React from "react";
import { useState } from "react";
import Image from "react-bootstrap/Image";
import certificate from "../images/certificate.png";
import mabedies from "../images/mabedies.JPG";
import mapesies from "../images/mapes.JPG";
import divingLicense from "../images/ALicense.jpeg";
import freeFall from "../images/freeFalling.jpg";
import chuteOpening from "../images/opening.jpg";
import hipKey from "../images/hipKey.jpg";
import aerialSplit from "../images/split.jpg";
import belay from "../images/belay.jpg";
import inversion from "../images/inversion.jpg";
import "../styles/About.css";

function About() {
  const [clicked, setClicked] = useState(false);

  let buttonClick = () => {
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <>
      <p className="about-me">
        <section className="toggle">
          <h2 className="toggle">My Story</h2>
          <label className="switch">
            {" "}
            <input type="checkbox" onClick={buttonClick} />{" "}
            <span className="slider"></span>{" "}
          </label>
          <h2 className="toggle">My Hobbies</h2>
        </section>
        {clicked ? (
          <div className="about-me">
            <strong>My Interests:</strong>
            <p className="about-text">
              I have many interests! From yoga to crocheting to playing piano
              and writing songs to frolicking through snow with my pup... But
              more than anything, I love to fly! In December, 2015, I went for
              my first tandem skydive, as a birthday gift. I loved it and right
              away decided to get licensed. I took a course, and learned to
              skydive on my own. I passed the levels, packed my own parachute
              and jumped with it, bought an altimeter, a jump suit, goggles and
              a helmet, and I got my A license (which allows me to jump alone,
              without an instructor)! A couple of years and 39 jumps later, I
              decided to "retire", at least for the time being.
            </p>
            <section className="photos">
              <Image
                className="one-photo"
                src={divingLicense}
                alt="Photo Of Me Holding My Skydiving A License"
              />
              <Image
                className="one-photo"
                src={freeFall}
                alt="Photo Of Me Freefalling During A Skydive"
              />
              <Image
                className="one-photo"
                src={chuteOpening}
                alt="Photo Of Me Opening My Parachute During A Skydive"
              />
            </section>
            <p className="about-text">
              In 2021, I chose to start flying in a different way -- with Aerial
              Silks! I've been working hard and have built a lot of strength and
              flexibility. It's so much fun!
            </p>
            <section className="photos">
              <Image
                className="one-photo"
                src={hipKey}
                alt="Photo Of Me Doing A 'Hip Key' With Aerial Silks"
              />
              <Image
                className="one-photo"
                src={aerialSplit}
                alt="Photo Of Me Doing A Split On Aerial Silks"
              />
              <Image
                className="one-photo"
                src={belay}
                alt="Photo Of Me Doing 'Belay' On Aerial Silks"
              />
              <Image
                className="one-photo"
                src={inversion}
                alt="Photo Of Me Doing An Inversion On Aerial Silks"
              />
            </section>
          </div>
        ) : (
          <div className="about-me">
            <strong>My Journey Into Tech:</strong>
            <p className="about-text">
              For years, I worked in many roles with children and families, and
              I loved serving people and helping parents to raise good humans. I
              worked as a Residential Counselor, a nanny, and I am a certified
              Birth and Postpartum Doula! In 2021, I opened a Doula business
              called Empowered Start. When I first started my undergraduate
              degree, I was a Math major. I've always loved problem solving and
              logic. I really liked math, but quickly started to fall behind
              because I was not able to keep up with the fast pace of learning
              in school. My academic advisor told me that because my grades were
              not great, it might be a good idea for me to change majors. And I
              listened. I didn't believe that I was smart enough to keep up. In
              the fall of 2021, I was talking with a friend who told me about
              her job as a coder, and I became interested in the idea. So I did
              some research, and came across a course at Burlington Code Academy
              (now known as Upright Education) through the Community College of
              Vermont (CCV). I applied to the part time "JavaScript After Hours"
              course, and started just a few weeks later. As I was learing how
              to code, I started to remember how good it felt to solve problems
              and to learn a language and syntax that was specific to solving a
              certain type of problem. I really liked it, and although it was
              difficult and confusing at times (it still is!), it was so
              rewarding when things actually worked! And so satisfying to be
              able to create programs and applications from scratch. After the
              part time course was over, I applied to the full time bootcamp,
              and the rest is her-story! I graduated from Upright Education's
              Software Development Bootcamp with a Certificate of Completion in
              the Spring of 2022.
            </p>
            <section className="photos">
              <Image
                className="cert-photo"
                src={certificate}
                alt="Photo Of My Upright Education Certificate Of Completion"
              />
            </section>
            <p className="about-text">
              In addition, and perhaps more importantly, is the question of who
              is the adorable pup in these pictures? This is Maple! She is 37%
              mini poodle and 18% chihuahua, with many other small breeds mixed
              in. She is very smart and sweet and well behaved. She loves to
              listen and be praised for being good. She was born in Oceanside,
              California, and moved to Vermont with me in August of 2020! She
              loves her life here and she adores the snow.
            </p>
            <section className="photos">
              <Image
                className="one-photo"
                src={mabedies}
                alt="Photo Of My Dog, Maple, Licking My Face"
              />
              <Image
                className="one-photo"
                src={mapesies}
                alt="Photo Of My Dog, Maple, And Me Wearing Green For Saint Patrick's Day"
              />
            </section>
          </div>
        )}
      </p>
    </>
  );
}

export default About;
