import ContactForm from "./ContactForm";
import React from "react";
import food1 from "../img/food1.jpg";
import food2 from "../img/food2.jpg";
import food3 from "../img/food3.jpg";
import styled from "styled-components";

const HomepageStyle = styled.div`
  width: auto;
  text-align: left;
  background-color: #bf4d20;
  padding: 2rem;
  padding-left: 10rem;
  color: white;
  font-family: "Lucida Console", "Courier New", monospace;
  & .title {
    width: 75%;
  }
  & .section {
    padding: 1rem;
    display: flex;
  }
  & .sectionText {
    padding: 0 2rem;
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  & .imgDiv1 img {
    border-radius: 1rem;
    width: 100%
    height: 40vh;
  }
  & .section2 {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
  & .imgDiv2 img {
    margin-top: 3rem;
    border-radius: 1rem;
  }
  & .imgDiv3 img {
    border-radius: 1rem;
  }
  `;

function Homepage() {
  return (
    <HomepageStyle>
      <div className="title">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
      </div>
      <div className="section">
        <div className="sectionText">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum mattis ullamcorper velit sed ullamcorper. Id interdum
            velit laoreet id donec ultrices tincidunt. Ornare arcu dui vivamus
            arcu felis bibendum. Nunc sed augue lacus viverra vitae congue eu
            consequat. A condimentum vitae sapien pellentesque habitant morbi
            tristique. Diam sollicitudin tempor id eu. Viverra justo nec
            ultrices dui sapien eget mi proin. Vitae nunc sed velit dignissim
            sodales. Turpis egestas sed tempus urna et pharetra pharetra massa
            massa. A erat nam at lectus urna duis convallis. Scelerisque eu
            ultrices vitae auctor eu augue ut lectus arcu. Egestas tellus rutrum
            tellus pellentesque eu tincidunt. Eget nunc lobortis mattis aliquam
            faucibus purus in massa tempor. Semper viverra nam libero justo
            laoreet sit. Integer quis auctor elit sed vulputate. Pulvinar
            pellentesque habitant morbi tristique senectus et. Nec nam aliquam
            sem et.
          </p>
          <p>
            Sagittis eu volutpat odio facilisis mauris sit. Consequat semper
            viverra nam libero justo laoreet. Nisl condimentum id venenatis a
            condimentum vitae sapien pellentesque. Est pellentesque elit
            ullamcorper dignissim cras tincidunt lobortis. Feugiat pretium nibh
            ipsum consequat nisl vel pretium lectus. Massa id neque aliquam
            vestibulum morbi blandit. Id porta nibh venenatis cras. Ut tristique
            et egestas quis. Duis ultricies lacus sed turpis tincidunt id. Ut
            porttitor leo a diam sollicitudin. Ac turpis egestas maecenas
            pharetra convallis posuere. Aliquam id diam maecenas ultricies mi
            eget mauris. Vel pharetra vel turpis nunc. Nisl pretium fusce id
            velit ut tortor pretium. Metus vulputate eu scelerisque felis
            imperdiet proin.
          </p>
          <p>
            Venenatis cras sed felis eget velit aliquet. Adipiscing diam donec
            adipiscing tristique. Lorem ipsum dolor sit amet consectetur
            adipiscing. Pharetra diam sit amet nisl suscipit adipiscing bibendum
            est ultricies. Odio ut sem nulla pharetra diam. Nisl pretium fusce
            id velit ut tortor pretium viverra. Sed odio morbi quis commodo odio
            aenean sed. Nibh mauris cursus mattis molestie a iaculis at. Elit
            duis tristique sollicitudin nibh sit. Risus ultricies tristique
            nulla aliquet enim tortor. Amet cursus sit amet dictum. A arcu
            cursus vitae congue mauris. Diam sit amet nisl suscipit. Hendrerit
            dolor magna eget est lorem. Nam aliquam sem et tortor consequat id
            porta. Amet justo donec enim diam vulputate. Id diam maecenas
            ultricies mi eget mauris pharetra et ultrices. Pulvinar neque
            laoreet suspendisse interdum consectetur. In nibh mauris cursus
            mattis molestie a iaculis.
          </p>
        </div>
        <div className="imgDiv1">
          <img src={food1} alt="food-1" />
        </div>
      </div>
      <div className="section2">
        <div className="sectionText">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum mattis ullamcorper velit sed ullamcorper. Id interdum
            velit laoreet id donec ultrices tincidunt. Ornare arcu dui vivamus
            arcu felis bibendum. Nunc sed augue lacus viverra vitae congue eu
            consequat. A condimentum vitae sapien pellentesque habitant morbi
            tristique. Diam sollicitudin tempor id eu. Viverra justo nec
            ultrices dui sapien eget mi proin. Vitae nunc sed velit dignissim
            sodales. Turpis egestas sed tempus urna et pharetra pharetra massa
            massa. A erat nam at lectus urna duis convallis. Scelerisque eu
            ultrices vitae auctor eu augue ut lectus arcu. Egestas tellus rutrum
            tellus pellentesque eu tincidunt. Eget nunc lobortis mattis aliquam
            faucibus purus in massa tempor. Semper viverra nam libero justo
            laoreet sit. Integer quis auctor elit sed vulputate. Pulvinar
            pellentesque habitant morbi tristique senectus et. Nec nam aliquam
            sem et.
          </p>
          <p>
            Sagittis eu volutpat odio facilisis mauris sit. Consequat semper
            viverra nam libero justo laoreet. Nisl condimentum id venenatis a
            condimentum vitae sapien pellentesque. Est pellentesque elit
            ullamcorper dignissim cras tincidunt lobortis. Feugiat pretium nibh
            ipsum consequat nisl vel pretium lectus. Massa id neque aliquam
            vestibulum morbi blandit. Id porta nibh venenatis cras. Ut tristique
            et egestas quis. Duis ultricies lacus sed turpis tincidunt id. Ut
            porttitor leo a diam sollicitudin. Ac turpis egestas maecenas
            pharetra convallis posuere. Aliquam id diam maecenas ultricies mi
            eget mauris. Vel pharetra vel turpis nunc. Nisl pretium fusce id
            velit ut tortor pretium. Metus vulputate eu scelerisque felis
            imperdiet proin.
          </p>
        </div>
        <div className="imgDiv2">
          <img src={food2} alt="food-1" />
        </div>
      </div>
      <div className="section">
        <div className="sectionText">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum mattis ullamcorper velit sed ullamcorper. Id interdum
            velit laoreet id donec ultrices tincidunt. Ornare arcu dui vivamus
            arcu felis bibendum. Nunc sed augue lacus viverra vitae congue eu
            consequat. A condimentum vitae sapien pellentesque habitant morbi
            tristique. Diam sollicitudin tempor id eu. Viverra justo nec
            ultrices dui sapien eget mi proin. Vitae nunc sed velit dignissim
            sodales. Turpis egestas sed tempus urna et pharetra pharetra massa
            massa. A erat nam at lectus urna duis convallis. Scelerisque eu
            ultrices vitae auctor eu augue ut lectus arcu. Egestas tellus rutrum
            tellus pellentesque eu tincidunt. Eget nunc lobortis mattis aliquam
            faucibus purus in massa tempor. Semper viverra nam libero justo
            laoreet sit. Integer quis auctor elit sed vulputate. Pulvinar
            pellentesque habitant morbi tristique senectus et. Nec nam aliquam
            sem et.
          </p>
          <p>
            Sagittis eu volutpat odio facilisis mauris sit. Consequat semper
            viverra nam libero justo laoreet. Nisl condimentum id venenatis a
            condimentum vitae sapien pellentesque. Est pellentesque elit
            ullamcorper dignissim cras tincidunt lobortis. Feugiat pretium nibh
            ipsum consequat nisl vel pretium lectus. Massa id neque aliquam
            vestibulum morbi blandit. Id porta nibh venenatis cras. Ut tristique
            et egestas quis. Duis ultricies lacus sed turpis tincidunt id. Ut
            porttitor leo a diam sollicitudin. Ac turpis egestas maecenas
            pharetra convallis posuere. Aliquam id diam maecenas ultricies mi
            eget mauris. Vel pharetra vel turpis nunc. Nisl pretium fusce id
            velit ut tortor pretium. Metus vulputate eu scelerisque felis
            imperdiet proin.
          </p>
          <p>
            Venenatis cras sed felis eget velit aliquet. Adipiscing diam donec
            adipiscing tristique. Lorem ipsum dolor sit amet consectetur
            adipiscing. Pharetra diam sit amet nisl suscipit adipiscing bibendum
            est ultricies. Odio ut sem nulla pharetra diam. Nisl pretium fusce
            id velit ut tortor pretium viverra. Sed odio morbi quis commodo odio
            aenean sed. Nibh mauris cursus mattis molestie a iaculis at. Elit
            duis tristique sollicitudin nibh sit. Risus ultricies tristique
            nulla aliquet enim tortor. Amet cursus sit amet dictum. A arcu
            cursus vitae congue mauris. Diam sit amet nisl suscipit. Hendrerit
            dolor magna eget est lorem. Nam aliquam sem et tortor consequat id
            porta. Amet justo donec enim diam vulputate. Id diam maecenas
            ultricies mi eget mauris pharetra et ultrices. Pulvinar neque
            laoreet suspendisse interdum consectetur. In nibh mauris cursus
            mattis molestie a iaculis.
          </p>
        </div>
        <div className="imgDiv3">
          <img src={food3} alt="food-1" />
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </HomepageStyle>
  );
}

export default Homepage;
